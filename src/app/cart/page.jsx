"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import CartItems from "@/components/cartItems/CartItems";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { emptyCart } from "@/redux/actions/cartActions";

const stripePromise = loadStripe(
  "pk_test_51LhzE8I6wVwKALkikNFgJeq4ETcFxJdqwnBUUG4yJVoToRTpECNCNAK0YzF0x9CmQlm7zZ9RYZjloNbw8Al3Zfya009GZoGqOb"
);

const CartPage = () => {
  const [amount, setAmount] = useState(0);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { data } = useSession();

  useEffect(() => {
    let amt = 0;

    cartItems.map((item) => {
      amt += item.price;
      return;
    });

    setAmount(amt);
  }, [cartItems]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems, amount: amount }),
    });
    const checkoutSession = await response.json();

   
    // Redirecting user/customer to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    dispatch(emptyCart())
    console.log(result)
    if (result.error) {
      alert(result?.error.message);
    }
  };
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cartComponent}>
          <div className={styles.text}>
            <h2>Shopping Cart</h2>
            <h2>Subtitle</h2>
          </div>
          <hr style={{ width: "97%", margin: "auto" }} />
          {cartItems ? (
            <>
              {cartItems?.map((item) => (
                <CartItems item={item} key={item._id} />
              ))}
            </>
          ) : (
            <>
              <h2>no items</h2>
            </>
          )}
        </div>

        <div className={styles.cashComponent}>
          <p>
            Your Orders Qualify for Free Shipping by Choosing this option at
            Checkout see details ...
          </p>
          <p>
            Total: <span>${Math.floor(amount)}</span>
          </p>
          <button onClick={()=>handleCheckout()}>Proceed to Buy</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
