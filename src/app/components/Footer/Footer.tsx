import {
  aboutItems,
  policyItems,
  shopByCategoryItems,
} from "@/app/utils/Constants/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "../Search/Search";
import {
  facebook,
  insta,
  location,
  twitter,
  youtube,
} from "@/app/assets/icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-primary ">
      <footer className=" flex flex-col lg:flex-row items-start  justify-between pt-8 pb-20 px-16 text-white max-w-7xl mx-auto">
        <div className="flex flex-row gap-16 ">
          <div className="flex flex-col gap-2 ">
            <p className="font-medium">Shop by Category</p>
            {shopByCategoryItems.map((item, index) => (
              <Link
                className="no-underline hover:underline text-sm font-medium text-gray-light"
                key={index}
                href={{ pathname: "/" }}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="font-medium">About</p>
            {aboutItems.map((item, index) => (
              <Link
                className="no-underline hover:underline text-sm font-medium text-gray-light"
                key={index}
                href={{ pathname: "/" }}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </div>{" "}
          <div className="flex flex-col gap-2 ">
            <p className="font-medium">Policy</p>
            {policyItems.map((item, index) => (
              <Link
                className="no-underline hover:underline text-sm font-medium text-gray-light"
                key={index}
                href={{ pathname: "/" }}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex md:justify-end gap-4 pt-7 md:pt3 pb-6 ">
            <Image src={facebook} alt="social" />
            <Image src={insta} alt="social" />
            <Image src={twitter} alt="social" />
            <Image src={youtube} alt="social" />
          </div>
          <div className="flex md:justify-end gap-2 pb-2">
            <Image src={location} alt="social" className="w-[24px]" />
            <p className="">United States</p>
          </div>
          <p className="text-gray-light">
            © 2021 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
