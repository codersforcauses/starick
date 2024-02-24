import Link from "next/link";

import AnnualReports from "@/components/OurPublications/annual-reports";
import FacesOfStarick from "@/components/OurPublications/faces-of-starick";
import FriendsOfStarick from "@/components/OurPublications/friends-of-starick";
import StrategicPlans from "@/components/OurPublications/strategic-plans";
import PageHeader from "@/components/page-header";

export default function OurPublications() {
  return (
    <>
      <PageHeader titleText="Our Publications" />
      <StrategicPlans />
      <AnnualReports />
      <FacesOfStarick />
      <FriendsOfStarick />
    </>
  );
}
