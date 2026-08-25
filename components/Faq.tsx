'use client'

import { useState } from 'react'
import { faqItems } from '@/data/faq'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => {
        const active = open === i
        return (
          <div key={i} className="card overflow-hidden">
            <button
              onClick={() => setOpen(active ? null : i)}
              aria-expanded={active}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`text-sm font-medium ${active ? 'text-accent' : 'text-white'}`}>
                {item.question}
              </span>
              <span className={`text-xl ${active ? 'text-accent' : 'text-white/50'}`}>
                {active ? '−' : '+'}
              </span>
            </button>
            {active && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-white/55">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
