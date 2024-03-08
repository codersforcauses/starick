import Image from "next/image";
import { ReactNode } from "react";

interface PageHeaderBigCircleProps {
    titleText: string;
    subtitleText?: string[];
    subtitleElement?: ReactNode;
  }  

export default function PageHeaderBigCircle({
  titleText,
  subtitleText,
  subtitleElement
}: PageHeaderBigCircleProps) {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{width : "100%"}}
      >
        <Image
          src="/images/circles/crop-1.png"
          width={0}
          height={0}
          alt="decorative circles"
          sizes="100vw"
          className="absolute inset-y-0 left-0 h-full w-auto z-1"
          style = {{transform : "scale(1.55)"}}
        />
        <div className="z-10 px-2 py-6 md:px-10 text-black">
          <p className="text-xl font-bold mt-5 mb-10">{titleText}</p>
          {subtitleText ? 
          (
            <ul className = "ml-10 mb-10 text-m" style ={{listStyle:'disc', display : 'flex', flexDirection : 'column', alignItems : 'flex-start'}}>
                {subtitleText.map((subtitleText,index) => {
                    return <li key={index} >{subtitleText}</li>;
                }) }
            </ul>
          ) : null}
          {subtitleElement}
        </div>
      </div>
    </>
  );
}
