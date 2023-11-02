"use client";
import { cart, cartWhite, wishlist } from "@/app/assets/icons";
import { Button } from "@/app/components/Button/Button";
import { addToCart } from "@/app/redux/cart";
import { useProductDetailsQuery } from "@/app/utils/api/baseSlice";
import { useParams, usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  console.log("params", productId);

  const dispatch = useDispatch();
  const { data, isLoading: isUpdating } = useProductDetailsQuery(productId);
  let productDetails: any = data;
  const productList = useSelector((state: any) => state.cart.product);

  const [activeImg, setActiveImage] = useState<string>(
    productDetails?.images[0]
  );

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setActiveImage(productDetails?.images[0]);
  }, [productDetails]);
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-10 p-5 lg:px-0 ">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={productDetails?.images[0]}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(productDetails?.images[0])}
          />
          <img
            src={productDetails?.images[1]}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(productDetails?.images[1])}
          />
          <img
            src={productDetails?.images[2]}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(productDetails?.images[2])}
          />
          <img
            src={productDetails?.images[3]}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(productDetails?.images[3])}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col  gap-4 lg:w-2/4">
        <div>
          <p className="text-[34px] font-semibold">{productDetails?.title}</p>
          <p className="text-[20px] font-semibold text-[#626262]">
            {productDetails?.description}
          </p>
        </div>
        {/* Rating */}
        <div className="py-5">Stars</div>
        {/* Price */}
        <div className=" flex gap-4 items-center pb-6 border-b border-[#0000001F]">
          <span className="text-[40px] font-bold">
            ${productDetails?.price}
          </span>
          <span className="text-[34px] font-semibold text-gray-light line-through">
            {productDetails?.price +
              (productDetails?.price / 100) *
                productDetails?.discountPercentage}
          </span>
          <span className="text-[20px] font-semibold text-[#FF404B]">
            {productDetails?.discountPercentage}%OFF
          </span>
        </div>
        {/* Delivey details */}
        <div className="py-3 flex items-center gap-5">
          <div className="w-1/3">
            <p className="text-[20px]">Delivery Details</p>
            <p className="text-[16px] text-[#626262]">
              Check estimated delivery date/pickup option.
            </p>
          </div>
          <div className=" flex justify-between items-center p-4 w-2/3 bg-[#F1F1F1] rounded">
            <p className="text-[16px] font-medium">Apply Valid Pincode</p>
            <p className="text-[14px] font-semibold  text-primary">CHECK</p>
          </div>
        </div>
        {/* Quantity */}
        <div className="flex gap-4 ">
          <span className="text-[20px] font-semibold">Quantity:</span>{" "}
          <div className=" border border-primary  rounded-md  px-2 flex items-center gap-3 ">
            <button
              className="text-[22px]"
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              -
            </button>{" "}
            {quantity}{" "}
            <button
              className="text-[22px]"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Coupon */}
        <div className="p-3 flex items-center gap-5 w-4/6 border  border-primary rounded-lg">
          <div className="w-2/3">
            <p className="text-[16px] font-medium pb-1">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-[14px] font-medium text-primary ">
              Terms & Conditions
            </p>
          </div>
          <div className=" flex flex-col justify-between items-center p-4 w-1/3 bg-[#F1F1F1] rounded">
            <p className="text-[14px] font-medium">Use Code</p>
            <p className="text-[16px] font-semibold ">ORDER100</p>
          </div>
        </div>

        {/* ACtion Buttons */}

        <div className="flex gap-5 py-5">
          <Button
            label="Add to bag"
            isLoading={false}
            width="320px"
            icon={cartWhite}
            onClick={() => {
              dispatch(addToCart({ ...productDetails, quantity: quantity }));
              toast.success("Added to cart");
            }}
          />
          <Button
            label="Add To Wishlist"
            isLoading={false}
            width="240px"
            icon={wishlist}
            outline
            onClick={() => {
              console.log("Add To Wishlist");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
