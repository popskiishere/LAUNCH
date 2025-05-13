import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import ForFounders from '@/components/sections/ForFounders'
import Contact from '@/components/sections/Contact'
import ServicesSection from '@/components/sections/ServicesSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Contact />
      <HowItWorks />
      <ForFounders />
    </>
  )
} 