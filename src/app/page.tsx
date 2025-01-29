"use client";

import { useEffect, useState } from "react";
import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import Header from "@/components/homepage/Header";
import { Product } from "@/types/product.types";
import SpinnerbLoader from "@/components/ui/SpinnerbLoader";

export default function Home() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);  // New loading state
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProductsData(data.slice(0, 6));  // Store all data in one state
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="my-[50px] sm:my-[72px]">
        {/* Conditional Rendering for Loader or Product List */}
        {loading ? (
          <div className="flex justify-center items-center w-full h-48">
            <SpinnerbLoader /> {/* Using the SpinnerLoader component */}
          </div>
        ) : (
          <ProductListSec
            title="Brand New Products"
            data={productsData}
            viewAllLink="/shop#brand-new-products"
          />
        )}
      </main>
      <Brands />
    </>
  );
}
