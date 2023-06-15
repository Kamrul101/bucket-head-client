import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';


const CheckoutForm = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState('');
    const [axiosSecure]=useAxiosSecure();
    const [clientSecret,setClientSecret]= useState('');
    const {user}= useAuth();
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransactionId]= useState('');

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
        const {error}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            
            setCardError(error.message)
        }
        else{
            setCardError('')
            
        }
        setProcessing(true);
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
        console.log('payment' ,paymentIntent);
        setProcessing(false);
        if(paymentIntent.status == 'succeeded'){
            
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId:paymentIntent.id,
                price,
                date:new Date(),
                quantity:cart.length,
                status:'done',
                items: cart.map(item=> item._id),
                cartItems: cart.map(item=> item.id),
                itemNames: cart.map(item=> item.className)
            }
            axiosSecure.post('/payments',payment)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){

                }
            })

        }

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
      <button className='btn btn-error btn-sm mt-10 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-500 mt-5'>{cardError}</p>}
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
    );
};

export default CheckoutForm;