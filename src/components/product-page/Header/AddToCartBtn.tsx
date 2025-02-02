"use client";

import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { Product } from "@/types/product.types";
import React from "react";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const dispatch = useAppDispatch();
  const { } = useAppSelector(
    (state: RootState) => state.products
  );

  return (
    <button
      type="button"
      className="bg-black w-full mt-1 md:ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
      onClick={() =>
        dispatch(
          addToCart({
            id: data.id,
            name: data.title,
            srcUrl: data.image,
            price: data.price,
            quantity: data.quantity, // Only keeping quantity here
          })
        )
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
