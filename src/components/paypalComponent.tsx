import React from "react";
import {
    PayPalButtons,
    PayPalScriptProvider,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

interface Order {
    id: string;
    // Add other order properties as needed
}

// interface OrderData {
//     // Add order data properties as needed
// }

async function createOrder(): Promise<string> {
    // replace this url with your server
    const response = await fetch(
        "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "etanod01",
                        quantity: 1,
                    },
                ],
            }),
        }
    );

    const order: Order = await response.json();

    // Your code here after creating the order
    return order.id;
}

async function onApprove(data: { orderID: string }): Promise<void> {
    // replace this url with your server
    const response = await fetch(
        "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        }
    );

    const orderData: Order = await response.json();

    // Your code here after capturing the order
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper: React.FC<{ showSpinner: boolean }> = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                fundingSource="paypal"
                style={{ layout: "vertical", label: "donate" }}
                disabled={false}
                forceReRender={[{ layout: "vertical", label: "donate" }]}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </>
    );
};
const PaypalComponent: React.FC = () => {
    return (

        <PayPalScriptProvider
            options={{clientId: "test", components: "buttons", currency: "AUD"}}
        >
            <PayPalButtons fundingSource="paypal" style={{"layout": "horizontal"}}/>
            {/* <ButtonWrapper showSpinner={false}/> */}
        </PayPalScriptProvider>

    );
};

export default PaypalComponent;
