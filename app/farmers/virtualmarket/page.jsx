"use client";
import Navm from "@/app/components/Navm";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CodeOutlined, Favorite } from "@mui/icons-material";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Axios from "axios";
import ProductList from "@/app/components/ProductList";
import { ExpandMore, ExpandLess, ArrowForwardIos } from "@mui/icons-material";
export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://us-central1-farmfuzion.cloudfunctions.net/get_product")
      .then((response) => {
        console.log("Products:", response.data.products);
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  return (
    <>
      <Navm />

      <div className="bg-cover  bg-center bg-card3  mt-5 h-48 text-white">
        <div className="flex items-center  justify-center h-full ">
          <h1 className="md:text-2xl lg:text-2xl text-sm text-white z-index-10 font-bold">
            Nature Best Agriculture Products
          </h1>
        </div>
      </div>
      <div className="flex flex-row w-full mt-4 justify-center">
        <input
          type="text"
          className="mt-1 p-2 mr-5 w-1/2 px-20 block  border rounded-lg shadow-md"
          placeholder="search here..."
          style={styles}
        />
        <button
          type="submit"
          className="px-5  bg-card3 hover:bg-teal-700 font-bold text-white rounded"
        >
          Search{" "}
        </button>
      </div>
      <div className="flex md:flex-row mr-20  w-full  flex-col">
        <div className="md:w-1/6 lg:w-1/6 w-full mt-6 p-4 flex flex-grow flex-col">
          <div>
            <div className="p-4 rounded shadow-lg bg-white w-full">
              <h2 className="text-2xl font-semibold font-abc text-card3 mb-4">
                Categories
              </h2>
              <ul>
                <li className="flex text-card3  justify-between mb-4 items-center cursor-pointer">
                  <span>
                    {" "}
                    <ArrowForwardIos className="text-card3 text-sm mr-2" />{" "}
                    Fertilizers
                  </span>
                </li>
                <li className="flex justify-between text-card3 mb-4 items-center cursor-pointer">
                  <span>
                    {" "}
                    <ArrowForwardIos className="text-card3 text-sm mr-2" /> Farm
                    Gear
                  </span>
                </li>
                <li className="flex justify-between text-card3 mb-4 items-center cursor-pointer">
                  <span>
                    {" "}
                    <ArrowForwardIos className="text-card3 text-sm mr-2" /> Farm
                    Seeds
                  </span>
                </li>
                <li className="flex justify-between text-card3 mb-4 mb-4 items-center cursor-pointer">
                  <span>
                    {" "}
                    <ArrowForwardIos className="text-card3 text-sm mr-2" />{" "}
                    Whole grain
                  </span>
                </li>
                <li className="flex justify-between text-card3 mb-3 items-center cursor-pointer">
                  <span>
                    {" "}
                    <ArrowForwardIos className="text-card3 text-sm mr-2" /> Fresh Milk
                  </span>
                </li>
                {isExpanded && (
                  <ul>
                    <li className="flex justify-between text-card3 mb-3 items-center cursor-pointer">
                      <span>
                        {" "}
                        <ArrowForwardIos className="text-card3 text-sm mr-2" />{" "}
                        White Meat
                      </span>
                    </li>
                    <li className="flex justify-between text-card3 mb-3 items-center cursor-pointer">
                      <span>
                        {" "}
                        <ArrowForwardIos className="text-card3 text-sm mr-2" />{" "}
                        Red Meat
                      </span>
                    </li>
                  </ul>
                )}
                <li className="flex flex-row justify-end">
                  {" "}
                  <span onClick={toggleExpand} className="ml-2 bg-card3 text-white rounded-full">
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-grow p-2 md:w-10/12 lg:w-10/12 w-full">
          <ProductList products={products} />
        </div>
      </div>
      <Footer />
    </>
  );
}
