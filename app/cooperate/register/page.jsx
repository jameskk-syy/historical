"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import SB5 from "@/app/components/SB5";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Loading from "@/app/components/loading";


export default function Register() {
  const [name, setName] = useState();
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
  const [registrationNumber, setRegistrationNumber] = useState();
  const [loading, setIsloading] = useState();

  useEffect(() => {
    const regiNo = window.localStorage.getItem("registrationNumber");
    setRegistrationNumber(regiNo);
    // console.log("RegiNo:", regiNo);
  });


  useEffect(() => {
    const regiNo = window.localStorage.getItem("registrationNumber")
    setRegistrationNumber(regiNo)
    console.log("RegiNo:", regiNo)
  })



  // Initialize state for file uploads
  const [krapin, setKraPin] = useState(null);
  const [idcard, setPermit] = useState(null);

  // Handle file changes
  const handleFileChanges = (setter) => (e) => {
    const file = e.target.files[0];
    setter(file);
  };

  // Upload file function with async/await
  const uploadFile = async (file, path) => {
    const storageRef = ref(storage, path); // Ensure 'storage' is your Firebase storage instance

    try {
      // Upload file
      await uploadBytes(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log('File uploaded successfully. Download URL:', downloadURL);

      return downloadURL; // Return download URL for further use
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error; // Propagate error to handle in calling function or component
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
 
    e.preventDefault();
    setIsloading(true);
    // Generate a unique user ID
    const userId = uuidv4();

    try {
      // Upload KYC documents
      const kraPinUrl = krapin ? await uploadFile(krapin, `products/${userId}/kra_pin`) : null;
      const permitUrl = idcard ? await uploadFile(idcard, `products/${userId}/idcard`) : null;

      console.log('Uploaded URLs:', kraPinUrl, permitUrl);

      // Make Axios POST request
      const response = await Axios.post(
        'https://us-central1-farmfuzion.cloudfunctions.net/addfarmers2',
        {
          krapin: kraPinUrl,
          idcard: permitUrl,
          registrationNumber,
          name,
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
          secondaryValueChain,
        }
      )
        .then((response) => {
          setIsloading(false);
          // console.log("Response:", response.data)
          Swal.fire({
            icon: "success",
            title: "Register",
            text: "Farmer registered successfully!",
          });
          setIsloading(false)
        })
        .catch((error) => {
          // console.log("Error:", error);
          // console.error("Error:", error);
          toast.fire(error.message)
          Swal.fire({
            icon: "error",
            title: "Failed to register farmer.",
            text: " Please try again later.",
          });
        });
      setIsloading(false)
    }
    catch (error) {
      toast.fire(error.message)
      Swal.fire({
        icon: "error",
        title: "Failed to register cooperative.",
        text: " Please try again later.",
      });
    }
  }
  // const handleSubmits = async (e) => {
  //   e.preventDefault();
  //   Axios.post(
  //     "https://us-central1-farmfuzion.cloudfunctions.net/addfarmers2",
  //     {
  //       registrationNumber,
  //       name,
  //       email,
  //       password: "1234",
  //       phoneNumber,
  //       idNumber,
  //       householdNumber,
  //       county,
  //       subCounty,
  //       cooperative,
  //       church,
  //       village,
  //       ward,
  //       landSize,
  //       economicActivity,
  //       primaryValueChain,
  //       secondaryValueChain,
  //     }
  //   )
  //     .then((response) => {
  //       console.log("Response data:", response.data);

  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: " Farmer Created Successfully",
  //         text: "Farmer Registered",
  //       });
  //       // router.push("/Dashboard");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex flex-col bg-lavender min-h-screen md:h-[100%] overflow-x-hidden">
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-col sm:flex-row p-1 md:px-10 lg:px-10 mt-0  transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mr-20 bg-card mx-auto`}
      >
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-0 md:flex-col ">
              <h1 className="text-center font-abc text-card3 text-xl">
                Register Farmer
              </h1>
              {/* <h1 className="mb-4 ms-3 font-abc text-green-400">
                Please provide additional info below
              </h1> */}
              <div className="flex flex-col flex-grow  sm:flex-row  gap-4">
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Full name</label>
                  <input
                    type="text"
                    className="w-full  p-3 border rounded-md border-blue-200"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Email</label>
                  <input
                    type="text"
                    className="w-full  p-3 border rounded-md border-blue-200"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
                <div className="flex flex-col flex-grow">
                  <label className="m-2">ID number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setIdNumber(e.target.value)}
                    value={idNumber}
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
                  <label className="m-2">Household number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setHouseholdNumber(e.target.value)}
                    value={householdNumber}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label className="m-2">Primary value chain</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md border-blue-200"
                    onChange={(e) => setPrimaryValueChain(e.target.value)}
                    value={primaryValueChain}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
               
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
              <h1 className=" ms-3 font-abc mb-4 mt-2 text-card3 font-semibold"> Documents</h1>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="kraPin">
                    KRA PIN
                  </label>
                  <input
                    type="file"
                    id="krapin"
                    onChange={handleFileChanges(setKraPin)}
                    required
                    className="border-gray-300 shadow-sm block w-full sm:text-sm rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="permit">
                    ID card
                  </label>
                  <input
                    type="file"
                    id="idCard"
                    onChange={handleFileChanges(setPermit)}
                    required
                    className="border-gray-300 shadow-sm block w-full sm:text-sm rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
              disabled={loading}
                type="submit"
                className="bg-card3 text-white  py-2 px-20 rounded-md hover:bg-sidenav hover:text-white"
              >
               {loading ? "Registering Farmer"  : "Register farmer"}
              </button>
            </div>
            <p className="justify-center flex flex-row items-center mt-6">
              <span className="mr-3">Powered by</span>
              <span>
                <Image
                  src="/web_color_sign.png"
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
