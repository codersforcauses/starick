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
      <div>
        <SectionTitle
          textColor={titleTextColor}
          backgroundColor={titleBackgroundColor}
          content={titleContent}
        />
      </div>
      {isIconLeftSide ? (
        <div className="inline-flex flex-row justify-items-center p-20">
          <div>
            <Image src={iconPath} alt="a" height={100} width={100} />
          </div>
          <div className="p-4">{contentBody}</div>
        </div>
      ) : (
        <div className="inline-flex flex-row justify-items-center p-20">
          <div className="p-4">{contentBody}</div>
          <div>
            <Image src={iconPath} alt="a" height={100} width={100} />
          </div>
        </div>
      )}
    </div>
  );
}
