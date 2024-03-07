import SupportHeader from "@/components/OurSupporter/supporter_header";
import SupportBody from "@/components/OurSupporter/supporter_body";
import SupportSponsors from "@/components/OurSupporter/supporter_sponsor";

export default function Supporter(){
  return (
    <>
      <div>
        <div className = "flex justify-center h-auto bg-starick-green text-white">
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
  )
}