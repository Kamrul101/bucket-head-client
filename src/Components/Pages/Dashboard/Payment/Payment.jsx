import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);

const Payment = () => {

    const [cart]=useCart();
    const total = cart.reduce((sum,item)=>sum+item.price,0);
    const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-1/2">
      
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}
        cart={cart}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
