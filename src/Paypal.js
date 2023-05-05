import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal() {
      const amount = "2";
      const currency = "USD";

   return (
    <>
       <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_Paypal_Client_Id }}>
           <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })

                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        alert("Transaction completed by " + details.payer.name.given_name)
                    });
                }}
            />
       </PayPalScriptProvider>
       </>
   );
}