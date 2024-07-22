"use client";
import SideNav from "@/app/components/SideNav";
import VetFAQs from "@/app/components/VetFAQs";
import { CreditScore } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const [vetServices, setVetService] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const cooperativeIds = window.localStorage.getItem('registrationNumber');
    if (!cooperativeIds) {
       toast.error("Your organization does not have any veterinary services for now!")
    }
    else {
      async function fetchLoan() {
        try {
          const response = await axios.post("https://us-central1-farmfuzion.cloudfunctions.net/get_veterinary_service",{
            registrationNumber: cooperativeIds
          });
          setVetService(response.data.data);
          console.log("Response :",response.data);
          setLoading(true);
        } catch (error) {
          toast.error(error.message)
        }
      }
      fetchLoan();
    }
    
  });
   const handleSearch = (term) => {
  //   alert(term)
   }
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
              Veterinary Services 
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              className="shadow-md rounded-md px-10 py-1 m-1 w-full sm:w-auto"
              placeholder="Search veterinary service"
            />
            <button className="bg-card3 rounded-md m-1 p-1 px-4 text-white w-full sm:w-auto">
              Search
            </button>
            {/* <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
              Custom Loan
            </button> */}
            <Link href="/farmers/vetrequests">
              <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
                Veterinary services Requests
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
            {vetServices.length == 0 && <center><div>No existing veterinary services</div> </center>}
            {vetServices.map((vetService, index) => (
              <div className="bg-card shadow rounded-md m-4 p-4" key={index}>
                <div className="flex flex-row justify-between mb-4">
                  <h1 className="text-textcolor font-abc font-semibold">
                    {vetService.serviceName}
                  </h1>
                  <CreditScore />
                </div>
                <div className="mb-1">
                  <p className="text-textcolor font-abc">{vetService.serviceDescription}</p>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <Link href={`/farmers/fdashboard/vetinaryservices/vetservices?id=${vetService.serviceName}`}>
                    <button className="bg-card3 font-abc rounded-md m-1 p-1 px-4 text-white">
                      Get veterinary service
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
        className={`flex px-5 flex-col sm:flex-row md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-3 `}
      >
        <div className="flex flex-col w-full ms-10 me-4 sm:ms-4 sm:me-4">
          <h1 class="text-textcolor font-abc  font-semibold text-xl">Veterinary FAQ</h1>
          <VetFAQs />
        </div>
      </div>
    </div>
  );
}
