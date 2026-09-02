-- Suivi des visites du site public + agrégat « visites par jour » pour l'admin.
-- À exécuter dans le SQL editor du projet Supabase « alvex » si ce n'est pas
-- déjà fait via l'intégration.

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  created_at timestamptz not null default now()
);

create index if not exists page_views_created_at_idx on public.page_views (created_at);

alter table public.page_views enable row level security;

-- N'importe quel visiteur (rôle anon) peut enregistrer une vue.
drop policy if exists "Anyone can log a view" on public.page_views;
create policy "Anyone can log a view"
  on public.page_views for insert
  with check (true);

-- Seul l'admin authentifié peut lire les vues.
drop policy if exists "Authenticated can read views" on public.page_views;
create policy "Authenticated can read views"
  on public.page_views for select to authenticated
  using (true);

-- Nombre de visites par jour sur les N derniers jours (jours sans visite = 0).
create or replace function public.views_per_day(days integer default 14)
returns table(day date, count bigint)
language sql
security definer
set search_path = public
as $$
  select g.d::date as day, count(pv.id) as count
  from generate_series(
    ((now() at time zone 'utc')::date - (days - 1)),
    (now() at time zone 'utc')::date,
    interval '1 day'
  ) as g(d)
  left join public.page_views pv on pv.created_at::date = g.d::date
  group by g.d
  order by g.d;
$$;

grant execute on function public.views_per_day(integer) to authenticated;
