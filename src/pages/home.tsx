import CounsellingServices from '~/images/CounsellingServices.png'
import SafeAtHomeProgram from '~/images/SafeAtHomeProgram.png'
import SupportInPoliceStations from '~/images/SupportInPoliceStations.png'
import TransitionalHousing from '~/images/TransitionalHousing.png'
import TwoRefuges from '~/images/TwoRefuges.png'
import DonatingToday from '~/images/DonatingToday.png'
import CoreServiceItem from "@/components/home/coreServiceItem";

import Search from "@/components/searchBar";
import {useState} from "react";

export default function Home() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }
    return (
        <>
            <div className="grid auto-rows-max">
                <Search onSearch={handleSearch}/>

                {searchValue}

                {/* <div className="relative h-screen w-screen"> */}


                {/*     <Image src={DonatingToday} alt="Description" layout='fill'/> */}

                {/*     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background-white font-semibold text-2xl sm:text-1xl lg:text-4xl"> */}
                {/*         violence support services for women and children */}
                {/*     </h1> */}

                {/* </div> */}

                <div className="min-h-screen bg-[--starick-olive] grid gap-10 px-10 py-20">
                    <h1 className="text-[--starick-green] font-semibold text-3xl text-center">What We Do</h1>
                    <h2 className="text-[--starick-brown] font-semibold text-2xl text-center">Core Services</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-10">
                        <div className="grid gap-10">
                            <CoreServiceItem text='Counselling Services' img={CounsellingServices}/>
                            <CoreServiceItem text='Transitional Housing' img={TransitionalHousing}/>
                        </div>

                        <div className="hidden sm:hidden md:hidden lg:flex items-center justify-center">
                            <svg width="3" height="240" viewBox="0 0 3 240" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
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
        </>
    );


}




