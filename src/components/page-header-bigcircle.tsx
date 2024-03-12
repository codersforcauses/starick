import { ReactNode } from "react";
import Image from "next/image";

interface PageHeaderBigCircleProps {
  titleText?: string;
  subtitleText?: string[];
  subtitleElement: ReactNode;
  subtitleElement2?: ReactNode;
  socialMedia: boolean;
  textOnLeft?: boolean;
  titleBackgroundColour?: string;
  titleTextColour?: string;
}

export default function PageHeaderBigCircle({
  titleText,
  subtitleText,
  subtitleElement,
  socialMedia,
  textOnLeft,
  titleBackgroundColour,
  titleTextColour
}: PageHeaderBigCircleProps) {
  return (
    <>
      {socialMedia ? (
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden bg-starick-olive text-center"
          style={{ width: "100%", position: "relative" }}
        >
          <Image
            src="/images/circles/crop-2.png"
            width={0}
            height={0}
            alt="decorative circles"
            sizes="100vw"
            className="absolute bottom-0 left-0 h-3/4 w-auto scale-110 transform"
            style={{ opacity: "80%" }}
          />
          <div className="z-10">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="mx-12 mt-10 text-center text-3xl font-bold text-starick-black">
                  {titleText}
                </div>
                <div className="mt-10 flex justify-center">
                  <div>{subtitleElement}</div>
                </div>
              </div>
            </div>
            <div className="my-10 flex justify-center">
              <div className="flex w-1/2 justify-between">
                <a href="https://youtube.com" target="_blank">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="https://youtube.com" target="_blank">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="https://youtube.com" target="_blank">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram Icon"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative flex flex-col items-center justify-center overflow-hidden text-center ${
            titleTextColour && titleBackgroundColour
              ? `text-${titleTextColour} bg-${titleBackgroundColour}`
              : ""
          }`}
          style={{ width: "100%" }}
        >
          <Image
            src="/images/circles/crop-1.png"
            width={0}
            height={0}
            alt="decorative circles"
            sizes="100vw"
            className={`z-1 absolute inset-y-0 h-full w-auto ${
              textOnLeft ? "left-0" : "right-0"
            }`}
            style={{ transform: "scale(1.55)" }}
          />
          <div className="z-10 px-2 py-6 md:px-10">
            <p className="mb-10 mt-10 text-xl font-bold">{titleText}</p>
            {subtitleText ? (
              <ul
                className="text-m mb-10 ml-10"
                style={{
                  listStyle: "disc",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                {subtitleText.map((subtitleText, index) => {
                  return <li key={index}>{subtitleText}</li>;
                })}
              </ul>
            ) : null}
            {subtitleElement}
          </div>
        </div>
      )}
    </>
  );
}
