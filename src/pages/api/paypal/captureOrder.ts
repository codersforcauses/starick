import type {NextApiRequest, NextApiResponse} from "next";
import paypal from "@paypal/checkout-server-sdk";

import client from "./client";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != "POST")
        return res.status(404).json({success: false, message: "Not Found"})


    // Capture order to complete payment
    const {orderID} = req.body;
    const PaypalClient = client();
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    const response = await PaypalClient.execute(request);
    if (!response) {
        res.status(500).json({success: false, message: "Some Error Occured at backend"});
    }

    // Your Custom Code to Update Order Status
    // And Other stuff that is related to that order, like wallet

    res.status(200).json({success: true, data: response.result});
}