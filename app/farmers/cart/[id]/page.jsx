"use client";
import CartCount from "@/app/components/CartCount";
import CartProducts from "@/app/components/CartProducts";
import Footer from "@/app/components/Footer";
import Navp from "@/app/components/Navp";
import {
  AirportShuttle,
  BusAlert,
  CardGiftcard,
  ChevronLeft,
  Circle,
  Delete,
  RadioButtonUncheckedRounded,
} from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import ModalForm from "@/app/components/MobileModal";
import BankPaymentForm from "@/app/components/BankModal";

export default function CheckOut() {
  const [showCardDetails, setShowCardDetails] = useState(false);
  // const cartItems = useSelector(state => state.cart);
  // // Save cart items to localStorage whenever cartItems changes
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);
  // // calculate subtotal
  // const subTotal = cartItems.reduce((acc, currentItem) => {
  //   return acc + (currentItem.price * currentItem.qty);
  // }, 0)

  // console.log("cartItems", cartItems);

  const cartItem = useSelector((state) => state.cart);
  // calculate subtotal
  const subTotal = cartItem.reduce((acc, currentItem) => {
    return acc + currentItem.totalPrice * currentItem.qty;
  }, 0);

  const commision = 100;
  const delivery = 0;
  const service = 100;
  const Total = subTotal + commision + delivery + service;

  const pathname = usePathname();
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState();
  const uid = pathname.split("/").pop();
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   // Fetch the phone number from local storage
  //   const phoneNumber = localStorage.getItem("userPhone");

  //   // Ensure the phone number exists before making the request
  //   if (!phoneNumber) {
  //     console.error("Phone number not found in local storage");
  //     return;
  //   }

  //   const fetchCart = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://us-central1-farmfuzion.cloudfunctions.net/get_cart_by_id",
  //         {
  //          uid
  //         }
  //       );
  //       setCartItems(response.data.cart_items);
  //       console.log("Get Cart Data",response.data);
  //     } catch (error) {
  //       console.error("Error fetching cart:", error);

  //     }
  //   };

  //   fetchCart();
  // }, []);

  useEffect(() => {
    const fetchProductsByUid = async () => {
      try {
        // const { uid } = router.query;

        if (!uid) {
          return (
            <p className="text-center text-violet-500 mt-6">
              Product not found
            </p>
          );
          throw new Error("UID not provided");
        }

        const response = await axios.post(
          "https://us-central1-farmfuzion.cloudfunctions.net/get_cart_by_id",
          { uid: uid }
        );

        console.log(
          "Fetched products by UID:",
          response.data.cart_info.productInfo
        );
        setCartItems(response.data.cart_info.productInfo);
      } catch (error) {
        console.error("Error fetching products by UID:", error);
      }
    };

    fetchProductsByUid();
  }, [uid]);

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(
        "https://us-central1-farmfuzion.cloudfunctions.net/deletecart",
        {
          data: { uid },
        }
      );
      toast.success("Item Removed Successfully");
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCheckboxChange = () => {
    setShowCardDetails(!showCardDetails);
  };

  const handleImageClick = () => {
    setShowCardDetails(true);
  };

  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleMobileCheckboxChange = () => {
    setShowMobileDetails(!showMobileDetails);
  };

  const handleMobileImageClick = () => {
    setShowMobileDetails(true);
  };

  // const [phoneNumber, setPhoneNumber] = useState();

  const handlePayment = () => {
    // e.preventDefault();
    console.log("UID", uid);

    axios
      .post(
        "https://us-central1-farmfuzion.cloudfunctions.net/purchaseSTKPush",
        {
          uid: uid,
          idNumber_registrationNumber: "254719196591",
        }
      )
      .then((response) => {
        console.log("Payment Response", response);
        Swal.fire({
          title: "Payment Successful!",
          text: "You can now start tracking your product.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Payment Failed",
          text: "An error occurred while processing the payment.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className=' flex flex-col min-h-screen'>
      <Navp />
      <ModalForm
        show={showMobileDetails}
        onClose={() => setShowMobileDetails(false)}
        handlePayment={handlePayment}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        amount={amount}
        setAmount={setAmount}
      />
      <BankPaymentForm
        show={showCardDetails}
        onClose={() => setShowCardDetails(false)}
        handlePayment={handlePayment}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        amount={amount}
        setAmount={setAmount}
      />
      <div className="grid grid-cols-1 md:mx-20 lg:mx-20 md:grid-cols-2 min-h-3/4  lg:grid-cols-2 mb-14 gap-6 mt-18">
        <div className="flex flex-col flex-grow mt-5 mb-20">
          <p className="font-semibold font-abc mb-10">Shipment</p>
          <div className="flex flex-col flex-wrap w-full md:ms-4 md:me-4 mb-20  rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {cartItems.map((cartItem, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-3 m-2 flex flex-col md:flex-row md:items-center flex-1  "
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={cartItem.media}
                      alt={cartItem.title}
                      layout="fill"
                      className="rounded-md mx-auto  object-cover"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <p className="text-md font-abc">{cartItem.title}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                    <p>Ksh: {cartItem.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="bg-white shadow-lg rounded-md md:rounded-full p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className='text-green-400' />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className='flex justify-around'>
                  <AirportShuttle />
                  <p className='ml-1'>Standard delivery(48 hours)</p>
                </span>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>Change</p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>Ksh 40</p>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="bg-white shadow-lg rounded-md md:rounded-full p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className='text-green-400' />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className='flex justify-around'>
                  <CardGiftcard />
                  <p className='ml-1'>Apply</p>
                </span>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>XXX-8888-4444</p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>Ksh 10</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="bg-white shadow-lg rounded-md md:rounded-full p-4 m-4 flex flex-col md:flex-row md:items-center flex-1">
              <div className="flex-shrink-0">
                <Circle className='text-green-400' />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <span className='flex justify-around'>
                  <CardGiftcard />
                  <p className='ml-1'>Apply Gift card</p>
                </span>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col  p-3 m-3  mt-20 mb-20 ">
          <p className="font-abc text-md mb-2 mt-2">
            <span className="text-md pr-2">Total pay amount Ksh </span> <span className="font-bold">{Total}</span>
          </p>
          <center>
            {" "}
            <p className="font-abc text-md">CHOOSE A PAYMENT METHOD</p>
          </center>
          <div>
            <div className="flex flex-col sm:flex-col mt-6 rounded-md shadow-md p-2 ">
              <div className="flex flex-col sm:flex-col md:flex-row justify-between">
                <div className="flex flex-col sm:flex-row md:flex-row items-center">
                  <input
                    type="checkbox"
                    onChange={handleMobileCheckboxChange}
                    checked={showMobileDetails} 
                  />
                  <p className=" text-md font-abc ml-4">Mobile Money</p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row">
                  <div
                    className="relative w-20 h-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
                    onClick={handleMobileImageClick}
                  >
                    <Image
                      src="/airtel.png"
                      alt="Airtel"
                      layout="fill"
                      className="rounded-md mx-auto object-cover"
                    />
                  </div>
                  <div
                    className="relative w-20 h-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
                    onClick={handleMobileImageClick}
                  >
                    <Image
                      src="/mpesa.png"
                      alt="M-Pesa"
                      layout="fill"
                      className="rounded-md mx-auto object-cover"
                    />
                  </div>
                  <div
                    className="relative w-20 h-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
                    onClick={handleMobileImageClick}
                  >
                    <Image
                      src="/equitel.webp"
                      alt="Equitel"
                      layout="fill"
                      className="rounded-md mx-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-col mt-6 rounded-md shadow-md p-2 ">
              <div className="flex flex-col sm:flex-col md:flex-row justify-between">
                <div className="flex flex-col sm:flex-row md:flex-row items-center">
                  <input type="checkbox" onChange={handleCheckboxChange} checked={setShowCardDetails} />
                  <p className="font-abc text-md ml-4">Bank Cards</p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row items-center">
                  <div
                    className="relative w-20 h-12 me-8 sm:w-full sm:mb-4 md:w-20 md:h-12"
                    onClick={handleImageClick}
                  >
                    <Image
                      src="/visa.png"
                      alt="Visa"
                      layout="fill"
                      className="rounded-md mx-auto object-cover"
                    />
                  </div>
                  <div
                    className="relative w-20 h-12 me-8 sm:w-full md:w-20 md:h-12"
                    onClick={handleImageClick}
                  >
                    <Image
                      src="/mastercard.png"
                      alt="Mastercard"
                      layout="fill"
                      className="rounded-md mx-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
</div>
  );
}
