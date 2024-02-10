import { useState } from "react";
import Image from "next/image";

import timelineList from "./timeline-list.json";
// todo fix transition, mobile styling
import TimelineSection from "./timeline-section";
export default function Timeline() {
  // range is number of timeline sections shown on screen at once
  const range = 3; // todo adjust this number to change for smaller screens etc
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="relative my-5 flex h-[40vh] items-center justify-around gap-0 overflow-hidden bg-starick-white px-6 md:px-32">
        <Image
          src="icons/left-arrow.svg"
          className="z-10 mx-2 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
          height={100}
          width={100}
          alt="left-arrow"
          onClick={() => setCurrent(current - range >= 0 ? current - range : 0)}
        />
        {timelineList.length % range != 0
          ? timelineList.push({ year: "", description: "" })
          : null}

        {timelineList.map((section, index) => (
          <div
            key={index}
            className={`flex h-full w-1/3 items-end opacity-0
          ${
            index >= current && index < current + range
              ? "translate-x-0 transform opacity-100 transition duration-500 ease-in-out"
              : "absolute"
          }
          ${index >= current + range ? "translate-x-full" : ""}
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
          className="mx-2 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
          height={100}
          width={100}
          alt="right-arrow"
          onClick={() =>
            setCurrent(
              current + range <= timelineList.length - range
                ? current + range
                : timelineList.length - range
            )
          }
        />
      </div>
      <div className="my-5 flex justify-center">
        {Array.from({ length: timelineList.length / range }).map((_, index) => (
          <div
            key={index}
            className={`-my-2 mx-0.5 h-3 w-3 rounded-full ${
              index == Math.floor((current + 1) / range)
                ? "bg-starick-green"
                : "bg-starick-olive"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
