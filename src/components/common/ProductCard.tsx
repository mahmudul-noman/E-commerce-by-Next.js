import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import AddToCardSection from "../product-page/Header/AddToCardSection";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-start aspect-auto p-4 rounded-xl bg-pink-50 shadow-lg transition-transform duration-300 hover:shadow-xl mb-2">
      <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      
      >
      {/* Product Image */}
      <div className="bg-white rounded-lg w-full aspect-square mb-3 overflow-hidden">
      <Image
      src={data.image}
      width={295}
      height={298}
      className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
      alt={data.title}
      priority
      />
      </div>

      {/* Product Title */}
      <strong className="text-gray-800 text-lg sm:text-xl font-semibold mb-1 line-clamp-1">
      {data.title}
      </strong>


      {/* Price */}
      <div className="flex items-center space-x-2">
      <span className="font-bold text-pink-600 text-lg sm:text-2xl">
      ${data.price}
      </span>
      </div>
      <br />
      </Link>
      <AddToCardSection data={data} />
    </div>

  );
};

export default ProductCard;
