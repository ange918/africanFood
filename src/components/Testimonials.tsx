import { useCallback, useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/testimonials'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD = 50

function Testimonials() {
  const [index, setIndex] = useState(0)
  const paused = useRef(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const goTo = useCallback((next: number) => {
    const count = testimonials.length
    setIndex(((next % count) + count) % count)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setIndex((current) => (current + 1) % testimonials.length)
      }
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const deltaX = touchStart.current.x - e.changedTouches[0].clientX
    const deltaY = touchStart.current.y - e.changedTouches[0].clientY
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) next()
      else prev()
    }
    touchStart.current = null
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Avis de nos clients</h2>
          <p className="section__description">
            Découvrez ce que nos clients pensent de leur expérience chez
            Africanfood
          </p>
        </div>

        <div className="testimonials__slider" data-testid="testimonial-slider">
          <div
            className="testimonials__container"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="testimonials__track"
              id="testimonials-track"
              style={{ transform: `translateX(${-index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  className="testimonial__item"
                  data-testid={`testimonial-${i}`}
                  key={testimonial.id}
                >
                  <div className="testimonial__content">
                    <div className="testimonial__image">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}, client satisfait`}
                        data-testid={`img-customer-${i}`}
                      />
                    </div>
                    <div className="testimonial__text">
                      <div
                        className="testimonial__rating"
                        data-testid={`stars-rating-${i}`}
                      >
                        {'★'.repeat(testimonial.rating)}
                      </div>
                      <blockquote
                        className="testimonial__quote"
                        data-testid={`testimonial-text-${i}`}
                      >
                        "{testimonial.review}"
                      </blockquote>
                      <div className="testimonial__author">
                        <div
                          className="testimonial__name"
                          data-testid={`customer-name-${i}`}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="testimonial__info"
                          data-testid={`customer-info-${i}`}
                        >
                          {testimonial.age} ans, {testimonial.city}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="testimonials__nav testimonials__nav--prev"
            id="testimonial-prev"
            data-testid="testimonial-prev"
            aria-label="Témoignage précédent"
            onClick={prev}
          >
            &#8249;
          </button>
          <button
            className="testimonials__nav testimonials__nav--next"
            id="testimonial-next"
            data-testid="testimonial-next"
            aria-label="Témoignage suivant"
            onClick={next}
          >
            &#8250;
          </button>

          <div className="testimonials__dots" id="testimonials-dots">
            {testimonials.map((testimonial, i) => (
              <button
                className={`testimonials__dot${i === index ? ' active' : ''}`}
                data-testid={`testimonial-dot-${i}`}
                aria-label={`Aller au témoignage ${i + 1}`}
                key={testimonial.id}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
