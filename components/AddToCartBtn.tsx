"use client";

import React from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import QtyBtn from "./QtyBtn";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-between items-center mt-4">
        <Link href={`/products/${props.product.id}`}>
          <Button variant="contained" size="small" color="success">
            Details
          </Button>
        </Link>

        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(increment(props.product))}
        >
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
