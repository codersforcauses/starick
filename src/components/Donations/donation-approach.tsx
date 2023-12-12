import React from "react";

const DonationApproach: React.FC<{order:number, text:string}> = ({order, text}) => {

    return (
        <div className="flex justify-items-start items-center">
            <div className="font-bold text-4xl text-[--starick-orange] mx-5 my-1">{order}</div>
            <div className="prose text-[--starick-brown] text-xl" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );

};
export default DonationApproach;
