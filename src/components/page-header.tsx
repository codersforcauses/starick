import Image from "next/image";

interface PageHeaderProps {
  titleText: string;
  subtitleText?: string;
}

export default function PageHeader({
  titleText,
  subtitleText
}: PageHeaderProps) {
  return (
    <>
      <div className="bg-starick-grey flex h-40 justify-between">
        <Image
          src="/images/starick-circles.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="h-full w-auto"
        />
        <Image
          src="/images/starick-circles.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="hidden h-full w-auto rotate-180 md:block"
        />
      </div>
      <div className="-mt-40 flex h-40 flex-col items-center justify-center text-center">
        <p className="z-10 text-3xl font-bold">{titleText}</p>
        {subtitleText ? (
          <p className="z-10 text-center text-lg font-bold">{subtitleText}</p>
        ) : null}
      </div>
    </>
  );
}
