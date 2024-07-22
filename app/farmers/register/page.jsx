"use client";
import SideNav from "@/app/components/AdminSideNav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [idNumber, setIdNumber] = useState();
  const [householdNumber, setHouseholdNumber] = useState();
  const [county, setCounty] = useState();
  const [subCounty, setSubCounty] = useState();
  const [cooperative, setCooperative] = useState();
  const [church, setChurch] = useState();
  const [village, setVillage] = useState();
  const [ward, setWard] = useState();
  const [landSize, setLandSize] = useState();
  const [economicActivity, setEconomicActivity] = useState();
  const [primaryValueChain, setPrimaryValueChain] = useState();
  const [secondaryValueChain, setSecondaryValueChain] = useState();


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post('https://us-central1-farmfuzion.cloudfunctions.net/addfarmers2', {
      // registrationNumber,
      email,
      password: "1234",
      phoneNumber,
      idNumber,
      householdNumber,
      county,
      subCounty,
      cooperative,
      church,
      village,
      ward,
      landSize,
      economicActivity,
      primaryValueChain,
      secondaryValueChain
    })
      .then((response) => {
        console.log("Response data:", response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: " Farmer Created Successfully",
          text: "Farmer Registered",
        });
        // router.push("/Dashboard");
      })
      .catch((err) => {
        console.log(err.message);

      })
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className="flex flex-col bg-lavender min-h-screen md:h-[100%] overflow-x-hidden">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-col sm:flex-row p-1 md:px-10 lg:px-10 mt-6  transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mr-20 bg-card mx-auto`}
      >
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-6 md:flex-col ">
              <h1 className="text-center font-abc text-blue-400 text-xl">
                Register Farmer
              </h1>
              <h1 className="mb-4 ms-3 font-abc text-green-400">
                Please provide additional info below
              </h1>
              <div className="flex flex-col flex-grow  sm:flex-row  gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Email</label>
                  <input
                    type="text"
                    className="w-full  p-3 border rounded-md border-blue-200"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Phone number</label>
                  <input
                    type="text"
                    placeholder="2547123456789"
                    className="w-full  p-3 border rounded-md border-blue-200"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">ID number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setIdNumber(e.target.value)}
                    value={idNumber}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Household number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setHouseholdNumber(e.target.value)}
                    value={householdNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">County</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setCounty(e.target.value)}
                    value={county}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Sub-County</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setSubCounty(e.target.value)}
                    value={subCounty}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Cooparative</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setCooperative(e.target.value)}
                    value={cooperative}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Church</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setChurch(e.target.value)}
                    value={church}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Village</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setVillage(e.target.value)}
                    value={village}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Ward</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setWard(e.target.value)}
                    value={ward}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Land Size(Acres)</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setLandSize(e.target.value)}
                    value={landSize}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Economic Activity</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setEconomicActivity(e.target.value)}
                    value={economicActivity}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Primary value chain</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setPrimaryValueChain(e.target.value)}
                    value={primaryValueChain}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Secondary value chain</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setSecondaryValueChain(e.target.value)}
                    value={secondaryValueChain}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
                type="submit"
                className="bg-card3 text-white py-2 px-20 rounded-md hover:bg-sidenav hover:text-white"
              >
                Submit
              </button>
            </div>
            <p className="justify-center flex flex-row items-center mt-6">
              <span>Powered by</span>
              <span>
                <Image
                  src="/msimbo.jpeg"
                  width={40}
                  height={70}
                  objectFit="fill"
                  alt="Farm Fuzion"
                />
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
