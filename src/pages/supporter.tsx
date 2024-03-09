import SupportHeader from "@/components/OurSupporter/supporter_header";
import SupportBody from "@/components/OurSupporter/supporter_body";
import SupportSponsors from "@/components/OurSupporter/supporter_sponsor";
import PageHeader from "@/components/page-header";

export default function Supporter() {
  return (
    <>
      <div>
        <PageHeader titleText="Our Partners, Major Donors, and Supporters" />
        <div className="flex h-auto justify-center bg-starick-green text-white">
          <SupportHeader />
        </div>
        <div>
          <SupportBody />
        </div>
        <div>
          <SupportSponsors />
        </div>
      </div>
    </>
  );
}
