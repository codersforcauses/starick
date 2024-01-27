import HowDoSchoolsParticipate from "@/components/Services/InfoForSchools/how-do-schools-participate";
import ProgramComponents from "@/components/Services/InfoForSchools/program-components";
import SchoolCohorts from "@/components/Services/InfoForSchools/school-cohorts";
import AchievedSection from "@/components/Services/InfoForSchools/what-we-achieved";

import Banner from "../../components/Services/banner";

export default function InfoForSchools() {
  return (
    <>
      <Banner
        titleText="Respectful relationships"
        subtitleText="Info for schools"
      />
      <HowDoSchoolsParticipate />
      <AchievedSection />
      <ProgramComponents />
      <SchoolCohorts />
    </>
  );
}
