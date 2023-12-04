import img from "../assets/img.jpg";
import rarrow from "../assets/rarrow.svg";

export default function AboutIntro() {
  return (
    <div className="relative flex items-center justify-end px-24 h-screen bg-cream">
      <div className="w-[600px] backdrop-blur-lg py-12 px-8 absolute top-1/2 left-[7rem] transform  -translate-y-1/2 shadow-xl">
        <h1 className="text-5xl font-labrada font-semibold">About Us</h1>
        <p className="font-handlee text-xl mt-8">
          Welcome to New and Brisk Culinary, where tradition meets innovation.
          Our mission is to inspire a love for culinary arts through an
          unforgettable experience led by experienced chefs. Join us on a
          flavorful journey where passion and precision converge.
        </p>
        <div className="flex flex-row items-center mt-4">
          <button className="font-bold font-handlee text-xl mr-3">
            Read More
          </button>
          <img src={rarrow} alt="arrow" className=""/>
        </div>
      </div>
      <div className="w-[65%]">
        <img src={img} alt="image" className='w-full h-[600px]'/>
      </div>
    </div>
  );
}
