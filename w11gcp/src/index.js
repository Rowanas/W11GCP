
import React from "react";

import ReactDOM from "react-dom";


import App from "./App";


const rootElement = document.getElementById("root");

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  rootElement

);
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(

// 'pk_test_pk_test_51LDVSiLFassR4rxhu3vH8C8DTn71kfXW66MmAESDafqx5R8jwjlJsHJ4zIJ94pdq7lXCr2DeRdwUCWCkzfmXuAbv00l6orsNL7'
// );

// function App() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '{{CLIENT_SECRET}}',
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// };