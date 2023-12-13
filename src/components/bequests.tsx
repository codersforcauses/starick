// import React from "react";
// import Image from "next/image";

// import DonationAmount from "@/components/donations/donationAmount";
// import DonationApproach from "@/components/donations/donationApproach";
// import DonationTitle from "@/components/donations/donationTitle";
// import DonationType from "@/components/donations/donationType";
// // import Paypal from "@/components/paypal/paypal"

// import Bequest1 from '~/images/donations/bequests/Bequest1.png'
// import Bequest2 from '~/images/donations/bequests/Bequest2.png'
// import Bequest3 from '~/images/donations/bequests/Bequest3.png'
// import Bequest4 from '~/images/donations/bequests/Bequest4.png'
// import Bequest5 from '~/images/donations/bequests/Bequest5.png'
// import Bequest6 from '~/images/donations/bequests/Bequest6.png'
// import BequestIcon2 from '~/images/donations/bequests/BequestIcon2.png'
// import BequestIcon3 from '~/images/donations/bequests/BequestIcon3.png'
// import BequestIcon4 from '~/images/donations/bequests/BequestIcon4.png'
// import BequestIcon6 from '~/images/donations/bequests/BequestIcon6.png'
// import BequestIcon9 from '~/images/donations/bequests/BequestIcon9.png'
// import BequestIcon10 from '~/images/donations/bequests/BequestIcon10.png'
// import BequestIcon11 from '~/images/donations/bequests/BequestIcon11.png'
// import BequestIcon12 from '~/images/donations/bequests/BequestIcon12.png'
// import BequestIcon13 from '~/images/donations/bequests/BequestIcon13.png'
// import BequestIcon14 from '~/images/donations/bequests/BequestIcon14.png'
// import BequestIcon15 from '~/images/donations/bequests/BequestIcon15.png'

// const bequests: React.FC = () => {
//     return (
//         <>
//             <div className="relative">
//                 <Image src={Bequest1} alt='description'
//                        width="0"
//                        height="0"

//                        className="w-full h-auto"/>
//             </div>

//             <div
//                 className="relative h-full bg-[--starick-olive] text-center grid grid-flow-row auto-rows-max gap-10 px-32 py-32">
//                 <div>
//                     <p className=" uppercase text-[--starick-white] font-bold text-5xl">help us make a change
//                         today</p>

//                     <p className="my-10 text-[--starick-brown] text-2xl">Donating goods to Starick helps support women
//                         and children escaping domestic violence.</p>
//                 </div>

//                 <div className="grid auto-rows-max">
//                     <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-0 gap-10">
//                         <DonationType image={BequestIcon2}
//                                       text="SCHEDULE MONTHLY CONTRIBUTIONS TOWARDS OUR FOUNDATION"/>

//                         <p className="uppercase text-[--starick-white] font-bold text-4xl self-center">or</p>

//                         <DonationType image={BequestIcon3}
//                                       text="MAKE A ONE OFF DONATION"/>


//                     </div>


//                 </div>


//                 <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center">
//                     <p className="uppercase text-[--starick-white] font-bold text-4xl">Multiple payment options
//                         available</p>

//                     <div className="grid content-center px-20">
//                         <Paypal></Paypal>
//                     </div>
//                 </div>

//             </div>

//             <Image src={Bequest2} alt='description'
//                    width="0"
//                    height="0"

//                    className="w-full h-auto"/>


//             <div
//                 className="grid auto-rows-max p-10 md:gap-3 text-[--starick-brown] font-semibold text-xs md:text-xl lg:text-2xl">
//                 <div
//                     className="flex bg-[--starick-green]  w-full h-[150px] p-4 items-center justify-center">
//                     <DonationTitle text="What can I do with my donations?"/>
//                 </div>
//                 <div className="grid grid-cols-2 place-items-center">

//                     <Image src={BequestIcon4} alt='description'
//                            width="0"
//                            height="0"

//                            className="w-full h-auto"/>


//                     <p className="m-10">
//                         Your donation to Starick allows us to offer a baby massage program for mums and babies
//                         traumatised by domestic and family violence.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-2 place-items-center">
//                     <p className="m-10">
//                         Your donation to Starick allows us to offer a baby massage program for mums and babies
//                         traumatised by domestic and family violence.
//                     </p>
//                     <div className="max-w-[50%]">
//                         <Image src={BequestIcon6} alt='description'
//                                width="0"
//                                height="0"

//                                className="w-full h-auto"/>
//                     </div>
//                 </div>

//                 <DonationAmount
//                     pos={true}
//                     amount='Can $50 buy?'
//                     description='Provide emergency provisions, toiletries and groceries to one woman arriving at our refuge with
//                         nothing but the clothes she stands up in.'
//                 />
//                 <DonationAmount
//                     pos={false}
//                     amount='What about $100?'
//                     description='Send one of our mums on a “Baby and Child First Aid” course!
//                         Provide back-to-school basics for one of the children living at our refuge.
//                         Cover the cost of one child participating in an engaging program of fun school holiday
//                         activities.
//                         Run one baby massage session, aimed at helping traumatised mothers and babies re-establish their
//                         bond.'
//                 />
//             </div>

