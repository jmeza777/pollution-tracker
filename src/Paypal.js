import { useEffect } from "react";
import {PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "1";
const currency = "USD";
const style = {"layout":"vertical"};

const ButtonWrapper = ({ currency, showSpinner }) => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
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
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        
                        alert ("Transaction completed by " + details.payer.name.given_name);
                    });
                }}
            />
        </>
    );
}

export default function Paypal() {
	return (
        <>
        <div className="grid-container">
        <div className="maindiv">
        <h2>Paypal Checkout</h2>
        </div>
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                  // fix client id get error with process.env.REACT_APP_Client_Id
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
        </div>
        </>
	);
}