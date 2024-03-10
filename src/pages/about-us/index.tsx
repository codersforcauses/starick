import Image from "next/image";

import OurHistory from "@/components/AboutUs/AboutStarick/our-history";
import Timeline from "@/components/AboutUs/AboutStarick/TimeLine";
import WhoWeAre from "@/components/AboutUs/AboutStarick/who-we-are";
import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";
import InPageNav from "@/components/InPageNav";
import ServicesSection from "@/components/Services/services-section";



export default function AboutUs() {
  const navLinkDetails = [
    {
      href: "#Who we are",
      name: "Who we are"
    },
    {
      href: "#Our Vision",
      name: "Our Vision"
    },
    {
      href: "#Our History",
      name: "Our History"
    },
    {
      href: "#Starick Timeline",
      name: "Starick Timeline"
    },
  ];

  const body = (
    <div className = "flex justify-center mt-3">
      <p className = "text-center text-sm" style = {{maxWidth : "70%"}}>
        Starick&apos;s vision is to build futures free from violence, for
          the women and children who use our service and the community as a
          whole.
      </p>
    </div>
  )
  return (
    <>
      <PageHeader titleText="About Starick" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <WhoWeAre />
      <div>
        <ServicesSection
          titleTextColour="starick-black"
          titleBackgroundColour="starick-olive"
          title="Our Vision"
          titleNode={body}
          textOnLeft={true}
          centerText={true}
          stories={false}
          imagePath="/images/home/_MG_9460.jpg"
        />
      </div>
      <OurHistory />
      <div className="bg-starick-white">
      <ServicesSection
          titleTextColour="starick-black"
          titleBackgroundColour="starick-olive"
          titleNode={body}
          title="Starick Timeline"
          textOnLeft={false}
          stories={true}
        />
      </div>
      <Timeline />
    </>
  );
}
