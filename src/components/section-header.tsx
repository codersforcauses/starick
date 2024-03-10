import Image from "next/image";

interface SectionHeaderProps {
  backgroundColour: string;
  textColour: string;
  textOnLeft: boolean;
  imagePath: string;
  titleText: string;
  subtitleText ?: string;
}

export default function SectionHeader({
  backgroundColour,
  textColour,
  textOnLeft,
  imagePath,
  titleText,
  subtitleText
}: SectionHeaderProps) {
  const textSection = (
    <div
      className={`bg-${backgroundColour} flex ${subtitleText ? "flex-col" : ""} w-full items-center ${
        textOnLeft ? "order-first" : "order-last"
      } w-full px-12`}
    >
      <p
        className={`text-${textColour} w-full text-2xl font-semibold ${
          textOnLeft ? "mr-10 text-right " : "text-left"
        }`}
      >
        {titleText}
      </p>
      {subtitleText
      ?
      <p className = "w-4/6 ml-10">
        {subtitleText}
      </p>
      :
      null}     
    </div>
  );
  const imageSection = (
    <div className="relative" style={{ backgroundColor: "#eedbe0" }}>
      <Image src={imagePath} alt={titleText} fill />
    </div>
  );
  return (
    <div className="grid h-44 grid-cols-2">
      {textSection}
      {imageSection}
    </div>
  );
}
