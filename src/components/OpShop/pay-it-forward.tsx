import ServicesSection from "../Services/services-section";
import Link from "next/link";
import SubSection from "../Services/subsection";

export default function PayItForward() {
  const subbody = (
    <>
      <p>
        Pay it Forward op shop gift vouchers can be used by our clients to
        purchase anything from our op shop in Cloverdale.
      </p>
      <br />
      <p>
        Donate a Pay it Forward op shop gift voucher and we&apos;ll pass it on
        to a woman that really needs it.
      </p>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/resources.svg"
      sectionBody={subbody}
      iconOnRight={true}
    />
  );
  return (
    <>
      <ServicesSection
        titleTextColour="starick-white"
        titleBackgroundColour="starick-green"
        sectionBody={body}
        title="Pay It Forward"
        iconPath="/icons/refugees.svg"
      />
      <div className="flex items-center justify-center bg-starick-white py-10">
        <button className="rounded-2xl bg-starick-brown p-5 text-lg text-white hover:bg-starick-black">
          <Link href="/op-shop/pay-it-forward">Purchase</Link>
        </button>
      </div>
    </>
  );
}
