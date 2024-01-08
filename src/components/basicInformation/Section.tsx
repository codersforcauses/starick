import SectionTitle from "@/components/basicInformation/utility/SectionTitle";
import Image from "next/image";
import { ReactNode } from "react";
interface SectionProp {
  sectionId: string;
  key: string;
  titleBackgroundColor: string;
  titleTextColor: string;
  titleContent: string;
  contentBody: ReactNode;
  iconPath: string;
}
export default function Section({
  sectionId,
  key,
  titleBackgroundColor,
  titleTextColor,
  titleContent,
  contentBody,
  iconPath
}: SectionProp) {
  return (
    <div className=" flex flex-col pb-20" id={sectionId}>
      {/* section title */}
      <div>
        <SectionTitle
          textColor={titleTextColor}
          backgroundColor={titleBackgroundColor}
          content={titleContent}
        />
      </div>
      {/* section content */}
      <div className="px-4 md:px-6">
        <div className=" flex justify-center md:px-12">
          {/* img */}
          <div className="w-1/5">
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className="mt-6"
              layout="fixed"
            />
          </div>
          {/* text */}
          <div className="ml-2 w-4/5  pt-4 md:pt-8">{contentBody}</div>
        </div>
      </div>
    </div>
  );
}
