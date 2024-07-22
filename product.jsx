"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Axios from "axios";
import SB5 from "@/app/components/SB5";
import TopCoop from "@/app/components/TopCoop";

export default function Cproduct_page() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const router = useRouter();
  function go_to_existing_products() {
    router.push("/cooperate/CDashboard/Cproducts/ExistingProducts");
  }
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
    color: "#030303;",
  };

  // product section 2 mini styles
  var p_mini_styles = {
    fontFamily: "Quicksand",
    fontSize: "10px",
    fontWeight: "600",
    color: "#696262",
  };

  const open_products_Nav = () =>
    (document.getElementById("products_side_bar").style.left = "3%");
  const close_products_Nav = () =>
    (document.getElementById("products_side_bar").style.left = "-100%");
  const [Loading, setLoading] = useState("");
  const [title, setTitle] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
  };

  const createProduct = (e) => {
    e.preventDefault();

    const product_id = uuidv4();

    if (
      title &&
      productStatus &&
      description &&
      media &&
      itemQuantity &&
      productCategory &&
      productType &&
      itemPrice &&
      totalPrice &&
      finalPrice
    ) {
      setLoading(true);

      const imageRef = ref(storage, `products/${media.name}`);

      uploadBytes(imageRef, media).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          Axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/addproduct",
            {
              title: title,
              productStatus: productStatus,
              description: description,
              media: url, // Use the image URL here
              itemQuantity: itemQuantity,
              productCategory: productCategory,
              productType: productType,
              itemPrice: itemPrice,
              totalPrice: totalPrice,
              finalPrice: finalPrice,
            }
          )
            .then((response) => {
              console.log("Response data:", response.data);
              // setLoading(false);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Created Successfully",
                text: "Product Added",
              });
            })
            .catch((err) => {
              console.log(err.message);
              // setLoading(false);
            });
        });
      });
    } else {
      Swal.fire({
        title: "All Fields Are Required!",
        text: "Please Fill All Fields",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <>
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-0 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
        {/* ````Products section titles ```` */}
        <div className="flex flex-flow  h-10 w-tw xb:ml-5 ">
          <button
            className=" h-10 w-48 text-base xs:w-32 xs:text-sm mini_s:text-vs mini_s:w-24 very_s:collapse"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#19802a",
              textAlign: "start",
              borderBottom: "1px solid #76c5dc",
            }}
          >
            ADD PRODUCTS
          </button>

          <button
            className=" h-10 w-48 text-base hover:border-b-red-300 border-b-2  xs:w-36 xs:text-sm xs:left-36  mini_s:text-vs mini_s:w-28 mini_s:left-28 very_s:collapse"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#19802a",
            }}
            onClick={go_to_existing_products}
          >
            EXISTING PRODUCTS
          </button>
          <button
            className=" h-10 w-48 text-base  hover:border-b-red-300 border-b-2  xs:w-36 xs:text-sm xs:left-resize_prod  mini_s:text-vs mini_s:w-20 mini_s:left-60  very_s:collapse"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#19802a",
            }}
          >
            INVENTORY
          </button>
        </div>

        {/* ````Products Content ````````` */}
        <form onSubmit={createProduct}>
          <div className="flex flex-col xb:ml-5">
            <div className="flex flex-flow  h-5/6 w-tw gap-x-5 xs:flex-col xs:w-ws ">
              <div className="flex flex-col relative  h-full w-wx xs:w-we ">
                <label className="absolute top-1 left-0" style={stylies_dict}>
                  Title
                </label>
                <input
                  type="text"
                  name=""
                  id="product_title"
                  placeholder="A sack of potatoes"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-6 w-p_inpt_w h-8 rounded-lg p-1 my-0 "
                  style={{ border: "1px solid #76c5dc", outline: "none" }}
                />

                <select
                  value={productStatus}
                  onChange={(e) => setProductStatus(e.target.value)}
                  className="absolute top-6 right-0 w-4/12 h-8 rounded-lg p-.5 "
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    border: "1px solid #76c5dc",
                    outline: "none",
                  }}
                >
                  <option value="" disabled>
                    Select Product Status
                  </option>
                  <option value="available">Available</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>

                <label className="absolute top-16 left-0" style={stylies_dict}>
                  Description
                </label>
                <textarea
                  name=""
                  id="product_textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-12 w-full_width h-40 rounded-lg p-2 "
                  style={{
                    resize: "none",
                    border: "1px solid #76c5dc",
                    outline: "none",
                  }}
                ></textarea>
                <label
                  className="absolute top-media_t left-0"
                  style={stylies_dict}
                >
                  Media
                </label>
                <div
                  className="absolute top-72 left-0 w-full h-64"
                  style={{
                    border: "1px solid #76c5dc",
                    borderRadius: "8px",
                  }}
                >
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="flex flex-col h-10 w-2/5  absolute top-6 left-tax_check_label"
                  />
                </div>
              </div>
              <div className=" w-wx xs:w-we xs:mt-12">
                {/* 2 */}
                <div className="flex flex-col h-full w-full relative xb:mt-56 ">
                  <div
                    className="flex flex-flow h-24  relative w-full bg-white mt-6 mb-2 rounded-lg"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
                  >
                    <label
                      className="absolute top-2 left-text_l"
                      style={p_styles}
                    >
                      Item Quantity
                    </label>
                    <input
                      type="number"
                      name=""
                      id="product_quantity_box"
                      placeholder="Enter Item Quantity "
                      value={itemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      className="absolute top-10 left-text_l w-text_w h-8 rounded-lg p-2 outline-none "
                      style={{
                        border: "1px solid #76c5dc",
                      }}
                    />
                  </div>

                  <div
                    className="flex flex-col h-40 w-full bg-white mb-2 absolute top-36 rounded-lg"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
                  >
                    <label
                      className="absolute top-1 left-text_l"
                      style={p_styles}
                    >
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
                        id="product_cat_select"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="absolute top-14 left-text_l w-text_w h-8 rounded-lg  outline-none "
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
                        className="absolute top-label_t left-text_l"
                        style={p_mini_styles}
                      >
                        Product type
                      </label>
                      <select
                        name=""
                        id="product_yype_select"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="absolute top-28 left-text_l w-text_w h-8 rounded-lg  outline-none "
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
                    className="flex flex-col h-price_h w-full bg-white mb-2 absolute top-80 rounded-lg"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
                  >
                    <label
                      className="absolute top-1 left-text_l"
                      style={p_styles}
                    >
                      Pricing
                    </label>
                    <div>
                      <label
                        className="absolute top-6 left-text_l"
                        style={p_mini_styles}
                      >
                        Item Price
                      </label>
                      <input
                        type="number"
                        name=""
                        id="single_item_price_box"
                        placeholder="0.00 Ksh"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        className="absolute top-10 left-text_l w-4/5 h-8 rounded-lg  outline-none "
                        style={{
                          border: "1px solid #76c5dc",
                        }}
                      />
                    </div>

                    <div className="Total_price">
                      <label
                        className="absolute top-20 left-text_l"
                        style={p_mini_styles}
                      >
                        Total Price
                      </label>
                      <input
                        type="number"
                        name=""
                        id="Total_price_box"
                        placeholder="0.00$"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                        className="absolute top-24 left-text_l w-4/5 h-8 rounded-lg  outline-none "
                        style={{
                          border: "1px solid #76c5dc",
                        }}
                      />
                    </div>

                    <div className="Final_price">
                      <label
                        className="absolute top-32 left-text_l"
                        style={p_mini_styles}
                      >
                        Final Price
                      </label>
                      <input
                        type="number"
                        name=""
                        id="Final_price_box"
                        placeholder="0.00$"
                        value={finalPrice}
                        onChange={(e) => setFinalPrice(e.target.value)}
                        className="absolute top-36 left-text_l w-4/5 h-8 rounded-lg  outline-none "
                        style={{
                          border: "1px solid #76c5dc",
                        }}
                      />
                    </div>

                    {/* <div className="product_tax">
                    <input
                      type="checkbox"
                      name="tax_box"
                      id="tax_check_box"
                      className="absolute top-ct h-4 w-4 left-tax_check_label"
                    />
                    <label
                      className="absolute top-ct left-tax_label"
                      style={{ fontSize: "11px", color: "#696262" }}
                    >
                      Charge tax for this product
                    </label>
                  </div>
                  <div>
                    <label
                      className="absolute top-48 left-tr text-blue-500 hover:text-red-700 cursor-pointer"
                      style={{
                        fontWeight: "600",
                        fontSize: "13px",
                      }}
                    >
                      Tax rates
                    </label>
                  </div> */}
                    <div>
                      <button
                        type="submit"
                        className="absolute bottom-1 h-8 w-44 bg-green-500 right-1/3 outline-none border-none rounded-lg hover:bg-blue-600"
                        style={{
                          fontWeight: "600",
                          fontSize: "13px",
                          color: "white",
                        }}
                      >
                        ADD TO MARKET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
