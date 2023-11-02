"use client";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/gladysSlice";
import { usePaystackPayment } from 'react-paystack';



const PaymentForm = () => {
  const dispatch = useDispatch();
  const { productData, userInfo} = useSelector((state) => state.gladys);
  const router = useRouter();
  

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  

  // Paystack payment start here //
  const paystackPromise = {
    reference: (new Date()).getTime().toString(),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
  };
  const { data: session } = useSession();
  const config = {
    reference: paystackPromise.reference,
    publicKey: paystackPromise.publicKey,
    email: session?.user?.email || '',
    amount: (totalAmt + 20) * 100, // amount in kobo
    onSuccess: () => {
      
      dispatch(saveOrder({ order: productData, id: reference.reference }));
      dispatch(resetCart());
      router.push('/success'); // Navigate to success page
    },
    onClose: () => { },
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckout = () => {
    initializePayment();
  };
  
  
 
  return (
    <div className="w-full bg-white p-4">
      <h2>Cart Totals</h2>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Subtotal</p>
          <p>
            <FormattedPrice amount={totalAmt} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Shipping</p>
          <p>
            <FormattedPrice amount={20} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Total Price</p>
          <p>
            <FormattedPrice amount={totalAmt + 20} />
          </p>
        </div>
      </div>
      {userInfo ? (
        <button onClick={handleCheckout}  className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200" >
          Proceed to checkout
        </button>

         
         ) : (
        <div>
          <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-not-allowed duration-200">
            Proceed to checkout
          </button>
          <p className="text-base mt-1 text-red-500 font-semibold cursor-pointer animate-bounce">
            Please login to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;



