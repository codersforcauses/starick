import React from "react";
import { useState } from "react";
import { ReactNode } from "react";
import Image from "next/image";

import Section from "@/components/basicInformation/Section";
import NavbarItem from "@/components/basicInformation/utility/NavbarItem";
type Section = {
  sectionId: string;
  titleBackgroundColor: string;
  titleTextColor: string;
  titleContent: string;
  contentBody: ReactNode;
  iconPath: string;
  key: string;
};

type NavbarItem = {
  key: string;
  text: string;
  href: string;
};

const NavbarItems: NavbarItem[] = [
  {
    key: "1",
    text: "What should I do if someone I know is experiencing domestic or family violence?",
    href: "section1"
  },
  {
    key: "2",
    href: "section2",
    text: "How do I report an incident of domestic or family violence?"
  },
  { key: "3", href: "section3", text: "How do I get into a Starick refuge?" },
  {
    key: "4",
    href: "section4",
    text: "What can I take with me to the refuge?"
  },
  { key: "5", href: "section5", text: "Can I bring my pet to the refuge?" },
  { key: "6", href: "section6", text: "How long can I stay at the refuge?" },
  {
    key: "7",
    href: "section7",
    text: "How does witnessing domestic violence affect children?"
  },
  { key: "8", href: "section8", text: "What is outreach?" },
  { key: "9", href: "section9", text: "What is a child advocate?" },
  { key: "10", href: "section10", text: "What is a women’s advocate?" },
  {
    key: "11",
    href: "section11",
    text: "What is a domestic violence advocate?"
  },
  { key: "12", href: "section12", text: "What is HOWIC?" },
  { key: "13", href: "section13", text: "What is a housing cluster?" }
];

