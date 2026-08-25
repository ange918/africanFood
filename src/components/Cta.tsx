import { PHONE_NUMBER } from '../constants'

function Cta() {
  const order = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Une envie de plats africains ?</h2>
          <p className="cta__description">On vous attend !</p>
          <button
            className="btn btn--white btn--large"
            id="cta-order-btn"
            data-testid="button-order-now"
            onClick={order}
          >
            Commandez maintenant
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta
