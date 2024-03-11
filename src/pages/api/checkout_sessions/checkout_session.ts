import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27"
});

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "aud",
              product_data: {
                name: "Donation"
              },
              unit_amount: 1000, // $10.00
              recurring: {
                interval: "month"
              }
            },
            quantity: 1
          }
        ],
        mode: "subscription",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/donation/donation-stripe`
      });

      // If the session is successfully created, return the session ID in the response
      res.status(200).json({ sessionId: session.id });
    } catch (error: any) {
      // If there's an error, return a 500 status code with the error message
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    // If the request method is not POST, return a 405 status code and allow only POST
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

// Export the handleRequest function as the default export
export default handleRequest;
