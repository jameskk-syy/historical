"use client";
import React, { useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  CorporateFareOutlined,
  DashboardOutlined,
  People,
  Person,
  LogoutOutlined,
  Menu,
  Group,
  Groups2,
  AccountBalance,
  AttachMoney,
  Logout,
  Agriculture,
} from "@mui/icons-material";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { MdAgriculture } from "react-icons/md";
import whiteFF_logo from "@public/assets/whiteFarmFuzion.png";

import { FaHouse } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { CgProfile, CgTrending } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function SB5({ isSidebarExpanded, toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUsersOpen, setUserIsOpen] = useState(false);
  const [isloansOpen, setUserLoanOpen] = useState(false);
  const [isaffiliateOpen, setUserAffOpen] = useState(false);
  const [isAgriOpen, setAgriOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleUserDropdown = () => setUserIsOpen(!isUsersOpen);
  const toggleLoanDropdown = () => setUserLoanOpen(!isloansOpen);
  const toggleAffDropdown = () => setUserAffOpen(!isaffiliateOpen);
  const toggleAgriDropdown = () => setAgriOpen(!isAgriOpen);

  const router = useRouter();

  const handleLogout = async () => {
    const confirmLogout = await Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, stay logged in",
      reverseButtons: true,
    });

    if (confirmLogout.isConfirmed) {
      localStorage.removeItem("userData");
      router.push("/");
    }
  };

  //  textstyles
  const txtStyles = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
  };
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Disclosure.Button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-green-800 hover:bg-green-900 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group md:hidden"
            >
              <Menu className="block md:hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
            <Disclosure.Panel className="md:hidden">
              <div
                className={`p-6 h-screen   shadow-md rounded-md z-20 fixed top-0 ${
                  isSidebarExpanded ? "w-60" : "w-20"
                } transition-all duration-200 ease-out`}
              >
                <div className="flex flex-col justify-start items-center">
                  <button onClick={toggleSidebar} className="ml-2 mb-2">
                    {isSidebarExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                  </button>
                  <div className="flex mb-4 justify-center items-center mt-2">
                    <Image
                      src={whiteFF_logo}
                      width={40}
                      height={70}
                      objectFit="fill"
                      alt="Farm Fuzion"
                    />
                  </div>
                  <div className="my-2 pb-4">
                    <div className="flex mb-4 justify-start items-center gap-4 pl-2  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <RxDashboard className="text-xl text-white" />
                      {isSidebarExpanded && (
                        <Link
                          href="/cooperate/CDashboard"
                          className="text-base text-white"
                          style={txtStyles}
                        >
                          Dashboard
                        </Link>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                        <FaHouse className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div
                        className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleUserDropdown}
                      >
                        <CgProfile className="text-xl text-white " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white ">Users</h3>
                            <span className="ml-1">
                              {isUsersOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white "
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 8a1 1 0 01.707-.293l3 3a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                      {isUsersOpen && isSidebarExpanded && (
                        <div className=" w-4/5 ml-8 pl-1 font-abc">
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            All Farmers
                          </Link>
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Add Farmers
                          </Link>
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Add Sub Admin
                          </Link>
                        </div>
                      )}
                    </div>
                    {isSidebarExpanded && (
                      <h1
                        className={`mt-4 capitalize text-base text-center cursor-pointer font-semibold text-white pb-4 transition-opacity ${
                          isSidebarExpanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        User Account
                      </h1>
                    )}
                    <div className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <CgProfile className="text-xl text-white " />
                      {isSidebarExpanded && (
                        <Link
                          href="/superadmin/profile"
                          className="text-base text-white "
                        >
                          Profile
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <RiLogoutCircleLine className="text-xl text-white " />
                      {isSidebarExpanded && (
                        <h3 className="text-base text-white ">Logout</h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
            <div className="hidden md:flex">
              <div
                className={`p-6 h-screen bg-newBg shadow-md  m-0 z-20 fixed top-0 ${
                  isSidebarExpanded ? "w-60" : "w-20"
                } transition-all duration-200 ease-out text-white`}
              >
                <div className="flex flex-col justify-start items-center">
                  <button onClick={toggleSidebar} className="ml-0 mb-4">
                    {isSidebarExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                  </button>
                  <div className="flex mb-4 justify-center items-center mt-2">
                    <Image
                      src={whiteFF_logo}
                      width={60}
                      height={70}
                      objectFit="fill"
                      alt="Farm Fuzion"
                    />
                  </div>
                  <div className="my-4 pb-4">
                    <div className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <RxDashboard onClick={toggleSidebar} className="text-xl text-white  transition-transform transform hover:scale-125" />
                      {isSidebarExpanded && (
                        <Link
                          href="/cooperate/CDashboard"
                          className="text-base text-white "
                          style={txtStyles}
                        >
                          Dashboard
                        </Link>
                      )}
                    </div>
                    <div className="mb-4">
                      <div
                        className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleDropdown}
                      >
                        <FaHouse  onClick={toggleSidebar} className="text-xl text-white transition-transform transform hover:scale-125" />
                        {isSidebarExpanded && (
                          <Link
                            href="/cooperate/homeCoop"
                            className="text-base text-white "
                            style={txtStyles}
                          >
                            Home
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div
                        className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleLoanDropdown}
                      >
                        <MdCreditScore  onClick={toggleSidebar} className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3
                              className="text-base text-white group-hover:text-white"
                              style={txtStyles}
                            >
                              Finances
                            </h3>
                            <span className="ml-1">
                              {isloansOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 8a1 1 0 01.707-.293l3 3a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                      {isloansOpen && isSidebarExpanded && (
                        <div className="  w-4/5 ml-8 pl-1 font-abc">
                          <Link
                            href="/cooperate/CDashboard/CLoans"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Credit
                          </Link>
                          <Link
                            href="/corporate/savingsstatements/"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Savings
                          </Link>
                          <Link
                            href="/corporate/marketstatements/"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                           Statements
                          </Link>
                          <Link
                            href="/cooperate/CDashboard/Payment"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Payments
                          </Link>
                        
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div
                        className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleAgriDropdown}
                      >
                        <MdAgriculture  onClick={toggleSidebar} className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3
                              className="text-base text-white group-hover:text-white  transition duration-200 ease-in-out"
                              style={txtStyles}
                            >
                              Agri Business
                            </h3>
                            <span className="ml-1">
                              {isAgriOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 8a1 1 0 01.707-.293l3 3a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                      {isAgriOpen && isSidebarExpanded && (
                        <div className=" w-4/5 ml-8 pl-1 font-abc">
                          <Link
                            href="/cooperate/CDashboard/Cproducts"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Products
                          </Link>
                          <Link
                            href="/cooperate/CDashboard/CInsurance"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Insurance
                          </Link>
                          <Link
                            href="/corporate/veterinaryservives"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Veterinary
                          </Link>
                          <Link
                            href="/corporate/agronomyservices"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Agronomy
                          </Link>
{/* 
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Request Service
                          </Link> */}
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <div
                        className="flex justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleUserDropdown}
                      >
                        <RiNewsLine  onClick={toggleSidebar} className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125 " />
                        {isSidebarExpanded && (
                          <div className="flex items-center ">
                            <h3
                              className="text-base text-white group-hover:text-white"
                              style={txtStyles}
                            >
                              News & Events
                            </h3>
                            <span className="ml-1">
                              {isUsersOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 8a1 1 0 01.707-.293l3 3a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white group-hover:text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                      {isUsersOpen && isSidebarExpanded && (
                        <div className=" w-4/5 ml-8 pl-1 font-abc">
                          <Link
                            href="/farmers/allfarmers"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Blogs
                          </Link>
                          {/* <Link href="/farmers/register" className="block text-sm text-white hover:bg-green-400 p-2">Add Farmers</Link> */}
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Weather
                          </Link>
                          <Link
                            href="#"
                            className="block text-sm text-white hover:bg-green-400 p-2"
                          >
                            Newsletters
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* {isSidebarExpanded && (
                      <h1
                        className={`mt-4 capitalize text-base text-center cursor-pointer font-semibold text-white pb-4 transition-opacity ${
                          isSidebarExpanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        User Account
                      </h1>
                    )} */}
                    <div className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                      <CgProfile  onClick={toggleSidebar} className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                      {isSidebarExpanded && (
                        <Link
                          href="#"
                          className="text-base text-white group-hover:text-white "
                          style={txtStyles}
                        >
                          My Profile
                        </Link>
                      )}
                    </div>
                    <div className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                      <CgTrending  onClick={toggleSidebar} className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                      {isSidebarExpanded && (
                        <Link
                          href="/cooperate/Faq"
                          className="text-base text-white group-hover:text-white "
                          style={txtStyles}
                        >
                          FAQS
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="flex mb-4 justify-start items-center gap-4 pl-2 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <RiLogoutCircleLine className="text-xl text-white group-hover:text-white transition-transform transform hover:scale-125" />
                      {isSidebarExpanded && (
                        <h3
                          className="text-base text-white group-hover:text-white"
                          style={txtStyles}
                        >
                          Logout
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
