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
        className={`relative mb-6 w-fit rounded-r-full bg-white px-14 ${
          subtitleText ? "-mt-32" : "-mt-20"
        }`}
      >
        <p className="p-2 font-bold text-[--starick-brown] md:text-4xl">
          {titleText}
        </p>
        {subtitleText ? (
          <p className="p-2 text-center text-3xl font-bold text-[--starick-brown]">
            {subtitleText}
          </p>
        ) : null}
      </div>
    </div>
  );
}
