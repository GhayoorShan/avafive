"use client";
import Image from "next/image";
import { hero, product1 } from "./assets/images";
import { Button } from "./components/Button/Button";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { useProductsQuery } from "./utils/api/baseSlice";
import { SyncLoader } from "react-spinners";

export default function Home() {
  const { data, isLoading: isUpdating } = useProductsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  let productsData: any = data;
  productsData = productsData?.products.slice(6, 10);

  return (
    <main>
      <p className="flex items-center justify-center h-14 bg-secondary">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </p>
      <div className="p-5 relative">
        <Image src={hero} alt="hero" className="rounded-3xl w-full " priority />
        <div className=" absolute right-5 top-[15%] bg-[#DEDEDEB2] w-[700px] h-80 rounded-l-3xl py-[25px] px-12">
          <p className="text-primary text-6xl font-extrabold pb-3">
            Carry your Funk
          </p>
          <p className="text-[28px] font-medium text-primary pb-8">
            Trendy handbags collection for your party animal
          </p>
          <Button
            label="See more"
            isLoading={false}
            onClick={() => {
              console.log("See More");
            }}
          />
        </div>
      </div>
      <div className="py-6 px-5">
        <p className="text-[34px] font-semibold">New Arrivals</p>
      </div>
      <div className="flex justify-between pb-10 min-h-[300px] px-5">
        {isUpdating ? (
          <div className="flex justify-center items-center w-full">
            <SyncLoader color="#1B4B66" />
          </div>
        ) : (
          productsData?.map((product: any) => (
            <ProductCard
              thumbnail={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
            />
          ))
        )}
      </div>
    </main>
  );
}
