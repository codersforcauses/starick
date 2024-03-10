import Image from "next/image";

import OurHistory from "@/components/AboutUs/AboutStarick/our-history";
import Timeline from "@/components/AboutUs/AboutStarick/TimeLine";
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
          subtitleText="Starick&apos;s vision is to build futures free from violence, for
          the women and children who use our service and the community as a
          whole."
          imagePath="/images/starick-image1.jpg"
          textOnLeft={true}
          textColour="starick-black"
        />
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
      <Timeline />
    </>
  );
}
