import Hero from "../components/Hero"
import AboutIntro from "../components/AboutIntro"
import CTA from "../components/CTA"
import Testimonials from "../components/Testimonials"

export default function HomePage() {
  return(
    <div className="">
      <Hero />
      <AboutIntro />
      <Testimonials />
      <CTA />
    </div>
  )
}