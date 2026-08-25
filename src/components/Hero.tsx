import { PHONE_NUMBER } from '../constants'

function Hero() {
  const order = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  const learnMore = () => {
    document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title" data-testid="hero-title">
            Savourez l'Afrique authentique
          </h1>
          <p className="hero__description" data-testid="hero-description">
            Découvrez les saveurs traditionnelles du continent africain dans un
            cadre moderne et chaleureux. Chaque plat raconte une histoire, chaque
            bouchée vous transporte.
          </p>
          <div className="hero__buttons">
            <button
              className="btn btn--primary btn--large"
              id="hero-order-btn"
              data-testid="button-order"
              onClick={order}
            >
              Commander maintenant
            </button>
            <button
              className="btn btn--secondary btn--large"
              id="hero-learn-btn"
              data-testid="button-learn-more"
              onClick={learnMore}
            >
              En savoir plus
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Plats africains traditionnels"
            data-testid="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
