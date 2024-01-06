import Image from "next/image";

export default function ResourceToolkitItem({
  text,
  backgroundColor,
  imageUrl,
  linkUrl
}: {
  text: string;
  backgroundColor: string;
  imageUrl: string;
  linkUrl: string;
}) {
  return (
    <div
      className={`flex flex-row bg-${backgroundColor} h-200 h-fit items-center pl-8 pr-2`}
    >
      <a href={linkUrl} target="_blank" rel="noopener" className="shrink-0">
        <Image
          src={imageUrl}
          alt={text}
          className="my-2 cursor-pointer"
          width={72}
          height={100}
        />
      </a>
      <p className="ml-4"> {text}</p>
    </div>
  );
}
