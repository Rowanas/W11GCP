import './App.css';
import AboutPage from './Components/AboutPage';
import ClassificationPage from './Components/ClassificationPage';
import OpeningTimes from './Components/OpeningTimes';
import GettingHerePage from './Components/GettingHerePage'
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Components/CheckoutForm";
const stripePromise = loadStripe("pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7");


function App()  {
  return (
  
    <div>
       {/* < OpeningTimes /> */}
      < ClassificationPage />
      < AboutPage />
      <GettingHerePage />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </div>

  );
}

export default App;
