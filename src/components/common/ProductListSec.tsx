import React from "react";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => {
  return (
    <section className="max-w-frame mx-auto text-center">
      <h2
        className={cn([
          integralCF.className,
          "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize text-pink-600",
        ])}
      >
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      {viewAllLink && (
        <div className="w-full mt-6 md:mt-9">
          <Link
            href={viewAllLink}
            className="inline-block px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
          >
            View All
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductListSec;
