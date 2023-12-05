import PanicButton from "@/components/panicbutton/panicbutton";

import {Inter} from "next/font/google";

import NavBar from "@/components/NavBar/NavBar";

import Image from 'next/image';
import CounsellingServices from '~/home/CounsellingServices.png'
import SafeAtHomeProgram from '~/home/SafeAtHomeProgram.png'
import SupportInPoliceStations from '~/home/SupportInPoliceStations.png'
import TransitionalHousing from '~/home/TransitionalHousing.png'
import TwoRefuges from '~/home/TwoRefuges.png'
import DonatingToday from '~/home/DonatingToday.png'
import CoreServiceItem from "@/components/home/coreServiceItem";

// const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <header>
                <NavBar/>
                <PanicButton/>
            </header>

            <div className="grid auto-rows-max">

                {/* <div className="relative h-screen w-screen"> */}


                {/*     <Image src={DonatingToday} alt="Description" layout='fill'/> */}

                {/*     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background-white font-semibold text-2xl sm:text-1xl lg:text-4xl"> */}
                {/*         violence support services for women and children */}
                {/*     </h1> */}

                {/* </div> */}

                <div className="min-h-screen bg-light-green grid gap-10 px-10 py-20">
                    <h1 className="text-dark-green font-semibold text-3xl text-center">What We Do</h1>
                    <h2 className="text-brown font-semibold text-2xl text-center">Core Services</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-10">
                        <div className="grid gap-10">
                            <CoreServiceItem text='Counselling Services' img={CounsellingServices}/>
                            <CoreServiceItem text='Transitional Housing' img={TransitionalHousing}/>
                        </div>

                        <div className="hidden sm:hidden md:hidden lg:flex items-center justify-center">
                            <svg width="3" height="240" viewBox="0 0 3 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" x2="1.5" y2="240" stroke="white" strokeWidth="3"/>
                            </svg>
                        </div>

                        <div className="grid gap-10">
                            <CoreServiceItem text='Two Refuges' img={TwoRefuges}/>
                            <CoreServiceItem text='Support in Police Stations' img={SupportInPoliceStations}/>
                        </div>
                    </div>
                    <div className="grid lg:justify-center  px-10">
                        <CoreServiceItem text='Safe at Home Program' img={SafeAtHomeProgram}/>
                    </div>


                </div>

            </div>



            {/* <main */}
            {/*     className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} */}
            {/* > */}
            {/*     <h1 className="bg-red-500">Hello!</h1> */}
            {/* </main> */}
        </>
    );
}




