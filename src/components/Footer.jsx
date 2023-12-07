import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";
import location from "../assets/location.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

export default function Footer() {
  return (
    <div className="bg-cream px-8 py-10 lg:px-20 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between lg:mb-8">
        <div className="pb-8">
          <img src={Logo} alt="logo" className="w-16 lg:w-24" />
        </div>
        <div className="w-full lg:w-[450px] flex font-handlee lg:text-lg pb-8">
          <div className="lg:w-[100px]">
            <img src={location} alt="" className="w-8 hidden lg:block" />
          </div>
          <p>
            Plot 6095 Cadastral Zone F-14, Opposite Amazing Kids Academy,
            Buzango NEPA Road. Kubwa, Abuja
          </p>
        </div>
        <div className="flex justify-between items-start w-[150px] ">
          <img src={instagram} alt="" className="w-5 lg:w-8" />
          <img src={facebook} alt="" className="w-5 lg:w-8" />
          <img src={twitter} alt="" className="w-5 lg:w-8" />
        </div>
      </div>
      <ul className="hidden lg:flex justify-between font-handlee font-bold text-xl">
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
          <li className="py-2 ml-5">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}
