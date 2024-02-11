import Image from "next/image";
import { ReactNode } from "react";

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
  const leftPadding = contentOnLeft ? "pl-20" : "pl-10";
  const rightPadding = contentOnLeft ? "pr-10" : "pr-20";
  const contentSection = (
    <div
      className={`flex bg-${backgroundColour} ${leftPadding} ${rightPadding} py-10 min-h-[300px] items-center ${
        contentOnLeft ? "md:order-first" : "md:order-last"
      }`}
    >
      {content}
    </div>
  );
  const imageSection = (
    <div className="h-full">
      <Image src={imagePath} width={0} height={0} sizes="100vw" alt={imageAlt} className="h-full w-full" />
    </div>
  );
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2`}>
      {imageSection}
      {contentSection}
    </div>
  );
}
