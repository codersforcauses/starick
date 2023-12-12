import React from "react";
import Image, {StaticImageData} from 'next/image';
import BequestIcon7 from '~/images/donations/bequests/BequestIcon7.png'
import BequestIcon8 from '~/images/donations/bequests/BequestIcon8.png'
import BequestIcon2 from "~/images/donations/bequests/BequestIcon2.png";


interface ItemProps {
    image: StaticImageData
    text: string,
}


const DonationTitle: React.FC<ItemProps> = ({image, text}) => {

    return (
        <div className="flex flex-col">
            <Image src={image} alt='description'
                   width="0"
                   height="0"
                   sizes="100vw"
                   className="w-full h-auto self-center"/>
            <p className="text-[--starick-brown] italic font-bold">{text}</p>
        </div>
    );

};
export default DonationTitle;
