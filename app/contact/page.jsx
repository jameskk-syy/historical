"use client";
import React, { useState } from "react";
import FarmerNav from "../components/FarmerNav";
import { FaAngleDoubleRight } from "react-icons/fa";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FaGraduationCap } from "react-icons/fa";
import SpaIcon from "@mui/icons-material/Spa";
import Link from "next/link";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export default function Farmers() {
  return (
    <>
      <div className="h-screen w-full">
        <FarmerNav />
        <div className="text-black flex flex-col mt-44 md:px-20 ">
           <div className="flex flex-col mb-20 justify-center items-center w-full">
                <p className="text-black mb-6 font-abc font-semibold text-3xl">Contact Our Friendly Team</p>
                <p className="font-abc text-lg">Lets us know how we can  help</p>
            </div>
            <div className="grid grid-cols-1  gap-6 mb-20 px-4 md:px-0 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative md:w-80 w-full p-6 z-20 border-2  border-cardfa rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <PersonIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Chat With Sales
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8 mt-6">
              Speak  with  our sales team 
              </p>
              <button className="bg-white text-cardfa border border-cardfa mt-16 hover:bg-cardfa hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Sales Email <EmailIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2  border-cardfa rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <ContactSupportIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Chat With Support
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8 mt-6">
              We're here to help you
              </p>
              <button className="bg-white text-cardfa border border-cardfa mt-16 hover:bg-cardfa hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Support Email <EmailIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2  border-cardfa rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <LocationOnIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
               Visit Us
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8 mt-6">
               Stop by our Head Quaters
              </p>
              <button className="bg-white text-cardfa border border-cardfa mt-16 hover:bg-cardfa hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Our Location <LocationOnIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2  border-cardfa rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <PhoneInTalkIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Call Us
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8 mt-6">
               We are always glad to  hear  from  you
              </p>
              <button className="bg-white text-cardfa border border-cardfa mt-16 hover:bg-cardfa hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Our number <PhoneInTalkIcon className="ml-2" />
              </button>
            </div>
          
            </div>
           <div className="flex flex-col mb-20 justify-center items-center w-full">
                <p className="text-black mb-6 font-abc font-semibold text-3xl">Have a specific question?</p>
                <p className="font-abc text-lg">Lets us know how we can  help</p>
            </div>
            <div className="flex flex-col  w-full md:gap-10 gap-6 md:px-20">
             <div className="flex w-full flex-col px-4 md:px-0 md:flex-row justify-between items-center  md:gap-20 gap-6">
                <div className="md:w-1/2 w-full flex flex-col">
                 <label htmlFor="" className="mb-4">Enter Your Full Name</label>
                 <input type="text" className="3/4 outline-none py-3 focus:border-cardfa px-10 border-2 border-cardfa rounded-lg" />
                </div>
                <div className="md:w-1/2 w-full flex flex-col">
                <label htmlFor="" className="mb-4">Enter Your Email Address</label>
                 <input type="email" className="3/4 outline-none focus:border-cardfa py-3 px-10 border-2 border-cardfa rounded-lg" />
                </div>
             </div>
             <div className="flex w-full flex-col px-4 md:px-0 md:flex-row justify-between items-center  md:gap-20 gap-6">
                <div className="md:w-1/2 w-full flex flex-col">
                 <label htmlFor="" className="mb-4">Subject</label>
                 <input type="text" className="3/4 outline-none py-3 focus:border-cardfa px-10 border-2 border-cardfa rounded-lg" />
                </div>
                <div className="md:w-1/2 w-full flex flex-col">
                <label htmlFor="" className="mb-4">Phone Number</label>
                 <input type="email" className="3/4 outline-none focus:border-cardfa py-3 px-10 border-2 border-cardfa rounded-lg" />
                </div>
             </div>
             <div className="flex w-full flex-col px-4 md:px-0 md:flex-row justify-between items-center  md:gap-20 gap-6">
                <div className=" w-full flex flex-col">
                 <label htmlFor="" className="mb-4">Message</label>
                 <textarea type="text" className="3/4 outline-none py-3 resize-none focus:border-cardfa px-10 border-2 border-cardfa rounded-lg" rows={8}></textarea>
                </div>
             </div>
             <div className="flex w-full flex-col px-4 md:px-0 md:mb-14 mb-2 justify-center items-center">
              <button className="bg-footer rounded-full text-white py-4 px-14 mb-3">Submit</button>
              <p className="font-abc ">We'll Get back to you in 1-2 business days</p>
             </div>
            </div>
         
        </div>
        <Footer />
        </div>
        </>
  );
}