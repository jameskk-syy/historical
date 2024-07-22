"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { Add, Delete, Remove } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function CartProducts({ item }) {
  const dispatch = useDispatch();
  const hadleDeleteItem = (cartId) => {
    dispatch(removeFromCart(cartId));
    toast.success("Item removed Successfully !");
  };

  const handleincrementQty = (cartId) => {
    dispatch(incrementQty(cartId));
  };
  const handledecrementQty = (cartId) => {
    dispatch(decrementQty(cartId));
  };
  return (
    <div className="flex flex-col md:flex-row items-center mt-2 justify-center">
    <div className="bg-white shadow-lg z-index-10 md:border-t lg:border-t border-t-2 rounded-lg p-3 m-2 flex flex-col md:flex-row md:items-center w-full justify-between">
      <div className="flex items-center flex-1">
        <div className="flex-shrink-0 w-20 h-20">
          <Image
            src={item.media}
            alt="Green Peas"
            width={80}
            height={80}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="mt-4 md:mt-0 mx-3 md:ml-6 text-center md:text-left">
          <p className="text-gray-500 font-abc">{item.title}</p>
        </div>
        <div className="rounded-xl border border-gray-400 flex gap-3 items-center ml-6">
          <button
            onClick={() => handledecrementQty(item.uid)}
            className="border-r border-gray-400 py-2 px-4"
          >
            <Remove />
          </button>
          <p className="flex-grow py-2 px-4">{item.qty}</p>
          <button
            onClick={() => handleincrementQty(item.uid)}
            className="border-l border-gray-400 py-2 px-4"
          >
            <Add />
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center mx-5 mt-4 md:mt-0 md:ml-6">
        <Delete onClick={() => hadleDeleteItem(item.uid)} className="mr-2 text-red-500 mb-3 cursor-pointer" />
        <p>Ksh: {item.totalPrice}</p>
      </div>
    </div>
  </div>
  
  );
}
