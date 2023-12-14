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
    <div
      className={`flex items-center justify-center gap-2.5 p-6 bg-[${backgroundColor}]`}
    >
      <div className="flex h-[92px] shrink grow basis-0 items-center justify-center gap-2.5 border-8 border-white bg-white bg-opacity-0 px-[150px] py-6">
        <div className="flex items-center justify-center gap-10 bg-white bg-opacity-0 px-4">
          <div
            className={`text-center font-['Inter'] text-4xl font-semibold text-[${textColor}]`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
