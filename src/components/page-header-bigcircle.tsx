import Image from "next/image";
import { ReactNode } from "react";

interface PageHeaderBigCircleProps {
    titleText: string;
    subtitleText?: string[];
    subtitleElement: ReactNode
    subtitleElement2 ?: ReactNode 
    socialMedia : boolean;
  }  

export default function PageHeaderBigCircle({
  titleText,
  subtitleText,
  subtitleElement,
  subtitleElement2,
  socialMedia
}: PageHeaderBigCircleProps) {
  return (
    <>
        {socialMedia ?
         <div className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-starick-olive" style={{ width: "100%", position: "relative" }}>
         <Image
           src="/images/circles/crop-2.png"
           width={0}
           height={0}
           alt="decorative circles"
           sizes="100vw"
           className="absolute bottom-0 left-0 w-auto h-3/4 transform scale-110"
           style={{opacity : "80%"}}
         />
         <div className="z-10">
           <div className="flex flex-col items-center justify-center">
             <div>
               <div className="mx-12 mt-10 text-center text-3xl font-bold text-starick-black">
                 {titleText}
               </div>
               <div className="mt-10 flex justify-center">
                 <div className="grid grid-cols-2 gap-0">
                   {subtitleElement}
                   {subtitleElement2}
                 </div>
               </div>
             </div>
           </div>
           <div className="flex justify-center my-10">
           <div className="flex justify-between w-1/6">
            <a href="https://youtube.com" target="_blank"><img src="./icons/instagram.svg" className ="w-8 h-8"/></a>
            <a href="https://youtube.com" target="_blank"><img src="./icons/instagram.svg" className ="w-8 h-8"/></a>
            <a href="https://youtube.com" target="_blank"><img src="./icons/instagram.svg" className ="w-8 h-8"/></a>
           </div>
           </div>
         </div>
       </div>
       
        :
        <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden "
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
        }
    </>
  );
}
