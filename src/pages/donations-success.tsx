import PageHeaderBigCircle from "@/components/page-header-bigcircle";
import { format } from "path";
import { useState, useEffect } from "react";

export default function DonationSuccess() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getSessionData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionIdFromURL = urlParams.get("session_id");
      const amountInCentsfromURL = urlParams.get("amount");

      if (sessionIdFromURL && amountInCentsfromURL) {
        //Validate this session actually exists
        const response = await fetch(
          `/api/getSession?session_id=${sessionIdFromURL}`
        );

        if(response.ok){
            const sessionData = await response.json();

            if (sessionData) {
              if (sessionData.session.amount_total == amountInCentsfromURL) {
                const formatted_amount = parseInt(amountInCentsfromURL) / 100;
    
                setAmount(formatted_amount);
              }
            }
        }
        else{
            setAmount(-1);
        }
      }
    };

    getSessionData();
  }, []);

  const successBody = (
    <div className="my-10 flex flex-col justify-center">
      <div className="items-top mb-10 flex justify-center">
        <img
          src="/icons/green_donation.svg"
          alt=""
          style={{ height: "120px", width: "120px" }}
        />
      </div>
      <div>
        <p className="text-l mb-8 font-bold">
          Your donation of ${amount}.00 was successful!
        </p>
      </div>
      <div>
        <p className="">
          Your donation will assist us to enhance and increase the support we
          are able to provide to women and children at risk.
        </p>
      </div>
    </div>
  );
  return (
    <>
      {amount ? (
        <div>
          {amount > 0 ? (
            <div>
              <PageHeaderBigCircle
                titleText="Thank you!"
                textOnLeft={true}
                subtitleElement={successBody}
                socialMedia={false}
              />
            </div>
          ) : (
            <div>
              <PageHeaderBigCircle
                titleText="Sorry something went wrong on our end, please try again."
                socialMedia={false}
                textOnLeft={true}
                subtitleElement={null}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <PageHeaderBigCircle
            titleText="Loading..."
            textOnLeft={true}
            subtitleElement={null}
            socialMedia={false}
          />
        </div>
      )}
    </>
  );
}
