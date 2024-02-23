import ServicesSection from "../Services/services-section";

export default function WhatWeSell() {
  const body = (
    <>
      <p>
        We offer a full range of used clothing and small homewares, including
        clothing for babies, children, men and women; sleepwear; shoes;
        manchester; kitchenware; handbags; hats; accessories; toys and board
        games; books for adults and children.
      </p>
      <div className="my-10 text-center">
        <p className="text-2xl font-medium">Visit us soon</p>
        <p>110 Kooyong Road, Rivervale</p>
        <p>Mon-Fri 10am-3pm Sat 10am-2pm</p>
        <p>Direct line for donation enquiries: (08) 6271 0299</p>
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="What We Sell"
      textOnLeft={false}
    />
  );
}