//             <div className="h-full bg-[--starick-olive] grid grid-cols-2 place-items-center text-center">
//                 <p className="text-4xl md:text-6xl text-[--starick-white] font-semibold md:font-bold">LET’S CARE FOR
//                     AUSTRALIAN WOMEN AND CHILDREN TOGETHER
//                 </p>
//                 <Image src={Bequest3} alt='description'
//                        width="0"
//                        height="0"

//                        className="w-full h-auto"/>
//             </div>


//             <div
//                 className="grid auto-rows-max p-10 text-[--starick-brown] font-semibold text-xs md:text-xl lg:text-2xl">

//                 <DonationAmount
//                     pos={true}
//                     amount='How about $1000?'
//                     description='Provide financial assistance to a woman with no resources of her own because of financial abuse.
//                         Supply a starter pack of basic household items, electrical appliances and linen to two families
//                         transitioning from refuge accommodation into their own subsidised rental property.'
//                 />

//                 <DonationAmount
//                     pos={false}
//                     amount='And with $2000?'
//                     description='Run a two-day Lived Experience writing and confidence-building programme for up to seven women.'
//                 />

//                 <DonationAmount
//                     pos={true}
//                     amount='What can $6000 do?'
//                     description="Fund a specialist children's counsellor for one month! this could make an imense diference in their mental development "
//                 />

//                 <DonationAmount
//                     pos={false}
//                     amount='What can $20000 do?'
//                     description="$20,000 would enable us to continue offering a full-time domestic violence advocacy service at Armadale Police Station."
//                 />

//             </div>


//             <Image src={Bequest4} alt='description'
//                    width="0"
//                    height="0"

//                    className="w-full h-auto"/>


//             <div className="relative m-10 font-semibold text-[--starick-brown] text-center text-xl md:text-2xl">
//                 <DonationTitle text="Financial Donations"/>

//                 <p className='mt-6'>Empower Change with Your Financial Support</p>
//                 <p className='mb-6'>Your financial contributions are a powerful way to assist our clients.</p>


//                 <p className='mt-6'>They help us expand essential services, complementing government funding in our
//                     mission to break the cycle of domestic violence.</p>
//                 <p className='mb-6'>Financial abuse, intricately tied to domestic violence, leaves women financially
//                     vulnerable both short and long term. Your support bridges this gap, empowering survivors to
//                     rebuild.</p>


//                 <p>In our refuges, women often lack access to financial resources, relying on us for basic needs.
//                     Addressing these essentials ensures safety and lays the groundwork for lasting change.</p>
//                 <p className='mb-6'>Join us in making a meaningful impact with your support.</p>

//                 <Image src={BequestIcon9} alt='description'
//                        width="0"
//                        height="0"
//                        className="mx-auto w-1/2 h-auto"/>

//             </div>
//             <Image src={Bequest5} alt='description'
//                    width="0"
//                    height="0"

//                    className="w-full h-auto"/>


//             <div className="relative bg-[--starick-olive] grid auto-rows-max p-10 text-[--starick-brown]">

//                 <p className="text-2xl md:text-4xl text-[--starick-white] font-semibold mx-auto">Donate your &apos;Containers

//                     for Change&apos; refunds to Starick!</p>


//                 <div className="font-bold mx-auto text-xl">
//                     <p>You can donate your refund to Starick using the Starick </p>
//                     <p>SCHEME ID: C10289306. </p>
//                     <p>To support Starick and recycle at the same time:</p>
//                 </div>

//                 <div className="grid grid-rows-5 place-content-center">
//                     <DonationApproach order={1}
//                                       text="Find your closest refund point at the <strong>Containers for Change</strong> website."/>
//                     <DonationApproach order={2}
//                                       text="Collect eligible drink containers (check the label to see if it carries to 10c return information)."/>
//                     <DonationApproach order={3} text="Take your containers to the refund point."/>
//                     <DonationApproach order={4}
//                                       text="Use the <strong>Starick Scheme ID C10289306</strong>. You can also download our barcode for scanning by clicking below."/>
//                     <DonationApproach order={5}
//                                       text="The donation is the sent directly to Starick from the refund point."/>
//                 </div>


//                 <div className="flex flex-row items-center justify-between">
//                     <p className="text-2xl md:text-4xl text-[--starick-white] font-semibold mr-10 text-center">Donate by
//                         using your ID at the refund locations!</p>
//                     <Image src={BequestIcon10} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-1/5 h-auto"/>
//                 </div>

//                 <div className="flex flex-row items-center justify-between">
//                     <Image src={BequestIcon11} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-1/5 h-auto"/>

//                     <div className="flex flex-col ml-10">
//                         <p className="text-2xl md:text-4xl text-[--starick-white] font-semibold">Starick Scheme ID</p>
//                         <p className="prose">
//                             Starick is registered as a charity with the Australian Charities and Not-for-profits
//                             Commission,
//                             <strong>ABN 56 721 993 085</strong>. This means that all donations over $2 are tax
//                             deductible
//                         </p>
//                     </div>
//                 </div>

