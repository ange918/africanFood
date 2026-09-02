-- Bucket de stockage public pour les photos de véhicules uploadées depuis l'admin.

insert into storage.buckets (id, name, public)
values ('vehicle-photos', 'vehicle-photos', true)
on conflict (id) do update set public = true;

-- Lecture publique des photos du bucket.
drop policy if exists "Public read vehicle photos" on storage.objects;
create policy "Public read vehicle photos"
  on storage.objects for select
  using (bucket_id = 'vehicle-photos');

-- Envoi réservé à l'admin authentifié.
drop policy if exists "Authenticated upload vehicle photos" on storage.objects;
create policy "Authenticated upload vehicle photos"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'vehicle-photos');

-- Suppression réservée à l'admin authentifié.
drop policy if exists "Authenticated delete vehicle photos" on storage.objects;
create policy "Authenticated delete vehicle photos"
  on storage.objects for delete to authenticated
  using (bucket_id = 'vehicle-photos');
