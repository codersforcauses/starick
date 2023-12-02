import DropDown from '../components/dropdown'
import CounsellingSection from '../components/core-services/counselling'
import RefugesSection from '../components/core-services/refuges'
import PoliceSection from '../components/core-services/police-stations';
import SafeAtHomeSection from '../components/core-services/safe-at-home';
import TransitionalHousingSection from '../components/core-services/transitional-housing';
import ServicesSection from "../components/core-services/services-section"

export default function CoreServices() {
    return (
        <>
            <div className="h-10 text-center bg-[--starick-green]">Navbar - replace with component later</div>
            <div>
            <img src={"images/starick-image1.jpg"} className="w-full" alt=""></img>
            </div>
            <ServicesSection colour="bg-neutral-200" sectionBody={<DropDown />}/>
            <CounsellingSection />
            <RefugesSection />
            <TransitionalHousingSection />
            <PoliceSection />
            <SafeAtHomeSection />
            <div className="bg-white-200 py-10 flex justify-center items-center">
                <button className="bg-[--starick-brown] hover:bg-[--starick-black] rounded-2xl p-5 text-white text-lg">Other Services</button>
            </div>
        </>
    );
}