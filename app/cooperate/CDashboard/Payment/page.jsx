"use client";
import TopCoop from "@/app/components/TopCoop";
import {
  BarChartOutlined,
  CreditCardOutlined,
  GroupOutlined,
  Money,
  MoneyOffCsred,
  PaidOutlined,
  Security,
  ShoppingBag,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";
import SB5 from "@/app/components/SB5";
import BarCharts from "@/app/components/BarCharts";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ModalForm from "@/app/components/MobileModal";
import BankPaymentForm from "@/app/components/BankModal";
import Image from "next/image";


export default function SavingsStatments() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };


  const [showCardDetails, setShowCardDetails] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState();
  const handleCheckboxChange = () => {
    setShowCardDetails(!showCardDetails);
  };
  useEffect(() => {
    const registration= window.localStorage.getItem("registrationNumber");
    setRegistrationNumber(registration);
    // alert(registration)
    
  })

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
  
  // loan statements

  const columns = [
    {
      name: "Last Transaction",
      selector: (row) =>  row?.["Transaction ID"],
    },
    {
      name: "Transaction Id",
      selector: (row) =>  row?.["Transaction ID"],
    },

    {
      name: "Date & Time",
      selector: (row) => row?.["Date & Time"]
    },
    {
      name: "Mode Of Payment",
      selector: (row) => row?.["Savings Amount"],
    },
    {
      name: "Amount",
      selector: (row) => row?.["Savings Amount"],
    }
  ];

  const [filter, setFilters] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [loanrequests, setloanrequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savings, setSavings] = useState(true);
  const [psavings, setPSavings] = useState(true);
  const [ptotalSavings, setPTotalSavings] = useState(true);
  const [totalSavings, setTotalSavings] = useState(true);

  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");
    const userPhone = window.localStorage.getItem("userPhone");

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
      {
        identifier: registrationNumber,
        identifierType: "registrationNumber",
      }
    )
      .then((response) => {
        console.log("Response Total Savings:", response.data);
        setSavings(response.data.total_savings);
        setTotalSavings(response.data.total_savings_current_month);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
      {
        identifier: userPhone,
        identifierType: "phoneNumber",
      }
    )
      .then((response) => {
        console.log("Response Personal Total Savings:", response.data);
        setPSavings(response.data.total_savings);
        setPTotalSavings(response.data.total_savings_current_month);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });
  });

  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/fetch_coop_savings",
      {
        registrationNumber: registrationNumber,
      }
    )
      .then((response) => {
        console.log("Response:", response.data.data);
        setloanrequests(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });
  });

  useEffect(() => {
    const result = loanrequests.filter((item) => {
      return item?.["Phone Number"].match(searchs);
    });
    setFilters(result);
    console.log("Result", result);
  });

  const tableHeaderStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        fontWeight: "bold",
        fontSize: "14px",
        text: "white",
        font: "abc",
      },
      header:{
        style:{
        backgroundColor: "#f3f4ff",  
        }
      }
    },
  };
  const downloadCSV = () => {
    // Define column headers
    const headers = [
      "Phone Number",
      "Name",
      "ID Number",
      "Transaction ID",
      "Date & Time",
      "Mode of Payment",
      "Savings Amount",
      "Transaction Type",
    ];

    // Convert filtered data (filter state) to CSV format
    const csvContent = [
      headers.join(","), // Add header row
      ...filter.map(
        (row) =>
          `${row.phoneNumber},${row.name},${row.desiredLoanAmount},${row.transactionId},${row.dateTime},${row.modeOfPayment},${row.savingsAmount},${row.transactionType}`
      ),
    ].join("\n");

    // Create a Blob object for the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Save blob as a file using file-saver library
    saveAs(blob, "Savings.csv");
  };

  const doughnutData = {
    labels: [
      "Agronomy",
      "Loan Application",
      "Mobility",
      "Suppliers",
      "Insurance Services",
      "Others",
    ],
    datasets: [
      {
        data: [30000, 20000, 15000, 25000, 10000, 5000],
        backgroundColor: ["#01565b", "#e2f397","#5aba8a","#e2f397","#01565b","#5aba8a"],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const CustomLegend = ({ labels, colors }) => {
    return (
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  const handleFormSubmit = (e) =>{
    e.preventDefault();
  }
  
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

  return (
    <div className="min-h-screen md:h-[100%] sm:overflow-x-hidden">
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
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex mr-2 px-2 md:px-1 lg:px-1 flex-col h-full transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <TopCoop />
        <div className="flex flex-row items-center">
          <p className="border-b-2 border-box border-card text-card3 font-abc font-semibold text-md p-2">
            Payment Overview
          </p>
        </div>
        <div className="flex flex-col w-full h-full mt-1">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-8/12 p-3 shadow bg-card rounded-md flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <p className="text-md font-semibold font-abc text-card3">
                  Cooperative Expenses
                </p>
                <select className="p-2 border rounded-md">
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <BarCharts />
            </div>
            <div className="w-full lg:w-3/12 p-3 shadow bg-card rounded-md flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <p className="text-md font-semibold font-abc text-card3">
                  Expense Distribution
                </p>
                <select className="p-2 border rounded-md">
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <p className="text-card3 font-abc mb-3">Total Amount</p>
                  <p className="text-card3 font-semibold font-abc mb-3">
                    KSH 100000
                  </p>

                  <CustomLegend
                    labels={doughnutData.labels}
                    colors={doughnutData.datasets[0].backgroundColor}
                  />
                </div>
                <div className="w-1/2">
                  <Doughnut
                    data={doughnutData}
                    className="mt-10"
                    options={{ plugins: { legend: { display: false } } }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full mt-2">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-8/12 p-3 shadow bg-card rounded-md flex-grow flex flex-col">
            <div className="flex md:flex-row bg-card lg:flex-row justify-between p-2 flex-col">
          <div>
            <p className="text-lg font-abc text-card3">Criteria Transactions </p>
          </div>
          <div className="flex md:flex-row  lg:flex-row flex-col">
            <input
              placeholder="Search by Phone No ..."
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                // marginBottom: '3px'
              }}
              className="mt-3 md:mt-0 lg:mt-0"
              value={searchs}
              onChange={(e) => setSearchs(e.target.value)}
            />
            <button
              onClick={downloadCSV}
              className="sm:w-full bg-card3 text-white py-3 rounded-md p-4 mt-3 md:mt-0 lg:mt-0 lg:ml-6 md:ml-6"
            >
              Download Report
            </button>
          </div>
        </div>
        {/* <div></div> */}
        <div className=" transition-all duration-200 ease-out ">
          {/* {loading ? (
            <p className="text-xl text-center text-gray-900">Loading...</p>
          ) : (
            <> */}
              <DataTable
                customStyles={tableHeaderStyles}
                columns={columns}
                data={filter}
                pagination
                paginationPerPage={5}
                fixedHeader
                selectableRowsHighlight
                highlightOnHover
                subHeader
              />
            {/* </>
          )} */}
        </div>
            
            </div>
            <div className="flex flex-col bg-card text-textcolor font-abc m-2 p-2 items-center justify-between flex-grow shadow-md rounded-md basis-1/2">
          <div className="flex flex-col w-full h-full">
            <div className="ms-4 text-center">
              <p className="font-semibold">Quick Payment</p>
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
