import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  imagePath: string;
  info : string;
  reverse : boolean;
}

export default function Board({ name, position, info, imagePath, reverse}: PortraitInfo) {
  return (
    <>
      <div className = {`flex flex-row mx-auto h-auto pb-4 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className = "p-4 items-center">
          <img src={imagePath} alt={name} className="h-40 overflow-hidden"/>
        </div>
        {/*Set max width of content*/}
        <div className="h-auto px-2" style={{ maxWidth: '700px' }}>
          <p className="font-semibold text-2xl w-auto pb-2">{name} , {position}</p>
          <p className="text-l flex w-auto">{info}</p>
        </div>
      </div>
    </>
  );
}
