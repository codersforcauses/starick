import Link from "next/link";

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
      ## CHANGE TO HAVE BUTTON FOR FAQ AT BOTTOM INSTEAD OF OTHER SERVICES ##
      ALSO CHANGE THE INDENTATIONS, TITLE BOX COLOURS, AND TITLE COLOURS. FIND
      THE CORRECT VECTOR
      <div className="flex items-center justify-center bg-starick-white py-10">
        <button className="rounded-2xl bg-starick-brown p-5 text-lg text-white hover:bg-starick-black">
          <Link href="/frequently-asked-questions">FAQ</Link>
        </button>
      </div>
    </>
  );
}
