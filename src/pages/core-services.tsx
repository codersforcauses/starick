import Link from "next/link";

import InPageNav from "@/components/InPageNav";
import Banner from "@/components/Services/banner";

import CounsellingSection from "../components/Services/CoreServices/counselling";
import PoliceSection from "../components/Services/CoreServices/police-stations";
import RefugesSection from "../components/Services/CoreServices/refuges";
import SafeAtHomeSection from "../components/Services/CoreServices/safe-at-home";
import TransitionalHousingSection from "../components/Services/CoreServices/transitional-housing";

import PageHeader from "@/components/page-header";

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

  return (
    <>
      <PageHeader titleText="Core Services" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <RefugesSection />
      <CounsellingSection />
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
