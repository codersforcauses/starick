import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function DonateOrBuy() {
  const subbody = (
    <>
      <p>
        Unwanted clothing and other essential day-to-day items are sold in the
        op shop or supplied to the families we support – some of whom flee their
        homes with just the clothes they stand up in.
      </p>
      <p>
        Every dollar of profit from the op shop is used to fund services to the
        families we support.
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
        title="Donate or Buy - It All Helps"
        textOnLeft={false}
      />
    </>
  );
}
