import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  imagePath: string;
  info: string;
  reverse: boolean;
}

export default function Board({
  name,
  position,
  info,
  imagePath,
  reverse
}: PortraitInfo) {
  return (
    <>
      <div
        className={`mx-auto flex h-auto flex-row pb-4 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="items-center p-4">
          <img src={imagePath} alt={name} className="h-40 overflow-hidden" />
        </div>
        {/*Set max width of content*/}
        <div className="h-auto px-2" style={{ maxWidth: "700px" }}>
          <p className="w-auto pb-2 text-2xl font-semibold">
            {name} , {position}
          </p>
          <p className="text-l flex w-auto">{info}</p>
        </div>
      </div>
    </>
  );
}
