import Link from "next/link";
import Image from "next/image";

import InPageNav from "@/components/InPageNav";
import PageHeader from "@/components/page-header";

import Donate from "./donation/donate";
import FinancialDonations from "./donation/financial-donations";

export default function Donation() {

  return (
    <>
      <PageHeader titleText="Donations" />
      <Donate />
      <FinancialDonations />
      <div style={{ position: 'relative', width: '100%', height: '900px' }}>
      <Image
        src="/images/home/_MG_9216.jpg"
        alt="Section breaker"
        layout="fill"
      />
        </div>
        

    </>
  );
}
