"use client"
import SB5 from '@/app/components/SB5'
import { CreditCardOutlined, GroupOutlined, Security } from '@mui/icons-material'
import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { CgTally } from 'react-icons/cg'
import { FaDatabase } from 'react-icons/fa6'
import DataTable from "react-data-table-component";


export default function AgroStatements() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

    // requested loans
    const columns = [
      {
        name: "Phone No.",
        selector: (row) => row.phoneNumber,
      },
      {
        name: "Desired loan Amount",
        selector: (row) => row.desiredLoanAmount,
      },
      {
        name: "Employment status",
        selector: (row) => row.employmentStatus,
      },
      {
        name: "Monthly income",
        selector: (row) => row.monthlyIncome,
      },
      {
        name: "Total yearly income",
        selector: (row) => row.totalYearlyIncome,
      },
      {
        name: "Mode of payment",
        selector: (row) => row.modeOfPayment,
      },
      {
        name: "Loan status",
        selector: (row) => row.loanStatus,
      },
      {
        name: "Loan purpose",
        selector: (row) => row.purposeLoan,
      },
  
      {
        name: "View details",
        cell: (row) => (
          <button
            style={{
              backgroundColor: "#01565b",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              border: "none",
            }}
            onClick={() => handleLoanAproval(row.phoneNumber)}
          >
            View details
          </button>
        ),
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
    <div className="w-full ">
    <div className={`flex-grow mt-1 me-3`}>
      <div className="flex flex-col p-2 ">
        <div className="flex md:flex-row  lg:flex-row w-full mt-4 gap-12 flex-col">
          <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
            <div className="flex flex-col bg-card1 ">
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-2xl font-abc text-card3">
                    Services Available
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
                  <FaDatabase className="text-card3 text-5xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
            <div className="flex flex-col bg-card2">
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-2xl font-abc text-card3">
                    Agro Capital
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-abc text-card3">
                    +100k
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-3xl font-abc">12000</p>
                </div>
                <div>
                  <Security className="text-card3 text-5xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
            <div className="flex flex-col bg-card3">
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-2xl font-abc text-card3">
                    Agro Revenue
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
                  <CreditCardOutlined className="text-card3 text-5xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
            <div className="flex flex-col bg-card">
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-2xl font-abc text-card3">
                    Active Request
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-abc text-card3">+10</p>
                </div>
              </div>
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-3xl font-abc">12</p>
                </div>
                <div>
                  <GroupOutlined className="text-card3 text-5xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full">
            <div className="flex flex-col ">
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-2xl font-abc text-card3">
                    On Duty
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-abc text-card3">10</p>
                </div>
              </div>
              <div className="flex flex-row justify-between p-4">
                <div>
                  <p className="text-3xl font-abc">12/30</p>
                </div>
                <div>
                  <CgTally className="text-card3 text-5xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`flex-grow mt-1 me-24`}>
      <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
        <div>
          <p className="text-2xl font-abc">
            {" "}
            Agronomy Data
          </p>
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
            // onClick={downloadCSV}
            className="bg-card3 text-white py-3 rounded-md p-4 ml-6"
          >
            Download statement
          </button>
        </div>
      </div>
      <div></div>
      <div className=" transition-all  md:pr-5 lg:pr-5 duration-200 ease-out ">
        {loading ? (
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
  </div>
  </div>
  </>
  )
}
