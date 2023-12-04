import img from '../assets/img.jpg'

export default function Hero() {
  return (
    <div className="flex justify-between items-center h-[calc(100vh-100px)]">
      <div className="w-1/2">
        <h1 className="text-5xl font-semibold  font-labrada">
          Mastering Technique, <br />
          Unleashing Exquisite Flavor.
        </h1>
        <p className="mt-12 font-handlee text-2xl">
          Unleash your culinary potential with us. Master technique, craft
          exceptional flavors, and become a culinary artist. Join our community
          of passionate food enthusiasts and redefine the art of cooking
        </p>
        <button className="mt-4 font-handlee font-bold bg-green text-white py-3 px-8 rounded-full text-lg">
          Contact Us
        </button>
        <div className="mt-12 w-full h-[150px] bg-green rounded-full">

        </div>
      </div>
      <div className='w-1/2 p-12'>
        <img src={img} alt="img" className='w-full h-[500px]'/>
      </div>
    </div>
  );
}
