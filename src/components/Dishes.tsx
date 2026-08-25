import { PHONE_NUMBER } from '../constants'
import { dishes } from '../data/dishes'

function Dishes() {
  const seeMore = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <section id="plats" className="dishes">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title" data-testid="dishes-title">
            Nos spécialités
          </h2>
          <p className="section__description" data-testid="dishes-description">
            Découvrez une sélection de nos plats les plus appréciés, préparés avec
            amour et authenticité
          </p>
        </div>

        <div className="dishes__grid">
          {dishes.map((dish) => (
            <div
              className="dish__card"
              data-testid={`card-menu-${dish.slug}`}
              key={dish.slug}
            >
              <div className="dish__image">
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  data-testid={`img-menu-${dish.slug}`}
                />
              </div>
              <div className="dish__content">
                <div className="dish__header">
                  <h3 className="dish__name">{dish.name}</h3>
                  <span
                    className="dish__price"
                    data-testid={`price-${dish.slug}`}
                  >
                    {dish.price}
                  </span>
                </div>
                <p className="dish__description">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section__footer">
          <button
            className="btn btn--primary"
            id="see-more-btn"
            data-testid="button-see-more"
            onClick={seeMore}
          >
            Voir la suite
          </button>
        </div>
      </div>
    </section>
  )
}

export default Dishes
