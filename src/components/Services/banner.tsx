import Image from "next/image";

interface BannerProps {
  titleText: string;
  subtitleText?: string;
  backgroundImagePath?: string;
}

export default function Banner({
  titleText,
  subtitleText,
  backgroundImagePath
}: BannerProps) {
  return (
    <div>
      <Image
        src={
          backgroundImagePath
            ? backgroundImagePath
            : "/images/starick-image1.jpg"
        }
        width={0}
        height={0}
        style={{ width: "100%" }}
        sizes="100vw"
        alt="banner"
      ></Image>
      <div
        className={`relative w-fit rounded-r-full bg-white px-6 py-2 md:px-20 md:py-4 ${
          subtitleText
            ? "-mt-20 mb-2 md:-mt-44 md:mb-6"
            : "-mt-14 mb-2 md:-mt-28 md:mb-4"
        }`}
      >
        <p className="text-2xl font-bold text-starick-brown md:p-2 md:text-5xl">
          {titleText}
        </p>
        {subtitleText ? (
          <p className="text-md text-center font-bold text-starick-brown md:p-2 md:text-4xl">
            {subtitleText}
          </p>
        ) : null}
      </div>
    </div>
  );
}
