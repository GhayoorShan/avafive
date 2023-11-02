import Image from "next/image";
import { hero } from "./assets/images";
import { Button } from "./components/Button/Button";

import NewArrival from "./(screens)/newArrival/NewArrival";

export default function Home() {
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
          <Button label="See more" isLoading={false} />
        </div>
      </div>
      <div className="py-6 px-5">
        <p className="text-[34px] font-semibold">New Arrivals</p>
      </div>
      <NewArrival />
    </main>
  );
}
