"use client";
import InsuranceFAQ from "@/app/components/InsuranceFAQ";
import SideNav from "@/app/components/SideNav";
import React from "react";

// Icons
import { BiSolidShieldPlus } from "react-icons/bi";
import { FaSeedling } from "react-icons/fa";
import { PiCowDuotone } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { PiWarehouseFill } from "react-icons/pi";

export default function farmer_insurance_Page() {
  // Insurance styles
  //   ins_styles = {
  //     fontFamily: "Poppins",
  //   };
  return (
    <div className="flex blank:hidden">
      <SideNav />
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* `````````````````````````````````````````````````````Main container``````````````````````````````````````````````````````````` */}
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      <div className="flex flex-col absolute h-full w-fi_w ml-fi_L   overflow-auto lx:ml-2 lx:w-wz">
        {/* top section */}
        <div className="flex justify-end mt-4 h-8 w-full  gap-x-2 mb-2 ">
          <label
            className="h-8 w-1/3 text-xl text-darkerGreen mr-32  xs:hidden"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
            }}
          >
            Insurance Options for Farmers
          </label>
          <input
            type="search"
            placeholder="Insurance Service"
            className="h-8 w-60 text-sm rounded-lg  outline-none p-2 very_s:w-32"
            style={{
              border: "1px solid #76c5dc",
              fontFamily: "poppins",
              fontWeight: "500",
              color: "black",
            }}
          />
          <button
            className="h-8 w-32 bg-green-500 rounded-lg outline-none border-none hover:bg-darkerGreen text-sm xs:text-text_mini"
            style={{
              fontFamily: "poppins",
              fontWeight: "400",
              color: "white",
            }}
          >
            Search
          </button>
          <button
            className="h-8 w-48 bg-green-500 rounded-lg outline-none hover:bg-darkerGreen border-none text-sm xs:text-text_mini very_s:text-vs"
            style={{
              fontFamily: "poppins",
              fontWeight: "400",
              color: "white",
            }}
          >
            Claim Request
          </button>
        </div>
        {/* ``````````````````````````````insurance Section 1``````````````````````````````````````````````````````````` */}
        {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}

        <div className="flex flex-flow h-40 w-full relative   gap-x-2 mx_w:flex-col mx_w:h-vt_h ">
          {/* `````````````````Health Insurance */}
          <div
            className="h-full w-full bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2 "
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <BiSolidShieldPlus
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0 "
            />
            <div className="h-10 w-full  mx_w:h-6 pt-1 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Health Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini mx_w:text-mid very_s:text-vs "
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Protect yourself and your family members today, ensuring that
                your health stays as resilient as your fields.
              </label>
            </div>
            <div className="h-10 w-full   relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* ````````property insurance````````````` */}
          <div
            className="h-full w-full  bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2"
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <PiWarehouseFill
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0"
            />
            <div className="h-10 w-full  mx_w:h-6 pt-1 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Property Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Protect your barns and your storage facilities today, mitigating
                the risk of loss of valuable assets and produce.
              </label>
            </div>
            <div className="h-10 w-full  relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* `````````````````crop Insurance */}
          <div
            className="h-full w-full bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2 "
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <FaSeedling
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0"
            />
            <div className="h-10 w-full pt-1 mx_w:h-6 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Crop Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Protect your investment, ensure your crops are covered from
                failures. Harvest peace of mind with crop insurance.
              </label>
            </div>
            <div className="h-10 w-full relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* ``````````````````````````````insurance Section 2``````````````````````````````````````````````````````````` */}
        {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        <div className="flex flex-flow h-40 w-full relative   mt-2 gap-x-2  mx_w:flex-col mx_w:h-full  ">
          {/* ````````Equipment insurance````````````` */}
          <div
            className="h-full w-full mt-2 bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2"
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <FaTractor
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0"
            />
            <div className="h-10 w-full pt-1 mx_w:h-6 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Equipment Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Keep your farm running smoothly with equipment insurance. From
                tractors to harvesters, dont let accidents drain your finances.
              </label>
            </div>
            <div className="h-10 w-full relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* `````````````````Livestock Insurance */}
          <div
            className="h-full w-full mt-2 bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2 "
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <PiCowDuotone
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0"
            />
            <div className="h-10 w-full pt-1 mx_w:h-6 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Livestock Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Ensure the well-being of your herd and the stability of your
                operation. Secure your livestock from diseases, accidents or
                disasters.
              </label>
            </div>
            <div className="h-10 w-full  relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* ````````Liability insurance````````````` */}
          <div
            className="h-full w-full mt-2 bg-white rounded-lg pl-2 relative mx_w:w-full mx_w:mt-2"
            style={{ boxShadow: " 0px 2px 8px rgba(0,0,0,0.3)" }}
          >
            <FaUserInjured
              size={25}
              className="absolute top-1 right-2 text-darkerGreen xs:top-0"
            />
            <div className="h-10 w-full pt-1 mx_w:h-6 mx_w:pt-0">
              <label
                className=" text-lg  xs:text-sm mx_w:text-lg very_s:text-sm"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#1844AD",
                }}
              >
                Liability Insurance
              </label>
            </div>
            <div className="h-20 w-full ">
              <label
                className=" text-sm  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Protect yourself from the unexpected costs of lawsuits, property
                damage, or bodily injury claims.
              </label>
            </div>
            <div className="h-10 w-full  relative">
              <button
                className="absolute bottom-1 left-0 h-8 w-1/3 bg-customGreen text-white text-sm outline-none border-none rounded-lg cursor-pointer hover:bg-green-700 xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Get Cover
              </button>

              <button
                className="absolute bottom-1 right-2 h-8 w-1/3 bg-transparent text-red-500 text-sm outline-none border-none rounded-lg hover:text-blue-500 cursor-pointer xs:text-text_mini mx_w:h-7"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* ``````````````````````````````insurance Section 3``````````````````````````````````````````````````````````` */}
        {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        <div className="flex justify-start h-6 w-full relative   mt-4 gap-x-6 p-1 mx_w:flex-col mx_w:gap-y-2 mx_w:h-8  ">
          <label
            className=" text-green-600  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Insurance Premium Calculator
          </label>
        </div>
        <div className="flex justify-end h-10 w-full relative   mt-2 gap-x-6 p-1 mx_w:flex-col mx_w:gap-y-2 mx_w:h-60  ">
          <input
            type="text"
            placeholder="Loan Amount"
            className="h-10 w-1/4 text-sm rounded-md  outline-none p-2 mx_w:w-btn_bt mx_w:h-10"
            style={{
              border: "1px solid #76c5dc",
              fontFamily: "poppins",
              fontWeight: "500",
              color: "black",
            }}
          />
          <input
            type="text"
            placeholder="Interest Rate"
            className="h-10 w-1/4 text-sm rounded-md  outline-none p-2 mx_w:w-btn_bt mx_w:h-10"
            style={{
              border: "1px solid #76c5dc",
              fontFamily: "poppins",
              fontWeight: "500",
              color: "black",
            }}
          />
          <input
            type="text"
            placeholder="Number of months"
            className="h-10 w-1/4 text-sm rounded-md  outline-none p-2 mx_w:w-btn_bt mx_w:h-10"
            style={{
              border: "1px solid #76c5dc",
              fontFamily: "poppins",
              fontWeight: "500",
              color: "black",
            }}
          />
          <button
            className="h-10 w-1/4 text-sm rounded-md bg-red-700 hover:bg-red-600 border-none outline-none mx_w:w-btn_bt mx_w:h-10"
            style={{
              fontFamily: "poppins",
              fontWeight: "500",
              color: "white",
            }}
          >
            Calculate
          </button>
        </div>
        {/* ``````````````````````````````insurance Section 4``````````````````````````````````````````````````````````` */}
        {/* ```````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
        <div className="flex justify-start h-6 w-full relative   mt-2 gap-x-6 p-1 mx_w:flex-col mx_w:gap-y-2 mx_w:h-8  ">
          <label
            className=" text-green-600  xs:text-text_mini  mx_w:text-mid very_s:text-vs"
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Insurance FAQs
          </label>
        </div>
        <div className="flex flex-col  h-64 w-full relative   mt-0 gap-x-6 p-1 mx_w:flex-col mx_w:gap-y-2 mx_w:h-60  ">
          <InsuranceFAQ />
        </div>
      </div>
    </div>
  );
}
