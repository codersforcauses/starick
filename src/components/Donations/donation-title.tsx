import React from "react";


const DonationTitle: React.FC<{text:string}> = ({text}) => {

    return (
        <div
            className="flex bg-[--starick-green]  w-full h-[150px] p-4 items-center justify-center">
            <p className="flex justify-center items-center  w-full h-full text-2xl md:text-4xl text-[--starick-white] font-semibold border-4 md:border-8 border-[--starick-white]">
                {text}
            </p>
        </div>
    );

};
export default DonationTitle;
