import Image from "next/image"

import PageHeaderBigCircle from "@/components/page-header-bigcircle"
import DecoratedContent from "@/components/page-header-2-circle"

export default function financialDonations(){
    const body = (
        <>
        <div className="flex justify-center">
        <div className = "text-center" style={{maxWidth : "70%"}}>
            <div className = "my-10">
                <p className = "text-2xl font-bold mb-5">Financial Donations</p>
                <p className = "text-base mb-5">Financial donations are the simplest way for you to help Starick provide the support that is essential to our clients. This is because financial donations enable us to direct money where it is most needed at any one time, by building on the core services that we are already providing with government funding.</p>
                <p className = "text-base mb-5">Financial abuse is part of the pattern of domestic violence. It can render women without any income in the short term and keep them in poverty for years after the relationship has ended.</p>
                <p className = "text-base mb-5">Many women who come into our refuges have no access to money and they often rely on us for financial support to meet their basic needs.  Meeting these basic needs is part of keeping women safe.</p>
                <p className = "text-base mb-5">If you would like to donate to Starick and choose how your donation is used, you can do this too. For instance, some of our donors specify that funds are to be used for a particular program or used for clothing and other supplies at the refuge.</p>
            </div>
            <div className = "my-10">
                <p className = "text-2xl font-bold mb-5">Every Dollar Counts</p>
                <p className = "text-base mb-5">The following information will give you a sense of just how much money we need to raise to provide services to women and children escaping domestic and family violence. Any financial donation - no matter how small - can assist us in enhancing and increasing the support we are able to provide to women and children at risk.</p>
            </div>
            <div className = "my-10 flex flex-row items-center">
                <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon19.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">$50</span>
                    </div>
                </div>
                 <p className = "text-start">$50 would enable us to provide emergency provisions, toiletries and groceries to one woman arriving at our refuge with nothing but the clothes she stands up in.</p>
            </div>
            <div className = "my-10 flex flex-row items-center">
                <ul className = "text-start" style={{listStyleType : "disc"}}>
                    <li>$100 would enable us to send one of our mum on a “Baby and Child First Aid” course.</li>
                    <li>$100 would enable us to provide back-to-school basics for one of the children living at our refuge.</li>
                    <li>$100 would enable us to cover the cost of one child participating in an engaging program of fun school holiday activities.</li>
                    <li>$100 would enable us to run one baby massage session, aimed at helping traumatised mothers and babies re-establish their bond.`</li>
                </ul>
                <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon16.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute mr-5 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-black text-xl font-bold">$100</span>
                    </div>
                </div>
            </div>
            <div className = "my-10 flex flex-row items-center">
                <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon18.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute mr-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">$1000</span>
                    </div>
                </div>
                <div className = "text-start" style ={{maxWidth : "82%"}}>
                <p>$1,000 would enable us to provide financial assistance to a woman with no resources of her own because of financial abuse.</p>
                <p>$1,000 would enable us to provide a starter pack of basic household items, electrical appliances and linen to two families transitioning from refuge accommodation into their own subsidised rental property.</p>
                </div>
            </div>
            <div className = "my-10 flex flex-row items-center">
                <p>$2,000 would enable us to run a two-day Lived Experience writing and confidence-building programme for up to seven women.</p>
                <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon17.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute mr-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">$2000</span>
                    </div>
                </div>
            </div>
            <div className = "my-10 flex flex-row items-center">
            <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon19.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute mr-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">$6000</span>
                    </div>
                </div>
                <p>$6,000 would enable us to fund a specialist children's counsellor for one month.</p>
            </div>
            <div className = "my-10 flex flex-row items-center">
                <p>$20,000 would enable us to continue offering a full-time domestic violence advocacy service at Armadale Police Station.</p>
                <div className="relative">
                    <Image
                        src="/images/donations/bequests/BequestIcon16.png"
                        alt="A bequest icon"
                        width={150}
                        height={150}
                        className="object-cover mr-5"
                        style={{ transform: 'scale(0.7)' }}
                    />
                    <div className="absolute mr-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <span className="text-black text-xl font-bold">$20000</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )

    return(
        <>
        <DecoratedContent 
        children = {body}
        topRightCircle="/images/circles/crop-3.png"
        bottomLeftCircle="/images/circles/crop-7.png"
        />
        {/* {body} */}
        </>
        
    )
}