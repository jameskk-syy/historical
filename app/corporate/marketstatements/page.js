"use client";
import TopCoop from "@/app/components/TopCoop";
import {
  BarChartOutlined,
  CreditCardOutlined,
  GroupOutlined,
  Money,
  MoneyOffCsred,
  PaidOutlined,
  ProductionQuantityLimits,
  Security,
  ShoppingBag,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";
import { GiExpense } from "react-icons/gi";
import SB5 from "@/app/components/SB5";

export default function SavingsStatments() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  // loan statements
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Product ID",
      selector: (row) => row.productID,
    },
    {
      name: "Transaction ID",
      selector: (row) => row.desiredLoanAmount,
    },
    {
      name: "Quantity Sold",
      selector: (row) => row.monthlyIncome,
    },
    {
      name: "Total Pricet",
      selector: (row) => row.employmentStatus,
    },
    {
      name: "Category",
      selector: (row) => row.modeOfPayment,
    },
  ];

  const [filter, setFilters] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [loanrequests, setloanrequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");
    console.log("Response Reg:", registrationNumber);

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_loan_products",
      {
        registrationNumber: registrationNumber,
      }
    )
      .then((response) => {
        console.log("Response:", response.data.loan_requests);
        setloanrequests(response.data.loan_requests);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });
  }, []);

  useEffect(() => {
    const result = loanrequests.filter((item) => {
      // return item.bankAccountNumber.match(searchs);
      return item.phoneNumber && item.phoneNumber.match(searchs);
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
  const downloadCSV = () => {
    // Define column headers
    const headers = [
      "Product Name",
      "Product ID",
      "Transaction ID",
      "Quantity Sold",
      "Total Price",
      "Category",
    ];

    // Convert filtered data (filter state) to CSV format
    const csvContent = [
      headers.join(","), // Add header row
      ...filter.map(
        (row) =>
          `${row.productName},${row.productID},${row.transactionId},${row.quantitySold},${row.totalPrice},${row.category}`
      ),
    ].join("\n");

    // Create a Blob object for the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Save blob as a file using file-saver library
    saveAs(blob, "ProductSales.csv");
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
        } mt-4 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
      </div>
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-1 me-3`}
      >
        <div className="flex flex-col p-2 ">
          <p className="border-b-2 border-card text-card3 font-abc text-2xl p-2">
            Savings Statements
          </p>
          <div className="flex md:flex-row  lg:flex-row w-full mt-6 gap-12 flex-col">
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Total Products
                    </p>
                  </div>
                  {/* <div><p className='text-2xl font-abc text-card3'>+1</p></div> */}
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">12</p>
                  </div>
                  <div>
                    <ProductionQuantityLimits className="text-card1 text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Market Expenses
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-abc text-card3">+100k</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">12000</p>
                  </div>
                  {/* <div><GiExpense className='text-card1 text-5xl' /></div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Total Revenue
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-abc text-card3">+1</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">120k</p>
                  </div>
                  <div>
                    <CreditCardOutlined className="text-card1 text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">Top Produvct</p>
                  </div>
                  <div>
                    <p className="text-2xl font-abc text-card3">+10k</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">Kales</p>
                  </div>
                  {/* <div><GroupOutlined className='text-card1 text-5xl' /></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-1 me-24`}
      >
        <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
          <div>
            <p className="text-3xl font-abc"> Savings transaction Data</p>
          </div>
          <div>
            <input
              placeholder="Search by Phone No ..."
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
              Download statement
            </button>
          </div>
        </div>
        <div></div>
        <div className=" transition-all duration-200 ease-out md:pr-4 lg:pr-4 ">
          {loading ? (
            <p className="text-xl text-center text-gray-900">Loading...</p>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
