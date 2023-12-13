import ProfessionalLearning from "@/components/Services/ResourcesAndFurtherLearning/professional-learning";
import Banner from "@/components/Services/banner";
import EvidenceBase from "@/components/Services/ResourcesAndFurtherLearning/evidence-base";
import ResourceForParents from "@/components/Services/ResourcesAndFurtherLearning/resources-for-parents";
import CommunityPartnerships from "@/components/Services/ResourcesAndFurtherLearning/community-partnerships";

export default function InfoForSchools() {
  return (
    <>
      <Banner
        titleText="Respectful relationships"
        subtitleText="Resources and Further Reading"
      />
      <EvidenceBase />
      <ResourceForParents />
      <CommunityPartnerships />
      <ProfessionalLearning />
    </>
  );
}