const sections: Section[] = [
  {
    sectionId: "section1",
    key: "1",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent:
      "What should I do if someone I know is experiencing domestic or family violence?",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">
          If someone you know is in immediate danger, call the police now on
          000.
        </p>
        <br />
        <p>
          If the situation is not urgent, the most important thing you can do is
          to listen without judging, respect the person&apos;s decisions and
          help them find ways to become stronger and safer.
        </p>
        <br />
        <p className="font-bold">Things you can say to the victim:</p>
        <div className="pl-12">
          <ul className="list-disc">
            <li>&apos;I believe you.&apos;</li>
            <li>&apos;You do not deserve to be abused.&apos;</li>
            <li>
              &apos;I am afraid for your safety and the safety of your
              children.&apos;
            </li>
            <li>
              &apos;Do you need help to find out what services are
              available?&apos;
            </li>
          </ul>
        </div>
      </div>
    ),
    iconPath: "/icons/did-you-know.svg"
  },

  {
    sectionId: "section2",
    key: "2",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "How do I report an incident of domestic or family violence?",
    contentBody: (
      <div className="text-3xl">
        <p>
          Phone the police on 131 444. People with hearing impairments can call
          TTY 106.
        </p>
        <br />
        <p className="font-bold">Information the police may ask you for:</p>
        <br />
        <div className="pl-12">
          <ul className="list-disc">
            <li>The address where the incident is taking place</li>
            <li>Your name and telephone number</li>
            <li>The offender&apos;s name, age and date of birth</li>
            <li>If there any weapons involved.</li>
            <li>A description of the abuser.</li>
            <li>The victim&apos;s name</li>
          </ul>
        </div>
        <br />
        <p>
          If the incident is occurring while you are talking to the operator,
          stay on the telephone. Your safety is paramount to the police.
        </p>
      </div>
    ),
    iconPath: "/icons/online-help.svg"
  },
  {
    sectionId: "section3",
    key: "3",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "How do I get into a Starick refuge?",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">How do I get into a Starick refuge?</p>
        <br />
        <div className="pl-12">
          <ul className="list-disc">
            <li>
              Essential clothing and personal items for yourself and your
              children.
            </li>
            <li>Any medications you or your children are taking.</li>
            <li>
              Identification, such as birth certificates, children&apos;s
              immunisation records, any Department of Housing documentation,
              legal documents, passports and visa information you may have.
            </li>
          </ul>
        </div>
        <br />
        <p>
          Sometimes when women are not able to bring the above items with them,
          our workers can assist them to retrieve important items from their
          property with police assistance.
        </p>
      </div>
    ),
    iconPath: "/icons/aid.svg"
  },
  {
    sectionId: "section4",
    key: "4",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "What can I take with me to the refuge?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">How do I get into a Starick refuge?</p>
        <p>If you have the time, you should take:</p>
        <br />
        <p>
          Starick&apos;s crisis accommodation can be accessed by phoning the
          24-hour phone number – 08 9458 1107. Women can phone our refuge direct
          or go through Crisis Care on 08 9223 1111 or 1800 199 008 (country
          free call).
        </p>
      </div>
    )
  },
  {
    sectionId: "section5",
    key: "5",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "Can I bring my pet to the refuge?",
    iconPath: "/icons/care.svg",
    contentBody: (
      <div className="text-3xl">
        <p>Unfortunately pets cannot be brought to the refuges.</p>
        <br />
        <span>
          Cats: The Cat Haven may be able to offer temporary accommodation for
          cats. This is decided case-by-case and depends on space. For more
          information, visit &nbsp;
        </span>
        <a
          className="underline underline-offset-auto"
          href="https://www.cathaven.com.au/"
        >
          The Cat Haven website
        </a>
        <span>or phone (08) 9442 3600.</span>
        <br />
        <br />
        <span>
          Dogs: Temporary care of dogs may be available through Pat Giles
          Centre&apos;s Safe Families Safe Pets (SFSP) Program. For more
          information, visit the{" "}
        </span>{" "}
        <span>
          {" "}
          <a
            className="underline underline-offset-auto"
            href="https://www.patgilescentre.org.au/what-we-do/safe-families-safe-pets/"
          >
            SFSP website
          </a>{" "}
          <span>or phone (08) 9300 0340.</span>
        </span>
      </div>
    )
  },
  {
    sectionId: "section6",
    key: "6",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "How long can I stay at the refuge?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p>
          Women and children are able to stay up to three months. This gives
          them time to sort out income and legal issues and to find alternative
          accommodation.
        </p>
      </div>
    )
  },
  {
    sectionId: "section7",
    key: "7",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "How does witnessing domestic violence affect children?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p>
          Domestic and family violence can affect children in many ways. It can
          affect their behaviour, development, physical health, relationships,
          emotions, learning and thinking abilities. How quickly and completely
          children recover depends on many things, including their individual
          personalities and strengths. If you&apos;d like to discuss this with
          our outreach worker, call (08) 9398 5039.
        </p>
      </div>
    )
  },
  {
    sectionId: "section8",
    key: "8",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "What is outreach?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">What is outreach?</p>
        <br />
        <p>
          Outreach is the name we give to any service we provide to women and
          children living in the community and not in a Starick refuge.
        </p>
        <br />
        <p>
          In addition to providing support to women while they are living in a
          Starick refuges, Starick also supports women and children:
        </p>
        <div className="pl-12">
          <ul className="list-disc">
            <li>
              when they are living in the community, are experiencing family and
              domestic violence and are unable or unwilling to access refuge
              accommodation;
            </li>
            <li>when they leave our refuges;</li>
            <li>when they move into a Starick transitional home.</li>
          </ul>
        </div>
        <br />
        <span>Information about these services can be found on the </span>
        <a href="" className="underline underline-offset-auto">
          {" "}
          core services
        </a>{" "}
        <span>page.</span>
        <br />
        <br />
        <p>Outreach worker support</p>
        <br />
        <p>
          Starick&apos;s outreach worker supports women and children in the
          community who have escaped family and domestic violence in the
          following ways:
        </p>
        <br />
        <div className="pl-12">
          <ul className="list-disc">
            <li>Assisting with safety planning</li>
            <li>
              Liaison with services such as income support, health and education
              services
            </li>
            <li>
              Help with accessing support groups and other community services
            </li>
            <li>
              Support if you need to attend court or access other legal services
            </li>
          </ul>
        </div>
        <br />
        <p>
          Read how our outreach workers have helped two women,{" "}
          <a
            className="underline underline-offset-auto"
            href="https://www.starick.org.au/about/stories/barbara/"
          >
            {" "}
            Barbara
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-auto"
            href="https://www.starick.org.au/about/stories/helena/"
          >
            {" "}
            Helena
          </a>
          .
        </p>
        <br />
        <p>
          Starick&apos;s outreach worker can be contacted on (08) 9398 5039.
        </p>
      </div>
    )
  },
  {
    sectionId: "section9",
    key: "9",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "What is a child advocate?",
    iconPath: "/icons/domestic violence.svg",
    contentBody: (
      <div className="text-3xl">
        <p>
          Starick&apos;s child advocates are trained professionals who assist
          and support the children using our service. Starick recognises that
          children need their own advocate to ensure they receive the best
          possible outcome.
        </p>
      </div>
    )
  },
  {
    sectionId: "section10",
    key: "10",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "What is a women’s advocate?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">What is a women’s advocate?</p>
        <p>
          Starick&apos;s women&apos;s advocates are trained professionals who
          assist and support the women using our service.
        </p>
      </div>
    )
  },
  {
    sectionId: "section11",
    key: "11",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "What is a domestic violence advocate?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">What is a women’s advocate?</p>
        <p>
          Starick&apos;s domestic violence advocates work in police stations,
          providing assistance and support to women who have come into contact
          with the police or court system because of a family and domestic
          violence incident.
        </p>
      </div>
    )
  },
  {
    sectionId: "section12",
    key: "12",
    titleBackgroundColor: "starick-olive",
    titleTextColor: "starick-black",
    titleContent: "What is HOWIC?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p>
          HOWIC stands for Housing of Women in the Community. This Starick
          program provides transitional medium to long term housing in the
          south-east metropolitan area for women and children who are escaping
          domestic and family violence and who would otherwise have difficulty
          securing safe, affordable housing.
        </p>
      </div>
    )
  },
  {
    sectionId: "section13",
    key: "13",
    titleBackgroundColor: "starick-green",
    titleTextColor: "starick-white",
    titleContent: "What is a housing cluster?",
    iconPath: "/icons/did-you-know.svg",
    contentBody: (
      <div className="text-3xl">
        <p>
          Some of our transitional housing is located within a small complex, or
          cluster.
        </p>
      </div>
    )
  }
];

