// import React from 'react';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import { ElementsConsumer } from '@stripe/react-stripe-js';
// import {CardElement} from '@stripe/react-stripe-js';


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const PaymentDetailsForm = ({formData, setFormData , checkoutToken}) => {
    
 

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         console.log(formData);
//       };

//       const handleSubmit = async (event, elements, stripe) => {
//         event.preventDefault();

//       if (!stripe || !elements) return;

//       const cardElement = elements.getElement(CardElement);
  
//       const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
  
//       if (error) {
//         console.log('[error]', error);
//       } else {
//         const orderData = {
//           line_items: checkoutToken.live.line_items,
//           customer: { firstname: formData.firstName, lastname: formData.lastName, email: formData.email },
//           shipping: { name: 'US', street: formData.address, town_city: formData.city, county_state: formData.state, postal_zip_code: formData.zip },
//           payment: {
//             gateway: 'stripe',
//             stripe: {
//               payment_method_id: paymentMethod.id,
//             },
//           },
//         };
//     }}

//     return (
//         <div className="payment-info">
//         <Elements stripe={stripePromise}>
//         <ElementsConsumer>{({ elements, stripe }) => (
//         //   <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//         //     <br /> <br />
//         //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         //       <Button variant="outlined" onClick={backStep}>Back</Button>
//         //       <Button type="submit" variant="contained" disabled={!stripe} color="primary">
//         //         Pay {checkoutToken.live.subtotal.formatted_with_symbol}
//         //       </Button>
//         //     </div>
//         //   </form>
//         )}
//         </ElementsConsumer>
//       </Elements>
            
//         </div>
//     )
// }

// export default PaymentDetailsForm