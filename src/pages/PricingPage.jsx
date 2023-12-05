import services from "../data";

export default function PricingPage() {
  return (
    <div className="px-8 lg:px-20 lg:pb-12 bg-cream">
      <h1 className="font-labrada font-bold text-5xl mb-4">Our Services</h1>
      <p className="text-xl font-handlee">
        Here at New and Brisk Culinary, we take pride in offering a
        comprehensive array of services designed to cater to your passion for
        the culinary arts. Whether you're a novice eager to explore the basics
        or a seasoned chef seeking to refine your skills, our diverse range of
        programs is crafted to meet your culinary aspirations.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">
        {services.map((service, index) => (
          <div
            className="font-handlee p-8 rounded-2xl bg-[#F0E7CA]"
            key={index}
          >
            <h2 className="font-bold text-xl mb-2">
              {service.name}
            </h2>
            <p className="text-lg mb-2">
              {service.description}
            </p>
            <div className="flex justify-between">
            <button className="bg-green text-cream font-black text-lg py-2 px-4 rounded-full">
              ₦ {service.price}
            </button>

            <button className="font-bold text-lg">
              {service.duration}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
