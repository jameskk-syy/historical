"use client";
import SideNav from "@/app/components/AdminSideNav";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx"; // Import the xlsx library

export default function AllFarmers() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const columns = [
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "ID Number",
      selector: (row) => row.idNumber,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Cooperative",
      selector: (row) => row.cooperative,
      sortable: true,
    },
    {
      name: "Land Size",
      selector: (row) => row.landSize,
      sortable: true,
    },
    {
      name: "Primary Value Chain",
      selector: (row) => row.primaryValueChain,
      sortable: true,
    },
    {
      name: "Secondary Value Chain",
      selector: (row) => row.secondaryValueChain,
      sortable: true,
    },
    {
      name: "County",
      selector: (row) => row.county,
      sortable: true,
    },
    {
      name: "Sub County",
      selector: (row) => row.subCounty,
      sortable: true,
    },
  ];

  useEffect(() => {
    setLoading(true);
    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/getallmembersbyrole",
      {
        role: "farmer",
      }
    )
      .then((response) => {
        console.log("Farmers", response.data);
        setLoading(false);
        const farmersData = response.data.members;
        setFarmers(farmersData);
      })
      .catch((error) => {
        console.error("Error fetching farmer data:", error);
      });
  }, []);

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
      farmer.name.toLowerCase().includes(search.toLowerCase())
  );

  const downloadExcel = () => {
    const headers = [
      "Phone Number",
      "ID Number",
      "Email",
      "Cooperative",
      "Land Size",
      "Primary Value Chain",
      "Secondary Value Chain",
      "County",
      "Sub County",
    ];

    const worksheetData = [
      headers,
      ...filteredFarmers.map((row) => [
        row.phoneNumber,
        row.idNumber,
        row.email,
        row.cooperative,
        row.landSize,
        row.primaryValueChain,
        row.secondaryValueChain,
        row.county,
        row.subCounty,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Farmers");

    // Generate buffer
    XLSX.writeFile(wb, "Farmers.xlsx");
  };

  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: '#f3f4ff',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#01565b',
        fontFamily: 'abc'
      }
    }
  };

  return (
    <div className="flex flex-col bg-lavender min-h-screen">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-4 me-3`}
      >
        <div className="overflow-x-auto mt-10">
          <div className="flex flex-row sm:flex-row w-full justify-between ms-4 me-4 ">
            {/* <div>
              <h1 className="text-card3 font-semibold text-3xl font-abc">
                Farm Fuzion
              </h1>
            </div> */}
          </div>
          <h2 className="text-xl font-semibold mb-4 text-card3 font-abc ">
            All Farmers
          </h2>
          <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col ">
            <div></div>
            <div className="">
              <input
                type="text"
                placeholder="Search by Phone Number ..."
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  marginBottom: '3px'
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={downloadExcel}
                className="bg-card3 text-white py-3 rounded-md p-4 ml-6"
              >
                Download Farmers List
              </button>
            </div>
          </div>
          {loading ? (
            <p className="text-xl text-center font-abc mt-24">Loading</p>
          ) : (
            <DataTable
              customStyles={tableHeaderStyle}
              columns={columns}
              data={filteredFarmers}
              pagination
              highlightOnHover
              fixedHeader
              selectableRowsHighlight
              subHeader
              // subHeaderComponent={
              //   // <input
              //   //   type="text"
              //   //   placeholder="Search by Phone Number ..."
              //   //   style={{
              //   //     padding: '10px',
              //   //     borderRadius: '5px',
              //   //     border: '1px solid #ccc',
              //   //     marginBottom: '3px'
              //   //   }}
              //   //   value={search}
              //   //   onChange={(e) => setSearch(e.target.value)}
              //   // />
              // }
            />
          )}
        </div>
      </div>
    </div>
  );
}
