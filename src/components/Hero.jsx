import img from '../assets/img.jpg'
import pizza from '../assets/pizza.gif'
import heroImg from '../assets/heroImg.png'

export default function Hero() {
  return (
    <div className="flex justify-between items-center h-[calc(100vh-100px)] px-32 bg-cream">
      <div className="w-3/5">
        <h1 className="text-5xl font-semibold  font-labrada">
          Mastering Technique, <br />
          Unleashing Exquisite Flavor.
        </h1>
        <p className="mt-8 font-handlee text-xl">
          Unleash your culinary potential with us. Master technique, craft
          exceptional flavors, and become a culinary artist. Join our community
          of passionate food enthusiasts and redefine the art of cooking
        </p>
        <button className="mt-4 font-handlee font-bold bg-green text-white py-4 px-12 rounded-full text-xl">
          Contact Us
        </button>
        <div className="mt-8 w-full h-[220px] bg-green rounded-full">
          <img src={pizza} className='w-full h-[220px] bg-green rounded-full' />
        </div>
      </div>
      <div className='w-2/5 flex justify-end'>
        <img src={heroImg} className='w-4/5 h-[600px]' />
      </div>
    </div>
  );
}
