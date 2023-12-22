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
  iconPath
}: SectionProp) {
  return (
    <div className=" flex flex-col pb-20">
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
        <div className=" flex justify-center md:px-24">
          {/* img */}
          <div className="w-1/4">
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
          <div className="w-3/4 p-4 md:p-8">{contentBody}</div>
        </div>
      </div>
    </div>
  );
}
