import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const apiKey: string | undefined = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
  throw new Error("Stripe API key is not defined.");
}

const stripe = new Stripe(apiKey);

const getSession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { session_id } = req.query;
      if (!session_id || typeof session_id !== "string") {
        return res.status(400).json({ error: "Invalid session ID" });
      }

      const session = await stripe.checkout.sessions.retrieve(session_id);

      // Return session data in the response
      res.status(200).json({ session });
    } catch (error) {
      // Handle any errors and return appropriate response
      console.error("Error retrieving session data:", error);
      res.status(500).json({ error: "Failed to retrieve session data" });
    }
  } else {
    // If the request method is not GET, return a 405 status code and allow only GET
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default getSession;
