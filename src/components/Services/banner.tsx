interface BannerProps {
  titleText: string;
  subtitleText?: string;
}

export default function Banner({ titleText, subtitleText }: BannerProps) {
  return (
    <div>
      <img
        src="/images/starick-image1.jpg"
        className="w-full"
        alt="banner"
      ></img>
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
