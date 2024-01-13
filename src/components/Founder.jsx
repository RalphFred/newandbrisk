import founder from "../assets/founder.jpg";

export default function Founder() {
  return (
    <div className="px-8 py-8 lg:pb-12 lg:px-32 bg-cream flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <img src={founder} className="w-full lg:w-4/5 lg:h-[600px]" />
      </div>
      <div className="w-full lg:w-1/2 font-handlee text-xl">
        <p className="mb-4">
          Meet <span className="font-semibold">CHEF NANA</span>
          , the esteemed <span className="font-bold">FOUNDER</span> and
          dedicated <span className="bold">CEO</span> of{" "}
          <span className="font-bold">New and Brisk Culinary</span>. With more
          than 10 years of valuable experience in the culinary arts, Chef Nana
          brings a wealth of expertise to our kitchen, where tradition meets
          innovation in delightful harmony. Her culinary journey is a reflection
          of her passion and commitment to crafting delicious experiences for
          our guests.
        </p>
      </div>
    </div>
  );
}
