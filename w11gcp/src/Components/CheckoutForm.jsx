import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";

  class CheckoutForm extends React.Component {

      handleSubmit = async event => {

        event.preventDefault();


        const { stripe, elements } = this.props;

        if (!stripe || !elements) {

          return;

        }


        const card = elements.getElement(CardElement);

        const result = await stripe.createToken(card);

        if (result.error) {

          console.log(result.error.message);

        } else {

          console.log(result.token);

        }

      };


    render() {

      return (

        <div>

          <div class="product-info">

            <h3 className="product-title">Movie</h3>

            <h4 className="product-price">£10</h4>

          </div>

          <form onSubmit={this.handleSubmit}>

            <CardSection />

            <button disabled={!this.props.stripe} className="btn-pay">

              Buy Now

            </button>

          </form>

        </div>

      );

    }

  }


  export default function InjectedCheckoutForm() {

    return (

      <ElementsConsumer>

        {({ stripe, elements }) => (

          <CheckoutForm stripe={stripe} elements={elements} />

        )}

      </ElementsConsumer>

    );

  }

// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       confirmParams: {
//         return_url: "https://example.com/",
//       },
//     });

//     if (result.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button disabled={!stripe}>Submit</button>
//     </form>
//   );
// };

// export default CheckoutForm;


// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (elements == null) {
//         return;
//       }
  
//       const {error, paymentMethod} = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe || !elements}>
//           Pay
//         </button>
//       </form>
//     );
//   };