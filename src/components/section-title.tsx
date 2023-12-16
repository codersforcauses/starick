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
    <div className={`bg-${backgroundColour} p-3`}>
      <div
        className={`bg-${backgroundColour} flex flex-row items-center justify-center border-4 border-solid border-[--starick-white] py-1`}
      >
        {iconPath ? (
          <img src={iconPath} className="mx-2 w-12" alt={text}></img>
        ) : null}
        <p
          className={`text-center align-middle text-2xl font-semibold text-${textColour} mx-2 whitespace-pre-wrap`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
