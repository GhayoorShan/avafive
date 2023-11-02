"use client";

import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { useProductsQuery } from "@/app/utils/api/baseSlice";
import Link from "next/link";
import React, { useState } from "react";
import { SyncLoader } from "react-spinners";

const NewArrival: React.FC = () => {
  const { data, isLoading: isUpdating } = useProductsQuery(null, {
    refetchOnMountOrArgChange: 10,
  });
  let productsData: any = data;
  productsData = productsData?.products.slice(6, 10);

  return (
    <div className="flex flex-col lg:flex-row justify-between pb-10 min-h-[300px] px-5">
      {isUpdating ? (
        <div className="flex justify-center items-center w-full">
          <SyncLoader color="#1B4B66" />
        </div>
      ) : (
        productsData?.map((product: any) => (
          <Link href={`/product/${product.id}`}>
            <ProductCard
              thumbnail={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default NewArrival;
