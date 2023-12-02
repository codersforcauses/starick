import DropDown from '../components/dropdown'
import CounsellingSection from '../components/core-services/counselling'
import RefugesSection from '../components/core-services/refuges'

export default function CoreServices() {
    return (
        <>
            <div className="h-10 text-center bg-[--starick-green]">Navbar - replace with component later</div>
            <div className="bg-neutral-200 flex flex-col justify-center items-center px-40">
                <p className="text-center text-2xl mt-1 font-semibold">Core Services</p>
                <DropDown />
            </div>
            <img src={"images/starick-image1.jpg"} className="h-40 w-full"></img>
            <CounsellingSection />
            <RefugesSection />
        </>
    );
}