import Link from "next/link";

import InPageNav from "@/components/InPageNav";

import CounsellingSection from "../components/Services/CoreServices/counselling";
import PoliceSection from "../components/Services/CoreServices/police-stations";
import RefugesSection from "../components/Services/CoreServices/refuges";
import SafeAtHomeSection from "../components/Services/CoreServices/safe-at-home";
import TransitionalHousingSection from "../components/Services/CoreServices/transitional-housing";

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
      <div>
        <img src="images/starick-image1.jpg" className="w-full" alt=""></img>
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
          <p className="p-2 text-4xl font-bold text-starick-brown">
            Core Services
          </p>
        </div>
      </div>
      <InPageNav list={navLinkDetails}></InPageNav>
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
