"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import Axios from "axios";
import SB5 from "@/app/components/SB5";
import TopCoop from "@/app/components/TopCoop";
import { saveAs } from "file-saver";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";

export default function Cproduct_page() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const router = useRouter();
  const open_products_Nav = () =>
    (document.getElementById("products_side_bar").style.left = "3%");
  const close_products_Nav = () =>
    (document.getElementById("products_side_bar").style.left = "-100%");
  const [Loadings, setLoadings] = useState(false);
  const [title, setTitle] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [productStatusUpdate, setProductStatusUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [mediaUpdate, setMediaUpdate] = useState("");
  const [itemQuantityUpdate, setItemQuantityUpdate] = useState("");
  const [productCategoryUpdate, setProductCategoryUpdate] = useState("");
  const [productTypeUpdate, setProductTypeUpdate] = useState("");
  const [itemPriceUpdate, setItemPriceUpdate] = useState("");
  const [totalPriceUpdate, setTotalPriceUpdate] = useState("");
  const [finalPriceUpdate, setFinalPriceUpdate] = useState("");
  const [activeStep, setActiveStep] = useState("existingproducts");
  const [finalPrice, setFinalPrice] = useState("");
  const [updatesProduct, setUpdatesProduct] = useState([]);
  const [uidss, setUidss] = useState();
  const [imageUrl, setImageUrl] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
  };
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };

  const createProduct = (e) => {
    e.preventDefault();
    const registrationNumber = window.localStorage.getItem("registrationNumber");

    if (registrationNumber == "") {
      toast.error("Missing registration Number");
      return;
    }

    console.log("my data", title, productStatus, description, media, setItemPrice, productCategory, productType, itemPrice, totalPrice, finalPrice);


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
      setLoadings(true);

      const imageRef = ref(storage, `products/${media.name}`);

      uploadBytes(imageRef, media).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          Axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/addproduct",
            {
              registrationNumber,
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
              setLoadings(false);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Created Successfully",
                text: "Product Added",
              });
            })
            .catch((err) => {
              console.log(err.message);
              setLoadings(false);
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
  const downloadCSV = () => {
    // Define column headers
    const headers = [
      "Product Name",
      "Description",
      "Product Quantity",
      "Product Price",
      "Total Price",
      "Product Category",
      "Product Status",
      "Product Image",
      "Action",
    ];

    // Convert filtered data (filter state) to CSV format
    const csvContent = [
      headers.join(","), // Add header row
      ...filter.map(
        (row) =>
          `${row.title},${row.description},${row.itemQuantity},${row.itemPrice},${row.totalPrice},${row.productCategory},${row.productStatus},${row.media},View`
      ),
    ].join("\n");

    // Create a Blob object for the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Save blob as a file using file-saver library
    saveAs(blob, "Products.csv");
  };
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.title,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Product Quantity",
      selector: (row) => row.itemQuantity,
    },
    {
      name: "Product Price",
      selector: (row) => row.itemPrice,
    },
    {
      name: "Total Price",
      selector: (row) => row.totalPrice,
    },
    {
      name: "Product Category",
      selector: (row) => row.productCategory,
    },
    {
      name: "Product Status",
      selector: (row) => row.productStatus,
    },
    {
      name: "Product Image",
      selector: (row) => <Image height={70} alt="product" width={70} src={row.media} />,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          style={{
            backgroundColor: "#01565b",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px",
            border: "none",
          }}
          onClick={() => handleDelete(row.uid)}
          disabled={userRole !== 'cooperative'}
        >
          View
        </button>
      ),
    },
  ];

  const handleDelete = (uids) => {
    setUidss(uids);
    const result = loanrequests.filter((item) => {
      return item.uid && item.uid.match(uids);
    });
    if (result.length > 0) {
      setActiveStep('updateproduct');
      setDescriptionUpdate(result[0].description);
      setTitleUpdate(result[0].title);
      setFinalPriceUpdate(result[0].finalPrice);
      setItemPriceUpdate(result[0].itemPrice);
      setTotalPriceUpdate(result[0].totalPrice);
      setItemQuantityUpdate(result[0].itemQuantity);
      setProductCategoryUpdate(result[0].productCategory);
      setProductTypeUpdate(result[0].productType);
      setProductStatusUpdate(result[0].productStatus);
      setMediaUpdate(result[0].media);
      setUpdatesProduct(result[0]);
    } else {
      alert("No details to view");
    }



  };

  const [filter, setFilters] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [loanrequests, setloanrequests] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const registrationNumber = window.localStorage.getItem("registrationNumber");
    console.log("Response Reg:", registrationNumber)

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/fetch_products_by_registration_number",
      {
        registrationNumber: registrationNumber
      }
    )
      .then((response) => {
        console.log("Response:", response.data.products);
        setloanrequests(response.data);
        console.log("existing products", response.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });
  });

  useEffect(() => {
    const result = loanrequests.filter((item) => {
      return item.title.match(searchs);
    });
    setFilters(result);
    console.log("Result", result);
  }, [searchs, loanrequests]);

  const tableHeaderStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        fontWeight: "bold",
        fontSize: "14px",
        text: "white",
        font: "abc",
      },
    },
  };
  const UpdateProduct = async () => {
    setLoadings(true);

    if (
      titleUpdate &&
      productStatusUpdate &&
      descriptionUpdate &&
      mediaUpdate &&
      itemQuantityUpdate &&
      productCategoryUpdate &&
      productTypeUpdate &&
      itemPriceUpdate &&
      totalPriceUpdate &&
      finalPriceUpdate
    ) {
      const imageRef = ref(storage, `products/${mediaUpdate.name}`);

      uploadBytes(imageRef, mediaUpdate).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          try {
            async function UpdateProduct() {
              const response = await axios.post('https://us-central1-farmfuzion.cloudfunctions.net/update_product', {
                title: titleUpdate,
                productStatus: productStatusUpdate,
                uid: uidss,
                media: url,
                description: descriptionUpdate,
                itemQuantity: itemQuantityUpdate,
                productCategory: productCategoryUpdate,
                productType: productTypeUpdate,
                itemPrice: itemPriceUpdate,
                totalPrice: totalPriceUpdate,
                finalPrice: finalPriceUpdate
              });
              if (response.data.success == "Product updated successfully") {
                toast.success("Product updated successfully");
                setLoadings(false);
                setActiveStep("existingproducts");
              }
            }
            UpdateProduct();
            console.log("how are you", url)
          } catch (error) {
            toast.error("An error occured");
            setLoadings(false);
          }
        });
      });
    } else {
      toast.error("All fields are required");
    }
  }
  const handleImageChangeUpdate = (e) => {
    const file = e.target.files[0];
    setMediaUpdate(file);
    const imageRef = ref(storage, `products/${mediaUpdate.name}`);

    uploadBytes(imageRef, mediaUpdate).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url)
      })
    });
  }

  // conditionaly show steps based on roles
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  return (
    <div className=" min-h-screen md:h-[100%]  sm:overflow-x-hidden">
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow h-full transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-0 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
        <div className="flex flex-grow  flex-col pt-2">
          {/* Stepper Navigation */}
          {/* <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("addproducts")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "addproducts"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Add Products
              </button>
              <button
                onClick={() => setActiveStep("existingproducts")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "existingproducts"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Existing Products
              </button>
              <button
                onClick={() => setActiveStep("updateproduct")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "updateproduct"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
                disabled={updatesProduct.length == 0}
              >
                Update Product
              </button>

              <button
                onClick={() => setActiveStep("inventory")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "inventory"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Inventory
              </button>
            
            </nav>
          </div> */}
          <div className="mb-3">
            <nav className="flex">
              {userRole === 'cooperative' && (
                <>
                  <button
                    onClick={() => setActiveStep("addproducts")}
                    className={`py-2 px-4 border-b-2 ${activeStep === "addproducts" ? "border-sky-10" : "border-transparent"
                      } text-textcolor font-bold rounded-l`}
                  >
                    Add Products
                  </button>
                  <button
                    onClick={() => setActiveStep("updateproduct")}
                    className={`py-2 px-4 border-b-2 ${activeStep === "updateproduct" ? "border-sky-10" : "border-transparent"
                      } text-textcolor font-bold rounded-r`}
                    disabled={updatesProduct.length === 0}
                  >
                    Update Product
                  </button>
                  <button
                    onClick={() => setActiveStep("inventory")}
                    className={`py-2 px-4 border-b-2 ${activeStep === "inventory" ? "border-sky-10" : "border-transparent"
                      } text-textcolor font-bold rounded-r`}
                  >
                    Inventory
                  </button>
                </>
              )}
              <button
                onClick={() => setActiveStep("existingproducts")}
                className={`py-2 px-4 border-b-2 ${activeStep === "existingproducts" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Existing Products
              </button>
            </nav>
          </div>

          {/* Create Loan Form */}
          {activeStep === "addproducts" && (
            <div className="grid grid-cols-1 md:p-5 py-5 h-3/4  px-3 flex-grow md:grid-cols-4 mr-10 gap-10 shadow-md bg-card ld:grid-cols-3">
              <div className="flex w-full flex-grow flex-col mr-10 mb-10">
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Quantity
                  </label>
                  <input
                    type="text"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Availability Status
                  </label>
                  <select
                    name={productStatus}
                    value={productStatus}
                    onChange={(e) => setProductStatus(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Availability</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
              </div>
              <div className="flex w-full flex-grow flex-col mr-10 mb-10">
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Category
                  </label>
                  <select
                    name={productCategory}
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Category</option>
                    <option value="Farm Gear">Farm Gear</option>
                    <option value="Farm Produce">Farm Produce</option>
                    <option value="Seeds">Seeds</option>
                    <option value="Farm tools">Farm tools</option>
                    <option value="Livestock feeds">Livestock feeds</option>
                    <option value="Fertilizer">Fertilizer</option>
                  </select>
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Type
                  </label>
                  <select
                    name={productType}
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="mt-1 p-2 py-3 block w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Cereals">Cereals</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-grow w-full flex-col mr-10">
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Price
                  </label>
                  <input
                    type="text"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Total Price
                  </label>
                  <input
                    type="text"
                    value={totalPrice}
                    onChange={(e) => setTotalPrice(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Final Price
                  </label>
                  <input
                    type="text"
                    value={finalPrice}
                    onChange={(e) => setFinalPrice(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
              </div>
              <div className="flex flex-grow w-full flex-col mb-10">
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    onClick={createProduct}
                    disabled={Loadings}
                    className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
                  >
                    {Loadings ? "Adding To Market" : "Add To Market"}
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeStep === "existingproducts" && (
            <>
              <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col ">
                <div></div>
                <div className="">
                  <input
                    placeholder="Search by product name"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      // marginBottom: '3px'
                    }}
                    value={searchs}
                    onChange={(e) => setSearchs(e.target.value)}
                  />
                  <button
                    onClick={downloadCSV}
                    className="bg-card3 text-white py-3 rounded-md p-4 ml-6"
                  >
                    Download Products List
                  </button>
                </div>
              </div>
              <div className=" transition-all duration-200 ease-out md:pr-2 lg:pr-2">
                {isloading ? (
                  <p className="text-xl text-center text-gray-900">
                    Loading...
                  </p>
                ) : (
                  <>
                    <DataTable
                      customStyles={tableHeaderStyles}
                      columns={columns}
                      data={filter}
                      pagination
                      paginationPerPage={9}
                      fixedHeader
                      selectableRowsHighlight
                      highlightOnHover
                      subHeader
                    />
                  </>
                )}
              </div>
            </>
          )}
          {/* {activeStep === "inventory" && <></>} */}
          {activeStep === "updateproduct" &&
            <div className="grid grid-cols-1 md:p-5 py-5 h-3/4  px-3 flex-grow md:grid-cols-4 mr-10 gap-10 shadow-md bg-card ld:grid-cols-3">
              <div className="flex w-full flex-grow flex-col mr-10 mb-10">
                <div className="mb-10">

                  <label className="block text-sm font-medium text-gray-700">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={titleUpdate}
                    onChange={(e) => setTitleUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm mb-1 font-medium text-gray-700">
                    Item Image
                  </label>
                  <Image src={updatesProduct.media} className="rounded-md" width={80} height={80} alt={title} />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Quantity
                  </label>
                  <input
                    type="text"
                    value={itemQuantityUpdate}
                    onChange={(e) => setItemQuantityUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>

              </div>
              <div className="flex w-full flex-grow flex-col mr-10 mb-10">
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Availability Status
                  </label>
                  <select
                    name={productStatusUpdate}
                    value={productStatusUpdate}
                    onChange={(e) => setProductStatusUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Availability</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
                <div className="mb-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Category
                  </label>
                  <select
                    name={productCategoryUpdate}
                    value={productCategoryUpdate}
                    onChange={(e) => setProductCategoryUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Category</option>
                    <option value="Farm Gear">Farm Gear</option>
                    <option value="Farm Produce">Farm Produce</option>
                    <option value="Seeds">Seeds</option>
                    <option value="Farm tools">Farm tools</option>
                    <option value="Livestock feeds">Livestock feeds</option>
                    <option value="Fertilizer">Fertilizer</option>
                  </select>
                </div>
                <div className="mb-11">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Type
                  </label>
                  <select
                    name={productTypeUpdate}
                    value={productTypeUpdate}
                    onChange={(e) => setProductTypeUpdate(e.target.value)}
                    className="mt-1 p-2 py-3 block w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option disabled>Select Item Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Cereals">Cereals</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-grow w-full flex-col mr-10">
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Price
                  </label>
                  <input
                    type="text"
                    value={itemPriceUpdate}
                    onChange={(e) => setItemPriceUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Total Price
                  </label>
                  <input
                    type="text"
                    value={totalPriceUpdate}
                    onChange={(e) => setTotalPriceUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Final Price
                  </label>
                  <input
                    type="text"
                    value={finalPriceUpdate}
                    onChange={(e) => setFinalPriceUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
              </div>
              <div className="flex flex-grow w-full flex-col mb-10">
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Description
                  </label>
                  <textarea
                    value={descriptionUpdate}
                    onChange={(e) => setDescriptionUpdate(e.target.value)}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Item Image
                  </label>
                  <input
                    type="file"
                    // value={media}
                    onChange={handleImageChangeUpdate}
                    className="mt-1 p-2 py-3  w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    onClick={UpdateProduct}
                    disabled={Loadings}
                    className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
                  >
                    {Loadings ? "Updating Market" : "Update Market"}
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
