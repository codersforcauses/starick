import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({
  images
}: {
  images: Array<{ imgUrl: string; event: string; description: string }>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [event, setEvent] = useState(images[0].event);
  const [description, setDescription] = useState(images[0].description);

  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    setDescription(images[newSlide].description);
    setEvent(images[newSlide].event);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    setDescription(images[newSlide].description);
    setEvent(images[newSlide].event);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <>
      <div className="relative p-4">
        <div className="relative m-auto flex h-[50vh] w-full overflow-hidden px-10">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative h-full w-full"
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.imgUrl}
                alt={image.description}
                objectFit="contain"
                className={`
    opacity-0 transition-transform
    duration-500
    ${index === currentSlide ? "translate-x-0 opacity-100" : ""}
    ${index > currentSlide ? "translate-x-1/3 opacity-0" : ""}
    ${index < currentSlide ? "-translate-x-1/3 opacity-0" : ""}
                    `}
                fill
              />
            ))}
          </Swipe>
        </div>
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute inset-y-1/2 left-0 m-auto cursor-pointer rounded-full border  border-gray-400 text-5xl text-gray-400 hover:bg-gray-400 hover:text-gray-700"
        />
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute inset-y-1/2 right-0 m-auto cursor-pointer rounded-full border  border-gray-400 text-5xl text-gray-400 hover:bg-gray-400 hover:text-gray-700"
        />

        <div className="relative flex justify-center p-2" role="group">
          {images.map((_, index) => (
            <div
              className={
                index === currentSlide
                  ? "mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700"
                  : "mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-300"
              }
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => {
                setCurrentSlide(index);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentSlide(index);
                }
              }}
            />
          ))}
        </div>
      </div>
      <div className="px-5 pb-32 pt-5">
        <p className="text-center text-starick-brown">
          <b>{event}</b>
          {description}
        </p>
      </div>
    </>
  );
}
