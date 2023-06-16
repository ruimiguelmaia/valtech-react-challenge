"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/cartSlice";
import { useAppSelector } from "../../store/store";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard key={item.product.id} cartItem={item} />
      ))}
      <br />
      <br />
      <br />
      <p className="text-slate-600 flex justify-center">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">
          {totalPrice.toLocaleString()} €
        </span>
      </p>
    </div>
  );
};

export default CartPage;
