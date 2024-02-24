import Image from "next/image";

import OurHistory from "@/components/AboutUs/AboutStarick/our-history";
import WhoWeAre from "@/components/AboutUs/AboutStarick/who-we-are";
import SectionTitle from "@/components/old-section-title";
import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";


export default function AboutUs() {
  return (
    <>
      <PageHeader titleText="About Starick" />
      <WhoWeAre />
      <div className="bg-starick-white">
        <SectionHeader
          backgroundColour="starick-olive"
          titleText="Our Vision"
          imagePath="/images/starick-image1.jpg"
          textOnLeft={true}
          textColour="starick-black"
        />
        <div className="mb-4 flex w-full flex-row pt-5 px-6 py-2 md:px-20">
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
      <div className="bg-starick-white">
        <SectionHeader
          backgroundColour="starick-olive"
          titleText="Starick Timeline"
          imagePath="/images/starick-image1.jpg"
          textOnLeft={true}
          textColour="starick-black"
        />
      </div>
    </>
  );
}
