'use client'

import { useState } from 'react'

export default function VehicleGallery({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-ink-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={alt}
          className="h-[280px] w-full object-cover sm:h-[440px]"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-xl border transition ${
                i === active ? 'border-accent' : 'border-ink-border hover:border-white/30'
              }`}
              aria-label={`Photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-16 w-full object-cover sm:h-20" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
