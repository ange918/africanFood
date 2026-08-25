import { BRAND } from '@/lib/constants'

/** Marque type LUZURIO : pictogramme « damier » jaune + nom en capitales. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 24" className="h-6 w-8" aria-hidden="true">
        <g fill="#ece81a">
          <path d="M0 6l7-4v6l-7 4z" />
          <path d="M8 2l7 4v6l-7-4z" transform="translate(0 -2)" />
          <path d="M9 8l7-4v6l-7 4z" />
          <path d="M17 4l7 4v6l-7-4z" transform="translate(0 -2)" />
        </g>
      </svg>
      <span className="font-display text-xl font-extrabold uppercase tracking-wide text-white">
        {BRAND}
      </span>
    </span>
  )
}
