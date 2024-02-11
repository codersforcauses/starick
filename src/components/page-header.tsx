import Image from "next/image";
import { ReactNode } from "react";

interface PageHeaderProps {
  titleText: string;
  subtitleText?: string;
  subtitleElement?: ReactNode
}

export default function PageHeader({
  titleText,
  subtitleText,
  subtitleElement
}: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center relative" style={{minHeight: "160px"}}>
        <Image
          src="/images/starick-circles.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="h-full w-auto absolute inset-y-0 left-0"
        />
        <Image
          src="/images/starick-circles.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="h-full w-auto absolute inset-y-0 right-0 rotate-180 hidden md:block"
        />
        <div className="z-10 md:px-10 px-2 py-6">
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
