import Link from "next/link";

import Banner from "@/components/Services/banner";
import StratigicPlans from "@/components/our-publications/stratigic-plans";

export default function OurPublications() {
  return (
    <>
      <Banner titleText="Our Publications" />
      <div className="flex items-center justify-center bg-starick-white py-10">
        <StratigicPlans/>
      </div>
    </>
  );
}
