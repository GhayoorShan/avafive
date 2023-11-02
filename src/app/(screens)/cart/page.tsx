"use client";

import { Button } from "@/app/components/Button/Button";
import { removeFromCart } from "@/app/redux/cart";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

interface CartProps {}

const Cart: React.FC<CartProps> = ({}) => {
  const cartItems = useSelector((state: any) => state.cart.product);

  const dispatch = useDispatch();
  //   dispatch(removeFromCart());
  console.log("items", cartItems);

  return (
    <div className="p-5 lg:px-0 min-h-[550px] flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2">
        <p className="text-[34px] font-semibold text-primary">My Cart</p>
        <div className="flex">
          <p className="w-2/3">Product Name</p>
          <div className="flex justify-between  items-start  w-1/3 ">
            <p>Price</p>
            <p>Qty </p>
            <p>Subtotal</p>
          </div>
        </div>
        {cartItems?.map((item: any) => (
          <div className="flex ">
            <div key={item.id} className="flex gap-5 my-4 w-2/3">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-20 h-20 rounded-md"
              />
              <div>
                <p>{item.title}</p>
                <p className="text-gray-light">{item.category}</p>
              </div>
            </div>
            <div className=" w-1/3 pt-4 ">
              <div className="flex justify-between items-start">
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.quantity * item.price}</p>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  className="text-red-500 underline"
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.success("Removed from cart");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-14 min-w-[380px]">
        <p className="text-[20px] font-semibold border-b border-secondary">
          Order Summary
        </p>
        <div className="grid grid-cols-2 gap-3 pt-5">
          <p className=" font-medium  text-gray-light">Sub Total</p>
          <p className=" font-medium text-end">$3800</p>
          <p className=" font-medium  text-gray-light">Discount</p>
          <p className=" font-medium text-end">$100</p>
          <p className=" font-medium  text-gray-light">Delivery Fee</p>
          <p className=" font-medium text-end">$0.00</p>
          <p className=" font-semibold ">Grand Total</p>
          <p className=" font-medium text-end">$3700</p>
        </div>
        <div className="flex justify-between py-10">
          <Button label="Place Order" isLoading={false} onClick={() => {}} />
          <Button
            label="Continue Shopping"
            isLoading={false}
            outline
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
