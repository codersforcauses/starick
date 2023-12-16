import checkoutNodeJssdk from "@paypal/checkout-server-sdk";

const configureEnvironment = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID as string;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET as string;

  return process.env.NODE_ENV === "production"
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const client = () =>
  new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());

export default client;
