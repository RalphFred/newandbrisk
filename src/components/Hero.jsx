import pizza from "../assets/pizza.gif";
import rarrow from "../assets/rarrow.svg";
import heroImg from "../assets/heroImg.png";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[100vh] pt-[125px] lg:pt-[100px] px-8 sm:px-16 lg:px-32 bg-cream">
      <div className="w-full lg:w-3/5">
        <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold  font-labrada">
          Mastering Technique, <br />
          Unleashing Exquisite Flavor.
        </h1>

        <div className="my-16 lg:my-12 flex items-center">
          <Link to="/contact">
            <button className="font-handlee font-bold bg-green text-white px-6 py-3 md:py-4 md:px-10 rounded-full text-xl">
              Contact Us
            </button>
          </Link>

          <Link to="/about">
            <div className="flex items-center ml-8 md:ml-12">
              <button className="inline-block text-green font-handlee font-bold text-xl duration-200 mr-2 hover:mr-4">
                About Us
              </button>
              <img src={rarrow} alt="arrow" className="w-6" />
            </div>
          </Link>
        </div>

        <div className="mt-8 w-full h-[180px] md:h-[300px] lg:h-[250px] bg-green rounded-full">
          <img src={pizza} className="w-full h-[180px] md:h-[300px] lg:h-[250px] bg-green rounded-full" />
        </div>
      </div>
      <div className="w-full lg:w-2/5 mt-16 lg:mt-0 flex justify-center lg:justify-end">
        <img src={heroImg} className="md:w-4/5 md:h-[600px]" />
      </div>
    </div>
  );
}
