import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  info: string;
  imagePath: string;
}

export default function Portrait({ name, position, info, imagePath}: PortraitInfo) {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src={imagePath} alt={name} className="h-40 w-auto overflow-hidden mb-5 rounded-full"/>
        </div>
        {/*Set the minimum height to fit the content space required*/}
        <div className="min-h-min-content h-40 w-auto px-2">
          <p className="font-semibold text-2xl flex justify-center w-auto">{name}</p>
          <p className="pt-1 flex justify-center w-auto">{position}</p>
        </div>
      </div>
    </>
  );
}
