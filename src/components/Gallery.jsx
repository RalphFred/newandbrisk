import { images } from "../data";

export default function Gallery() {
  return (
    <div className="px-8 pt-[112px] pb-8 lg:px-32 bg-cream lg:pb-12">
      <div className="md:columns-2 lg:columns-3 gap-4  transition-all">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt="image" className="mb-4 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
