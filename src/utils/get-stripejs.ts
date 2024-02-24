import { Stripe, loadStripe } from '@stripe/stripe-js';

// Declare a variable to hold the promise returned by the loadStripe function
let stripePromise: Promise<Stripe | null>;

// Define a function to get the Stripe instance
const getStripe = () => {
        // If the stripePromise is not set yet
    if (!stripePromise) {
                // The loadStripe function returns a promise that resolves with the Stripe instance
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }
    return stripePromise;
};

export default getStripe;
