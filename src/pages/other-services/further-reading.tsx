import PageHeader from "@/components/page-header";
import CommunityPartnerships from "@/components/Services/ResourcesAndFurtherLearning/community-partnerships";
import EvidenceBase from "@/components/Services/ResourcesAndFurtherLearning/evidence-base";
import ProfessionalLearning from "@/components/Services/ResourcesAndFurtherLearning/professional-learning";
import ResourcesForAboriginal from "@/components/Services/ResourcesAndFurtherLearning/resources-for-aboriginal";
import ResourceForParents from "@/components/Services/ResourcesAndFurtherLearning/resources-for-parents";
import ResourceForSchools from "@/components/Services/ResourcesAndFurtherLearning/resources-for-schools";

export default function InfoForSchools() {
  return (
    <>
      <PageHeader
        titleText="Respectful relationships"
        subtitleText="Resources and Further Reading"
      />
      <EvidenceBase />
      <ResourceForParents />
      <ResourcesForAboriginal />
      <ResourceForSchools />
      <CommunityPartnerships />
      <ProfessionalLearning />
    </>
  );
}
