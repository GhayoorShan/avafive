import { navItems } from "@/app/utils/Constants/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "../Search/Search";
import { cart, logo, profile, wishlist } from "@/app/assets/icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-20 flex items-center justify-between ">
      <div className="flex justify-start gap-8">
        <Image src={logo} alt="logo" />
        <nav className="flex flex-row gap-4">
          {navItems.map((item, index) => (
            <Link
              className="no-underline hover:underline text-sm font-medium"
              key={index}
              href={{ pathname: "/" }}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-end gap-6">
        <Search
          onChange={(value: string) => console.log("Value: " + value)}
          placeholder={"Search for products or brands....."}
        />
        <div className=" flex gap-5">
          <Image src={wishlist} alt="cart" />
          <Image src={profile} alt="cart" />
          <Image src={cart} alt="cart" />
        </div>
      </div>
    </header>
  );
}
