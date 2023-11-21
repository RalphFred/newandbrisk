import logo from '../assets/logo.png'

export default function NavBar() {
  return(
    <nav className="lg:px-20 py-4 flex justify-between items-center border-b">
      <div>
        <img src={logo} alt="logo" className="w-24"/>
      </div>
      <ul className='flex font-handlee font-bold text-xl'>
        <li className="py-2 mr-5 ">Home</li>
        <li className="py-2 mx-5 ">About Us</li>
        <li className="py-2 mx-5 ">Gallery</li>
        <li className="py-2 mx-5 ">Pricing</li>
        <li className="py-2 ml-5 border border-black px-6 rounded-full">Contact Us</li>
      </ul>
    </nav>
  )
}