"use client";
import { useEffect, useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import SideNav from "@/app/components/SideNav";
import { useRouter } from "next/navigation";
import Image from "next/image";

import profile_img from "@public/assets/user_profile.jpeg";
import { IoMdNotifications } from "react-icons/io";

export default function Test() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    role: "",
    username: "",
    userCop: "",
    email: "",
    idNumber: "",
    phoneNumber: "",
    password: "", // Initialize with empty password
    church: "",
    county: "",
    economicActivity: "",
    householdNumber: "",
    landSize: "",
    primaryValueChain: "",
    secondaryValueChain: "",
    subCounty: "",
    village: "",
    ward: "",
  });

  useEffect(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== "undefined" && window.localStorage) {
      setUserData({
        role: localStorage.getItem("role"),
        username: localStorage.getItem("username"),
        userCop: localStorage.getItem("cooperative"),
        email: localStorage.getItem("email"),
        idNumber: localStorage.getItem("idNumber"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        password: "", // Initialize with empty password
        church: localStorage.getItem("church"),
        county: localStorage.getItem("county"),
        economicActivity: localStorage.getItem("economicActivity"),
        householdNumber: localStorage.getItem("householdNumber"),
        landSize: localStorage.getItem("landSize"),
        primaryValueChain: localStorage.getItem("primaryValueChain"),
        secondaryValueChain: localStorage.getItem("secondaryValueChain"),
        subCounty: localStorage.getItem("subCounty"),
        village: localStorage.getItem("village"),
        ward: localStorage.getItem("ward"),
      });
    }
  }, []);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };

  return (
    <div className="min-h-screen md:h-[100%] sm:overflow-x-hidden">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow lg:px-10 md:px-5 px-2  transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <div className="flex flex-col w-full mt-20">
          <div className="flex flex-col  w-full">
            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Password</label>
                <input
                  type="text"
                  id="profile_password_text_box"
                  readOnly
                  value="***"
                  className="h-10 w-full my-1 mb-2 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  id="profile_email_text_box"
                  value={userData.email}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Household number</label>
                <input
                  type="number"
                  id="profile_household_text_box"
                  value={userData.householdNumber}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">County</label>
                <input
                  type="text"
                  id="profile_county_text_box"
                  value={userData.county}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Cooperative</label>
                <input
                  type="text"
                  id="profile_cooperate_text_box"
                  value={userData.userCop}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Village</label>
                <input
                  type="text"
                  id="profile_village_text_box"
                  value={userData.village}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Land Size (Ha)</label>
                <input
                  type="text"
                  id="profile_land_size_text_box"
                  value={userData.landSize}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Primary Chain</label>
                <input
                  type="text"
                  id="profile_primary_chain_text_box"
                  value={userData.primaryValueChain}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Phone Number</label>
                <input
                  type="number"
                  id="profile_phone_number_text_box"
                  value={userData.phoneNumber}
                  readOnly
                  className="h-10 w-full my-1 mb-2 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">ID Number</label>
                <input
                  type="number"
                  id="profile_Nationl_id_number_text_box"
                  value={userData.idNumber}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Role</label>
                <input
                  type="text"
                  id="profile_role_text_box"
                  value={userData.role}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Sub-County</label>
                <input
                  type="text"
                  id="profile_sub_county_text_box"
                  value={userData.subCounty}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Church</label>
                <input
                  type="text"
                  id="profile_church_text_box"
                  value={userData.church}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Ward</label>
                <input
                  type="text"
                  id="profile_ward_text_box"
                  value={userData.ward}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Economic Activity</label>
                <input
                  type="text"
                  id="profile_economic_activity_text_box"
                  value={userData.economicActivity}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 w-full p-1">
                <label className="text-gray-600 font-medium">Secondary Chain</label>
                <input
                  type="text"
                  id="profile_secondary_chain_text_box"
                  value={userData.secondaryValueChain}
                  readOnly
                  className="h-10 w-full my-1 p-1 border-blue-200 rounded-lg border border-blue-300 outline-none"
                  style={styles}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
