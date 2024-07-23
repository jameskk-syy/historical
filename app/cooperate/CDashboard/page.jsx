"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import BarCharts from "@/app/components/BarCharts";
import { Group, GroupAddOutlined, GroupOutlined } from "@mui/icons-material";
import Image from "next/image";
import Axios from "axios";
import Link from "next/link";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx"; // Import the xlsx library

export default function Cooperative_Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const [cooperativeName, setCooperativeName] = useState("");
  useEffect(() => {
    setCooperativeName(window.localStorage.getItem("cooperativeName"));
  }, []);
  const [farmers, setFarmers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  
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
    <>
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-col transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <div className={`mt-0 xb:ml-5 `}>
          <TopCoop cooperativeName={cooperativeName} />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 mt-8">
          <div className="flex flex-col lg:w-3/4 w-full">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card1">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Total Members
                    </p>
                    <p className="text-3xl font-abc text-card3 mt-4">250</p>
                  </div>
                  <div>
                    <Group className="text-card3 text-5xl" />
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card2">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-card3">Total Service</p>
                    <p className="text-3xl font-abc text-card3 mt-4">25</p>
                  </div>
                  <div>
                    <GroupAddOutlined className="text-card3 text-5xl" />
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card3">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-white">
                      Total Loans
                    </p>
                    <p className="text-3xl font-abc text-white mt-4">2</p>
                  </div>
                  <div>
                    <Group className="text-white text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shadow mt-14 h-96" >
              <BarCharts />
              <div className="flex md:flex-row lg:flex-row mt-4 justify-between p-2 flex-col ">
            <div></div>
            <div className="">
              <input
                type="text"
                placeholder="Search by Phone Number ..."
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  // marginBottom: '3px'
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
              paginationPerPage={3}
              paginationRowsPerPageOptions={[3]}
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
          <div className="shadow-md rounded-md lg:w-1/4 w-full bg-card">
            <p className="p-2">Daily Activities Logs</p>
            <div className="flex flex-row p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Ten loans approved and disbursed</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 border-b-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Two hundred loans pending for approval</p>
              </div>
            </div>
            <p className="p-2">Recent activities</p>
            <div className="flex flex-row mt-2 border-b-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Livestock management</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 p-2 gap-4 border-b-2">
              <button className="w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="/corporate/registerstaff">Add Staff</Link>
              </button>
              <button className="w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="/cooperate/register">Register member</Link>
              </button>
            </div>
            <p className="p-2">Manage Claims</p>
            <div className="flex flex-row mt-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>John the farmer</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>John the farmer</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mx-4 mb-8">
              <button className="w-3/4 py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="">Manage complaints</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
