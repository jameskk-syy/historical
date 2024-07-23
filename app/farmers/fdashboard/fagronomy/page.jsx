"use client";
import Accordion from "@/app/components/Accordion";
import SideNav from "@/app/components/SideNav";
import { CreditScore } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Image from "next/image";
import Axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ModalForm from "@/app/components/MobileModal";
import DataTable from "react-data-table-component";
import BankPaymentForm from "@/app/components/BankModal";

export default function Page() {
  const columns = [
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Service Name",
      selector: (row) => row.serviceName,
    },
    {
      name: "Service Amount",
      selector: (row) => row.servicePrice,
    },
    {
      name: "Requested Date/Time",
      selector: (row) => row.dateAndTimeRequested,
    },
    {
      name: "Service Frequency",
      selector: (row) => row.serviceFrequency,
    },

    {
      //   name:"Loan review",
      //   cell:(row)=>(
      //  <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px', border: 'none'  }} onClick={()=>handleDelete(row.id)}>Review</button>
      //   )
    },
  ];
  const [agronomyservicesRequested, setAgronomyServicesRequested] = useState(
    []
  );
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  useEffect(() => {
    const phoneNumber = window.localStorage.getItem("userPhone");
    // console.log(phoneNumber);

    Axios.get(
      `https://us-central1-farmfuzion.cloudfunctions.net/agronomy_requests?phoneNumber=${phoneNumber}`
    )
      .then((response) => {
        setAgronomyServicesRequested(response.data.payload);
        // console.log("Loan Requests", response.data.payload);
      })
      .catch((error) => {
        // Swal.fire({
        //   icon: "error",
        //   title: "Error",
        //   text: "There was an error fetching requested loans.",
        // });
        console.error(
          "There was an error fetching requested agronomy services:",
          error
        );
      });
  }, []);

  useEffect(() => {
    const result = agronomyservicesRequested.filter((item) => {
      return item.phoneNumber.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [search, agronomyservicesRequested]);

  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        //   color: 'white',
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const [angronomyServices, setangronomyServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const cooperativeIds = window.localStorage.getItem("registrationNumber");
    if (!cooperativeIds) {
      toast.error("Your organization does not have any loan product for now!");
    } else {
      async function fetchAgronomy() {
        try {
          const response = await axios.get(
            `https://us-central1-farmfuzion.cloudfunctions.net/agronomy?cooperativeId=${cooperativeIds}`
          );
          setangronomyServices(response.data.payload);
          console.log(response.data.payload);
          setLoading(true);
        } catch (error) {
          toast.error(error.message);
        }
      }
      fetchAgronomy();
    }
  });
  const handleSearch = (term) => {
    //   alert(term)
  };
  const handlePayment = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-farmfuzion.cloudfunctions.net/create_savings",
        {
          amount: amount,
          phoneNumber: phoneNumber,
          registrationNumber: registrationNumber,
        }
      )
      .then((response) => {
        console.log("Payment Response", response);
        Swal.fire({
          title: "Payment Initiated!",
          text: "Please enter your M-PESA PIN on your phone to complete the payment.",
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
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState();

  const [showCardDetails, setShowCardDetails] = useState(false);

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
  return (
    <div className="flex flex-col  min-h-screen md:h-[100%] overflow-x-hidden">
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
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-row sm:flex-row mb-6 transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } sm:ml-3  mt-4 me-3 px-5 `}
      >
        <div className="flex flex-col sm:flex-row w-full justify-between ms-4 me-4">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-card3 font-abc font-bold ps-10 text-xl">
              Agronomy Services
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              className="shadow-md rounded-md px-10 py-1 m-1 w-full sm:w-auto"
              placeholder="Search Agronomy service"
            />
            <button className="bg-card3 rounded-md m-1 p-1 px-4 text-white w-full sm:w-auto">
              Search
            </button>
            {/* <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
              Custom Loan
            </button> */}
            <Link href="/farmers/fdashboard/fagronomy/agronomyservicesrequested">
              <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
                Agronomy services Requests
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-5 lg:mt-5 gap-4 transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } sm:ml-3  me-3`}
      >
        {isLoading ? (
          <>
            {angronomyServices.length == 0 && (
              <center>
                <div>No existing Agronomy services</div>{" "}
              </center>
            )}
            {angronomyServices.map((loan, index) => (
              <div className="bg-card shadow rounded-md m-4 p-4" key={index}>
                <div className="flex flex-row justify-between mb-4">
                  <h1 className="text-textcolor font-abc font-semibold">
                    {loan.serviceName}
                  </h1>
                  <CreditScore />
                </div>
                <div className="mb-1">
                  <p className="text-textcolor font-abc">
                    {loan.serviceDescription}
                  </p>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <Link
                    href={`/farmers/fdashboard/fagronomy/agronomyrequest?id=${loan.serviceName}`}
                  >
                    <button className="bg-card3 font-abc rounded-md m-1 p-1 px-4 text-white">
                      Get Agronomy service
                    </button>
                  </Link>
                  <h1 className=" font-abc text-red-500">Benefits</h1>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center font-abc">Loading...</p>
        )}
      </div>

      {/* <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow md:ml-64 sm:ml-3 mt-4 me-3'>
                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Post harvestLoan</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>Loan product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get Loan</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>

                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Expansion Loan</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>Loan product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get Loan</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>
                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Consumer Loan</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>Loan product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get Loan</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>
            </div> */}
      {/* <div
        className={`flex flex-col w-full md:w-full mt-10 px-5 sm:flex-row  md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out  ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-10`}
      >
        <div className="flex flex-col w-full md:w-full sm:w-auto sm:flex-grow-0">
          <div className="sm:ms-4 ps-10">
            <h1 className="text-textcolor mb-3 font-abc font-semibold text-xl">
              Loan Calculator
            </h1>
          </div>
          <div className="w-full md:w-10/12">
            <div className="flex flex-col sm:flex-row w-full sm:justify-start sm:ms-4 justify-between sm:space-x-10 space-y-1 sm:space-y-0">
              <div className="flex flex-col md:flex-row w-full md:justify-between space-y-2 md:space-y-0 md:space-x-2">
                <input
                  type="text"
                  className="flex-grow shadow font-abc rounded-md p-2 m-1 md:m-0"
                  placeholder="Loan Amount"
                />
                <input
                  type="text"
                  className="flex-grow shadow font-abc rounded-md p-2 m-1 md:m-0"
                  placeholder="Interest Rate"
                />
                <input
                  type="text"
                  className="flex-grow shadow font-abc rounded-md p-2 m-1 md:m-0"
                  placeholder="Number of months"
                />
                <button className="bg-card3 font-abc rounded-md py-2 px-6 m-1 md:m-0 text-white">
                  Calculate
                </button>
              </div>

              <input type="text" className='flex-grow shadow rounded-md p-3 m-1' placeholder='Interest Rate' />
                            <input type="text" className='flex-grow shadow rounded-md p-3 m-1' placeholder='Number of months' />
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`flex px-5 flex-col sm:flex-row md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } sm:ml-3 mt-4 me-3 `}
      >
        <div className="flex md:flex-row w-full lg:flex-row flex-col">
          <div className="w-7/12">
            <h1 className="text-green-700 text-center font-abc mt-6 text-2xl">
              Agronomy Services Requests
            </h1>

            <DataTable
              customStyles={tableHeaderStyle}
              columns={columns}
              data={filter}
              pagination
              fixedHeader
              selectableRowsHighlight
              highlightOnHover
              subHeader
            />
          </div>
          <div className="w-5/12 md:mt-20 lg:mt-20 mt-3">
            <div className="flex flex-col bg-card text-textcolor font-abc m-2 p-2 items-center justify-between flex-grow shadow-md rounded-md basis-1/2">
              <div className="flex flex-col w-full h-full">
                <div className="ms-4 text-center">
                  <p className="font-semibold">
                    Quick way to pay for Agronomy servicesy
                  </p>
                </div>
                <div className="flex flex-col shadow p-3 m-3 ">
                  <p className="font-abc">CHOOSE A PAYMENT METHOD</p>
                  <div>
                    <div className="flex flex-col sm:flex-col mt-6 rounded-md shadow-md p-2 m-2">
                      <div className="flex flex-col sm:flex-col md:flex-row justify-between">
                        <div className="flex sm:flex-row mb-4  md:flex-row items-center">
                          <input
                            type="checkbox"
                            onChange={handleMobileCheckboxChange}
                            checked={showMobileDetails}
                          />
                          <p className="font-abc  ml-4">Mobile Money</p>
                        </div>
                        <div className="flex sm:flex-row md:flex-row">
                          <div
                            className="relative mx-2 p-2 w-20 shadow bg-card h-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
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
                            className="relative w-20 mr-2 shadow bg-cardh-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
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
                            className="relative w-20  shadow bg-card h-12 me-8 sm:w-auto sm:h-auto md:w-20 md:h-12"
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
                    <div>
                      <div className="flex flex-col sm:flex-col mt-6 rounded-md shadow-md p-2 m-2">
                        <div className="flex flex-col sm:flex-col md:flex-row justify-between">
                          <div className="flex  sm:flex-row mb-4 md:flex-row items-center">
                            <input
                              type="checkbox"
                              onChange={handleCheckboxChange}
                              checked={showCardDetails}
                            />
                            <p className="font-abc ml-4">Bank Cards</p>
                          </div>
                          <div className="flex  sm:flex-row md:flex-row items-center">
                            <div
                              className="relative w-20 mx-2 shadow bg-card h-12 me-8 sm:w-full sm:mb-4 md:w-20 md:h-12"
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
                              className="relative w-20 mx-2 shadow bg-card h-12 me-8 sm:w-full sm:mb-4 md:w-20 md:h-12"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