export default function Questions() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <div className="bg-starick-white">
      <div className="relative  ">
        <div className="">
          <Image
            src="/images/starick-image1.jpg"
            alt=""
            width={1440}
            height={100}
            layout="responsive"
          />
        </div>
        <div className=" absolute inset-y-0 left-0 z-10 w-2/3 rounded-r-full bg-starick-green">
          <div className="flex h-full items-center justify-center text-4xl">
            <p className=" text-[40px] font-black text-white">
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>

      {/* nav drop--down menu */}
      <div className="px-4 pt-6 md:px-20 md:pt-20">
        <button
          className=" inline-flex w-full rounded-lg bg-starick-white px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
          onClick={() => {
            setIsDisplayed(!isDisplayed);
          }}
        >
          Page Navigation
          <svg
            className="ml-auto h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* menu content */}
        {isDisplayed &&
          NavbarItems.map((navbarItem) => (
            <NavbarItem
              key={navbarItem.key}
              href={navbarItem.href}
              text={navbarItem.text}
            />
          ))}
      </div>

      {/* sections */}
      <div className="flex flex-col p-4 md:px-40 md:py-20">
        {sections.map((section) => (
          <Section
            sectionId={section.sectionId}
            key={section.key}
            titleBackgroundColor={section.titleBackgroundColor}
            titleContent={section.titleContent}
            titleTextColor={section.titleTextColor}
            iconPath={section.iconPath}
            contentBody={section.contentBody}
          />
        ))}
      </div>
    </div>
  );
}
