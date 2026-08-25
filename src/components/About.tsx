const STATS = [
  { number: '50+', label: 'Plats traditionnels', testId: 'stat-dishes' },
  { number: '15', label: 'Pays représentés', testId: 'stat-countries' },
  { number: '10', label: "Années d'expérience", testId: 'stat-experience' },
]

function About() {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <h2 className="section__title" data-testid="about-title">
              Notre passion pour l'authenticité
            </h2>
            <p className="about__text" data-testid="about-text">
              Chez Africanfood, nous célébrons la richesse culinaire de l'Afrique.
              Nos chefs passionnés préparent chaque plat selon les recettes
              ancestrales, transmises de génération en génération.
            </p>
            <p className="about__text">
              De l'attiéké ivoirien au thiéboudienne sénégalais, en passant par le
              couscous maghrébin, notre menu vous invite à un voyage gastronomique
              à travers tout le continent.
            </p>
            <div className="about__stats">
              {STATS.map((stat) => (
                <div className="stat" key={stat.testId}>
                  <h3 className="stat__number" data-testid={stat.testId}>
                    {stat.number}
                  </h3>
                  <p className="stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about__image">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Intérieur du restaurant Africanfood"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
