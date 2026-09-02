import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Featured from '@/components/home/Featured'
import WhyUs from '@/components/home/WhyUs'
import Steps from '@/components/home/Steps'
import Testimonials from '@/components/home/Testimonials'
import CtaBanner from '@/components/home/CtaBanner'

// Revalidation ISR : les nouveautés de l'admin apparaissent sous 30 s.
export const revalidate = 30

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Featured />
      <WhyUs />
      <Steps />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
