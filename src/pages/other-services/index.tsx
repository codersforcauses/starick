import Link from "next/link";
import Banner from "@/components/Services/banner";
import InPageNav from "@/components/InPageNav";
import HealthAndWellbeingSection from "@/components/Services/OtherServices/health-wellbeing";
import RespectfulRelationshipsSection from "@/components/Services/OtherServices/respectful-relationships";
import ThrivingThroughConnectionSection from "@/components/Services/OtherServices/thriving-through-connection";
import WorkWithChildrenAndYoungPeopleSection from "@/components/Services/OtherServices/work-with-children-and-young-people";
import WorkplaceAwarenessSection from "@/components/Services/OtherServices/workplace-awareness";

export default function OtherServices() {
  const navLinkDetails = [
    {
      href: "#WA Respectful Relationships Teaching Support Program",
      name: "WA Respectful Relationships Teaching Support Program"
    },
    {
      href: "#Our Work with Children and Young People",
      name: "Our Work with Children and Young People"
    },
    {
      href: "#Workplace Awareness",
      name: "Workplace Awareness"
    },
    {
      href: "#Health and Wellbeing",
      name: "Health and Wellbeing"
    },
    {
      href: "#Thriving Through Connection Supporting Young People Aged 11 - 17 years",
      name: "Thriving Through Connection Supporting Young People Aged 11 - 17 years"
    }
  ];
  return (
    <>
      <Banner titleText="Other Services" />
      <InPageNav list={navLinkDetails}></InPageNav>
      <RespectfulRelationshipsSection />
      <WorkWithChildrenAndYoungPeopleSection />
      <WorkplaceAwarenessSection />
      <HealthAndWellbeingSection />
      <ThrivingThroughConnectionSection />
      <div className="flex items-center justify-center bg-[--starick-white] py-10">
        <button className="rounded-2xl bg-[--starick-brown] p-5 text-lg text-white hover:bg-[--starick-black]">
          <Link href="/core-services">Core Services</Link>
        </button>
      </div>
    </>
  );
}
