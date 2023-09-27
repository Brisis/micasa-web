import {Hero, Navbar, HowItWorks, AboutUs, Footer, Testimonials, Companies} from '@/components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  )
}
