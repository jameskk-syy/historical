"use client";
import Accordion from "@/app/components/Accordion";
import SideNav from "@/app/components/SideNav";
import { CreditScore } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";

export default function Page() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const [loanCategory, setLoanCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const cooperativeIds = window.localStorage.getItem('registrationNumber');
    if (!cooperativeIds) {
       toast.error("Your organization does not have any loan product for now!")
    }
    else {
      async function fetchLoan() {
        try {
          const response = await axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/loan_products?registrationNumber=${cooperativeIds}`);
          setLoanCategory(response.data.payload);
          console.log(response.data.payload);
          setLoading(true);
        } catch (error) {
          toast.error(error.message)
        }
      }
      fetchLoan();
    }
    
  });
//  loan requests
const columns = [
  {
    name: "Phone No.",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "Loan type",
    selector: (row) => row.loanCategory,
  },
  {
    name: "Amount requested",
    selector: (row) => row.desiredLoanAmount,
  },
  {
    name: "Loan status",
    selector: (row) => row.loanStatus,
  },
  {
    name: "Bank Account Number",
    selector: (row) => row.bankAccountNumber,  

  },
  {
    name: "Mode of paymentr",
    selector: (row) => row.modeOfPayment,

  },
  {
  },
];
const [requestedLoans, setRequestedLoans] = useState([]);
const [filter, setFilter] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  const phoneNumber = window.localStorage.getItem("userPhone");
  // console.log(phoneNumber);

  axios.post(
    "https://us-central1-farmfuzion.cloudfunctions.net/getrequestedloans",
    {
      phoneNumber: phoneNumber,
    }
  )
    .then((response) => {
      setRequestedLoans(response.data.loan_requests);
      console.log("Loan Requests", response.data.loan_requests);

    })
    .catch((error) => {
      // Swal.fire({
      //   icon: "error",
      //   title: "Error",
      //   text: "There was an error fetching requested loans.",
      // });
      console.error("There was an error fetching requested loans:", error);
    });
}, []);

useEffect(() => {
  const result = requestedLoans.filter((item) => {
    return (
      item.phoneNumber.toLowerCase().includes(search.toLowerCase())
    );
  });
  setFilter(result);
}, [search, requestedLoans]);

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


  return (
    <div className="flex flex-col  min-h-screen md:h-[100%] overflow-x-hidden">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-row sm:flex-row mb-6 transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3  mt-4 me-3 px-5 `}
      >
        <div className="flex flex-col sm:flex-row w-full justify-between ms-4 me-4">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-card3 font-abc font-bold ps-10 text-xl">
              Agri Loans
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              className="shadow-md rounded-md px-10 py-1 m-1 w-full sm:w-auto"
              placeholder="Search loan"
            />
            <button className="bg-card3 rounded-md m-1 p-1 px-4 text-white w-full sm:w-auto">
              Search
            </button>
            <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
              Custom Loan
            </button>
            <Link href="/farmers/loanrequests">
              <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
                Loan Requests
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-5 lg:mt-5 gap-4 transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3  me-3`}
      >
        {isLoading ? (
          <>
            {loanCategory.length == 0 && <center><div>No existing loan  product</div> </center>}
            {loanCategory.map((loan, index) => (
              <div className="bg-card shadow rounded-md m-4 p-4" key={index}>
                <div className="flex flex-row justify-between mb-4">
                  <h1 className="text-textcolor font-abc font-semibold">
                    {loan.loanCategory}
                  </h1>
                  <CreditScore />
                </div>
                <div className="mb-1">
                  <p className="text-textcolor font-abc">{loan.eligibility}</p>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <Link href={`/farmers/fdashboard/loansandsavings/loans?id=${loan.loanCategory}`}>
                    <button className="bg-card3 font-abc rounded-md m-1 p-1 px-4 text-white">
                      Get Loan
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
      <div
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

              {/* <input type="text" className='flex-grow shadow rounded-md p-3 m-1' placeholder='Interest Rate' />
                            <input type="text" className='flex-grow shadow rounded-md p-3 m-1' placeholder='Number of months' /> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col w-full ms-10 me-4 sm:ms-4 sm:me-4 md:w-full mt-10 px-5 sm:flex-row  md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out  ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-10`}
      >
        <div className="flex flex-col w-full ">
        <h1 className="text-green-700  font-abc mt-6 text-2xl">
          Loan Requests
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
      </div>
      </div>
  );
}
