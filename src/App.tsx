import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Dishes from './components/Dishes'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Dishes />
        <Faq />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
