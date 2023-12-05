import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return(
    <nav className="px-4 lg:px-20 py-4 h-[100px] flex justify-between items-center bg-cream">
      <div>
      <Link to="/"><img src={logo} alt="logo" className="w-16"/></Link>
      </div>
      <ul className='font-handlee font-bold text-xl hidden lg:flex'>
        <Link to="/"><li className="py-2 mr-5 ">Home</li></Link>
        <Link to="/about"><li className="py-2 mx-5">About Us</li></Link>
        <Link to="/gallery"><li className="py-2 mx-5">Gallery</li></Link>
        <Link to="/pricing"><li className="py-2 mx-5">Services & Pricing</li></Link>
        <Link to="/contact"><li className="py-2 ml-5 border-2 border-green px-6 rounded-full">Contact Us</li></Link>
         </ul>
    </nav>
  )
}