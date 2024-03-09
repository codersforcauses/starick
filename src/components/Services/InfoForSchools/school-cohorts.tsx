import { List } from "../list";
import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function SchoolCohorts() {
  const cohort1 = [
    "Ballajura Community College",
    "Belridge Secondary College",
    "John Butler Primary College",
    "Currambine Primary School",
    "Koorana Primary School",
    "Maida Vale Primary School",
    "Pinjarra Primary School",
    "Safety Bay Senior High School",
    "Swan View Senior High School",
    "Wirrabirra Primary School"
  ];

  const cohort2 = [
    "Boyanup Primary School",
    "Braeside Primary School",
    "Northam Primary School",
    "Northam Senior High School",
    "Rostrata Primary School",
    "Yanchep Secondary College"
  ];

  const cohort3 = [
    "Bramfield Park Primary School",
    "Butler College",
    "Charthouse Primary School",
    "Connolly Primary School",
    "Eaton Community College",
    "Joondalup Education Support Centre",
    "Kinross College",
    "Kinross Primary School",
    "Lancelin Primary School",
    "Southern River College",
    "Yanchep Beach Primary School"
  ];

  const cohort4 = [
    "Bayswater Primary School",
    "Carnarvon Community College",
    "Esperance Senior High School",
    "Governor Stirling Senior High School - Midland",
    "Hedland Senior High School",
    "Kalgoorlie Boulder Community High School",
    "Karratha Senior High School",
    "Malibu School - Safety Bay",
    "Norseman District High School",
    "Ravensthorpe District High School",
    "WA College of Agriculture/Narrogin"
  ];

  const cohort5 = [
    "Atwell College,Baldivis Secondary College",
    "Bertram Primary School",
    "Brookman Primary School",
    "Broome Senior High School",
    "Butler Primary School",
    "Calista Primary School",
    "Cannington Community Education Support Centre",
    "Lynwood Senior High School",
    "Mullewa District High School",
    "Newman Senior High School",
    "Pia Wadjarri Remote Community School",
    "Roebourne District High School",
    "Sevenoaks Senior College",
    "Success Primary School",
    "South Thornlie Primary School",
    "Thornlie Senior High School",
    "Woodland Grove Primary School",
    "Yale Primary School"
  ];
  const cohorts = [cohort1, cohort2, cohort3, cohort4, cohort5];

  const subbody = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {[
          [0, 3],
          [3, 5]
        ].map(([start, end], _) => (
          <div key={start}>
            {cohorts.slice(start, end).map((cohort, index) => (
              <div key={start + index}>
                <br />
                <p>
                  <b>Cohort {index + start + 1}</b>
                </p>
                <br />
                <List items={cohort} style="list-decimal" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/school.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="School Cohorts"
      textOnLeft={true}
      circlesPlacement="br"
    />
  );
}
