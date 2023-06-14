import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState('');
    const [axiosSecure]=useAxiosSecure();
    const [clientSecret,setClientSecret]= useState('');
    const {user}= useAuth();

    useEffect(()=>{
        if(price > 0){
            axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        }
    },[price,axiosSecure])

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('error',error);
            setCardError(error.message)
        }
        else{
            setCardError('')
            console.log("pay method",paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-error btn-sm mt-10 text-white' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-500 mt-5'>{cardError}</p>}
    </>
    );
};

export default CheckoutForm;