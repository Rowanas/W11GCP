import React from "react";

// import "./styles.css";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./Components/CheckoutForm";


const stripePromise = loadStripe("pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7");


const App = () => {

  return (

    <div className="App">

      <div className="product">

        <img

          src="https://img.xcitefun.net/users/2014/07/357279,xcitefun-singham-returns-poster-9.jpg"

          alt="movie"

          style={{ width: "100%", height: "auto" }}

        />

        <div>

          <Elements stripe={stripePromise}>

            <CheckoutForm />

          </Elements>

        </div>

      </div>

    </div>

  );

};


export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';



// const stripePromise = loadStripe('pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7');

// const App = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );

// ReactDOM.render(<App />, document.body);

// import React, { useState } from "react";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";git 
// import "./App.css";

//   const App = () => {
//         const stripe = loadStripe(
//       "pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7"
//     );

//     return (
//       <Elements stripe={stripe}>
//         <CheckoutForm />
//       </Elements>
//     );
//   };
