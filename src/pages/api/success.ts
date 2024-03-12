// pages/api/success.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const apiKey: string | undefined = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
    throw new Error("Stripe API key is not defined.");
  }  

const stripe = new Stripe(apiKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 // Extract the session_id from the query parameters
 const sessionId = req.query.session_id as string;

 try {
    // Fetch the session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if the payment was successful
    if (session.payment_status === 'paid') {
      // Display a success message
      res.redirect('/donations');
      res.status(200).send("Payment was successful.");

      // Redirect back to the donations page after a delay
    } else {
      // Handle unsuccessful payment
      res.status(400).send("Payment was not successful.");
    }
 } catch (error) {
    console.error("Error fetching session details:", error);
    res.status(500).send("Error fetching session details.");
 }
}




