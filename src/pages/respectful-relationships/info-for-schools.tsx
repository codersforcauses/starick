import AchievedSection from '@/components/services/info-for-schools/what-we-achieved';
import Banner from '../../components/services/banner';
import ProgramComponents from '../../components/services/info-for-schools/program-components';

export default function InfoForSchools() {
    return <>
            <Banner titleText="Respectful relationships" subtitleText="Info for schools" />
            <ProgramComponents />
            <AchievedSection />
        </>
}