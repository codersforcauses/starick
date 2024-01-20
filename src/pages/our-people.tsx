import SectionTitle from "@/components/section-title"
import Image from "next/image";
import Anne from "~/images/our-people/Anne.jpg";
import Caroline from "~/images/our-people/Caroline.png";
import Elena from "~/images/our-people/Elena.jpg";
import Fei from "~/images/our-people/Fei.jpg";
import Franchine from "~/images/our-people/Francine.jpg";
import Jodie from "~/images/our-people/Jodie.png";
import Kathleen from "~/images/our-people/Kathleen.jpg";
import Leanne from "~/images/our-people/Leanne.jpg";
import Nadia from "~/images/our-people/Nadia.jpg";
import Sandie from "~/images/our-people/Sandie.jpg";


export default function OurPeople() {
    return (
        <>
            <div className="h-auto w-full">
                <img src="/images/starick-image1.jpg" className="w-full" alt="" />
                <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
                    <p className="p-2 text-4xl font-bold text-[--starick-brown]">
                        Our People
                    </p>
                </div>
            </div>
            <div className="bg-starick-white px-6 py-2 md:px-32">
                <SectionTitle
                    backgroundColour="starick-green"
                    text="Management and staff"
                    textColour="starick-white"
                />
                <div className="pt-5">

                    <StaffManagementPics></StaffManagementPics>

                </div>

            </div>
        </>
    )

}

const StaffManagementPics = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
                <Image
                    src={Leanne}
                    alt="Leanne, Cheif Executive Officer"
                    height="200"
                    className="rounded-full"


                />
                <p className="max-w-[200px]">Leanne, Cheif Executive Officer</p>
            </div>

            <div className="text-center">
                <Image
                    src={Franchine}
                    alt="Francine, Cheif Financial Officer"
                    height="200"
                    className="rounded-full"
                />
                <p>Francine, Cheif Financial Officer</p>
            </div>

            <div className="text-center">
                <Image
                    src={Kathleen}
                    alt="Kathleen, Senior Social Worker"
                    height="200"
                    className="rounded-full"
                />
                <p>Kathleen, Senior Social Worker</p>
            </div>


            <div className="text-center">
                <Image
                    src={Caroline}
                    alt="Caroline, Outreach Co-Ordinator"
                    height="200"
                    className="rounded-full"
                />
                <p>Caroline, Outreach Co-Ordinator</p>

            </div>

            <div className="text-center">
            <Image
                src={Jodie}
                alt="Jodie, Outreach Worker"
                height="200"
                className="rounded-full"
            />
            <p>Jodie, Outreach Worker</p>
            </div>

            <div className = "text-center">
            <Image
                src={Anne}
                alt="Anne, Domestic Violence Advocate"
                height="200"
                className="rounded-full"
            />
            <p className="max-w-[200px]">Anne, Domestic Violence Advocate</p>
            </div>


            <div className="text-center">
            <Image
                src={Nadia}
                alt="Nadia, Domestic Violence Advocate"
                height="200"
                className="rounded-full"
            />
            <p className="max-w-[200px]">Nadia, Domestic Violence Advocate</p>
            </div>

            <div className="text-center">
            <Image
                src={Elena}
                alt="Elena, Womans Advocate"
                height="200"
                className="rounded-full"
            />
            <p>Elena, Womens Advocate</p>
            </div>


            <div className="text-center">
            <Image
                src={Fei}
                alt="Fei, Childrens Advocate"
                height="200"
                className="rounded-full"
            />
            <p>Fei, Childrens Advocate</p>
            </div>

            <div className="text-center">
            <Image
                src={Sandie}
                alt="Sandie, Volunteer Op Shop Manager"
                height="200"
                className="rounded-full "
            />
            <p className="max-w-[200px]">Sandie, Volunteer Op Shop Manager</p>
            </div>



        </div>


    );
}