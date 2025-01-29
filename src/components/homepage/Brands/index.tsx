import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";

const brandsData: { id: string; name: string }[] = [
  {
    id: "bell",
    name: "Bell",
  },
  {
    id: "topten",
    name: "TopTen",
  },
  {
    id: "sara",
    name: "Sara",
  },
  {
    id: "easy",
    name: "Easy",
  },
  {
    id: "b2win",
    name: "B2Win",
  },
];

const Brands = () => {
  return (
    <div className="bg-pink-600">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <span
          className={cn([
            integralCF.className,
            "text-white font-bold text-2xl md:text-4xl my-5 md:my-11 font-custom", // Add the custom font here
          ])}
        >
        
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
