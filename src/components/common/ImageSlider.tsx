import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

const ImageSlider = ({ images }: { images: any }) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="relative w-full mx-auto">
        <div
          className="relative group "
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            objectFit="cover"
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer w-full"
            width={650}
            height={300}
          />
        </div>
        <button
          className="absolute left-0 top-1/2 transform rounded-xl bg-[#36383b30] -translate-y-1/2 text-white p-2 group"
          onClick={prevSlide}
        >
          <ArrowLeftRounded className="text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform rounded-xl bg-[#36383b30] -translate-y-1/2 text-white p-2 group"
          onClick={nextSlide}
        >
          <ArrowRightRounded className="text-white" />
        </button>
        <div className="absolute bottom-0 flex justify-center items-center w-full">
          {images.map((_: any, index: number) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-[#323332] rounded-xl"
                  : "bg-[#949594] rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
