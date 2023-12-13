import Banner from "../../components/Services/banner";
import ProgramComponents from "@/components/Services/InfoForSchools/program-components";
import HowDoSchoolsParticipate from "@/components/Services/InfoForSchools/how-do-schools-participate";
import AchievedSection from "@/components/Services/InfoForSchools/what-we-achieved";
import SchoolCohorts from "@/components/Services/InfoForSchools/school-cohorts";

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
