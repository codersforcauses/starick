import type { NextApiRequest, NextApiResponse } from "next";
import paypal from "@paypal/checkout-server-sdk";

import client from "./client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if(req.method != "POST")
        return res.status(404).json({success: false, message: "Not Found"})

    const PaypalClient = client();
    // This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request = new paypal.orders.OrdersCreateRequest();

    request.headers["Prefer"] = "return=representation";
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: req.body.currency_code,
                    value: req.body.value,
                },
            },
        ],
    });
    const response = await PaypalClient.execute(request);
    if (response.statusCode !== 201) {
        res.status(500).json({success: false, message: "Some Error Occured at backend"});
    }

    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB

    res.status(200).json({success: true, id:response.result.id});
}