import React from "react";
import Image, {StaticImageData} from 'next/image';

interface ItemProps {
    img: StaticImageData;
    text: string;
}


const CoreServiceItem: React.FC<ItemProps> = ({
                                                  img,
                                                  text,
                                              }) => {

    return (
        <div className="flex justify-items-start items-center">
            <Image src={img} alt='description' width={150} height={150}/>
            <p className='ml-20 text-background-white font-bold'>{text}</p>
        </div>
    );
};
export default CoreServiceItem;


