import React from "react";

import PaypalComponent from "@/components/paypalComponent";

const bequests: React.FC = () => {
    return (

        <div className="h-screen bg-light-green text-center">
            <div className="grid grid-flow-row auto-rows-max gap-10 px-32 py-10">
                <div>
                    <h1 className=" uppercase text-background-white font-bold text-4xl">you could help us make a change
                        today</h1>
                    <p className=" text-brown">Donating goods to Starick helps support women and children escaping domestic
                        violence.</p>
                </div>
                <div className="flex justify-around items-center">
                    <div className="w-56 h-56 rounded-full bg-orange"></div>
                    <h1 className="uppercase text-background-white font-bold text-4xl">or</h1>

                    <div className="w-56 h-56 rounded-full bg-orange"></div>
                </div>

                <div className="flex justify-around items-center">
                    <h1 className="uppercase text-background-white font-bold text-4xl max-w-[50%]">Multiple payment options
                        available</h1>

                    <div className="max-w-[50%]">
                        <PaypalComponent></PaypalComponent>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default bequests;