import Link from "next/link";

import InPageNav from "@/components/InPageNav";

import Banner from "@/components/Services/banner";
import Crisis from "@/components/useful_numbers_and_information/crisis_section";

export default function CoreServices() {
  const navLinkDetails = [
    {
      href: "#Crisis",
      name: "Crisis"
    }
  ];
  return (
    <>
      <Banner titleText="Useful numbers and information" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <Crisis/>
      
    </>
  );
}
