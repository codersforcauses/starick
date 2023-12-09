import React from "react";

import Paypal from "@/components/paypal/paypal";
import Image from "next/image";

import OneOffDonation from '~/images/OneOffDonation.png'

import ScheduleMonthlyContribution from '~/images/ScheduleMonthlyContribution.png'

const bequests: React.FC = () => {
    return (


        <div className="h-screen bg-light-green text-center grid grid-flow-row auto-rows-max gap-10 px-32 py-10">
            <div>
                <h1 className=" uppercase text-background-white font-bold text-4xl">you could help us make a change
                    today</h1>
                <p className=" text-brown">Donating goods to Starick helps support women and children escaping
                    domestic
                    violence.</p>
            </div>
            <div className="grid grid-cols-3 place-items-center">
                <Image src={OneOffDonation} alt='description' width={354} height={354}/>


                <h1 className="uppercase text-background-white font-bold text-4xl">or</h1>


                <Image src={ScheduleMonthlyContribution} alt='description' width={354} height={354}/>


            </div>

            <div className="grid grid-cols-2 items-center">
                <h1 className="uppercase text-background-white font-bold text-4xl">Multiple payment options
                    available</h1>

                <div className="grid content-center px-20">
                    <Paypal></Paypal>
                </div>
            </div>

        </div>


    )
}


export default bequests;