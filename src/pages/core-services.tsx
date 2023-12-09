import CounsellingSection from '../components/services/core-services/counselling'
import RefugesSection from '../components/services/core-services/refuges'
import PoliceSection from '../components/services/core-services/police-stations';
import SafeAtHomeSection from '../components/services/core-services/safe-at-home';
import TransitionalHousingSection from '../components/services/core-services/transitional-housing';
import Banner from '../components/services/banner';
import Link from 'next/link';

export default function CoreServices() {
    return (
        <>
            <Banner titleText="Core Services" />
            <CounsellingSection />
            <RefugesSection />
            <TransitionalHousingSection />
            <PoliceSection />
            <SafeAtHomeSection />
            <div className="bg-[--starick-white] py-10 flex justify-center items-center">
                <button className="bg-[--starick-brown] hover:bg-[--starick-black] rounded-2xl p-5 text-white text-lg">
                    <Link href="/other-services">Other Services</Link>
                </button>
            </div>
        </>
    );
}