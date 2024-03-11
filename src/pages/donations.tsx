import Link from "next/link";

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
    </>
  );
}
