import { Link } from "react-router-dom"

export default function CTA(){
  return(
    <div className="px-8 py-16 lg:px-20 lg:py-24 bg-cream font-handlee text-center">
      <h1 className="text-3xl lg:text-5xl mb-5 lg:mb-12 font-bold">Ready to start your culinary journey?</h1>
      <Link to='/contact'><button className="font-bold text-xl lg:text-2xl bg-green text-cream px-6 py-3 lg:px-9 rounded-full">Contact Us</button></Link>
    </div>
  )
}