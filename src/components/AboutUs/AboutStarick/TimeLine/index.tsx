import Image from "next/image";

// todo scroll, input body & date, mobile styling
import TimelineSection from "./timeline-section";
export default function Timeline() {
  return (
    <div className="mt-5 flex items-center justify-around gap-0 bg-starick-white px-6 md:px-32">
      <Image
        src="icons/left-arrow.svg"
        className="mx-2 mb-4 h-6 w-6 opacity-40 md:h-12 md:w-12"
        height={100}
        width={100}
        alt="left-arrow"
      />
      <TimelineSection />
      <TimelineSection />
      <TimelineSection />
      <Image
        src="icons/right-arrow.svg"
        className="mx-2 mb-4 h-6 w-6 opacity-40 hover:opacity-60 md:h-12 md:w-12"
        height={100}
        width={100}
        alt="right-arrow"
      />
    </div>
  );
}
