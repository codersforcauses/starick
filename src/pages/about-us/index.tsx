import Image from "next/image";

import OurHistory from "@/components/AboutUs/AboutStarick/our-history";
import Timeline from "@/components/AboutUs/AboutStarick/TimeLine";
import WhoWeAre from "@/components/AboutUs/AboutStarick/who-we-are";
import SectionTitle from "@/components/section-title";
import Banner from "@/components/Services/banner";

export default function AboutUs() {
  return (
    <>
      <Banner titleText="About Starick" />
      <WhoWeAre />
      <div className="bg-starick-white px-6 py-2 md:px-32">
        <SectionTitle
          backgroundColour="starick-olive"
          text="Our Vision"
          iconPath=""
          textColour="starick-black"
        />
        <div className="mb-4 flex w-full flex-row pt-5 md:px-20">
          <div className="grow pl-3">
            <p>
              Starick&apos;s vision is to build futures free from violence, for
              the women and children who use our service and the community as a
              whole.
            </p>
            <br />
          </div>
          <Image
            src="icons/reports.svg"
            className="mx-2 h-12 w-12 md:h-24 md:w-24"
            height={100}
            width={100}
            alt="reports"
          />
        </div>
      </div>
      <OurHistory />
      <div className="bg-starick-white px-6 py-2 md:px-32">
        <SectionTitle
          backgroundColour="starick-olive"
          text="Starick Timeline"
          iconPath=""
          textColour="starick-black"
        />
      </div>
      <Timeline />
    </>
  );
}
