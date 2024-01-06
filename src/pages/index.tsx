
import React from "react";
import { Inter } from "next/font/google";
import DonatingToday from 'next/image';
import CounsellingServices from "~/home/CounsellingServices.png";
import SafeAtHomeProgram from "~/home/SafeAtHomeProgram.png";
import SupportInPoliceStations from "~/home/SupportInPoliceStations.png";
import TransitionalHousing from "~/home/TransitionalHousing.png";
import TwoRefuges from "~/home/TwoRefuges.png";
import CoreServiceItem from "@/components/home/coreServiceItem";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

const CombinedFile: React.FC = () => {
  return (
    <>
      <main
        className={`flex min-h-screen items-left text-2xl justify-left p-72 ${inter.className}`}
      >
        <h1 className="">Domestic and Family Violence Support Services for Women and Children</h1>
        <img className="home_image1" alt="counselling services" src="/home/CounsellingServices.png"></img>
      </main>
      <div className="grid auto-rows-max">
        <div className="min-h-screen bg-light-green grid gap-10 px-10 py-20">
          <h1 className="text-dark-green font-semibold text-3xl text-center">What We Do</h1>
          <h2 className="text-brown font-semibold text-2xl text-center">Core Services</h2>
          <div className="main-h-screen">
            <DonatingToday
              src="/home/DonatingToday.png"
              alt="homepage main image"
              width={2200}
              height={1085}
            />
          </div>
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
      <NavBar />
    </>
  );
}

export default CombinedFile;
