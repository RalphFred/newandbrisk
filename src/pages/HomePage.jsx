import Hero from "../components/Hero"
import AboutIntro from "../components/AboutIntro"
import HomeGallery from '../components/HomeGallery'

export default function HomePage() {
  return(
    <div className="px-20">
      <Hero />
      <AboutIntro />
    </div>
  )
}