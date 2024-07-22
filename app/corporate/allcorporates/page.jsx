"use client";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import DataTable from "react-data-table-component";
import SideNav from "@/app/components/AdminSideNav";
import * as XLSX from "xlsx";


export default function AllCorporates() {
  const [corps, setCorps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const columns = [
    { name: "Cooperative Name", selector: row => row.cooperativeName },
    { name: "Registration Number", selector: row => row.registrationNumber },
    { name: "Registration Status", selector: row => row.registrationStatus },
    { name: "Postal Address", selector: row => row.postalAddress },
    { name: "Cooperative Type", selector: row => row.coopType },
    {
      name: "Chairperson Details",
      cell: row => (
        <div>
          <p><span className="font-semibold font-abc text-green-700">Name:</span> {row.chairpersonName}</p>
          <p><span className="font-semibold font-abc text-green-700">Email:</span> {row.chairpersonEmail}</p>
          <p><span className="font-semibold font-abc text-green-700">Phone:</span> {row.chairpersonPhone}</p>
        </div>
      )
    },
    {
      name: "Secretary Details",
      cell: row => (
        <div>
          <p>{row.secretaryName}</p>
          <p>{row.secretaryEmail}</p>
          <p>{row.secretaryPhone}</p>
        </div>
      )
    },
    {
      name: "Treasurer Details",
      cell: row => (
        <div>
          <p>{row.treasurerName}</p>
          <p>{row.treasurerEmail}</p>
          <p>{row.treasurerPhone}</p>
        </div>
      )
    }
  ];

  useEffect(() => {
    Axios.post("https://us-central1-farmfuzion.cloudfunctions.net/getallmembersbyrole", {
      role: "cooperative"
    })
      .then(response => {
        console.log("Response:", response.data.members)
        const corpData = response.data.members;
        setCorps(corpData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching cooperative data:", error);
      });
  }, []);

  useEffect(() => {
    const result = corps.filter(coop => coop.cooperativeName.toLowerCase().includes(search.toLowerCase()));
    setFilter(result);
  }, [search, corps]);

  const downloadExcel = () => {
    const headers = [
      "Cooperative Name",
      "Registration Number",
      "Registration Status",
      "Postal Address",
      "Cooperative Type",
      "Chairperson Name",
      "Chairperson Email",
      "Chairperson Phone",
      "Secretary Name",
      "Secretary Email",
      "Secretary Phone",
      "Treasurer Name",
      "Treasurer Email",
      "Treasurer Phone"
    ];

    const worksheetData = [
      headers,
      ...filter.map(coop => [
        coop.cooperativeName,
        coop.registrationNumber,
        coop.registrationStatus,
        coop.postalAddress,
        coop.coopType,
        coop.chairpersonName,
        coop.chairpersonEmail,
        coop.chairpersonPhone,
        coop.secretaryName,
        coop.secretaryEmail,
        coop.secretaryPhone,
        coop.treasurerName,
        coop.treasurerEmail,
        coop.treasurerPhone
      ])
    ];

    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Corporates");

    XLSX.writeFile(wb, "Corporates.xlsx");
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
    <div className="flex flex-col min-h-screen">
      <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
        <div className="overflow-x-hidden mx-10">
          <h2 className="text-2xl mb-4 text-card3 font-abc">All Cooperatives</h2>
          {loading ? (
            <p className="text-center font-abc text-xl justify-center items-center">Loading ...</p>
          ) : (
            <>
              <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col ">
                <div></div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Search by Cooperative Name ..."
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
                    Download Cooperatives List
                  </button>
                
                </div>
              </div>

              <DataTable
                customStyles={tableHeaderStyle}
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
    </div>
  );
}
