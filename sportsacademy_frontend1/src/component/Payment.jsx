import React from 'react';
import './css/Payment.css'; // Import CSS file for styling
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
  // PayPal client ID
  const clientId = "AUe46ZnoP1ND1THTouXA7K3Dlb8R_wUtzlCRwUrd6kLH7D7q987Y-H7a0QoVUj-w2NB07njzFYjqfFOH";

  // Function to handle payment success
  const handlePaymentSuccess = (details, data) => {
    console.log("Payment successful!", details);
    // Redirect to payment success page or perform any other action
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      
          {/* Payment Methods */}
          <div class="col-12 mt-4">
            <div class="card p-3">
              <p class="mb-0 fw-bold h4">Payment Methods</p>
            </div>
          </div>
          {/* PayPal Button */}
          <div class="col-12">
            <div class="card p-3">
              <PayPalScriptProvider options={{ "client-id": clientId }}>
                <PayPalButtons
                  style={{ layout: "horizontal" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: "10.00" // Provide the amount to be paid
                        }
                      }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    // Capture the funds
                    return actions.order.capture().then(function(details) {
                      // Handle payment success
                      handlePaymentSuccess(details, data);
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
  );
};

export default Payment;

