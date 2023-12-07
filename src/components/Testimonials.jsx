import quote from "../assets/quote.svg";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="px-8 py-8 lg:px-32 lg:py-20 bg-cream">
      <h1 className="font-labrada text-5xl font-bold mb-12">Testimonials</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="h-auto"
      >
        <div>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              className="w-[250px] lg:w-[500px]  font-handlee p-4 lg:p-8 rounded-2xl border-2 border-green relative"
              key={index}
            >
              <img src={quote} alt="person" className="w-6 lg:w-10 mb-4" />
              <p className="text-sm lg:text-xl h-[140px] mb-4">
                {testimonial.testimonial}
              </p>
              <p className="text-lg lg:text-2xl font-bold">{testimonial.name}</p>
            </SwiperSlide>
          ))}
          \
        </div>
      </Swiper>
    </div>
  );
}

// {
//   return(
//     <div className="px-8 py-8 lg:pb-12 lg:px-32 bg-cream">
//       Testimonials
//     </div>
//   )
// }
