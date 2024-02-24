import Link from "next/link";

import InPageNav from "@/components/InPageNav";
import PageHeader from "@/components/page-header";
import Crisis from "@/components/useful_numbers_and_information/crisis_section";
import Legal from "@/components/useful_numbers_and_information/legal";
import StarickServices from "@/components/useful_numbers_and_information/starick_services";
import SupportInfo from "@/components/useful_numbers_and_information/support_info";

export default function CoreServices() {
  const navLinkDetails = [
    {
      href: "#Crisis",
      name: "Crisis"
    },
    {
      href: "#Support Info",
      name: "Support Info"
    },
    {
      href: "#Starick Services",
      name: "Starick Services"
    },
    {
      href: "#Legal",
      name: "Legal"
    }
  ];
  return (
    <>
      <PageHeader titleText="Useful numbers and information" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <Crisis />
      <SupportInfo />
      <StarickServices />
      <Legal />
    </>
  );
}
