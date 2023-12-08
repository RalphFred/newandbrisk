export default function Gallery() {
  return (
    <div className="px-8 pt-[112px] pb-8 lg:px-32 bg-cream lg:pb-12">
      <h1 className="font-labrada text-5xl font-bold  mb-8">Gallery</h1>
      <div className="hidden lg:grid grid-cols-5 grid-rows-6 grid-flow-row gap-3 h-screen">
        <div className="bg-blue-500 row-span-2" id="1"></div>
        <div className="bg-orange-700 row-span-2 col-span-2" id="2"></div>
        <div className="bg-red-500 row-span-2" id="3"></div>
        <div className="bg-slate-500" id="4"></div>
        <div className="bg-yellow-500 row-span-2" id="5"></div>
        <div className="bg-pink-500 row-span-3" id="6"></div>
        <div className="bg-teal-500" id="7"></div>
        <div className="bg-purple-500" id="8"></div>
        <div className="bg-blue-500" id="9"></div>
        <div className="bg-gray-600 row-span-2" id="10"></div>
        <div className="bg-orange-500 row-span-2 col-span-2" id="11"></div>
        <div className="bg-indigo-500 row-span-3" id="12"></div>
        <div className="bg-violet-500" id="13"></div>
        <div className="bg-blue-500 col-span-2" id="14"></div>
        <div className="bg-teal-500" id="14"></div>
        <div className="bg-pink-500" id="15"></div>
      </div>

      <div className="hidden md:grid lg:hidden grid-cols-4 grid-rows-6 grid-flow-row gap-3 h-[150vh]">
        <div className="bg-blue-500 row-span-2 col-span-2" id="1"></div>
        <div className="bg-orange-700 row-span-1 col-span-2" id="2"></div>
        <div className="bg-red-500 row-span-1" id="3"></div>
        <div className="bg-slate-500 row-span-2" id="4"></div>
        <div className="bg-blue-500 row-span-1 col-span-1" id="1"></div>
        <div className="bg-orange-700 row-span-1 col-span-2" id="2"></div>
        <div className="bg-red-500 row-span-2" id="3"></div>
        <div className="bg-slate-500" id="4"></div>
        <div className="bg-slate-500" id="4"></div>
        <div className="bg-blue-500 row-span-2" id="1"></div>
        <div className="bg-orange-700 row-span-2 col-span-2" id="2"></div>
        <div className="bg-red-500" id="3"></div>
        <div className="bg-slate-500" id="4"></div>
      </div>

      <div className="md:hidden grid grid-cols-5 grid-rows-8 grid-flow-row gap-3 h-[200vh]">
        <div className="bg-blue-500 row-span-2 col-span-3" id="1"></div>
        <div className="bg-orange-700 row-span-2 col-span-2" id="2"></div>
        <div className="bg-red-500 row-span-2 col-span-2" id="3"></div>
        <div className="bg-pink-500 col-span-3" id="3"></div>
        <div className="bg-gray-500 row-span-2 col-span-3" id="3"></div>
        <div className="bg-violet-500 col-span-2" id="3"></div>
        <div className="bg-blue-500 row-span-2 col-span-3" id="1"></div>
        <div className="bg-orange-700 row-span-2 col-span-2" id="2"></div>
        <div className="bg-red-500 row-span-2 col-span-2" id="3"></div>
        <div className="bg-pink-500 col-span-3" id="3"></div>
        <div className="bg-gray-500 row-span-2 col-span-3" id="3"></div>
        <div className="bg-violet-500 col-span-2" id="3"></div>
      </div>
    </div>
  );
}
