import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function WhatisDomesticViolenceSection() {
  const subBody = (
    <div className="pl-3">
      <p className="text-xl font-bold">Domestic violence means abuse</p>
      <br />
      <p>
        Domestic violence is often called “domestic and family violence” because
        it’s not just partners that abuse.
      </p>
      <br />
      <p>
        Domestic and family violence means any type of abuse that creates fear
        and controls another person, often causing physical, sexual and/or
        psychological damage, forced social isolation and economic deprivation.
      </p>
      <br />
      <p>
        Domestic and family violence usually means abuse against an intimate
        partner (including same sex relationships and ex-partners). But it can
        also occur between siblings, from adolescents to parents, or from family
        carers to a relative. Domestic and family violence can also include the
        abuse of children and young people, older people, people with a
        disability and other family members.
      </p>
      <br />
    </div>
  );

  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/did-you-know.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="What is domestic violence?"
      textOnLeft={false}
      circlesPlacement="br"
    />
  );
}
