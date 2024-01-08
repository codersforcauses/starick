import React from "react";
import InPageNav from "@/components/InPageNav";

const JobOpportunities = () => {
  return (
    <>
     
      <div className="bg-gray-100 flex flex-row justify-center w-full">
        <div className="bg-background-white overflow-hidden w-[1463px] h-[1066px] relative">
          <p className="absolute w-[1200px] top-[200px] left-[132px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
            Starick is a charity supporting women and children escaping domestic and family violence. We work
            predominantly in Perth&#39;s south-eastern metropolitan region. Our vision is to build futures free from
            violence for the women and children who use our service and for the community as a whole.
          </p>
          <p className="absolute w-[1200px] top-[402px] left-[131px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0]">
              We are often looking for relief workers at our two refuges. If you are interested, please email your resume
              to{" "}
            </span>
            <a href="mailto:info@starick.org.au" rel="noopener noreferrer" target="_blank">
              <span className="underline">info@starick.org.au</span>
            </a>
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0]">
              .
            </span>
          </p>
          <p className="absolute w-[1200px] top-[573px] left-[131px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0]">
              We are currently recruiting for a Business Manager, who is a member of Starick’s leadership team and is
              responsible for managing the smooth functioning of Starick’s administrative and operational functions across
              the organisation.
              <br />
              This position is advertised on{" "}
            </span>
            <a href="https://www.seek.com.au/job/68950181?type=standout" rel="noopener noreferrer" target="_blank">
              <span className="underline">Seek</span>
            </a>
            <a
              href="https://www.seek.com.au/job/60907469?type=standout#sol=59bdf8c91efebc24600563f66ca5b8677cbe8cd6"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="underline">
                .<br />
              </span>
            </a>
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0]">
              A full job description can be obtained by phoning{" "}
            </span>
            <a href="tel:9478 5300" rel="noopener noreferrer" target="_blank">
              <span className="underline">9478 5300</span>
            </a>
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0]">
              {" "}
              or by email{" "}
            </span>
            <a href="mailto:ceo@starick.org.au" rel="noopener noreferrer" target="_blank">
              <span className="underline">ceo@starick.org.au</span>
            </a>
          </p>
          <div className="absolute w-[540px] top-[349px] left-[132px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-starick-brown text-[32px] tracking-[0] leading-[normal]">
            Relief Workers
          </div>
          <div className="absolute w-[540px] top-[507px] left-[131px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-starick-brown text-[32px] tracking-[0] leading-[normal]">
            Business Manager
          </div>
          <div className="absolute w-[364px] h-[70px] top-[98px] left-[131px] bg-background-white rounded-[15px] overflow-hidden">
            <div className="absolute h-[48px] top-[10px] left-0 [font-family:'Inter-Black',Helvetica] font-black text-starick-green text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Job Opportunities
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobOpportunities;
