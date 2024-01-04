import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

interface Order {
  id: string;
}

async function createOrder(): Promise<string> {
  const response = await fetch("/api/paypal/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      currency_code: "AUD",
      value: "100.00"
    })
  });

  const order: Order = await response.json();

  console.log(order);
  return order.id;
}

async function onApprove(data: { orderID: string }): Promise<void> {
  const response = await fetch("/api/paypal/capture-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      orderID: data.orderID
    })
  });

  const orderData: Order = await response.json();
  console.log(orderData);
}

export default function ButtonWrapper(showSpinner: { showSpinner: boolean }) {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        fundingSource="paypal"
        className="layout-horizontal z-0"
        disabled={false}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
}
