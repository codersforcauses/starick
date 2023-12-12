import ProfessionalLearning from '@/components/services/resources-and-further-learning/professional-learning';
import Banner from '../../components/services/banner';
import EvidenceBase from '../../components/services/resources-and-further-learning/evidence-base';
import ResourceForParents from '../../components/services/resources-and-further-learning/resources-for-parents';
import CommunityPartnerships from '@/components/services/resources-and-further-learning/community-partnerships';

export default function InfoForSchools() {
    return <>
            <Banner titleText="Respectful relationships" subtitleText="Resources and Further Reading" />
            <EvidenceBase />
            <ResourceForParents />
            <CommunityPartnerships />
            <ProfessionalLearning />
        </>
}