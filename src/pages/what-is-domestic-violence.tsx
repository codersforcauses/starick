import WhatisDomesticViolenceSection from "../components/DomesticViolence/what-is-domestic-violence";
import TypesOfAbuseSection from "../components/DomesticViolence/types-of-abuse";
import YourRightsAsAHumanBeingSection from "../components/DomesticViolence/your-rights-as-a-human-being";
import RecognisingTheSignsSection from "../components/DomesticViolence/recognising-the-signs";

import PageHeader from "@/components/page-header";

export default function WhatisDomesticViolence() {
  return (
    <>
      <PageHeader titleText="What is Domestic Violence?" />
      <WhatisDomesticViolenceSection />
      <TypesOfAbuseSection />
      <YourRightsAsAHumanBeingSection />
      <RecognisingTheSignsSection />
    </>
  );
}
