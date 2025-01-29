import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-pink-100 pt-10 md:pt-24 overflow-hidden">
    <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <section className="max-w-7xl px-4">
        <h2 className={cn([
          integralCF.className,
          "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
        ])}>
          ELEVATE YOUR STYLE WITH PERFECT CLOTHES
        </h2>
        <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
          Explore our exclusive collection of finely crafted garments, tailored to match your fashion and personality effortlessly.
        </p>
        <div>
          <Link
            href="/shop"
            className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-pink-600 hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
          <div className="flex flex-col">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
              <AnimatedCounter from={0} to={100} />+
            </span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">
               Brands
            </span>
          </div>
          <Separator
            className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
            orientation="vertical"
          />
          <div className="flex flex-col ml-6 md:ml-0">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
              <AnimatedCounter from={0} to={1000} />+
            </span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">
               Products
            </span>
          </div>
          <Separator
            className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
            orientation="vertical"
          />
          <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
              <AnimatedCounter from={0} to={2000} />+
            </span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">
               Customers
            </span>
          </div>
        </div>
      </section>
  
        <section
          className="relative hidden md:block md:px-4 min-h-[250px] md:min-h-[300px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat"
          style={{ backgroundImage: "url('/images/banner-fas.png')", backgroundSize: "contain" }}
        >
      </section>

    </div>
  </header>
  
  );
};

export default Header;
