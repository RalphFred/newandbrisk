import link from "../assets/link.svg";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="pt-[112px] px-8 sm:px-16 pb-20 lg:px-32 bg-cream border-none">
      <h1 className="font-labrada font-bold text-5xl mb-16">
        Services & Pricing
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-green w-full md:w-[300px] lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">
            01
          </button>
          <h4 className="font-handlee font-bold mb-2">Apprenticeship Class</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">
            ₦100,000<span className="text-sm">NGN</span>
          </h1>

          <span className="font-handlee text-sm block mb-40">
            Perfecting skills: hands-on practice, expert guidance in our
            Apprenticeship
          </span>

          <Link to="/contact">
            <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
              <div className="text-lg">Get Started</div>
              <img src={link} alt="icon" />
            </div>
          </Link>
        </div>

        <div className="border-2 border-green w-full md:w-[300px] lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">
            02
          </button>
          <h4 className="font-handlee font-bold mb-2">Food Enthisiast</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">
            ₦200,000<span className="text-sm">NGN</span>
          </h1>

          <span className="font-handlee text-sm block mb-40">
            A perfect blend of hands-on experience and expert guidance
          </span>

          <Link to="/contact">
            <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
              <div className="text-lg">Get Started</div>
              <img src={link} alt="icon" />
            </div>
          </Link>
        </div>

        <div className="border-2 border-green w-full md:w-[300px] lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">
            03
          </button>
          <h4 className="font-handlee font-bold mb-2">Professional Home</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">
            ₦350,000<span className="text-sm">NGN</span>
          </h1>

          <span className="font-handlee text-sm block mb-40">
            Elevate your cooking at Professional Home: expert guidance, hands-on
            excellence.
          </span>

          <Link to="/contact">
            <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
              <div className="text-lg">Get Started</div>
              <img src={link} alt="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
