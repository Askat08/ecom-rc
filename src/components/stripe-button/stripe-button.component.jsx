import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ih6LJAd3aDptiI3YfGNVRy34t1mEIfMC73E0uqbV5Gi4lromzFbdw6UO0Wemh52fkAgdMYSo186xhzTh6wqgGsW005aOgvdrg'

  const onToken = token => {
    console.log(token);
    alert('SUCCESSFUL PAYMENT');
  };


  return (
    <StripeCheckout 
      label='Pay Now'
      name='ECOM-RC'
      billingAddress
      shippingAddress
      // image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;