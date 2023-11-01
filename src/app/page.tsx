"use client";

import Image from "next/image";
import { hero } from "./assets/images";
import { Button } from "./components/Button/Button";

export default function Home() {
  const handleSeeMore = () => {
    console.log("See More");
  };
  return (
    <main>
      <p className="flex items-center justify-center h-14 bg-secondary">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </p>
      <div className="p-5 relative">
        <Image src={hero} alt="hero" className="rounded-3xl w-full " />
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
    </main>
  );
}
