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
    <div className="px-30 flex flex-col">
      <div className="p-16">
        <SectionTitle
          textColor={titleTextColor}
          backgroundColor={titleBackgroundColor}
          content={titleContent}
        />
      </div>
      {isIconLeftSide ? (
        <div className="flex flex-row  px-56 ">
          <div className="basis-1/5">
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className=" pt-6"
            />
          </div>
          <div className="basis-4/5 p-8">{contentBody}</div>
        </div>
      ) : (
        <div className=" flex flex-row px-56">
          <div className="basis-4/5 p-8">{contentBody}</div>
          <div className="basis-1/5">
            <Image
              src={iconPath}
              alt="a"
              height={100}
              width={100}
              className=" pt-6"
            />
          </div>
        </div>
      )}
    </div>
  );
}
