import Link from "next/link";

import InPageNav from "@/components/inpagenav";

import CounsellingSection from "../components/services/core-services/counselling";
import PoliceSection from "../components/services/core-services/police-stations";
import RefugesSection from "../components/services/core-services/refuges";
import SafeAtHomeSection from "../components/services/core-services/safe-at-home";
import TransitionalHousingSection from "../components/services/core-services/transitional-housing";

export default function CoreServices() {
  const navLinkDetails = [
    {
      href: "/counselling",
      name: "Counselling Services"
    },
    {
      href: "/support",
      name: "Refuges"
    },
    {
      href: "/other",
      name: "Transitional Housing"
    },
    {
      href: "/other",
      name: "Support at Police Stations"
    },
    {
      href: "/other",
      name: "Safe at Home Program"
    }
  ];
  return (
    <>
      <div>
        <img src="images/starick-image1.jpg" className="w-full" alt=""></img>
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
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
      <div className="flex items-center justify-center bg-[--starick-white] py-10">
        <button className="rounded-2xl bg-[--starick-brown] p-5 text-lg text-white hover:bg-[--starick-black]">
          <Link href="/other-services">Other Services</Link>
        </button>
      </div>
    </>
  );
}
