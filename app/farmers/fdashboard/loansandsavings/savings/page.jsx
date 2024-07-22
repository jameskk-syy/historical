"use client";
import SideNav from "@/app/components/SideNav";

import React, { useState, useEffect } from "react";
import { ArrowDownward, Download, FileDownload } from "@mui/icons-material";
import CircularProgressApp from "@/app/components/CircularProgressApp";
import CircularProgressBarApp from "@/app/components/CircularProgressApp";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ComparisonBarCharts from "@/app/components/ComparisonBarCharts";
import { IconButton } from "@mui/material";
import SavingsBarCharts from "@/app/components/SavingsBarChart";
import DataTable from "react-data-table-component";
import axios from "axios";
import Axios  from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import ModalForm from "@/app/components/MobileModal";
import BankPaymentForm from "@/app/components/BankModal";



export default function Savings() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [registrationNumber, setRegistrationNumber] = useState();
  const [amount, setAmount] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: "white",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };
  const columns = [
    {
      name: "Transaction Date",
      selector: (row) => row.date_deposited,
    },
    {
      name: "Transaction Status",
      selector: (row) => row.status,
    },
    {
      name: "Transaction Code",
      selector: (row) => row?.['Transaction Code'],
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
  ];
  
  useEffect(() => {
    const registration= window.localStorage.getItem("registrationNumber");
    setRegistrationNumber(registration);
    // alert(registration)
    
  })

  const handlePayment = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-farmfuzion.cloudfunctions.net/create_savings",
        {
          amount: amount,
          phoneNumber: phoneNumber,
          registrationNumber:registrationNumber
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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    async function fetchData() {
      const userPhone = localStorage.getItem("userPhone");
      try {
        const response = await axios.post(
          "https://us-central1-farmfuzion.cloudfunctions.net/get_savings",
          {
            message: {
              phoneNumber: userPhone,
            },
          }
        );
        console.log("Savings Response",response.data.data)
        const responseDataArray = Object.values(response.data);
        setData(Object.values(responseDataArray[1]));
        setFilter(Object.values(responseDataArray[1]));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (!item) return false;
      const { date_deposited, status, amount } = item;
      return (
        (date_deposited &&
          date_deposited.toLowerCase().includes(search.toLowerCase())) ||
        (status && status.toLowerCase().includes(search.toLowerCase())) ||
        (amount &&
          amount.toString().toLowerCase().includes(search.toLowerCase()))
      );
    });
    setFilter(filteredData);
  }, [search, data]);
  console.log(data[1]);

  const [savings, setSavings] = useState(true);
  const [psavings, setPSavings] = useState(true);
  const [ptotalSavings, setPTotalSavings] = useState(true);
  const [totalSavings, setTotalSavings] = useState(true);

  useEffect(()=>{
    const registrationNumber =window.localStorage.getItem("registrationNumber");
    const userPhone =window.localStorage.getItem("userPhone");

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
      {
        identifier: registrationNumber ,
        identifierType: "registrationNumber"    
      }
    )
    .then((response) => {
      console.log("Response Total Savings:", response.data);
      setSavings(response.data.total_savings)
      setTotalSavings(response.data.total_savings_current_month)
      // console.log("Total Savings:", response.data.total_savings);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching loanrequests:", error);
    });

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
      {
        identifier: userPhone,
        identifierType: "phoneNumber" 
      }
    )
    .then((response) => {
      console.log("Response Personal Total Savings:", response.data);
      setPSavings(response.data.total_savings)
      setPTotalSavings(response.data.total_savings_current_month)
      // console.log("Total Savings:", response.data.total_savings);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching loanrequests:", error);
    });
  })
  return (
    <div className="flex flex-col  bg-white min-h-screen md:h-[100%]">
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
      <div
        className={`flex mx-3 flex-row md:justify-end mt-2 mb-2 sm:justify-start me-9 items-center transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mr-10`}
      >
        <FileDownload className="mr-2 mt-2" style={{ color: SideNav }} />
        <button className="bg-card3 rounded-full px-12 py-2 hover:bg-[#1A5ECB] hover:text-green-200  text-white font-abc">
          Download Report
        </button>
      </div>
      <div
        className={`flex flex-col sm:flex-row flex-grow  transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        }  sm:ml-3 mt-2 me-3`}
      >
        {/* Item 1 */}
        <div className="flex flex-col md:w-8/12 ms-1 p-3 items-center justify-between  bg-card flex-grow shadow-md rounded-md basis-1/2 ">
          {/* <div className='flex flex-row w-full h-full justify-between '>
            <div className='ms-4'>
              <p className='font-semibold'>Production statistics</p>
            </div>
            <div className='me-4'>
              <span className='shadow m-1 p-1 shadow-gray-200 '>
                Sort by
                <ArrowDownward />
              </span>
            </div>
          </div> */}

          <SavingsBarCharts />
        </div>
        {/* Item 2 */}
        <div className="flex flex-col md:w-2/12 mx-2 p-3 ms-6 me-6 bg-card justify-between  shadow-md rounded-md basis-1/3">
          <div className="rounded-md flex flex-col justify-start">
            <div className="flex flex-col justify-start sm:mb-10 md:mb-10">
              <h1 className="font-bold text-textcolor font-abc ">
                Personal Savings
              </h1>
              <div className="flex flex-row justify-between mt-4">
                <div className="text-textcolor font-abc">
                  {" "}
                  <h1>This Month</h1>{" "}
                </div>
                <div className="text-textcolor font-abc">
                  <h1>Ksh = {savings}</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4  flex-start">
                <div className="text-textcolor font-abc">
                  {" "}
                  <h1>Total</h1>{" "}
                </div>
                <div className="text-textcolor font-abc">
                  <h1>Ksh = {ptotalSavings}</h1>
                </div>
              </div>
            </div>
            <hr class="md:mt-20 sm:mt-20 md:mb-8 sm:mb-10 bg-lavender h-1 shadow-lg" />
            <div className="flex flex-col justify-start mt-2">
              <h1 className="font-bold text-textcolor font-abc ">
                Cooperative Savings
              </h1>
              <div className="flex flex-row justify-between mt-4">
                <div className="text-textcolor font-abc">
                  {" "}
                  <h1>This Month</h1>{" "}
                </div>
                <div className="text-textcolor font-abc">
                  <h1>Ksh = {savings}</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4 flex-start">
                <div className="text-textcolor font-abc">
                  {" "}
                  <h1>Total</h1>{" "}
                </div>
                <div className="text-textcolor font-abc">
                  <h1>Ksh = {totalSavings}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row  flex-grow  sm:ml-3 mt-2 transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        }`}
      >
        <div className="flex flex-col bg-card text-textcolor font-abc m-1 p-3 items-center justify-between flex-grow shadow-md shadow-gray-300 rounded-md">
            <DataTable
            customStyles={tableHeaderStyle}
              columns={columns}
              data={filter}
              pagination
              paginationPerPage={3}
              fixedHeader
              selectableRowsHighlight
              highlightOnHover
              subHeader
              subHeaderComponent={
                <input
                  placeholder="Search..."
                  style={{
                    padding: "8px 40px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "3px",
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              }
            />
          </div>


        {/* Item 2 */}
        <div className="flex flex-col bg-card text-textcolor font-abc m-2 p-2 items-center justify-between flex-grow shadow-md rounded-md basis-1/2">
          <div className="flex flex-col w-full h-full">
            <div className="ms-4 text-center">
              <p className="font-semibold">Quick Transfer To Add Savings</p>
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
  );
}
