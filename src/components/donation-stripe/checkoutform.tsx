const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      '/api/checkout_sessions',
      { amount: input.customDonation },
    );
  
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }
  
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      
      sessionId: checkoutSession.id,
    });
   
    console.warn(error.message);
  };
  
  export default handleSubmit;
