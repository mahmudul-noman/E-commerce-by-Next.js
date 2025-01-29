"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import React from "react";

const PhotoSection = ({ data }: { data: Product }) => {
  return (
    <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden">
      <Image
        src={data.image}
        width={444}
        height={530}
        className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
        alt={data.title}
        priority
        unoptimized
      />
    </div>
  );
};

export default PhotoSection;
