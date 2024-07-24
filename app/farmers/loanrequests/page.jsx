"use client";
import SideNav from "@/app/components/SideNav";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

export default function LoanRequests() {
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

    Axios.post(
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

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div >
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className={` md:justify-end mt-2 mb-2 sm:justify-start me-9 items-center transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"} mr-10`}>
        <h1 className="text-green-700 text-center font-abc mt-6 text-2xl">
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
  );
}
