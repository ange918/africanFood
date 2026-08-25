import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Featured from '@/components/home/Featured'
import WhyUs from '@/components/home/WhyUs'
import Steps from '@/components/home/Steps'
import Testimonials from '@/components/home/Testimonials'
import CtaBanner from '@/components/home/CtaBanner'

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
