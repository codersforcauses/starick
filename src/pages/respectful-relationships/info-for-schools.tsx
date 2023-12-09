import Banner from '../../components/services/banner';
import ProgramComponents from '../../components/services/info-for-schools/program-components';
import HowDoSchoolsParticipate from '../../components/services/info-for-schools/how-do-schools-participate';
import AchievedSection from '@/components/services/info-for-schools/what-we-achieved';
import SchoolCohorts from '@/components/services/info-for-schools/school-cohorts';

export default function InfoForSchools() {
    return <>
            <Banner titleText="Respectful relationships" subtitleText="Info for schools" />
            <HowDoSchoolsParticipate />
            <AchievedSection />
            <ProgramComponents />
            <SchoolCohorts/>
        
        </>
}