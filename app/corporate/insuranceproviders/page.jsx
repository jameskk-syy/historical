"use client"
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { BiBriefcase } from "react-icons/bi";
import { ArrowDownward, Bookmarks, ContactPage, ContactPhone, Description, KeyboardArrowDown, LocationCity, LocationOn } from "@mui/icons-material";
import { MdProductionQuantityLimits } from "react-icons/md";


export default function InsuranceProviders() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <SB5
                isSidebarExpanded={isSidebarExpanded}
                toggleSidebar={toggleSidebar}
            />
            <div
                className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
                    } mt-4 me-3`}
            >
                <div className="mt-2 xb:ml-5">
                    <TopCoop />
                </div>
            </div>
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"} mt-1 me-3`}>
                <p className="p-2">InsuranceProviders</p>
                <div className="flex flex-col items-center gap-2 p-10 shadow-md rounded-md w-full md:mr-24">
                    <div className="flex md:flex-row lg:flex-row items-center gap-2 w-full justify-between flex-col">
                        <div className="flex flex-row items-center">
                            <Checkbox checked={true} className="text-2xl text-card3" />
                            <p className="text-xl text-card3">Active</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <BiBriefcase className="text-3xl text-card3 mr-2" />
                            <p className="text-xl text-card3">Provider Name</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <Description className="text-2xl text-card3 mr-2" />
                            <p className="text-xl text-card3">Provider Description</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <Bookmarks className="text-2xl text-card3 mr-2" />
                            <p className="text-xl text-card3">Coverage limit</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <LocationOn className="text-2xl text-card3 mr-2" />
                            <p className="text-xl text-card3">Provider Location</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <ContactPhone className="text-2xl text-card3 mr-2" />
                            <p className="text-xl text-card3">Provider Contact</p>
                        </div>
                        <KeyboardArrowDown className="text-5xl text-card3 cursor-pointer" onClick={handleToggle} />
                    </div>
                    {isExpanded && (
                        <div className="flex flex-col items-start w-full mt-4">
                            <div className="flex flex-row items-center mb-2">
                                <p className="text-lg text-card3 mr-2">Additional Detail 1:</p>
                                <p className="text-lg text-card3">Detail Information 1</p>
                            </div>
                            <div className="flex flex-row items-center mb-2">
                                <p className="text-lg text-card3 mr-2">Additional Detail 2:</p>
                                <p className="text-lg text-card3">Detail Information 2</p>
                            </div>
                            <div className="flex flex-row items-center mb-2">
                                <p className="text-lg text-card3 mr-2">Additional Detail 3:</p>
                                <p className="text-lg text-card3">Detail Information 3</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center gap-2 p-10 shadow-md rounded-md w-full md:mr-24">
      <div className="flex md:flex-row lg:flex-row items-center gap-2 w-full justify-between flex-col">
        <div className="flex flex-row items-center">
          <Checkbox checked={true} className="text-2xl text-card3" />
          <p className="text-xl text-card3">Active</p>
        </div>
        <div className="flex flex-row items-center">
          <BiBriefcase className="text-3xl text-card3 mr-2" />
          <p className="text-xl text-card3">Provider Name</p>
        </div>
        <div className="flex flex-row items-center">
          <Description className="text-2xl text-card3 mr-2" />
          <p className="text-xl text-card3">Provider Description</p>
        </div>
        <div className="flex flex-row items-center">
          <Bookmarks className="text-2xl text-card3 mr-2" />
          <p className="text-xl text-card3">Coverage limit</p>
        </div>
        <div className="flex flex-row items-center">
          <LocationOn className="text-2xl text-card3 mr-2" />
          <p className="text-xl text-card3">Provider Location</p>
        </div>
        <div className="flex flex-row items-center">
          <ContactPhone className="text-2xl text-card3 mr-2" />
          <p className="text-xl text-card3">Provider Contact</p>
        </div>
        <KeyboardArrowDown className="text-5xl text-card3 cursor-pointer" onClick={handleToggle} />
      </div>
      {isExpanded && (
        <div className="flex flex-col items-start w-full mt-4">
          <div className="flex flex-row items-center mb-2">
            <p className="text-lg text-card3 mr-2">Additional Detail 1:</p>
            <p className="text-lg text-card3">Detail Information 1</p>
          </div>
          <div className="flex flex-row items-center mb-2">
            <p className="text-lg text-card3 mr-2">Additional Detail 2:</p>
            <p className="text-lg text-card3">Detail Information 2</p>
          </div>
          <div className="flex flex-row items-center mb-2">
            <p className="text-lg text-card3 mr-2">Additional Detail 3:</p>
            <p className="text-lg text-card3">Detail Information 3</p>
          </div>
        </div>
      )}
    </div>

            </div>

        </>
    );
}
