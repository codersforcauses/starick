import Link from "next/link";

import InPageNav from "@/components/InPageNav";
import PageHeader from "@/components/page-header";

import SomeoneExperiencingViolenceSection from "@/components/FrequentlyAskedQuestions/someone-experiencing-violence";
import ReportingViolenceSection from "@/components/FrequentlyAskedQuestions/reporting-violence";
import EntryToStarickSection from "@/components/FrequentlyAskedQuestions/entry-to-starick";
import ItemsToBringToRefugeSection from "@/components/FrequentlyAskedQuestions/items-to-bring-to-refuge";
import PetsToRefugeSection from "@/components/FrequentlyAskedQuestions/pets-to-refuge";
import RefugeStayDurationSection from "@/components/FrequentlyAskedQuestions/refuge-stay-duration";
import EffectOfWitnessingViolenceForChildrenSection from "@/components/FrequentlyAskedQuestions/effect-of-witnessing-violence-for-children";
import WhatIsOutreachSection from "@/components/FrequentlyAskedQuestions/what-is-outreach";
import StarickAdvocatesExample from "@/components/FrequentlyAskedQuestions/starick-advocates";
import HOWICSection from "@/components/FrequentlyAskedQuestions/howic";

export default function FrequentlyAskedQuestions() {
  const navLinkDetails = [
    {
      href: "#What should I do if someone I know is experiencing domestic or family violence?",
      name: "What should I do if someone I know is experiencing domestic or family violence?"
    },
    {
      href: "#How do I report an incident of domestic or family violence?",
      name: "How do I report an incident of domestic or family violence?"
    },
    {
      href: "#How do I get into a Starick refuge?",
      name: "How do I get into a Starick refuge?"
    },
    {
      href: "#What can I take with me to the refuge?",
      name: "What can I take with me to the refuge?"
    },
    {
      href: "#Can I bring my pet to the refuge?",
      name: "Can I bring my pet to the refuge?"
    },
    {
      href: "#How long can I stay at the refuge?",
      name: "How long can I stay at the refuge?"
    },
    {
      href: "#How does witnessing domestic violence affect children?",
      name: "How does witnessing domestic violence affect children?"
    },
    {
      href: "#What is outreach?",
      name: "What is outreach?"
    },
    {
      href: "#What are our different advocates?",
      name: "What are our different advocates?"
    },
    {
      href: "#What is HOWIC?",
      name: "What is HOWIC?"
    }
  ];
  return (
    <>
      <PageHeader titleText="Frequently Asked Questions" />
      <InPageNav list={navLinkDetails}></InPageNav>

      <SomeoneExperiencingViolenceSection />
      <ReportingViolenceSection />
      <EntryToStarickSection />
      <ItemsToBringToRefugeSection />
      <PetsToRefugeSection />
      <RefugeStayDurationSection />
      <EffectOfWitnessingViolenceForChildrenSection />
      <WhatIsOutreachSection />
      <StarickAdvocatesExample />
      <HOWICSection />
    </>
  );
}
