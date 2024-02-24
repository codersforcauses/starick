import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function VolunteerAtStarickOpShop() {
  const subbody = (
    <>
      <p>
        Volunteers are the lifeblood of the Starick Op Shop, which is run
        entirely by our team of dedicated volunteers.
      </p>
      <p>
        You can choose to work one day or more, and rest assured that op shop
        manager Sandy Hunt will make you feel welcome.
      </p>
      <p>
        If you&apos;d like to join the team, we&apos;d love to hear from you!
      </p>
      <br />
      <p>Please call our head office on (08) 9478 5300</p>
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
        title="Volunteer at the Starick Op Shop"
        textOnLeft={false}
      />
    </>
  );
}
