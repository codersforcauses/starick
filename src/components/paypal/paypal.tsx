// import React from "react";
// import {
//     PayPalButtons,
//     PayPalScriptProvider,
//     usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";

// interface Order {
//     id: string;
//     // Add other order properties as needed
// }

// // interface OrderData {
// //     // Add order data properties as needed
// // }

// async function createOrder(): Promise<string> {
//     // replace this url with your server
//     const response = await fetch(
//         // replace this url with your server
//         "/api/paypal/createOrder",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             // use the "body" param to optionally pass additional order information
//             // like product ids and quantities
//             body: JSON.stringify({
//                 currency_code: 'AUD',
//                 value: '100.00'
//             }),
//         }
//     );

//     const order: Order = await response.json();

//     console.log(order)

//     // Your code here after creating the order
//     return order.id;
// }

// async function onApprove(data: { orderID: string }): Promise<void> {
//     // replace this url with your server
//     const response = await fetch(
//         // replace this url with your server
//         "/api/paypal/captureOrder",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 orderID: data.orderID,
//             }),
//         }
//     );

//     const orderData: Order = await response.json();
//     console.log(orderData)


//     // Your code here after capturing the order
// }

// // Custom component to wrap the PayPalButtons and show loading spinner
// const ButtonWrapper: React.FC<{ showSpinner: boolean }> = ({showSpinner}) => {
//     const [{isPending}] = usePayPalScriptReducer();

//     return (
//         <>
//             {showSpinner && isPending && <div className="spinner"/>}
//             <PayPalButtons
//                 fundingSource="paypal"
//                 style={{layout: "horizontal"}}
//                 disabled={false}
//                 forceReRender={[{layout: "horizontal"}]}
//                 createOrder={createOrder}
//                 onApprove={onApprove}
//             />
//         </>
//     );
// };
// const Paypal: React.FC = () => {
//     return (

//         <PayPalScriptProvider
//             options={{
//                 clientId: process.env["NEXT_PUBLIC_PAYPAL_CLIENT_ID"] as string,
//                 components: "buttons",
//                 currency: "AUD"
//             }}
//         >
//             {/* <PayPalButtons fundingSource="paypal" style={{layout: "vertical", label: "donate"}} createOrder={createOrder} */}
//             {/*                onApprove={onApprove}/> */}
//             <ButtonWrapper showSpinner={false}/>
//         </PayPalScriptProvider>

//     );
// };

// export default Paypal;
