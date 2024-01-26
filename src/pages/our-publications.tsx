import Link from "next/link";

import AnnualReports from "@/components/OurPublications/annual-reports";
import FacesOfStarick from "@/components/OurPublications/faces-of-starick";
import FriendsOfStarick from "@/components/OurPublications/friends-of-starick";
import StrategicPlans from "@/components/OurPublications/strategic-plans";
import Banner from "@/components/Services/banner";

export default function OurPublications() {
  return (
    <>
      <Banner titleText="Our Publications" />
      <StrategicPlans />
      <AnnualReports />
      <FacesOfStarick />
      <FriendsOfStarick />
    </>
  );
}
