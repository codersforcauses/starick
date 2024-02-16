import { useState } from "react";
import { set } from "zod";

export default function DonationStripe() {
  const [isClicked, setIsClicked] = useState(false);

  const [isFirstButtonActive, setIsFirstButtonActive] = useState(false);
  const [isSecondButtonActive, setIsSecondButtonActive] = useState(false);

  const [isPaymentButtonActive, setIsPaymentButtonActive] = useState(false);

  const handlePaymentButtonClick = () => {
    setIsPaymentButtonActive(true);
  };

  const handleFirstButtonClick = () => {
    setIsFirstButtonActive(true);
    setIsSecondButtonActive(false);
    setIsClicked(true);
  };

  const handleSecondButtonClick = () => {
    setIsFirstButtonActive(false);
    setIsSecondButtonActive(true);
    setIsClicked(true);
  };

  const [is$20Active, set$20Active] = useState(false);
  const [is$50Active, set$50Active] = useState(false);
  const [is$100Active, set$100Active] = useState(false);
  const [is$150Active, set$150Active] = useState(false);
  const [is$200Active, set$200Active] = useState(false);

  const handle$20Click = () => {
    set$20Active(true);
    set$50Active(false);
    set$100Active(false);
    set$150Active(false);
    set$200Active(false);
  };

  const handle$50Click = () => {
    set$20Active(false);
    set$50Active(true);
    set$100Active(false);
    set$150Active(false);
    set$200Active(false);
  };

  const handle$100Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(true);
    set$150Active(false);
    set$200Active(false);
  };

  const handle$150Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(false);
    set$150Active(true);
    set$200Active(false);
  };

  const handle$200Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(false);
    set$150Active(false);
    set$200Active(true);
  };

  return (
    <div>
      <div className="flex">
        <div
          onClick={handleFirstButtonClick}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-60 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          } 
            ${isFirstButtonActive ? "bg-starick-green" : "bg-starick-white"}`}
        >
          Give monthly
        </div>
        <div
          onClick={handleSecondButtonClick}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-60 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          } 
         ${isSecondButtonActive ? "bg-starick-green" : "bg-starick-white"}`}
        >
          Give once
        </div>
      </div>

      <div className="mt-4 flex">
        <div
          onClick={handle$20Click}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-24 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$20Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $20
        </div>
        <div
          onClick={handle$50Click}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-24 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$50Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $50
        </div>
        <div
          onClick={handle$100Click}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-24 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$100Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $100
        </div>
        <div
          onClick={handle$150Click}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-24 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$150Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $150
        </div>
        <div
          onClick={handle$200Click}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFirstButtonClick();
          }}
          role="button"
          tabIndex={0}
          className={`w-24 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$200Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $_
        </div>
      </div>

      <div className="mt-4 flex">
        <div
          style={{ width: "480px" }}
          className="w-120 border-2 border-starick-olive p-5 text-center hover:bg-starick-olive"
        >
          ADD PAYMENT DETAILS
        </div>
      </div>
    </div>
  );
}
