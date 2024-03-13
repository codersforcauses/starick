import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const apiKey: string | undefined = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
  throw new Error("Stripe API key is not defined.");
}

const stripe = new Stripe(apiKey);

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { amountInCents, interval } = req.body;
      let session;
      if (interval === "month") {
        session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "aud",
                product_data: {
                  name: "Donation"
                },
                unit_amount: amountInCents, // $10.00
                recurring: {
                  interval: interval
                }
              },
              quantity: 1
            }
          ],
          mode: "subscription",
          success_url: `${req.headers.origin}/`,
          cancel_url: `${req.headers.origin}/donations`
        });
      } else {
        session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "aud",
                product_data: {
                  name: "Donation"
                },
                unit_amount: amountInCents // $10.00
              },
              quantity: 1
            }
          ],
          mode: "payment",
          success_url: `${req.headers.origin}`,
          cancel_url: `${req.headers.origin}/donations`
        });
      }

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
