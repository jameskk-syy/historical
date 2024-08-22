"use client";
import CartProducts from "@/app/components/CartProducts";
import Footer from "@/app/components/Footer";
import Navp from "@/app/components/Navp";
import WithAuth from "@/app/components/WithAuth";
import cartSlice, { setCartItems } from "@/redux/slices/cartSlice";
import {
  AirportShuttle,
  ArrowBackIosNew,
  BusAlert,
  CardGiftcard,
  ChevronLeft,
  Circle,
  Delete,
  ShoppingCart,
} from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const router = useRouter();
  const pathname = usePathname();
  const cartItems = useSelector((state) => state.cart);
  const phoneNumber = localStorage.getItem("userPhone");
  const [uid, setUid] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve cart items from local storage on component mount
    const savedCartItems = localStorage.getItem("cart");
    if (savedCartItems) {
      dispatch(setCartItems(JSON.parse(savedCartItems)));
    }
  }, [dispatch]);

  // if (typeof window !== 'undefined') {
  //   const phoneNumber = localStorage.getItem('userPhone');

  // }
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Retrieve cart items from local storage on component mount
  //     const savedCartItems = localStorage.getItem('cart');
  //     if (savedCartItems) {
  //       dispatch(setCartItems(JSON.parse(savedCartItems)));
  //     }

  //   }
  // }, [dispatch]);

  // Function to save cart items to the database
  // const saveCartToDatabase = async () => {
  //   try {
  //     // Prepare the request body
  //     const requestBody = {
  //       productInfo: cartItems.map(item => ({
  //         id: item.id,
  //         title: item.title,
  //         price: item.price,
  //         // qty: item.qty
  //       })),
  //       idNumber_registrationNumber: phoneNumber
  //     };

  //     // Make the HTTP request to save the cart
  //     const response = await axios.post(
  //       "https://us-central1-farmfuzion.cloudfunctions.net/addtocart",
  //       requestBody
  //     );

  //     // Handle response if needed
  //     console.log("Cart saved to database:", response.data.uid);
  //    setUid(response.data.uid);
  //    router.push({
  //     pathname: '/farmers/cart/checkout',
  //     query: { uid: response.data.uid }
  //   });
  //   } catch (error) {
  //     console.error("Error saving cart to database:", error);
  //   }
  // };
  const saveCartToDatabase = async () => {
    try {
      // Prepare the request body
      const requestBody = {
        productInfo: cartItems.map((item) => ({
          id: item.uid,
          title: item.title,
          price: item.totalPrice,
          media: item.media,
          qty: item.qty,
        })),
        idNumber_registrationNumber: phoneNumber,
      };

      // Make the HTTP request to save the cart
      const response = await axios.post(
        "https://us-central1-farmfuzion.cloudfunctions.net/addtocart",
        requestBody
      );

      // Handle response if needed
      // console.log("Cart saved to database:", response.data.uid);

      // console.log("Cart saved to database:", response.data);
      const { uid } = response.data;
      // console.log("uid:", uid);
      setUid(uid);

      const newUrl = `/farmers/cart/${uid}/`;

      // Navigate to the new URL
      router.push(newUrl);
    } catch (error) {
      // console.error("Error saving cart to database:", error);
    }
  };

  // calculate subtotal
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.totalPrice * currentItem.qty;
  }, 0);

  const commision = 100;
  const delivery = 0;
  const service = 100;
  const Total = subTotal + commision + delivery + service;

  return (
    <>
      <Navp />
      <div className="grid md:mx-20 lg:mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col md:mb-1">
          <p className="font-bold text-lg mx-5 mb-4">Items Overview</p>
          <div className="mx-2 text-gray-400">
            <ArrowBackIosNew /> Back
          </div> 

          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                return <CartProducts item={item} key={index} />;
              })
            ) : (
              <div className="text-xl font-abc  ms-10 my-6 rounded-md shadow-sm p-4 flex flex-col justify-center items-center">
                <ShoppingCart
                  style={{ width: "52px", height: "52px", color: "#01565b" }}
                />
                <h1 className="mt-4">Your Cart is Empty !</h1>
                <button className="bg-card3 font-abc text-white rounded-md px-6 py-1 mt-4">
                  Go to market
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col  md:flex-row items-centerc mt-2 justify-center">
            <div className="bg-white shadow-lg rounded-md md:rounded-full md:border-t-1 border-t-1 lg:border-t-1 border-t p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className="text-card3" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className="flex justify-around ">
                  <span className="text-gray-500 mx-2 mr-2 font-abc font-semibold">
                    <AirportShuttle />
                  </span>
                  <p className="ml-1 font-abc">Standard delivery(48 hours)</p>
                </span>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p className="px-10 text-gray-400">Change</p>
              </div>
              <div className="mt-2 flex-grow md:mt-0 md:ml-10 md:text-left">
                <p className="px-2 font-abc font-semibold text-right">Ksh 40</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="bg-white shadow-lg rounded-md md:border-t-1 border-t-1 lg:border-t-1 border-t md:rounded-full p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className="text-card3" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className="flex justify-around">
                  <span className="text-gray-500 font-bold mr-2">
                    <CardGiftcard />
                  </span>
                  <p className="ml-1 text-gray-500 mx-2">Apply</p>
                </span>
              </div>
              <div className="mt-2 md:mt-0 pl-10 md:ml-10 md:text-center">
                <center>
                  <p className="text-gray-500 ml-20">XXX-8888-4444</p>
                </center>
              </div>
              <div className="mt-2 flex-grow md:mt-0 md:ml-10 md:text-right">
                <p className="pr-3 font-abc font-semibold">Ksh 10</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="bg-white shadow-lg rounded-md md:border-t-1 border-t-1 lg:border-t-1 border-t md:rounded-full p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className="text-card3" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className="flex justify-around">
                  <span className="text-gray-500 font-bold">
                    <CardGiftcard />
                  </span>
                  <p className="ml-1 text-gray-400">Apply Gift card</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:ml-14 max-h-1/2 p-3 m-3 font-abc">
          <div className="py-2 px-20 w-3/4 shadow md:mt-16">
            <center><p className="font-abc font-semibold text-card3 mb-3 mt-1">Summary</p></center>
            {/* Map through cartItems and render each item's name and price */}
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-grow w-full justify-between  flex-row mb-4 font-abc">
                <p className="font-abc text-right">{item.title}</p>
                <p className="font-abc ">Ksh {item.totalPrice} <span className="px-2">*</span> <span className="px-2">{item.qty}</span></p>
              </div>
            ))}
            <div className="flex flex-grow  flex-row justify-center pr-10 font-bold mb-5 text-center">
              <p className="mr-3">Sub Total</p>
            < p className="font-abc">{subTotal}</p>
            </div>
            <div className="flex flex-grow w-full justify-between  flex-row mb-4">
              <p  className="font-abc ">Delivery fee</p>
              <p  className="font-abc text-right ">Ksh {delivery}</p>
            </div>
            <div className="flex flex-grow  w-full  justify-between flex-row mb-4">
              <p  className="font-abc">Commision</p>
              <p  className="font-abc text-right ">Ksh {commision}</p>
            </div>
            <div className="flex flex-grow  w-full justify-between flex-row mb-4">
              <p  className="font-abc ">Service fee</p>
              <p  className="font-abc text-right ">Ksh {service}</p>
            </div>
            <div className="flex flex-grow  flex-row justify-center pr-14 font-bold mb-2 text-center">
              <p className="mr-3">Total</p>
              <p  className="font-abc">{Total}</p>
            </div>
            <div className="flex justify-center">
              <Link href={`/farmers/cart/${uid}`}>
                <button
                  onClick={
                    cartItems.length > 0 ? saveCartToDatabase : undefined
                  }
                  className="bg-card3 text-white font-abc py-2 px-10 md:px-28 rounded-lg mt-5 mb-2"
                >
                  CheckOut Ksh {Total}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default WithAuth(Cart);
