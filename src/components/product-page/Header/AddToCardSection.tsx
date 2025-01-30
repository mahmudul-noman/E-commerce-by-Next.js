"use client";

import CartCounter from "@/components/ui/CartCounter";
import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { Product } from "@/types/product.types";

const AddToCardSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="w-full p-4 md:p-2 z-10 flex items-center justify-between sm:justify-start md:justify-center border-t md:border-none border-black/5">
      {/* Adjust layout for mobile (fixed) and desktop (relative) */}
      <div className="w-full md:relative md:flex md:items-center md:justify-between">
        {/* Cart Counter */}
        <CartCounter onAdd={setQuantity} onRemove={setQuantity} />

        {/* Add to Cart Button */}
        <AddToCartBtn data={{ ...data, quantity }} />
      </div>
    </div>
  );
};

export default AddToCardSection;
