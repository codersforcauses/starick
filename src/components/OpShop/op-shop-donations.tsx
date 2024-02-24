import ServicesSection from "../Services/services-section";
import Link from "next/link";
import SubSection from "../Services/subsection";

export default function OpShopDonations() {
  const subbody = (
    <>
      <p>
        Your unwanted clothing and other day-to-day items are sold in the op
        shop to raise funds or supplied to the families we support, some of whom
        arrive at our refuges with just the clothes they stand up in. Please
        ensure all clothing is clean and folded and that household and other
        goods are clean and in good working order.
      </p>
      <br />
      <p>
        We&apos;re always on the lookout for great new stock. Donate your useful
        items to the op shop and give them a new life.
      </p>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/resources.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <>
      <ServicesSection
        titleTextColour="starick-black"
        titleBackgroundColour="starick-olive"
        sectionBody={body}
        title="Op Shop Donations"
        textOnLeft={false}
      />
      <div className="flex items-center justify-center bg-starick-white py-10">
        <button className="rounded-2xl bg-starick-brown p-5 text-lg text-white hover:bg-starick-black">
          <Link href="/op-shop/donations">Donate Stock</Link>
        </button>
      </div>
    </>
  );
}
