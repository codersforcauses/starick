import React from "react";

import InPageNav from "@/components/InPageNav";

const JobOpportunities = () => {
  return (
    <>
      <div className="flex w-full flex-row justify-center bg-gray-100">
        <div className="bg-background-white relative h-[1066px] w-[1463px] overflow-hidden">
          <p className="absolute left-[132px] top-[200px] w-[1200px] text-[20px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
            Starick is a charity supporting women and children escaping domestic
            and family violence. We work predominantly in Perth&#39;s
            south-eastern metropolitan region. Our vision is to build futures
            free from violence for the women and children who use our service
            and for the community as a whole.
          </p>
          <p className="absolute left-[131px] top-[402px] w-[1200px] text-[20px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
            <span className="text-[20px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
              We are often looking for relief workers at our two refuges. If you
              are interested, please email your resume to{" "}
            </span>
            <a
              href="mailto:info@starick.org.au"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="underline">info@starick.org.au</span>
            </a>
            <span className="text-[20px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
              .
            </span>
          </p>
          <p className="absolute left-[131px] top-[573px] w-[1200px] text-[20px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
            <span className="text-[20px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
              We are currently recruiting for a Business Manager, who is a
              member of Starick’s leadership team and is responsible for
              managing the smooth functioning of Starick’s administrative and
              operational functions across the organisation.
              <br />
              This position is advertised on{" "}
            </span>
            <a
              href="https://www.seek.com.au/job/68950181?type=standout"
              rel="noopener noreferrer"
              target="_blank"
            >
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
            <span className="text-[20px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
              A full job description can be obtained by phoning{" "}
            </span>
            <a href="tel:9478 5300" rel="noopener noreferrer" target="_blank">
              <span className="underline">9478 5300</span>
            </a>
            <span className="text-[20px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
              {" "}
              or by email{" "}
            </span>
            <a
              href="mailto:ceo@starick.org.au"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="underline">ceo@starick.org.au</span>
            </a>
          </p>
          <div className="absolute left-[132px] top-[349px] w-[540px] text-[32px] font-semibold leading-[normal] tracking-[0] text-starick-brown [font-family:'Inter-SemiBold',Helvetica]">
            Relief Workers
          </div>
          <div className="absolute left-[131px] top-[507px] w-[540px] text-[32px] font-semibold leading-[normal] tracking-[0] text-starick-brown [font-family:'Inter-SemiBold',Helvetica]">
            Business Manager
          </div>
          <div className="bg-background-white absolute left-[131px] top-[98px] h-[70px] w-[364px] overflow-hidden rounded-[15px]">
            <div className="absolute left-0 top-[10px] h-[48px] whitespace-nowrap text-center text-[40px] font-black leading-[normal] tracking-[0] text-starick-green [font-family:'Inter-Black',Helvetica]">
              Job Opportunities
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobOpportunities;
