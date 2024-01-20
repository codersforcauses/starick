import Link from "next/link";

import Banner from "@/components/Services/banner";
import StrategicPlans from "@/components/OurPublications/strategic-plans";
import FacesOfStarick from "@/components/OurPublications/faces-of-starick";
import FriendsOfStarick from "@/components/OurPublications/friends-of-starick";

export default function OurPublications() {
  return (
    <>
      <Banner titleText="Our Publications" />
      <StrategicPlans/>
      <FacesOfStarick />
      <FriendsOfStarick />
    </>
  );
}
