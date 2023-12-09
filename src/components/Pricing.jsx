import {services} from "../data";

export default function Pricing() {
  return (
    <div className="pt-[112px] px-8 lg:px-32 bg-cream border-none">
      <h1 className="font-labrada font-bold text-5xl mb-4">Our Services</h1>
      <p className="text-xl font-handlee lg:w-2/3">
        Here at New and Brisk Culinary, we take pride in offering a
        comprehensive array of services designed to cater to your passion for
        the culinary arts. Whether you're a novice eager to explore the basics
        or a seasoned chef seeking to refine your skills, our diverse range of
        programs is crafted to meet your culinary aspirations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
        {services.map((service, index) => (
          <div
            className="font-handlee p-6 rounded-2xl border-2 border-green"
            key={index}
          >
            <h2 className="font-bold text-xl mb-2">
              {service.name}
            </h2>
            <p className="text-lg mb-2 h-[180px] lg:h-[150px]">
              {service.description}
            </p>
            <div className="flex justify-between">
            <button className="bg-green text-cream font-black text-lg py-2 px-4 rounded-full">
              ₦ {service.price}
            </button>

            <button className="font-bold text-lg border border-green px-4 rounded-full">
              {service.duration}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
