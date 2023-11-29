import React from "react";
import { PayPalButtons,PayPalScriptProvider } from "@paypal/react-paypal-js";


const PaypalComponent: React.FC = () => {
    return (
        <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons />
        </PayPalScriptProvider>
    );
}


export default PaypalComponent;