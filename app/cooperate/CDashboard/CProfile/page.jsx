"use client";
import React, { useState, useEffect } from "react";
import SB5 from "@/app/components/SB5";

const CooperativeProfileForm = () => {
  const [userData, setUserData] = useState({
    role: "",
    username: "",
    cooperative: "",
    email: "",
    idNumber: "",
    phoneNumber: "",
    password: "",
    chairpersonEmail: "",
    chairpersonName: "",
    chairpersonPhone: "",
    coopType: "",
    cooperativeName: "",
    county: "",
    postalAddress: "",
    registrationNumber: "",
    registrationStatus: "",
    secretaryEmail: "",
    secretaryName: "",
    secretaryPhone: "",
    specificValueChain: "",
    subCounty: "",
    treasurerName: "",
    treasurerPhone: "",
    ward: "",
  });


  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setUserData({
        role: localStorage.getItem("userRole"),
        username: localStorage.getItem("username"),
        cooperative: localStorage.getItem("userCop"),
        email: localStorage.getItem("userEmail"),
        idNumber: localStorage.getItem("userID"),
        phoneNumber: localStorage.getItem("userPhone"),
        password: "",
        chairpersonEmail: localStorage.getItem("chairpersonEmail"),
        chairpersonName: localStorage.getItem("chairpersonName"),
        chairpersonPhone: localStorage.getItem("chairpersonPhone"),
        coopType: localStorage.getItem("coopType"),
        cooperativeName: localStorage.getItem("cooperativeName"),
        county: localStorage.getItem("county"),
        postalAddress: localStorage.getItem("postalAddress"),
        registrationNumber: localStorage.getItem("registrationNumber"),
        registrationStatus: localStorage.getItem("registrationStatus"),
        secretaryEmail: localStorage.getItem("secretaryEmail"),
        secretaryName: localStorage.getItem("secretaryName"),
        secretaryPhone: localStorage.getItem("secretaryPhone"),
        specificValueChain: localStorage.getItem("specificValueChain"),
        subCounty: localStorage.getItem("subCounty"),
        treasurerName: localStorage.getItem("treasurerName"),
        treasurerPhone: localStorage.getItem("treasurerPhone"),
        ward: localStorage.getItem("ward"),
      });
    }
  }, []);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setImage(imageData);
        localStorage.setItem('userImage', imageData); 
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  useEffect(() => {
    if (image) {
      localStorage.setItem('userImage', image);
    } else {
      localStorage.removeItem('userImage');
    }
  }, [image]);
  
  const styles = {
    border: '1px solid #6ac8d8',
    resize: 'none'
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className='flex flex-col  min-h-screen md:h-[100%]'> 
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
    <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
                } sm:ml-3 mt-20 me-3`}>
    <div className="p-6 bg-card rounded-lg w-full shadow-lg z mx-4 md:mx-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-2">
        <div className="flex w-full md:w-1/2 flex-col md:flex-row ">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="relative w-28 h-28 mb-2">
              <img
                src={image || "/placeholder-image.png"}
                alt="Profile"
                className="w-full h-full rounded-full bg-green-200 object-cover"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
            <button className="bg-card3 text-white py-1 px-3 rounded">
              Edit Profile
            </button>
          </div>
          <div className="flex flex-row mt-1 w-full flex-grow ml-0 md:ml-2 mr-2">
            <div className="flex flex-grow flex-col space-y-3 flex-1">
              <div>
                <label className="block text-textcolor font-abc  mb-1">
                  Cooperative name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border shadow  rounded"
                  value={userData.cooperativeName}
                  style={styles}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-textcolor font-abc  mb-1">Email</label>
                <input
                  type="text"
                  className="w-full p-2 border  rounded shadow focus:border-inputborder"
                  value={userData.email}
                  style={styles}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 w-full flex-1 ">
          <div className="mb-3">
            <label className="block text-textcolor font-abc  mb-1">Telephone number</label>
            <input
              type="text"
              className="w-full p-2 border  rounded shadow focus:border-inputborder"
              value={userData.phoneNumber}
  
              style={styles}
              readOnly
            />
          </div>
          <div>
            <label className="block text-textcolor font-abc  mb-1">
              Registration Status
            </label>
            <input
              type="text"
              className="w-full p-2 border  rounded shadow focus:border-inputborder"
              value={userData.registrationStatus}
  
              style={styles}
              readOnly
            />
          </div>
        </div>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-textcolor font-abc  mb-1">County</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.county}

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Sub-County</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.subCounty}
            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">
            Type of Cooperative
          </label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.coopType}
            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Ward</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.ward}
            style={styles}
            readOnly
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-textcolor font-abc  mb-1">
            Core business activities selected
          </label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Chairperson Name</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.chairpersonName}

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Phone number</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Secretary Name</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value={userData.chairpersonName}
            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Phone number</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">
            Bank and Branch name
          </label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Account number</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">
            Paybill/Till number
          </label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
        <div>
          <label className="block text-textcolor font-abc  mb-1">Paybill/Till name</label>
          <input
            type="text"
            className="w-full p-2 border  rounded shadow focus:border-inputborder"
            value="-"

            style={styles}
            readOnly
          />
        </div>
      </form>
    </div>
    </div>
    </div>
    
  );
};

export default CooperativeProfileForm;
