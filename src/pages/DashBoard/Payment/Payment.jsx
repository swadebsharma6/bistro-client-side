import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
 
const Payment = () => {
    return (
        <section>
            <SectionTitle heading={'Payment'} subHeading={'Please pay for Order'}></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
               </Elements>
            </div>
        </section>
    );
};

export default Payment;