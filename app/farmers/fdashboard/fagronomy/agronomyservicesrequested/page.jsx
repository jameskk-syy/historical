"use client";
import SideNav from "@/app/components/SideNav";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

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
  const [agronomyservices, setAgronomyServices] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  // const [phoneNumber, setPhoneNumber] = useState("");

  // useEffect(() => {
  //   const savedPhoneNumber = window.localStorage.getItem("userPhone");
  //   setPhoneNumber(savedPhoneNumber || "");
  // }, []);


  useEffect(() => {
    const phoneNumber = window.localStorage.getItem("userPhone");
    // console.log(phoneNumber);

    Axios.get(
      `https://us-central1-farmfuzion.cloudfunctions.net/agronomy_requests?phoneNumber=${phoneNumber}`)
      .then((response) => {
        setAgronomyServices(response.data.payload);
        // console.log("Loan Requests", response.data.payload);

      })
      .catch((error) => {
        // Swal.fire({
        //   icon: "error",
        //   title: "Error",
        //   text: "There was an error fetching requested loans.",
        // });
        console.error("There was an error fetching requested agronomy services:", error);
      });
  }, []);

  useEffect(() => {
    const result = agronomyservices.filter((item) => {
      return (
        item.phoneNumber.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilter(result);
  }, [search, agronomyservices]);

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
    </div>
  );
}
