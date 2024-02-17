import { ReactNode } from "react";
import Image from "next/image";

import SectionHeader from "../section-header";

interface SectionProps {
  title: string;
  titleBackgroundColour: string;
  titleTextColour: string;
  textOnLeft: boolean;
  sectionBody: ReactNode;
  circlesPlacement?: "tl" | "tr" | "bl" | "br" | "r" | "l";
}

export default function Section({
  title,
  titleBackgroundColour,
  titleTextColour,
  sectionBody,
  textOnLeft,
  circlesPlacement,
}: SectionProps) {
  var positionStyle;
  var rotationStyle;
  var originAndTranslate;
  const dimensions = circlesPlacement === "l" || circlesPlacement === "r" ? "h-full w-auto" : "w-1/3 h-auto";
  switch (circlesPlacement) {
    case "tl":
      positionStyle = "top-0 left-0";
      rotationStyle = "-rotate-90";
      originAndTranslate = "";
      break;
    case "tr":
      positionStyle = "top-0 right-0";
      rotationStyle = "rotate-180";
      originAndTranslate = "";
      break;
    case "bl":
      positionStyle = "bottom-0 left-0";
      rotationStyle = "rotate-0";
      originAndTranslate = "";
      break;
    case "br":
      positionStyle = "bottom-0 right-0";
      rotationStyle = "-rotate-90";
      originAndTranslate = "origin-bottom-left translate-x-full";
      break;
    case "l":
      positionStyle = "inset-y-0 left-0";
      rotationStyle = "rotate-0"
      break;
    case "r":
      positionStyle = "inset-y-0 right-0";
      rotationStyle = "rotate-0"
      break;
    default:
      positionStyle = "";
      break;
  }
  return (
    
    <>
      <SectionHeader
        backgroundColour={titleBackgroundColour}
        titleText={title}
        imagePath="/images/starick-image1.jpg"
        textOnLeft={textOnLeft}
        textColour={titleTextColour}
      />
      <div className="py-16 md:px-32 lg:px-72 bg-starick-white px-6 relative" id={title.replace("\n", "")}>
        {circlesPlacement ?
        <Image
          src={circlesPlacement === "l" || circlesPlacement === "r" ? "/images/circles/crop-4.png" : "/images/circles/crop-7.png"}
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className={`absolute ${positionStyle} ${rotationStyle} ${dimensions} md:block hidden ${originAndTranslate}`}
        />
        : null}
        <div className="z-10 relative">{sectionBody}</div>
      </div>

    </>
  );
}
