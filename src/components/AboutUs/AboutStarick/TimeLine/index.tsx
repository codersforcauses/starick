import { useEffect, useState } from "react";
import Image from "next/image";

import timelineList from "./timeline-list.json";
import TimelineSection from "./timeline-section";
export default function Timeline() {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      // numbers consistent with tailwind screen breakpoints
      if (screenSize <= 768) {
        setNumVisible(1);
      } else if (screenSize <= 1280) {
        setNumVisible(2);
      } else {
        setNumVisible(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (numVisible != 1) {
      const res = timelineList.length % numVisible;
      res != 0
        ? timelineList.push(
            ...Array(numVisible - res).fill({ year: "", description: "" })
          )
        : null;
    }
  }, [numVisible]);

  return (
    <>
      <div className="relative my-5 flex h-[45vh] items-center justify-around gap-0 bg-starick-white px-2 text-sm sm:h-[20vh] sm:px-16 md:h-[30vh] lg:text-base 2xl:h-[40vh]">
        <Image
          src="icons/left-arrow.svg"
          className="z-10 mx-2 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
          height={100}
          width={100}
          alt="left-arrow"
          onClick={() =>
            setCurrent(current - numVisible >= 0 ? current - numVisible : 0)
          }
        />
        {timelineList.map((section, index) => (
          <div
            key={index}
            className={`flex h-full w-full items-end justify-center opacity-0 md:w-1/2 xl:w-1/3
          ${
            index >= current && index < current + numVisible
              ? "translate-x-0 transform opacity-100 transition duration-500 ease-in-out"
              : "absolute"
          }
          ${index >= current + numVisible ? "translate-x-full" : ""}
          ${index < current ? "-translate-x-full" : ""}
          `}
          >
            <TimelineSection
              year={section.year}
              description={section.description}
            />
          </div>
        ))}
        <Image
          src="icons/right-arrow.svg"
          className="z-10 mx-2 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
          height={100}
          width={100}
          alt="right-arrow"
          onClick={() =>
            setCurrent(
              current + numVisible <= timelineList.length - numVisible
                ? current + numVisible
                : timelineList.length - numVisible
            )
          }
        />
      </div>
      <div className="my-5 flex h-12 flex-wrap justify-center px-16 sm:h-4">
        {Array.from({ length: timelineList.length / numVisible }).map(
          (_, index) => (
            <div
              key={index}
              className={`-my-2 mx-0.5 h-3 w-3 rounded-full ${
                index == Math.floor(current / numVisible)
                  ? "bg-starick-green"
                  : "bg-starick-olive"
              }`}
            ></div>
          )
        )}
      </div>
    </>
  );
}
