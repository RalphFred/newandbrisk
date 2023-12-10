import img from "../assets/img.png";
import rarrow from "../assets/rarrow.svg";

export default function AboutIntro() {
  return (
    // <div className="relative -z-10 flex items-center justify-end px-24 h-screen bg-cream">
    //   <div className="w-[600px] backdrop-blur-lg py-12 px-8 absolute top-1/2 left-[7rem] transform  -translate-y-1/2 shadow-xl">
    //     <h1 className="text-5xl font-labrada font-semibold">About Us</h1>
    //     <p className="font-handlee text-xl mt-8">
    //       Welcome to New and Brisk Culinary, where tradition meets innovation.
    //       Our mission is to inspire a love for culinary arts through an
    //       unforgettable experience led by experienced chefs. Join us on a
    //       flavorful journey where passion and precision converge.
    //     </p>
    //     <div className="flex flex-row items-center mt-4">
    //       <button className="font-bold font-handlee text-xl mr-3">
    //         Read More
    //       </button>
    //       <img src={rarrow} alt="arrow" className=""/>
    //     </div>
    //   </div>
    //   <div className="w-[65%]">
    //     <img src={img} alt="image" className='w-full h-[600px]'/>
    //   </div>
    // </div>

    <div className="flex items-center flex-col-reverse lg:flex-row px-8 py-12 lg:px-24 lg:py-16 bg-cream">
      <div className="w-full lg:w-2/5 relative mt-12 lg:mt-0 flex md:justify-center lg:justify-start">
        <img src={img} alt="img" className="md:h-[550px] w-full md:w-3/5 lg:w-4/5" />
      </div>
      <div className="lg:w-3/5">
        <h1 className="text-5xl font-labrada font-semibold">About Us</h1>
        <p className="font-handlee text-xl mt-8">
        Welcome to New and Brisk Culinary, a culinary haven where tradition meets with innovation. Our experienced chefs passionately guide you through a flavorful journey that transcends the ordinary. Each dish is a masterpiece, blending time-honored techniques with cutting-edge creativity. Join us for an unforgettable dining experience, where the love for culinary arts takes center stage in every bite.
        </p>
        <div className="flex flex-row items-center mt-6">
          <button className="font-bold font-handlee text-xl mr-3 duration-200 hover:mr-4">
            Read More
          </button>
          <img src={rarrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  );
}
