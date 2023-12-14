import Image from "next/image";

import { ReactNode } from "react";
import Section from "@/components/basicInformation/Section";
import internal from "stream";

type Section = {
  titleBackgroundColor: string;
  titleTextColor: string;
  titleContent: string;
  contentBody: ReactNode;
  iconPath: string;
  isIconLeftSide: boolean;
  key: string;
};

const sections: Section[] = [
  {
    key: "1",
    titleBackgroundColor: "--starick-green",
    titleTextColor: "--starick-white",
    titleContent: "What is Domestic Violence?",
    contentBody: (
      <div>
        <p>Domestic violence means abuse</p>
        <p>
          <span>
            Domestic violence is often called “domestic and family violence”{" "}
          </span>
          <span>because it’s not just partners that abuse.</span>
        </p>
        <br></br>
        <p>
          Domestic and family violence means any type of abuse that creates fear
          and controls another person, often causing physical, sexual and/or
          psychological damage, forced social isolation and economic
          deprivation.
        </p>
        <p>
          <span>
            Domestic and family violence usually means abuse against an intimate
            partner (including same sex relationships and ex-partners).
          </span>
          <span>
            But it can also occur between siblings, from adolescents to parents,
            or from family carers to a relative.{" "}
          </span>
          <span>
            Domestic and family violence can also include the abuse of children
            and young
          </span>
        </p>
      </div>
    ),
    iconPath: "/images/did-you-know.png",
    isIconLeftSide: true
  }
];

export default function BasicInormation() {
  return (
    <div className="bg-{--starick-white}">
      <Image
        src="/images/starick-image1.jpg"
        alt=""
        width={1440}
        height={100}
        layout="responsive"
      />
      <div className="flex-row px-64 py-24">
        {sections.map((section) => (
          <Section
            key={section.key}
            titleBackgroundColor={section.titleBackgroundColor}
            titleContent={section.titleContent}
            titleTextColor={section.titleTextColor}
            iconPath={section.iconPath}
            isIconLeftSide={section.isIconLeftSide}
            contentBody={section.contentBody}
          />
        ))}
      </div>
    </div>
  );
}
