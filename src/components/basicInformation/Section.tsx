import SectionTitle from "@/components/basicInformation/utility/SectionTitle";
import Image from "next/image";
import { ReactNode } from "react";
interface SectionProp {
  titleBackgroundColor: string;
  titleTextColor: string;
  titleContent: string;
  contentBody: ReactNode;
  iconPath: string;
  isIconLeftSide: boolean;
}
export default function Section({
  titleBackgroundColor,
  titleTextColor,
  titleContent,
  contentBody,
  iconPath,
  isIconLeftSide
}: SectionProp) {
  return (
    <div className="px-30 flex flex-col md:p-8 ">
      {/* section title */}
      <div className="p-8">
        <SectionTitle
          textColor={titleTextColor}
          backgroundColor={titleBackgroundColor}
          content={titleContent}
        />
      </div>
      {/* section content */}
      <div className="px-6">
        <div className=" flex flex-row justify-center md:px-24">
          {/* img */}
          <div className="basis-1/5">
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className=" pt-6"
            />
          </div>
          {/* text */}
          <div className="basis-4/5 p-8">{contentBody}</div>
        </div>
      </div>
    </div>
  );
}
