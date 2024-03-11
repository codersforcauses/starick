import { format } from "path";
import { useState } from "react";
// import CheckoutForm from "../../components/donation-stripe/checkoutform";
import { loadStripe } from "@stripe/stripe-js";

export default function DonationStripe() {
  const [isClicked, setIsClicked] = useState(false);

  const [isFirstButtonActive, setIsFirstButtonActive] = useState(false);
  const [isSecondButtonActive, setIsSecondButtonActive] = useState(false);

  const [isPaymentButtonActive, setIsPaymentButtonActive] = useState(false);

  const [amount, setAmount] = useState("");
  const [errorAmount, toggleErrorAmount] = useState(false);

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

  const handlePaymentButtonClick = () => {
    setIsPaymentButtonActive(true);
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
    setAmount("20");
  };

  const handle$50Click = () => {
    set$20Active(false);
    set$50Active(true);
    set$100Active(false);
    set$150Active(false);
    set$200Active(false);
    setAmount("50");
  };

  const handle$100Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(true);
    set$150Active(false);
    set$200Active(false);
    setAmount("100");
  };

  const handle$150Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(false);
    set$150Active(true);
    set$200Active(false);
    setAmount("150");
  };

  const handle$200Click = () => {
    set$20Active(false);
    set$50Active(false);
    set$100Active(false);
    set$150Active(false);
    set$200Active(true);
  };

  const handleErrorHandle = async () => {
    const formatAmount = parseInt(amount);

    if (formatAmount <= 0) {
      setAmount("0");
      toggleErrorAmount(true);
    } else {
      toggleErrorAmount(false);
    }

    const amountInCents = Math.round(formatAmount * 100);

    handleCheckout({amountInCents});
  };

  return (
    <div style={{ maxWidth: "480px" }}>
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
          className={`w-1/5 border-2 border-starick-olive p-5 text-center ${
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
          className={`w-1/5 border-2 border-starick-olive p-5 text-center ${
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
          className={`w-1/5 border-2 border-starick-olive p-5 text-center ${
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
          className={`w-1/5 border-2 border-starick-olive p-5 text-center ${
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
          className={`w-1/5 border-2 border-starick-olive p-5 text-center ${
            isClicked ? "hover:bg-starick-green" : "hover:bg-starick-olive"
          }  ${is$200Active ? "bg-starick-green" : "bg-starick-white"}`}
        >
          $_
        </div>
      </div>

      {errorAmount ? (
        <div className="mt-5 text-center">
          <p className="text-l text-red-500">
            Please input a non negative number
          </p>
        </div>
      ) : null}

      {is$200Active ? (
        <div className="mt-5">
          <input
            type="number"
            placeholder="Other amount"
            aria-invalid="false"
            className="w-full border-2 border-starick-olive p-3"
            onChange={(e) => {
              setAmount(e.target.value);
              toggleErrorAmount(false);
            }}
          />
        </div>
      ) : null}

      <div className="mt-4 flex">
        <button
          className="h-full w-full border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green"
          onClick={handleErrorHandle}
        >
          Donate
        </button>
      </div>
    </div>
  );
}

const handleCheckout = async (amountInCents : {amountInCents : number}) => {
  // Load the Stripe library with the publishable key
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  // Make a POST request to the '/api/checkout_sessions' endpoint
  const response = await fetch("/api/checkout_sessions/checkout_session", {
    method: "POST",
    body: JSON.stringify({
      amountInCents: amountInCents, // Pass the formatted amount to the API
    }),
  });
  console.log(response);

  // Extract the JSON data from the response
  const data = await response.json();
  console.log(data);
  //  const { data } = await fetch('/api/checkout_sessions', { method: 'POST' });

  if (stripe && data.sessionId) {
    // Redirect the user to the Stripe checkout page with the session ID
    stripe.redirectToCheckout({ sessionId: data.sessionId });
  }
};
