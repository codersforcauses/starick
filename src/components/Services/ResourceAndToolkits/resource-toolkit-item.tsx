export default function ResourceToolkitItem({ text, backgroundColor, imageUrl, linkUrl }: { text: string; backgroundColor: string; imageUrl: string; linkUrl: string }) {
  return (
    <div className={`flex flex-row bg-${backgroundColor} h-full items-center`}>
      <a href={linkUrl} target="_blank" rel="noopener">
        <img src={imageUrl} alt={text} className="my-2 ml-8 h-28 w-20 cursor-pointer" />
      </a>
      <p className="ml-4">{text}</p>
    </div>
  );
}