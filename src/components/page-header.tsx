import Image from "next/image";
import { ReactNode } from "react";

interface PageHeaderProps {
  titleText: string;
  subtitleText?: string;
  subtitleElement?: ReactNode;
}

export default function PageHeader({
  titleText,
  subtitleText,
  subtitleElement
}: PageHeaderProps) {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "160px" }}
      >
        <Image
          src="/images/circles/crop-1.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="absolute inset-y-0 left-0 h-full w-auto"
        />
        <Image
          src="/images/circles/crop-1.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="absolute inset-y-0 right-0 hidden h-full w-auto rotate-180 md:block"
        />
        <div className="z-10 px-2 py-6 md:px-10">
          <p className="text-3xl font-bold">{titleText}</p>
          {subtitleText ? (
            <p className="text-center text-lg font-bold">{subtitleText}</p>
          ) : null}
          {subtitleElement}
        </div>
      </div>
    </>
  );
}
