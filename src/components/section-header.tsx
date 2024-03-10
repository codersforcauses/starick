import Image from "next/image";
import { ReactNode } from "react";

interface SectionHeaderProps {
  backgroundColour: string;
  textColour: string;
  textOnLeft: boolean;
  imagePath: string;
  titleText: string;
  titleNode?: ReactNode;
  subtitleText?: string;
  centerText?: boolean;
}

export default function SectionHeader({
  backgroundColour,
  textColour,
  textOnLeft,
  imagePath,
  titleText,
  subtitleText,
  titleNode,
  centerText
}: SectionHeaderProps) {
  const textSection = (
    <div
      className={`bg-${backgroundColour} flex w-full items-center ${
        textOnLeft ? "order-first" : "order-last"
      } w-full px-12`}
    >
      {centerText ? (
        <p
          className={`text-${textColour} w-full text-center text-2xl font-semibold`}
        >
          {titleText}
          {titleNode}
        </p>
      ) : (
        <p
          className={`text-${textColour} w-full text-2xl font-semibold ${
            textOnLeft ? "mr-10 text-right " : "text-left"
          }`}
        >
          {titleText}
          {titleNode}
        </p>
      )}
      {subtitleText ? <p className="ml-10 w-4/6">{subtitleText}</p> : null}
    </div>
  );

  const imageSection = (
    <div className="relative" style={{ backgroundColor: "#eedbe0" }}>
      <Image src={imagePath} alt={titleText} fill className="object-cover" />
    </div>
  );
  return (
    <div className={`grid ${centerText ? "h-72" : "h-44"} grid-cols-2`}>
      {textSection}
      {imageSection}
    </div>
  );
}
