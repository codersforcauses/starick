import { ReactNode } from "react";
import Image from "next/image";

interface PageSummaryProps {
  content: ReactNode;
  backgroundColour: string;
  contentOnLeft: boolean;
  imagePath: string;
  imageAlt: string;
}

export default function PageSummary({
  content,
  backgroundColour,
  contentOnLeft,
  imagePath,
  imageAlt
}: PageSummaryProps) {
  const leftPadding = contentOnLeft ? "md:pl-40" : "md:pl-10";
  const rightPadding = contentOnLeft ? "md:pr-10" : "md:pr-40";
  const contentSection = (
    <div
      className={`flex bg-${backgroundColour} ${leftPadding} ${rightPadding} min-h-[300px] items-center px-4 py-10 ${
        contentOnLeft ? "md:order-first" : "md:order-last"
      }`}
    >
      {content}
    </div>
  );
  const imageSection = (
    <div className="h-full">
      <Image
        src={imagePath}
        width={0}
        height={0}
        sizes="100vw"
        alt={imageAlt}
        className="h-full w-full"
      />
    </div>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {imageSection}
      {contentSection}
    </div>
  );
}
