import Image from "next/image";

import SectionHeader from "@/components/section-header";
import ServicesSection from "@/components/Services/services-section";

export default function OurHistory() {
  const body = (
    <div className="my-10 flex justify-center">
      <Image
        src="icons/history.svg"
        className="mx-2 h-12 w-12 md:h-24 md:w-24"
        height={100}
        width={100}
        alt="history"
      />
      <div className="grow pl-3" style={{ maxWidth: "60%" }}>
        <p>
          The Starick of today evolved from the hard work and commitment of
          strong women who were dedicated to their vision of providing safety
          and support to women and children who were experiencing family and
          domestic violence in their community.
        </p>
        <br />
        <p>
          Starick had its beginnings in 1982 when more than 80 people attended a
          public meeting in Gosnells to discuss the need for a refuge for women
          and children in the south eastern suburbs of Perth.
        </p>
        <br />
        <p>
          A steering group was formed and in 1985 Starick House was opened as a
          purpose built refuge providing safe emergency accommodation,
          information, advice and support to women and children escaping
          domestic and family violence.
        </p>
        <br />
        <p>
          The name Starick commemorates Nurse Henrietta Starick (1851- 1941) who
          worked as a Registered Maternity Nurse in the Gosnells area from 1905
          to 1935. Nurse Starick&apos;s work extended through the areas of
          Maddington, Gosnells, Cannington, Southern River and Canning Vale and
          she covered many miles on foot tending to her patients. Nurse Starick
          was extremely proud of the fact that she never lost a mother in all
          her years of working as a maternity nurse. She had 12 children of her
          own and several of her grandchildren still live in the Gosnells area.
        </p>
        <br />
        <p>
          Since the opening of Starick House, Starick has grown into a
          multi-facted service.
        </p>
        <br />
        <p>
          In 1999, Starick took over the management of Mary Smith Night Shelter
          in Bentley. This refuge owes its origins to Mary Smith, a determined
          woman originally from Scotland. In 1975, the International Year of
          Women, Mary Smith and a group of women from the International
          Women&apos;s Year Committee initiated the “Night Shelter” project. An
          advisory committee was formed, a property leased and the Association
          was incorporated in 1976. Mary Smith Night Shelter (named after her by
          the City of Canning) opened its doors in 1978 to women and children
          escaping domestic and family violence, experiencing mental health
          issues and homelessness. Some 20 years later, Mary Smith Night Shelter
          was incorporated into Starick.
        </p>
        <br />
        <p>
          Mary Smith was passionate and committed to the protection of women and
          children up until she passed away in 1997 at 72 years if age. She was
          also involved in the Women&apos;s Council for Domestic & Family
          Violence and other committees relating to domestic violence. She was a
          founder and patron of CLAN and a member of the committee that
          established the Family Law Act. She became a well-known and respected
          community figure in the City of Canning and deservedly earned awards
          and recognition for her commitment to these causes.
        </p>
        <br />
      </div>
    </div>
  );
  return (
    <div className="bg-starick-white">
      {/* <SectionHeader
          backgroundColour="starick-green"
          titleText="Our History"
          imagePath="/images/starick-image1.jpg"
          textOnLeft={false}
          textColour="starick-white"
        /> */}
      <ServicesSection
        titleTextColour="starick-white"
        titleBackgroundColour="starick-green"
        title="Our History"
        textOnLeft={true}
        stories={true}
      />
      {body}
    </div>
  );
}
