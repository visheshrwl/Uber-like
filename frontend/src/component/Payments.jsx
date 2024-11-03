
// frontend/src/components/Payment.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const { data } = await axios.post('/api/payments/create-payment-intent', {
      amount: 1000, // Replace with dynamic amount
    });

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      setPaymentStatus('Payment failed: ' + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment succeeded!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay Now
      </button>
      <p>{paymentStatus}</p>
    </form>
  );
}

function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;
