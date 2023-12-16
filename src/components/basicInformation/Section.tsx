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
    <div className="flex flex-col">
      <div className="p-20">
        <SectionTitle
          textColor={titleTextColor}
          backgroundColor={titleBackgroundColor}
          content={titleContent}
        />
      </div>
      {isIconLeftSide ? (
        <div className="flex justify-center ">
          <div>
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className="pt-6"
            />
          </div>
          <div className="p-8">{contentBody}</div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="p-8">{contentBody}</div>
          <div>
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className="pt-6"
            />
          </div>
        </div>
      )}
    </div>
  );
}
