import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import AddToCardSection from "./AddToCardSection";

const Header = ({ data }: { data: Product }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1 className="text-2xl text-pink-600 font-extrabold md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize"> 
            {data.title}
          </h1>

          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            <span className="font-bold text-black text-2xl sm:text-[32px]">
              ${data.price}
            </span>
          </div>

          <p className="text-sm sm:text-base text-black/60 mb-5">
          {data.description}
          </p>
          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
