import Banner from "@/components/Services/banner";
import ProfessionalLearning from "@/components/Services/ResourcesAndFurtherLearning/professional-learning";
import EvidenceBase from "@/components/Services/ResourcesAndFurtherLearning/evidence-base";
import ResourceForParents from "@/components/Services/ResourcesAndFurtherLearning/resources-for-parents";
import CommunityPartnerships from "@/components/Services/ResourcesAndFurtherLearning/community-partnerships";
import ResourceForSchools from "@/components/Services/ResourcesAndFurtherLearning/resources-for-schools";
import ResourcesForAboriginal from "@/components/Services/ResourcesAndFurtherLearning/resources-for-aboriginal";

export default function InfoForSchools() {
  return (
    <>
      <Banner
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
