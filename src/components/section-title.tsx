interface SectionTitleProps {
  text: string;
  backgroundColour: string;
  textColour: string;
  iconPath?: string;
}

export default function SectionTitle({
  text,
  backgroundColour,
  textColour,
  iconPath
}: SectionTitleProps) {
  return (
    <div className={`bg-${backgroundColour} h-24 p-3`}>
      <div
        className={`bg-${backgroundColour} flex h-full flex-row items-center justify-center border-4 border-solid border-starick-white`}
      >
        {iconPath ? (
          <img src={iconPath} className="mx-2 w-12" alt={text}></img>
        ) : null}
        <p
          className={`align-middle text-2xl font-semibold text-${textColour} mx-2`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
