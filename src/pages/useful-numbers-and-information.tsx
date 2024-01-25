import Link from "next/link";

import InPageNav from "@/components/InPageNav";

import Banner from "@/components/Services/banner";
import Crisis from "@/components/useful_numbers_and_information/crisis_section";
import SupportInfo from "@/components/useful_numbers_and_information/support_info";
import StarickServices from "@/components/useful_numbers_and_information/starick_services";
import Legal from "@/components/useful_numbers_and_information/legal";

export default function CoreServices() {
  const navLinkDetails = [
    {
      href: "#Crisis",
      name: "Crisis"
    },
    {
      href: "#SupportInfo",
      name: "Support Info"
    },
    {
      href: "#StarickServices",
      name: "Starick Services"
    },
    {
      href: "#Legal",
      name: "Legal"
    }
  ];
  return (
    <>
      <Banner titleText="Useful numbers and information" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <Crisis />
      <SupportInfo />
      <StarickServices />
      <Legal />
    </>
  );
}
