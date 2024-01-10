import Image from "next/image";

export default function ContactUs() {
    return (
        <>
            <div className="w-full h-auto">
                <img src="/images/starick-image1.jpg" className="w-full" alt=""/>
                <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
                <p className="p-2 text-4xl font-bold text-[--starick-brown]">
                    Contact Us
                </p>
                </div>
            </div>
            <div className="flex">
                <div className="basis-1/2">
                    <div>
                        <p>Starick</p>
                        <p>Refuges: Phone: 08 9458 107</p>
                        <p>Admin: Phone: 08 9478 5300 Email: info@starick.org.au</p>
                        <p>PO Box 174</p>
                        <p>CLOVERDALE WA 6985</p>
                        <p>ABN 56 721 993 085</p>
                        <p>Admin hours: Mon-Fri 8:30am to 4:30pm</p>
                    </div>
                </div>
                <div className="bg-blue basis-1/2">World</div>
            </div>
        </>
    );
}