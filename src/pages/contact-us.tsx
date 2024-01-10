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
                <div className="bg-blue basis-1/2">
                    <form id="mG61Hd" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdom5UoasUsG7u_lMByRvLR6-VSHmiIVLksgkpmgdaAPdRcPA/formResponse" target="_self" method="POST">
                        <div>
                            <p>Send us an email</p>
                            <div>
                                <label htmlFor="firstname">First Name *</label>
                                <div>
                                    <input name="entry.339576848" id="firstname" type="text"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastname">Last Name *</label>
                                <div>
                                    <input name="entry.810035821" id="lastname" type="text"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone *</label>
                                <div>
                                    <input name="entry.622549956" id="phone" type="text"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Email Address *</label>
                                <div>
                                    <input name="entry.2009362426" id="email" type="text"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="enquiry">Enquiry *</label>
                                <div>
                                    <textarea name="entry.1073078232" id="enquiry"></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}