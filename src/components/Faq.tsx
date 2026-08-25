import { useState } from 'react'
import { faqItems } from '../data/faq'

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Questions fréquentes</h2>
          <p className="section__description">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="faq__container">
          {faqItems.map((item, index) => {
            const active = activeIndex === index
            return (
              <div
                className={`faq__item${active ? ' active' : ''}`}
                data-testid={`faq-item-${index}`}
                key={index}
              >
                <button
                  className="faq__question"
                  data-testid={`faq-question-${index}`}
                  aria-expanded={active}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon" data-testid={`faq-icon-${index}`}>
                    {active ? '−' : '+'}
                  </span>
                </button>
                <div className="faq__answer" data-testid={`faq-answer-${index}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
