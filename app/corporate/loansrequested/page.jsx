"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import SB5 from "@/app/components/SB5";


export default function LoanRequest() {

  // const [registrationNumber, setRegistrationNumber] = useState("");

  const columns = [
    {
      name: "Phone No.",
      selector: (row) => row.bankAccountNumber

    },
    {
      name: "Desired loan Amount",
      selector: (row) => row.desiredLoanAmount

    },
    {
      name: "Employment status",
      selector: (row) => row.employmentStatus
    },
    {
      name: "monthly Income",
      selector: (row) => row.monthlyIncome
    },
    {
      name: "total Yearly Income",
      selector: (row) => row.totalYearlyIncome
    },
    {
      name: "Mode Of Payment",
      selector: (row) => row.modeOfPayment
    },
    {
      name:"View details",
      cell:(row)=>(
     <button style={{ backgroundColor: '#01565b', color: 'white', padding: '10px', borderRadius: '5px',marginBottom: '10px', marginTop: '10px', border: 'none'  }} onClick={()=>handles(row.id)}>View details</button>
          
      )
  }
    



  ];

  // useEffect(() => {
  //   const savedRegistrationNumber = window.localStorage.getItem("registrationNumber");
  //   setRegistrationNumber(savedRegistrationNumber || "");
  // }, []);

  const handles =  (id) =>{
    console.log(id)
  } 
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [loanrequests, setloanrequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const registrationNumber = window.localStorage.getItem("registrationNumber");
    console.log("Response Reg:", registrationNumber)

    Axios.post('https://us-central1-farmfuzion.cloudfunctions.net/get_loan_products', {
      registrationNumber: registrationNumber
    })
      .then((response) => {

        console.log("Response:", response)
        console.log("Response:", response.data.loan_requests)
        setloanrequests(response.data.loan_requests);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching loanrequests:', error);
      });
  }, []);

  useEffect(() => {
    const result = loanrequests.filter((item) => {
      return item.bankAccountNumber.match(search);
    })
    setFilter(result)
    console.log("Result", result)
  }, [search, loanrequests])

  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: '#f3f4ff',
        fontWeight: 'bold',
        fontSize: '14px',
        text: "white",
        font: "abc"
      }
    }
  }
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <>
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className=' mt-0 '>
        <div  className={`flex-grow transition-all duration-200 ease-out relative ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}>
          {loading ? (
            <p className="text-xl p-3 text-center text-gray-900 mt-12">Loading...</p>
          ) : (
            <>
              <div className="flex items-center justify-between px-4 lg:px-8 py-4 mt-2 ">
                <div className="text-lg font-semibold text-gray-900 font-abc">Loan Requests</div>
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
                subHeaderComponent={
                  <input
                    // type='number'
                    placeholder='Search by Phone No ...'
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      marginBottom: '3px'
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                }


              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
