import React from "react";

const DonationApproach: React.FC<{order:number, text:string}> = ({order, text}) => {

    return (
        <div className="flex justify-items-start items-center">
            <div className="font-bold text-4xl text-[--starick-orange] mx-5 my-1">{order}</div>
            <p className="text-[--starick-brown] text-xl">{text}</p>
        </div>
    );

};
export default DonationApproach;
