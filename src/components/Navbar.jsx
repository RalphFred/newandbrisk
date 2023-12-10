import logo from "../assets/logo.png";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((active) => !active);
  };

  return (
    <nav className="fixed z-20 top-0 px-4 lg:px-20 py-4 h-[100px]  w-full flex justify-between items-center bg-cream border-none">
      <div>
        <Link to="/" className="" >
          <img src={logo} alt="logo" className="w-16 z-20" />
        </Link>
      </div>

      {/* ------------------------- Desktop Navbar ------------------------ */}
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

      {/* -------------------------------- Mobile Navbar -------------------------------- */}
      <div className="block lg:hidden h-[35px] w-[45px] relative z-20" onClick={handleClick}>
        <img
          src={fork}
          alt="fork"
          className={`absolute top-0 duration-500 ${
            isOpen ? "-rotate-45 translate-x-[12%] translate-y-[125%]" : ""
          }`}
        />
        <img
          src={knife}
          alt="knife"
          className={`absolute bottom-0 duration-500 ${
            isOpen ? "rotate-45 translate-x-[5%] translate-y-[-120%]" : ""
          }`}
        />
      </div>

      <ul className={`fixed lg:hidden w-full h-screen bg-cream top-0 z-10 flex flex-col items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500 ease-in-out`}>
        <Link to="/" onClick={handleClick}>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">Home</li>
        </Link>
        <Link to="/about" onClick={handleClick}>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">About Us</li>
        </Link>
        <Link to="/gallery" onClick={handleClick}>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">Gallery</li>
        </Link>
        <Link to="/pricing" onClick={handleClick}>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">Services & Pricing</li>
        </Link>
        <Link to="/contact" onClick={handleClick}>
          <li className="font-handlee text-3xl font-bold px-8">
            Contact Us
          </li>
        </Link>
      </ul>
    </nav>
  );
}
