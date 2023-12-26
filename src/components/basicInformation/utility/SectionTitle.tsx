interface SectionTitleProps {
  backgroundColor: string;
  textColor: string;
  content: string;
}
export default function SectionTitle({
  backgroundColor,
  textColor,
  content
}: SectionTitleProps) {
  return (
    <div className={`bg-[${backgroundColor}] h-24 p-3`}>
      <div
        className={`bg-[${backgroundColor}] flex h-full flex-row items-center justify-center border-4 border-solid border-[--starick-white]`}
      >
        <p
          className={`align-middle text-base font-semibold md:text-2xl text-[${textColor}] mx-2 `}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
