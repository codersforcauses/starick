import React from "react";
import Image from "next/image";

import Paypal from "@/components/paypal/paypal"

import DonationAmount from "@/components/donations/donationAmount";

import Bequest1 from '~/images/donations/bequests/Bequest1.png'
import Bequest2 from '~/images/donations/bequests/Bequest2.png'
import Bequest3 from '~/images/donations/bequests/Bequest3.png'
import BequestIcon1 from '~/images/donations/bequests/BequestIcon1.png'
import BequestIcon2 from '~/images/donations/bequests/BequestIcon2.png'
import BequestIcon3 from '~/images/donations/bequests/BequestIcon3.png'
import BequestIcon4 from '~/images/donations/bequests/BequestIcon4.png'
import BequestIcon5 from '~/images/donations/bequests/BequestIcon5.png'
import BequestIcon6 from '~/images/donations/bequests/BequestIcon6.png'


const bequests: React.FC = () => {
    return (
        <>
            <div className="relative">
                <div
                    className="absolute min-w-[100px] min-h-[100px] sm:min-w-[150px] sm:min-h-[150px] md:min-w-[218px] md:min-h-[218px]">
                    <Image className="m-10" src={BequestIcon1} alt='description' fill/>
                </div>

                <Image src={Bequest1} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>
            </div>


            {/* <Image className="absolute m-10" src={BequestIcon1} alt='description' width={218} height={218}/> */}

            <div
                className="relative h-full bg-[--starick-olive] text-center grid grid-flow-row auto-rows-max gap-10 px-32 py-32">
                <div>
                    <p className=" uppercase text-[--starick-white] font-bold text-5xl">help us make a change
                        today</p>

                    <p className="my-10 text-[--starick-brown] text-2xl">Donating goods to Starick helps support women
                        and children escaping domestic violence.</p>
                </div>

                <div className="grid auto-rows-max">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-0 gap-10">
                        <div className="flex flex-col">
                            <Image src={BequestIcon2} alt='description'
                                   width="0"
                                   height="0"
                                   sizes="100vw"
                                   className="w-full h-auto self-center"/>
                            <p className="text-[--starick-brown] italic font-bold">SCHEDULE MONTHLY CONTRIBUTIONS
                                TOWARDS
                                OUR
                                FOUNDATION </p>
                        </div>

                        <p className="uppercase text-[--starick-white] font-bold text-4xl self-center">or</p>

                        <div className="flex flex-col">
                            <Image src={BequestIcon3} alt='description'
                                   width="0"
                                   height="0"
                                   sizes="100vw"
                                   className="w-full h-auto self-center"/>
                            <p className="text-[--starick-brown] italic font-bold">MAKE A ONE OFF DONATION </p>
                        </div>
                    </div>


                </div>


                <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center">
                    <p className="uppercase text-[--starick-white] font-bold text-4xl">Multiple payment options
                        available</p>

                    <div className="grid content-center px-20">
                        <Paypal></Paypal>
                    </div>
                </div>

            </div>

            <Image src={Bequest2} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>


            <div
                className="grid auto-rows-max p-10 gap-10 text-[--starick-brown] font-semibold text-xs md:text-xl lg:text-2xl">
                <div
                    className="flex bg-[--starick-green]  w-full h-[150px] p-4 items-center justify-center">
                    <p className="flex justify-center items-center  w-full h-full text-2xl md:text-3xl text-[--starick-white] font-bold border-4 md:border-8 border-[--starick-white]">What
                        can
                        I do with my donations?</p>
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    <div className="grid grid-cols-2">
                        <Image src={BequestIcon4} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>
                        <Image src={BequestIcon5} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>
                    </div>

                    <p className="m-10">
                        Your donation to Starick allows us to offer a baby massage program for mums and babies
                        traumatised by domestic and family violence.
                    </p>
                </div>

                <div className="grid grid-cols-2 place-items-center">
                    <p className="m-10">
                        Your donation to Starick allows us to offer a baby massage program for mums and babies
                        traumatised by domestic and family violence.
                    </p>
                    <div className="max-w-[50%]">
                        <Image src={BequestIcon6} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>
                    </div>
                </div>

                <DonationAmount
                    pos={true}
                    amount='Can $50 buy?'
                    description='Provide emergency provisions, toiletries and groceries to one woman arriving at our refuge with
                        nothing but the clothes she stands up in.'
                />
                <DonationAmount
                    pos={false}
                    amount='What about $100?'
                    description='Send one of our mums on a “Baby and Child First Aid” course!
                        Provide back-to-school basics for one of the children living at our refuge.
                        Cover the cost of one child participating in an engaging program of fun school holiday
                        activities.
                        Run one baby massage session, aimed at helping traumatised mothers and babies re-establish their
                        bond.'
                />
            </div>

            <div className="h-full bg-[--starick-olive] grid grid-cols-2 place-items-center text-center">
                <p className="text-4xl md:text-6xl text-[--starick-white] font-semibold md:font-bold">LET’S CARE FOR
                    AUSTRALIAN WOMEN AND CHILDREN TOGETHER
                </p>
                <Image src={Bequest3} alt='description'
                       width="0"
                       height="0"
                       sizes="100vw"
                       className="w-full h-auto"/>
            </div>


            <div
                className="grid auto-rows-max p-10 gap-10 text-[--starick-brown] font-semibold text-xs md:text-xl lg:text-2xl">

                <DonationAmount
                    pos={true}
                    amount='How about $1000?'
                    description='Provide financial assistance to a woman with no resources of her own because of financial abuse.
                        Supply a starter pack of basic household items, electrical appliances and linen to two families
                        transitioning from refuge accommodation into their own subsidised rental property.'
                />

                <DonationAmount
                    pos={false}
                    amount='And with $2000?'
                    description='Run a two-day Lived Experience writing and confidence-building programme for up to seven women.'
                />

                <DonationAmount
                    pos={true}
                    amount='What can $6000 do?'
                    description="Fund a specialist children's counsellor for one month! this could make an imense diference in their mental development "
                />

                <DonationAmount
                    pos={false}
                    amount='What can $20000 do?'
                    description="$20,000 would enable us to continue offering a full-time domestic violence advocacy service at Armadale Police Station."
                />

            </div>


        </>


    )
}


export default bequests;