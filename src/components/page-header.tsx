import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
interface PageHeaderProps {
  titleText: string;
  subtitleText?: string;
  backgroundColor?: string;
  subtitleElement?: ReactNode;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageHeader({
  titleText,
  subtitleText,
  backgroundColor,
  subtitleElement,
  buttonText,
  buttonHref
}: PageHeaderProps) {
  return (
    <>
      <div
        className={`relative flex flex-col items-center justify-center text-center ${
          backgroundColor ? `bg-${backgroundColor} p-10` : "bg-white"
        }`}
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
          <p className="mb-7 text-2xl font-bold">{titleText}</p>
          {subtitleText ? (
            <p className="text-m mb-10 text-center">{subtitleText}</p>
          ) : null}
          {subtitleElement}
          {buttonHref && buttonText ? (
            <Link href={buttonHref}>
              <span>
                <span className="mr-2 bg-starick-white px-1.5 text-black">
                  &gt;
                </span>
                {buttonText}
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
