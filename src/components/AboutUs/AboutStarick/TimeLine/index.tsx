import { useEffect, useState } from "react";
import Image from "next/image";

import timelineList from "./timeline-list.json";
import TimelineSection from "./timeline-section";
// todo mobile styling, progress dots not wrapping and displaying all when on small screens
// todo arrows moving on screen width 740
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
      <div className="relative my-5 flex h-[33vh] sm:h-[20vh] md:h-[30vh] 2xl:h-[40vh] items-center justify-around gap-0 bg-starick-white px-2 sm:px-16 text-sm lg:text-base">
        <Image
          src="icons/left-arrow.svg"
          className="mx-2 z-10 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
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
            // ?  w-1/${numVisible} vs md:w-1/2 etc
            className={`flex h-full w-1/${numVisible} items-end opacity-0
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
          className="mx-2 z-10 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
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
      <div className="my-5 flex flex-wrap justify-center px-16">
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