//                 <div className="flex flex-row items-end justify-between">
//                     <Image src={BequestIcon12} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-1/4 h-auto mr-10"/>
//                     <Image src={BequestIcon13} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-3/5 h-auto"/>
//                 </div>

//                 <div className="relative m-10 text-center font-semibold">
//                     <p className="text-3xl md:text-4xl text-[--starick-white]">Donate your
//                         services</p>

//                     <p className="mt-6 mb-4">Your organisation or community group can help us improve the wellness and
//                         quality of life of the women and children in our service.</p>
//                     <p className="mb-4">Donated services could include providing a regular gardening service, offering
//                         yoga classes, providing us with health club memberships for our clients, or teaching our clients
//                         a skill to help them become independent, such as cooking classes and self-defense.</p>
//                     <p className="mb-6">If you wish to offer volunteer services to the women and children in our
//                         services, contact the Starick Office on 9478 5300.</p>

//                     <Image src={BequestIcon14} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-full h-auto"/>
//                 </div>
//             </div>

//             <div className="relative p-10 text-[--starick-brown] text-xl md:text-2xl font-semibold">
//                 <DonationTitle text="Ideas and Ways to Support Our Charity"/>
//                 <p className="text-2xl font-bold mb-4 mt-6">Support Options:</p>
//                 <ul className="list-disc pl-6 space-y-4">
//                     <li>Call us at 9478 5300 for a discussion on how you or your organization can contribute.</li>
//                     <li>Fund a Family Camp: Similar to Vivienne Stewart and Mandy Loton, support a family camp in
//                         country WA, offering women and children a break and activities to boost confidence and
//                         mother-child relationships.
//                     </li>
//                     <li>Sponsor a Starick Family: Emulate the New Apostolic Church in Rivervale, WA, by providing
//                         essentials to a family for a year.
//                     </li>
//                     <li>Run a Fundraiser: Organize a campaign and donate via our Gofundraise charity page.</li>
//                 </ul>
//                 <p className="text-2xl font-bold mb-4 mt-6">Fundraising Examples:</p>
//                 <ul className="list-disc pl-6 space-y-4">
//                     <li>Soroptimists of South Perth: Annual breakfast.</li>
//                     <li>Maddie Mulholland: Clothes Swap with friends.</li>
//                     <li>Southern River College: Sausage sizzle.</li>
//                     <li>Sundowners Ladies Golf Club: Fundraising lunch.</li>
//                     <li>Gelo: &apos;Craptastic&apos; quiz night.</li>
//                     <li>WA Poets: Performance poetry event, donating door takings.</li>
//                 </ul>


//             </div>


//             <div className=" bg-[--starick-olive] text-[--starick-brown] font-semibold">
//                 <Image src={Bequest6} alt='description'
//                        width="0"
//                        height="0"
//                        className="w-full h-auto"/>

//                 <div className="p-10 flex flex-col">
//                     <p>If you would like to donate to Starick and choose how your donation is used, you can do this too.
//                         For
//                         instance, some of our donors specify that funds are to be used for a particular program or used
//                         for
//                         clothing and other supplies at the refuge.</p>
//                     <Image src={BequestIcon15} alt='description'
//                            width="0"
//                            height="0"
//                            className="w-full h-auto mt-10"/>
//                 </div>

//             </div>

//             <div className="p-10 text-[--starick-brown] font-semibold text-xl italic">
//                 <DonationTitle text="Bequests"/>

//                 <div className="p-10">
//                     <p className="mb-4">Starick welcomes and values bequests. Through making a gift to Starick in your will, you project your
//                         values and wishes, as well as support our work with women and children well into the future.</p>
//                     <p>
//                         You may find the following words helpful for inclusion in your will. However it is important to see
//                         your legal advisor before you do so.
//                     </p>

//                     <p className="mt-6 mb-4">&quot;I GIVE, FREE OF ALL DUTIES AND TAXES</p>
//                     <p className="mb-4">The whole of my estate, or</p>
//                     <p className="mb-4">___ % of my estate, or</p>
//                     <p className="mb-4">The residue of my estate (or ___ % of the residue of my estate), or</p>
//                     <p className="mb-4">The sum of $ ____, or</p>
//                     <p className="mb-4">My units/shares in __________________ Trust/Ltd, or</p>
//                     <p className="mb-4">My real property situated at (insert street address) having the title reference (insert reference)</p>
//                     <p className="mb-4">TO STARICK SERVICES INC, ABN 56 721 993 085PO BOX 174CLOVERDALE WA 6985</p>

//                     <p className="mb-4">THE RECEIPT OF THE TREASURER, SECRETARY OR EXECUTIVE OFFICER FOR THE TIME BEING IS AN ABSOLUTE DISCHARGE TO MY EXECUTOR&quot;.</p>

//                     <p className="mt-20">For more information about how your bequest can help women and children escaping and recovering from violence, call Starick on 9478 5300 or email
//                     </p>

//                 </div>


//             </div>


//         </>


//     )
// }


// export default bequests;