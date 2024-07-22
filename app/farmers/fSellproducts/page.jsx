"use client";
import SideNav from "@/app/components/SideNav";
import React from "react";

// Icons
// styles dictionary
var stylies_dict = {
  fontFamily: "Poppins",
  fontSize: "13px",
  color: "black",
  fontWeight: "600",
};

// product section 2 styles
var p_styles = {
  fontFamily: "Quicksand",
  fontSize: "16px",
  fontWeight: "600",
  color: "#030303",
};

// product section 2 mini styles
var p_mini_styles = {
  fontFamily: "Quicksand",
  fontSize: "10px",
  fontWeight: "600",
  color: "#696262",
};
export default function sell_products_Page() {
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

      <div className="flex flex-row  mt-4 absolute h-we w-spw   gap-x-3 b ml-fi_L overflow-auto lx:ml-2 lx:w-wz xs:flex-col ">
        <div className="flex flex-col h-full relative w-mdw  xs:w-wz">
          <div className="farmer_sell">
            <label
              className="text-darkerGreen h-6 w-full  mb-4"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "18px",
                borderBottom: "1px solid #76c5dc",
              }}
            >
              SELL PRODUCTS
            </label>
          </div>

          <label className="absolute top-10 left-0 " style={stylies_dict}>
            Title
          </label>
          <input
            type="text"
            name=""
            id="farmer_product_title"
            placeholder="A sack of potatoes"
            className="mt-8 w-full h-10 rounded-lg pl-2 my-0 text-md "
            style={{
              border: "1px solid #76c5dc",
              outline: "none",
              fontFamily: "Quicksand",
              fontWeight: "600",
            }}
          />
          <label className="absolute top-28 left-0" style={stylies_dict}>
            Description
          </label>
          <textarea
            name=""
            placeholder="Enter description of product"
            id="farmer_product_textarea"
            className="mt-12 w-full_width h-48 rounded-lg p-2 "
            style={{
              resize: "none",
              border: "1px solid #76c5dc",
              outline: "none",
              fontFamily: "Quicksand",
              fontWeight: "500",
            }}
          ></textarea>
          <label className="absolute top-med_b left-0" style={stylies_dict}>
            Media
          </label>
          <div
            className="mt-10 ml-0 w-full h-60 mb-4"
            style={{
              border: "1px solid #76c5dc",
              borderRadius: "8px",
            }}
          >
            <input
              type="file"
              className="flex flex-col h-10 w-3/5  relative mt-20 ml-prod_Img"
            />
          </div>
        </div>
        <div className="flex flex-col h-full relative w-tr  xs:w-wz">
          <div
            className="flex flex-flow h-24  relative w-full bg-white mt-6 mb-2 rounded-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
          >
            <label className="absolute top-2 left-text_l" style={p_styles}>
              Item Quantity
            </label>
            <input
              type="number"
              name=""
              id="farmer_product_quantity_box"
              placeholder="Enter Item Quantity "
              className="absolute top-10 left-text_l w-text_w h-8 rounded-lg p-2 outline-none "
              style={{
                border: "1px solid #76c5dc",
                fontFamily: "Quicksand",
                fontWeight: "600",
              }}
            />
          </div>
          {/* ``````````````````farmer product details````````````````````````````````` */}
          <div
            className="flex flex-col h-48 w-full bg-white mb-2 absolute top-36 rounded-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
          >
            <label className="absolute top-1 left-text_l" style={p_styles}>
              Product Detail
            </label>
            <div className="product_category">
              <label
                className="absolute top-9 left-text_l"
                style={p_mini_styles}
              >
                Product Category
              </label>
              <select
                name=""
                id="farmer_product_cat_select"
                className="absolute top-14 left-text_l w-text_w h-10 rounded-lg  outline-none "
                style={{
                  border: "1px solid #76c5dc",
                }}
              >
                <option value="Farm Gear">Farm Gear</option>
                <option value="Farm Produce">Farm Produce</option>
                <option value="Seeds">Seeds</option>
                <option value="Farm tools">Farm tools</option>
                <option value="Livestock feeds">Livestock feeds</option>
                <option value="Fertilizer">Fertilizer</option>
              </select>
            </div>

            <div className="product_type">
              <label
                className="absolute top-28 left-text_l"
                style={p_mini_styles}
              >
                Product type
              </label>
              <select
                name=""
                id="farmer_product_type_select"
                className="absolute top-32 left-text_l w-text_w h-10 rounded-lg  outline-none "
                style={{
                  border: "1px solid #76c5dc",
                }}
              >
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>
          </div>
          {/*`````````````````````Product Pricing````````````````````````````  */}
          <div
            className="flex flex-col h-farmer_price_box w-full bg-white mb-2 mt-56 relative rounded-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
          >
            <label className="absolute top-1 left-text_l" style={p_styles}>
              Pricing
            </label>
            <div>
              <label
                className="absolute top-8 left-text_l"
                style={p_mini_styles}
              >
                Price for single item
              </label>
              <input
                type="number"
                name=""
                id="single_item_price_box"
                placeholder="0.00 Ksh"
                className="absolute top-12 left-text_l w-4/5 h-10 rounded-lg pl-2 outline-none "
                style={{
                  border: "1px solid #76c5dc",
                  fontFamily: "Quicksand",
                  fontWeight: "600",
                }}
              />
            </div>

            <div className="Total_price">
              <label
                className="absolute top-24 left-text_l"
                style={p_mini_styles}
              >
                Total Item Price
              </label>
              <input
                type="number"
                name=""
                id="Total_price_box"
                placeholder="0.00$"
                className="absolute top-28 left-text_l w-4/5 h-10 rounded-lg pl-2 outline-none "
                style={{
                  border: "1px solid #76c5dc",
                  fontFamily: "Quicksand",
                  fontWeight: "600",
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                className=" absolute top-44 left-12 h-10 w-44 bg-green-500 outline-none border-none rounded-lg hover:bg-blue-600 mini_s:w-32 very_s:w-16"
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Submit
              </button>
              <button
                type="submit"
                className=" absolute top-44 right-12 h-10 w-44 bg-red-500 outline-none border-none rounded-lg hover:bg-red-800 mini_s:w-32 very_s:w-16"
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
