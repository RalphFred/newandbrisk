import { images } from "../data";

export default function Gallery() {
  return (
    // <div className="px-8 pt-[112px] pb-8 lg:px-32 bg-cream lg:pb-12">
    //   <div className="hidden lg:grid grid-cols-5 grid-rows-6 grid-flow-row gap-4 h-screen">
    //     <div className="bg-blue-500 row-span-2 overflow-hidden" id="1">
    //       <img
    //         src={img1}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-orange-700 row-span-2 col-span-2 overflow-hidden"
    //       id="2"
    //     >
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-red-500 row-span-2 overflow-hidden" id="3">
    //       <img
    //         src={img7}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-slate-500 overflow-hidden" id="4">
    //       <img
    //         src={img13}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-yellow-500 row-span-2 overflow-hidden" id="5">
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-pink-500 row-span-3 overflow-hidden" id="6">
    //       <img
    //         src={img3}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-teal-500 overflow-hidden" id="7">
    //       <img
    //         src={img4}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-purple-500 overflow-hidden" id="8">
    //       <img
    //         src={img5}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-blue-500 overflow-hidden" id="9">
    //       <img
    //         src={img6}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-gray-600 row-span-2 overflow-hidden" id="10">
    //       <img
    //         src={img7}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-orange-500 row-span-2 col-span-2 overflow-hidden"
    //       id="11"
    //     >
    //       <img
    //         src={img8}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-indigo-500 row-span-3 overflow-hidden" id="12">
    //       <img
    //         src={img9}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-violet-500 overflow-hidden" id="13">
    //       <img
    //         src={img10}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-blue-500 col-span-2 overflow-hidden" id="14">
    //       <img
    //         src={img11}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-teal-500 overflow-hidden" id="14">
    //       <img
    //         src={img12}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 hover:cursor-pointer hover:scale-110 border-4 border-green"
    //       />
    //     </div>
    //   </div>

    //   <div className="hidden md:grid lg:hidden grid-cols-4 grid-rows-6 grid-flow-row gap-3 h-[150vh] border-none">
    //     <div
    //       className="bg-blue-500 row-span-2 col-span-2 overflow-hidden"
    //       id="1"
    //     >
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-orange-700 row-span-1 col-span-2 overflow-hidden"
    //       id="2"
    //     >
    //       <img
    //         src={img7}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-red-500 row-span-1 overflow-hidden" id="3">
    //       <img
    //         src={img6}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-slate-500 row-span-2 overflow-hidden" id="4">
    //       <img
    //         src={img1}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-blue-500 row-span-1 col-span-1 overflow-hidden"
    //       id="1"
    //     >
    //       <img
    //         src={img7}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-orange-700 row-span-1 col-span-2 overflow-hidden"
    //       id="2"
    //     >
    //       <img
    //         src={img9}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-red-500 row-span-2 overflow-hidden" id="3">
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-slate-500 overflow-hidden" id="4">
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-slate-500 overflow-hidden" id="4">
    //       <img
    //         src={img8}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-blue-500 row-span-2 overflow-hidden" id="1">
    //       <img
    //         src={img6}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div
    //       className="bg-orange-700 row-span-2 col-span-2 overflow-hidden"
    //       id="2"
    //     >
    //       <img
    //         src={img5}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-red-500 overflow-hidden" id="3">
    //       <img
    //         src={img13}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //     <div className="bg-slate-500 overflow-hidden" id="4">
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-4 border-green"
    //       />
    //     </div>
    //   </div>

    //   <div className="md:hidden grid grid-cols-5 grid-rows-8 grid-flow-row gap-3 h-[200vh]">
    //     <div className="overflow-hidden bg-blue-500 row-span-2 col-span-3" id="1">
    //       <img
    //         src={img13}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-orange-700 row-span-2 col-span-2" id="2">
    //       <img
    //         src={img11}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-red-500 row-span-2 col-span-2" id="3">
    //       <img
    //         src={img10}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-pink-500 col-span-3" id="3">
    //       <img
    //         src={img9}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-gray-500 row-span-2 col-span-3" id="3">
    //       <img
    //         src={img8}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-violet-500 col-span-2" id="3">
    //       <img
    //         src={img7}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-blue-500 row-span-2 col-span-3" id="1">
    //       <img
    //         src={img6}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-orange-700 row-span-2 col-span-2" id="2">
    //       <img
    //         src={img5}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-red-500 row-span-2 col-span-2" id="3">
    //       <img
    //         src={img4}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-pink-500 col-span-3" id="3">
    //       <img
    //         src={img3}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-gray-500 row-span-2 col-span-3" id="3">
    //       <img
    //         src={img2}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //     <div className="overflow-hidden bg-violet-500 col-span-2" id="3">
    //       <img
    //         src={img1}
    //         alt=""
    //         className="w-full h-full object-cover duration-500 border-2 border-green"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="px-8 pt-[112px] pb-8 lg:px-32 bg-cream lg:pb-12">
      <div className="md:columns-2 lg:columns-3 gap-4  transition-all">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt="image" className="mb-4 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
