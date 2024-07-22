"use client";
import TopCoop from "@/app/components/TopCoop";
import {
  BarChartOutlined,
  CreditCardOutlined,
  Money,
  MoneyOffCsred,
  PaidOutlined,
  ShoppingBag,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";
import SB5 from "@/app/components/SB5";


export default function LoanStatments() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  // loan statements
  const columns = [
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "ID Number",
      selector: (row) => row.desiredLoanAmount,
    },
    {
      name: "Monthly Income",
      selector: (row) => row.employmentStatus,
    },
    {
      name: "Loan Category",
      selector: (row) => row.monthlyIncome,
    },
    {
      name: "Loan Type",
      selector: (row) => row.totalYearlyIncome,
    },
    {
      name: "Loan Amount",
      selector: (row) => row.modeOfPayment,
    },
    {
      name: "Loan status",
      selector: (row) => row.loanStatus,
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
      "Phone Number",
      "Desired Loan Amount",
      "Employment Status",
      "Monthly Income",
      "Total Yearly Income",
      "Mode of Payment",
      "Loan Status",
    ];

    // Convert filtered data (filter state) to CSV format
    const csvContent = [
      headers.join(","), // Add header row
      ...filter.map(
        (row) =>
          `${row.phoneNumber},${row.desiredLoanAmount},${row.employmentStatus},${row.monthlyIncome},${row.totalYearlyIncome},${row.modeOfPayment},${row.loanStatus}`
      ),
    ].join("\n");

    // Create a Blob object for the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Save blob as a file using file-saver library
    saveAs(blob, "loan_requests.csv");
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
            Loan Statements
          </p>
          <div className="flex md:flex-row  lg:flex-row w-full mt-4 gap-12 flex-col">
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Loans created
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-abc text-card3">+1</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">12</p>
                  </div>
                  <div>
                    <FaDatabase className="text-card1 text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Amount disbursed
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
                  <div>
                    <ShoppingCartCheckout className="text-card1 text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Amount Repaid
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
                    <p className="text-2xl font-abc text-card3">
                      Avarage intrest rate
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-abc text-card3">+10k</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                  <div>
                    <p className="text-3xl font-abc">12</p>
                  </div>
                  <div>
                    <BarChartOutlined className="text-card1 text-5xl" />
                  </div>
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
            <p className="text-3xl font-abc"> Loan transactiona Data</p>
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
        <div className=" transition-all duration-200 ease-out ">
          {loading ? (
            <p className="text-xl text-center text-gray-900">Loading...</p>
          ) : (
            <>
              <DataTable
                customStyles={tableHeaderStyles}
                columns={columns}
                data={filter}
                pagination
                paginationPerPage={10}
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
