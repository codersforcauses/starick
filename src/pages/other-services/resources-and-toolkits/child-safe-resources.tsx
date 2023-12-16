import { Children } from "react";

import Image from "next/image";

import SectionTitle from "@/components/section-title";
import ChildSafeItem from "@/components/Services/ResourceAndToolkits/child-safe-item";

import ChildSafeResourcesTitle from "~/images/ResourcesToolkits/child-safe-resources-title.png";

import childSafeTemplate from "@/components/Services/ResourceAndToolkits/child-safe-resources-items/child-safe-template.json";
import practiceTools from "@/components/Services/ResourceAndToolkits/child-safe-resources-items/practice-tools.json";
import externalResources from "@/components/Services/ResourceAndToolkits/child-safe-resources-items/external-resources.json";

export default function ChildSafeResources() {
  const emailAddress = "info@starick.org.au";

  return (
    <>
      <Image
        src={ChildSafeResourcesTitle}
        alt="description"
        width="0"
        height="0"
        className="h-auto w-full"
      />

      <div className="px-20 py-10 font-semibold md:px-40 md:py-20 lg:px-60">
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
      <div className="px-10 md:px-20 lg:px-32">
        <SectionTitle
          text="Child Safe Template"
          backgroundColour="[--starick-green]"
          textColour="[--starick-white]"
          iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
        />
      </div>

      <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
        {childSafeTemplate.map((child, index) => (
          <ChildSafeItem
            backgroundColor={child.backgroundColor}
            text={child.text}
            key={index}
          />
        ))}

        <p className="my-10 text-center text-2xl font-semibold">
          Practice Tools
        </p>

        {practiceTools.map((child, index) => (
          <ChildSafeItem
            backgroundColor={child.backgroundColor}
            text={child.text}
            key={index}
          />
        ))}
      </div>

      <div className="px-10 md:px-20 lg:px-32">
        <SectionTitle
          text="Posters"
          backgroundColour="[--starick-brown]"
          textColour="[--starick-white]"
          iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
        />
      </div>

      <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
        <ChildSafeItem
          backgroundColor="olive"
          text="UN Convention on the Rights of the Child"
        />
      </div>

      <div className="px-10 md:px-20 lg:px-32">
        <SectionTitle
          text="External Resources"
          backgroundColour="[--starick-olive]"
          textColour="black"
          iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
        />
      </div>

      <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
        {externalResources.map((child, index) => (
          <ChildSafeItem
            backgroundColor={child.backgroundColor}
            text={child.text}
            key={index}
          />
        ))}
      </div>

      <div className="h-auto w-full bg-[--starick-brown] px-20 py-10 text-[--starick-white] md:px-40 lg:px-60">
        <p className="text-center text-xl font-semibold">Disclaimer</p>

        <p className="mb-4 mt-6">
          This content is for educational and informational purposes; it is not
          intended as a substitute for professional advice.
        </p>

        <p className="mb-4">
          While the information has been verified to the best of our abilities,
          we cannot guarantee there are no mistakes or errors.
        </p>

        <p className="mb-4">
          We recommend that users exercise their own judgment and use their
          skills, knowledge, and experience to evaluate the accuracy, currency,
          completeness, relevance, and suitability of the information for their
          needs.
        </p>

        <p className="mb-4">
          We reserve the right to change this information at any time.
        </p>
      </div>
    </>
  );
}
