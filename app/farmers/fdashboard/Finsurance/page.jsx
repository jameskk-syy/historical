"use client";
import Accordions from "@/app/components/Accordions";
import SideNav from "@/app/components/SideNav";
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
  const [insuranceCategory, setinsuranceCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const cooperativeIds = window.localStorage.getItem('registrationNumber');
    console.log("fetch id",cooperativeIds)
    if (!cooperativeIds) {
       toast.error("Your organization does not have any insurance product for now!")
    }
    else {
      async function fetchinsurance() {
        try {
          const response = await axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/policies?registrationNumber=${cooperativeIds}`);
          setinsuranceCategory(response.data.payload);
          console.log(response.data.payload);
          setLoading(true);
        } catch (error) {
          toast.error(error.message)
        }
      }
      fetchinsurance();
    }
    
  });
  console.log("Insuarance categories",insuranceCategory)
   const handleSearch = (term) => {
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
              Agri insurances
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              className="shadow-md rounded-md px-10 py-1 m-1 w-full sm:w-auto"
              placeholder="Search insurance"
            />
            <button className="bg-card3 rounded-md m-1 p-1 px-4 text-white w-full sm:w-auto">
              Search
            </button>
            <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
              Custom insurance
            </button>
            <Link href="/farmers/fdashboard/Finsurance/insuranceRequested">
              <button className="bg-card3 font-abc rounded-md m-1 p-1 px-6 text-white w-full sm:w-auto">
                insurance Requests
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
            {insuranceCategory.length == 0 && <center><div>No existing insurance  product</div> </center>}
            {insuranceCategory.map((insurance, index) => (
              <div className="bg-card shadow rounded-md m-4 p-4" key={index}>
                <div className="flex flex-row justify-between mb-4">
                  <h1 className="text-textcolor font-abc font-semibold">
                    {insurance.coverageType}
                  </h1>
                  <CreditScore />
                </div>
                <div className="mb-1">
                  <p className="text-textcolor font-abc">{insurance.policyName}</p>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <Link href={`/farmers/fdashboard/Finsurance/InsuaranceRequest?id=${insurance.coverageType}`}>
                    <button className="bg-card3 font-abc rounded-md m-1 p-1 px-4 text-white">
                      Get insurance
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

      {/* <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow md:ml-64 sm:ml-3 mt-4 me-3'>
                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Post harvestinsurance</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>insurance product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get insurance</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>

                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Expansion insurance</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>insurance product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get insurance</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>
                <div className='flex flex-col shadow rounded-md  m-4 p-4'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-blue-600 font-abc font-semibold'>Consumer insurance</h1>
                        <CreditScore />
                    </div>
                    <div>
                        <p className='text-gray-600'>insurance product designated to business involved in horticulture activities, such as cultivation, production, and marketing of fruits.</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className='bg-green-400 rounded-md m-1 p-1 px-4 text-white'>Get insurance</button>
                        <h1 className='text-red-500'>Benefits</h1>
                    </div>
                </div>
            </div> */}
      <div
        className={`flex flex-col w-full md:w-full mt-10 px-5 sm:flex-row  md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out  ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-10`}
      >
        <div className="flex flex-col w-full md:w-full sm:w-auto sm:flex-grow-0">
          <div className="sm:ms-4 ps-10">
            <h1 className="text-textcolor mb-3 font-abc font-semibold text-xl">
              insurance Calculator
            </h1>
          </div>
          <div className="w-full md:w-10/12">
            <div className="flex flex-col sm:flex-row w-full sm:justify-start sm:ms-4 justify-between sm:space-x-10 space-y-1 sm:space-y-0">
              <div className="flex flex-col md:flex-row w-full md:justify-between space-y-2 md:space-y-0 md:space-x-2">
                <input
                  type="text"
                  className="flex-grow shadow font-abc rounded-md p-2 m-1 md:m-0"
                  placeholder="insurance Amount"
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
        className={`flex px-5 flex-col sm:flex-row md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-3 `}
      >
        <div className="flex flex-col w-full ms-10 me-4 sm:ms-4 sm:me-4">
          <h1 class="text-textcolor font-abc  font-semibold text-xl">insurance FAQ</h1>
          <Accordions />
        </div>
      </div>
    </div>
  );
}
