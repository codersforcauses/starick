import Link from "next/link";

import InPageNav from "@/components/InPageNav";
import Banner from "@/components/Services/banner";

import CounsellingSection from "../components/Services/CoreServices/counselling";
import PoliceSection from "../components/Services/CoreServices/police-stations";
import RefugesSection from "../components/Services/CoreServices/refuges";
import SafeAtHomeSection from "../components/Services/CoreServices/safe-at-home";
import TransitionalHousingSection from "../components/Services/CoreServices/transitional-housing";

//temp
import SectionHeader from "@/components/section-header";
import PageSummary from "@/components/page-summary";

export default function CoreServices() {
  const navLinkDetails = [
    {
      href: "#Counselling Services",
      name: "Counselling Services"
    },
    {
      href: "#Refuges",
      name: "Refuges"
    },
    {
      href: "#Transitional Housing",
      name: "Transitional Housing"
    },
    {
      href: "#Support in Police Stations",
      name: "Support at Police Stations"
    },
    {
      href: "#Safe at Home Program",
      name: "Safe at Home Program"
    }
  ];

  const temp = <div>
    <p>Refuges</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada augue et dui consequat aliquet.</p>
  </div>
  const temp2 = <div>
  <p>Counselling Services</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada augue et dui consequat aliquet.</p>
</div>
  return (
    <>
      <Banner titleText="Core Services" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <SectionHeader imagePath="/images/starick-image1.jpg" titleText="Refuges" backgroundColour="starick-green" textColour="starick-white" textOnLeft={false}/>
      <SectionHeader imagePath="/images/starick-image1.jpg" titleText="Counselling Services" backgroundColour="starick-olive" textColour="starick-black" textOnLeft={true}/>
      <PageSummary content={temp} backgroundColour="starick-green" imagePath="/images/starick-image1.jpg" imageAlt="idk" contentOnLeft={false}/>
      <PageSummary content={temp2} backgroundColour="starick-olive" imagePath="/images/starick-image1.jpg" imageAlt="idk" contentOnLeft={true}/>
      <CounsellingSection />
      <RefugesSection />
      <TransitionalHousingSection />
      <PoliceSection />
      <SafeAtHomeSection />
      <div className="flex items-center justify-center bg-starick-white py-10">
        <button className="rounded-2xl bg-starick-brown p-5 text-lg text-white hover:bg-starick-black">
          <Link href="/other-services">Other Services</Link>
        </button>
      </div>
    </>
  );
}
