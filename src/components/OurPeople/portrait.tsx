import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  info: string;
  imagePath: string;
  board : boolean;
}

export default function Portrait({ name, position, info, imagePath, board}: PortraitInfo) {
  return (
    <>
      <div className={`${board ?'flex flex-row' : ''}`}>
        <div className="flex justify-center">
          <img src={imagePath} alt={name} className={`h-40 w-auto overflow-hidden mb-5 ${board ? '' : 'rounded-full'}`}/>
        </div>
        <div className="min-h-min-content h-40 w-auto px-2">
          <p className="font-semibold text-2xl flex justify-center w-auto">{name}</p>
          {board ? 
          <div className = "h-auto">
            <p className="pt-1 h-auto">{info}</p>
          </div>
          :
          <p className="pt-1 flex justify-center w-auto">{position}</p>
        }
        </div>
      </div>
    </>
  );
}
