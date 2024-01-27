import DonateOrBuy from "@/components/OpShop/donate-or-buy";
import OpShopDonations from "@/components/OpShop/op-shop-donations";
import PayItForward from "@/components/OpShop/pay-it-forward";
import VolunteerAtStarickOpShop from "@/components/OpShop/volunteer-at-starick-op-shop";
import WhatWeSell from "@/components/OpShop/what-we-sell";
import Banner from "@/components/Services/banner";

export default function StarickOpShop() {
    return(
        <>
        <Banner titleText="Starick Op Shop"/>
        <div className="px-20 py-10 md:px-40 md:py-10 lg:px-60">
        <p className="mb-4">
        The Starick Op Shop is a medium in which you could get 
        involved to directly help the women and children who use our services. 
        Operated and run by hard-working, dedicated volunteers, and proceedings 
        from sales of clothing, toys, bedding, household goods and more, support Starick&apos;s services.
        </p>
        <br />
        <p className="mb-4">
        <span className="font-semibold">Every dollar of profit from the op shop is used to fund non-core 
        services which address some of the impacts of domestic and family 
        violence on women&apos;s and childrens&apos; lives</span> - services such as art therapy, 
        baby massage, self defence training, yoga for trauma and our Lived Experience therapeutic writing program.
        </p>
        </div>
        
        <WhatWeSell/>
        <OpShopDonations/>
        <PayItForward/>
        <VolunteerAtStarickOpShop/>
        <DonateOrBuy/>
        </>
    )
}