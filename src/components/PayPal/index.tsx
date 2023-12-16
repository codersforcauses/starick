import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "@/components/PayPal/button-wrapper";

export default function Paypal() {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env["NEXT_PUBLIC_PAYPAL_CLIENT_ID"] as string,
        components: "buttons",
        currency: "AUD"
      }}
    >
      {/* <PayPalButtons fundingSource="paypal" style={{layout: "vertical", label: "donate"}} createOrder={createOrder} */}
      {/*                onApprove={onApprove}/> */}
      <ButtonWrapper showSpinner={false} />
    </PayPalScriptProvider>
  );
}
