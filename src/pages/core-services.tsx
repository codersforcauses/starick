import DropDown from '../components/services/dropdown'
import CounsellingSection from '../components/services/core-services/counselling'
import RefugesSection from '../components/services/core-services/refuges'
import PoliceSection from '../components/services/core-services/police-stations';
import SafeAtHomeSection from '../components/services/core-services/safe-at-home';
import TransitionalHousingSection from '../components/services/core-services/transitional-housing';
import ServicesSection from "../components/services/services-section"

export default function CoreServices() {
    return (
        <>
            <div>
                <img src={"images/starick-image1.jpg"} className="w-full" alt=""></img>
                <div className="bg-white -mt-20 relative rounded-md w-fit ml-6 mb-6">
                    <p className="text-[--starick-brown] font-bold text-4xl p-2">Core Services</p>
                </div>
            </div>
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