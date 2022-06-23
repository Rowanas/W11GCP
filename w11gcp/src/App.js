import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";

  const App = () => {
        const stripe = loadStripe(
      "pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7"
    );

    return (
      <Elements stripe={stripe}>
        <CheckoutForm />
      </Elements>
    );
  };
