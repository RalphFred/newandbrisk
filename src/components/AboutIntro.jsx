import introImg from "../assets/introImg.jpg";
import rarrow from "../assets/rarrow.svg";
import { Link } from "react-router-dom";

export default function AboutIntro() {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row px-8 py-12 lg:px-24 lg:py-16 bg-cream">
      <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex md:justify-center lg:justify-start">
        <img src={introImg} alt="img" className="md:h-[550px] w-full md:w-3/5 lg:w-4/5" />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-labrada font-semibold">About Us</h1>
        <p className="font-handlee text-xl mt-8">
        Welcome to <span className="font-bold">New and Brisk Culinary</span>, where tradition meets innovation. Our experienced chefs guide you through a flavorful journey that goes beyond the ordinary. Each dish, a masterpiece, blends time-honored techniques with cutting-edge creativity. Join us for an unforgettable dining experience, where the love for culinary arts takes center stage in every bite.
        </p>
        <div className="flex flex-row items-center mt-6">
          <Link to='/about' className="font-bold font-handlee text-xl mr-3 duration-200 hover:mr-4 text-green">
            Read More
          </Link>
          <img src={rarrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  );
}
