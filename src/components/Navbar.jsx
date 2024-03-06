import logo from "../assets/logo1.png";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((active) => !active);
  };

  return (
    <nav className="fixed z-20 top-0 px-4 lg:px-20 py-4 h-[80px] w-full flex justify-between items-center bg-cream border-none">
      <div>
        <NavLink exact to="/">
          <img src={logo} alt="logo" className="w-16 z-20" />
        </NavLink>
      </div>

      {/* ------------------------- Desktop Navbar ------------------------ */}
      <ul className="font-handlee text-xl font-semibold hidden lg:flex items-center">
        <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green py-2 mx-5 nav-active" : "nav-link py-2 mr-5"
          }
        >
          <li className="">Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green py-2 mx-5 nav-active" : "nav-link py-2 mx-5"
          }
        >
          <li className="">About Us</li>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-green py-2 mx-5 nav-active" : "nav-link py-2 mx-5"
          }
        >
          <li className="">Gallery</li>
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? "text-green py-2 mx-5 nav-active" : "nav-link py-2 mx-5"
          }
        >
          <li className="">Services & Pricing</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green border-green border-2 rounded-full py-2 px-8 ml-5 "
              : "py-2 px-8 ml-5  border-2 border-green rounded-full"
          }
        >
          <li className="">Contact Us</li>
        </NavLink>
      </ul>

      {/* -------------------------------- Mobile Navbar -------------------------------- */}
      <div
        className="block lg:hidden h-[35px] w-[45px] relative z-20"
        onClick={handleClick}
      >
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

      <ul
        className={`fixed lg:hidden w-full h-screen bg-cream top-0 z-10 flex flex-col items-center justify-center ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500 ease-in-out`}
      >
        <NavLink to="/" onClick={handleClick} className={({ isActive }) =>
            isActive ? "text-green" : ""
          }>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">Home</li>
        </NavLink>
        <NavLink to="/about" onClick={handleClick} className={({ isActive }) =>
            isActive ? "text-green" : ""
          }>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">
            About Us
          </li>
        </NavLink>
        <NavLink to="/gallery" onClick={handleClick} className={({ isActive }) =>
            isActive ? "text-green" : ""
          }>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">Gallery</li>
        </NavLink>
        <NavLink to="/pricing" onClick={handleClick} className={({ isActive }) =>
            isActive ? "text-green" : ""
          }>
          <li className="font-handlee text-3xl font-bold px-8 mb-8">
            Services & Pricing
          </li>
        </NavLink>
        <NavLink to="/contact" onClick={handleClick} className={({ isActive }) =>
            isActive ? "text-green" : ""
          }>
          <li className="font-handlee text-3xl font-bold px-8">Contact Us</li>
        </NavLink>
      </ul>
    </nav>
  );
}
