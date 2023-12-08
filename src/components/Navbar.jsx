import logo from "../assets/logo.png";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((active) => !active)
  }

  return (
    <nav className="px-4 lg:px-20 py-4 h-[100px] flex justify-between items-center bg-cream border-noneF">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
      </div>
      <ul className="font-handlee font-bold text-xl hidden lg:flex">
        <Link to="/">
          <li className="py-2 mr-5 ">Home</li>
        </Link>
        <Link to="/about">
          <li className="py-2 mx-5">About Us</li>
        </Link>
        <Link to="/gallery">
          <li className="py-2 mx-5">Gallery</li>
        </Link>
        <Link to="/pricing">
          <li className="py-2 mx-5">Services & Pricing</li>
        </Link>
        <Link to="/contact">
          <li className="py-2 ml-5 border-2 border-green px-6 rounded-full">
            Contact Us
          </li>
        </Link>
      </ul>
      <div className="h-[35px] w-[45px] relative" onClick={handleClick}>
        <img src={fork} alt="fork" className={`absolute top-0 duration-300 ${isOpen ? '-rotate-45 translate-x-[12%] translate-y-[125%]' : '' }`}/> 
        <img src={knife} alt="knife" className={`absolute bottom-0 duration-300 ${isOpen ? 'rotate-45 translate-x-[5%] translate-y-[-120%]' : ''}`} /> 
      </div>
    </nav>
  );
}
