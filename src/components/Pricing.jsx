import link from '../assets/link.svg'

export default function Pricing() {
  return (
    <div className="pt-[112px] px-8 lg:px-32 bg-cream border-none">
      {/* <h1 className="font-labrada font-bold text-5xl mb-4">Our Services</h1>
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
            <p className="text-lg mb-4 md:h-[180px] lg:h-[150px]">
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
      </div> */}
      <h1 className="font-labrada font-bold text-5xl mb-16">Services & Pricing</h1>
      <div className="flex justify-around items-center">
        <div className="border-2 border-green lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">01</button>
          <h4 className="font-handlee font-bold mb-2">Apprenticeship Class</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">₦100,000<span className="text-sm">NGN</span></h1>

          <span className='font-handlee text-sm block mb-40'>Perfecting skills: hands-on practice, expert guidance in our Apprenticeship</span>

          <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
            <div className='text-lg'>
              Get Started  
            </div>  

            <img src={link} alt="icon" />
          </div>
        </div>

        <div className="border-2 border-green lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">02</button>
          <h4 className="font-handlee font-bold mb-2">Food Enthisiast</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">₦200,000<span className="text-sm">NGN</span></h1>

          <span className='font-handlee text-sm block mb-40'>A perfect blend of hands-on experience and expert guidance</span>

          <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
            <div className='text-lg'>
              Get Started  
            </div>  

            <img src={link} alt="icon" />
          </div>
        </div>

        <div className="border-2 border-green lg:w-[350px] p-8 rounded-3xl text-center">
          <button className="border-2 border-green rounded-md px-2 py-1 font-bold font-handlee mb-4 text-lg">03</button>
          <h4 className="font-handlee font-bold mb-2">Professional Home</h4>
          <h1 className="font-handlee font-bold text-4xl mb-4">₦350,000<span className="text-sm">NGN</span></h1>

          <span className='font-handlee text-sm block mb-40'>Elevate your cooking at Professional Home: expert guidance, hands-on excellence.</span>

          <div className="font-handlee font-bold bg-green text-cream px-6 py-2 rounded-full flex justify-between items-end">
            <div className='text-lg'>
              Get Started  
            </div>  

            <img src={link} alt="icon" />
          </div>
        </div>

       </div>
    </div>
  );
}
