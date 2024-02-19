import Section from "@/components/Services/services-section";
import ChildSafeItem from "@/components/Services/ResourceAndToolkits/child-safe-item";
import childSafeTemplate from "@/components/Services/ResourceAndToolkits/child-safe-items/child-safe-template.json";
import externalResources from "@/components/Services/ResourceAndToolkits/child-safe-items/external-resources.json";
import practiceTools from "@/components/Services/ResourceAndToolkits/child-safe-items/practice-tools.json";
import ChildSafeList from "@/components/Services/ResourceAndToolkits/child-safe-list";
import Disclaimer from "@/components/Services/ResourceAndToolkits/disclaimer";

import PageHeader from "@/components/page-header";

export default function ChildSafeResources() {
  const emailAddress = "info@starick.org.au";

  const childSafeTemplatesBody = (
    <>
      <ChildSafeList itemList={childSafeTemplate} />
      <p className="my-10 text-center text-2xl font-semibold">Practice Tools</p>
      <ChildSafeList itemList={practiceTools} />
    </>
  );

  return (
    <>
      <PageHeader titleText="Child Safe Organisation Resources" />

      <div className="px-6 py-16 font-medium md:px-32 lg:px-72">
        <p className="mb-4">
          Starick&apos;s organisational culture prioritises the safety and
          wellbeing of all children and young people engaged with its services,
          to support them to grow and develop in safe, caring environments free
          from abuse and harm.
        </p>
        <p className="mb-4">
          Starick respects the rights of the child and recognises the
          significant role that mother&apos;s/carer&apos;s play and seeks their
          involvement to support the safety and wellbeing of their child in the
          context of family and domestic violence.
        </p>
        <p className="mb-4">
          Starick&apos;s developing suite of child safe policies is aligned to
          the{" "}
          <a
            href="https://www.unicef.org.au/united-nations-convention-on-the-rights-of-the-child"
            className="underline"
          >
            United Nations Convention on the Rights of the Child
          </a>
          , the{" "}
          <a
            href="https://www.ccyp.wa.gov.au/media/3946/child-safe-organisations-wa-guidelines-updated-november-2019.pdf"
            className="underline"
          >
            National Principles and Standards for Child Safe Organisations
          </a>{" "}
          and{" "}
          <a
            href="https://www.aracy.org.au/documents/item/700#:~:text=What%20is%20the%20Nest%3F,young%20person%20needs%20to%20thrive."
            className="underline"
          >
            Australia&apos;s Wellbeing Framework for Children and Young People
            What&apos;s in the Nest?
          </a>{" "}
          - Australian Research Alliance for Children and Youth (ARACY).
        </p>
        <p className="mb-4">
          The National Child Safe Principles and Standards provide a framework
          for creating child safe organisations. They are designed to create,
          maintain, and improve child safe practices. The Standards are based on
          extensive research and consultation by the Royal Commission into
          Institutional Responses to Child Sexual Abuse. They provide clear
          guidance for organisations to create cultures, adopt strategies and
          act to put the interests of children first to keep them safe from
          harm.
        </p>
        <p>
          Below are some child safe policy and procedure templates that can be
          downloaded and customised for organisations&apos; specific needs. If
          you have any child safe policies or procedures that your organisation
          would like to share, please email{" "}
          <a href={`mailto:${emailAddress}`} className="underline">
            info@starick.org.au
          </a>
          .
        </p>
      </div>
      <Section
        title="Child Safe Templates"
        titleBackgroundColour="starick-green"
        titleTextColour="starick-white"
        textOnLeft={false}
        sectionBody={childSafeTemplatesBody}
      />

      <Section
        title="Posters"
        titleBackgroundColour="starick-olive"
        titleTextColour="starick-black"
        textOnLeft={true}
        sectionBody={
          <ChildSafeItem
            backgroundColor="starick-olive"
            text="UN Convention on the Rights of the Child"
          />
        }
      />

      <Section
        title="External Resources"
        titleBackgroundColour="starick-green"
        titleTextColour="starick-white"
        textOnLeft={false}
        sectionBody={<ChildSafeList itemList={externalResources} />}
      />

      <Disclaimer />
    </>
  );
}
