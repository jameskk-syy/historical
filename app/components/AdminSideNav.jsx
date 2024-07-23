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

export default function SideNav({ isSidebarExpanded, toggleSidebar }) {
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

  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Disclosure.Button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-green-800 hover:bg-[#d6daed] hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  group md:hidden"
            >
              <Menu className="block md:hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
            <Disclosure.Panel className="md:hidden">
              <div
                className={`p-6 h-screen bg-card3  shadow-md rounded-md z-20 fixed top-0 ${
                  isSidebarExpanded ? "w-60" : "w-20"
                } transition-all duration-200 ease-out`}
              >
                <div className="flex flex-col justify-start items-center">
                  <button
                    onClick={toggleSidebar}
                    className="ml-2 mb-1 text-white "
                  >
                    {isSidebarExpanded ? <ArrowBack /> : <ArrowForward />}
                  </button>
                  <div className="flex mb-1 justify-center items-center mt-2">
                    <Image
                      src="/logoM.png"
                      width={60}
                      height={70}
                      objectFit="fill"
                      alt="Farm Fuzion"
                    />
                  </div>
                  <div className="my-4 pb-4">
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-lavender  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <DashboardOutlined   onClick={toggleSidebar} className="text-2xl text-white  " />
                      {isSidebarExpanded && (
                        <Link
                          href="/superadmin"
                          className="text-base text-white  "
                        >
                          Dashboard
                        </Link>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleDropdown}
                      >
                        <CorporateFareOutlined   onClick={toggleSidebar} className="text-2xl text-white  " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  ">
                              Cooperatives
                            </h3>
                            <span className="ml-1">
                              {isOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  "
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
                                  className="h-5 w-5 text-white  "
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
                      {isOpen && isSidebarExpanded && (
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/corporate/allcorporates/"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All Cooperatives
                          </Link>
                          <Link
                            href="/corporate/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Add New Cooperative
                          </Link>
                          <Link
                            href="/corporate/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            {" "}
                            Cooperative Savings
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleLoanDropdown}
                      >
                        <AccountBalance   onClick={toggleSidebar} className="text-2xl text-white  group-hover:text-white " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Loans
                            </h3>
                            <span className="ml-1">
                              {isloansOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/superadmin/companyaff"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All loans
                          </Link>
                          <Link
                            href="/farmers/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Paid loans
                          </Link>
                          <Link
                            href="/superadmin/individualAffiliate"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Unpaid loans
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleAffDropdown}
                      >
                        <Groups2    onClick={toggleSidebar} className="text-2xl text-white  group-hover:text-white " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Afilliates
                            </h3>
                            <span className="ml-1">
                              {isaffiliateOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                      {isaffiliateOpen && isSidebarExpanded && (
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/superadmin/companyaff"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Company
                          </Link>
                          {/* <Link href="/farmers/register" className="block text-sm text-white  hover:bg-lavender p-2">Add Farmers</Link> */}
                          <Link
                            href="/superadmin/individualAffiliate"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Individual
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleUserDropdown}
                      >
                        <People   onClick={toggleSidebar} className="text-2xl text-white  group-hover:text-white " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Users
                            </h3>
                            <span className="ml-1">
                              {isUsersOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/farmers/allfarmers"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All Farmers
                          </Link>
                          {/* <Link href="/farmers/register" className="block text-sm text-white  hover:bg-lavender p-2">Add Farmers</Link> */}
                          <Link
                            href="#"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Add Sub Admin
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleAgriDropdown}
                      >
                        <MdAgriculture   onClick={toggleSidebar} className="text-2xl text-white  group-hover:text-white " />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Agribussiness
                            </h3>
                            <span className="ml-1">
                              {isAgriOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/superadmin/companyaff"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All loans
                          </Link>
                          <Link
                            href="/farmers/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Paid loans
                          </Link>
                          <Link
                            href="/superadmin/individualAffiliate"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Unpaid loans
                          </Link>
                        </div>
                      )}
                    </div>
                    {isSidebarExpanded && (
                      <h1
                        className={`mt-4 capitalize text-base text-center cursor-pointer font-semibold text-white  pb-4 transition-opacity ${
                          isSidebarExpanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        User Account
                      </h1>
                    )}
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Person className="text-2xl text-white  group-hover:text-white " />
                      {isSidebarExpanded && (
                        <Link
                          href="/superadmin/profile"
                          className="text-base text-white  group-hover:text-white "
                        >
                          Profile
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <Logout className="text-2xl text-white  group-hover:text-white " />
                      {isSidebarExpanded && (
                        <h3 className="text-base text-white  group-hover:text-white ">
                          Logout
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
            <div className="hidden md:flex">
              <div
                className={`p-6 h-screen bg-card3 shadow-md  z-20 fixed top-0 ${
                  isSidebarExpanded ? "w-60" : "w-20"
                } transition-all duration-200 ease-out text-white `}
              >
                <div className="flex flex-col justify-start items-center">
                  <button onClick={toggleSidebar} className="ml-2 mb-1">
                    {isSidebarExpanded ? <ArrowBack /> : <ArrowForward />}
                  </button>
                  <div className="flex mb-1 justify-center items-center mt-2">
                    <Image
                      src="/logoM.png"
                      width={60}
                      height={70}
                      objectFit="fill"
                      alt="Farm Fuzion"
                    />
                  </div>
                  <div className="my-4 pb-4">
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-lavender  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <DashboardOutlined
                        onClick={toggleSidebar}
                        className="text-2xl text-white  "
                      />
                      {isSidebarExpanded && (
                        <Link
                          href="/superadmin"
                          className="text-base text-white  "
                        >
                          Dashboard
                        </Link>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleDropdown}
                      >
                        <CorporateFareOutlined
                          onClick={toggleSidebar}
                          className="text-2xl text-white  "
                        />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  ">
                              Cooperatives
                            </h3>
                            <span className="ml-1">
                              {isOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  "
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
                                  className="h-5 w-5 text-white  "
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
                      {isOpen && isSidebarExpanded && (
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/corporate/allcorporates/"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All Cooperatives
                          </Link>
                          <Link
                            href="/corporate/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            New Cooperative
                          </Link>
                          <Link
                            href="/corporate/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            {" "}
                            Savings
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleLoanDropdown}
                      >
                        <AccountBalance
                          onClick={toggleSidebar}
                          className="text-2xl text-white  group-hover:text-white "
                        />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Loans
                            </h3>
                            <span className="ml-1">
                              {isloansOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href=""
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All loans
                          </Link>
                          <Link
                            href=""
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Paid loans
                          </Link>
                          <Link
                            href=""
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Unpaid loans
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleAffDropdown}
                      >
                        <Groups2
                          onClick={toggleSidebar}
                          className="text-2xl text-white  group-hover:text-white "
                        />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Afilliates
                            </h3>
                            <span className="ml-1">
                              {isaffiliateOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                      {isaffiliateOpen && isSidebarExpanded && (
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/superadmin/companyaff"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Company
                          </Link>
                          <Link
                            href="/farmers/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Add Farmers
                          </Link>
                          <Link
                            href="/superadmin/individualAffiliate"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Individual
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleUserDropdown}
                      >
                        <People
                          onClick={toggleSidebar}
                          className="text-2xl text-white  group-hover:text-white "
                        />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Users
                            </h3>
                            <span className="ml-1">
                              {isUsersOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/farmers/allfarmers"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All Farmers
                          </Link>
                          {/* <Link href="/farmers/register" className="block text-sm text-white  hover:bg-lavender p-2">Add Farmers</Link> */}
                          <Link
                            href="#"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Add Sub Admin
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="mb-1">
                      <div
                        className="flex justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        onClick={toggleAgriDropdown}
                      >
                        <MdAgriculture
                          onClick={toggleSidebar}
                          className="text-2xl text-white  group-hover:text-white "
                        />
                        {isSidebarExpanded && (
                          <div className="flex items-center">
                            <h3 className="text-base text-white  group-hover:text-white ">
                              Agribussiness
                            </h3>
                            <span className="ml-1">
                              {isAgriOpen ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                                  className="h-5 w-5 text-white  group-hover:text-white "
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
                        <div className="pl-14 pt-2 pb-1">
                          <Link
                            href="/superadmin/companyaff"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            All loans
                          </Link>
                          <Link
                            href="/farmers/register"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Paid loans
                          </Link>
                          <Link
                            href="/superadmin/individualAffiliate"
                            className="block text-sm text-white  hover:bg-lavender p-2"
                          >
                            Unpaid loans
                          </Link>
                        </div>
                      )}
                    </div>
                    {isSidebarExpanded && (
                      <h1
                        className={`mt-4 capitalize text-base text-center cursor-pointer font-semibold text-white  pb-4 transition-opacity ${
                          isSidebarExpanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        User Account
                      </h1>
                    )}
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Person
                        onClick={toggleSidebar}
                        className="text-2xl text-white  group-hover:text-white "
                      />
                      {isSidebarExpanded && (
                        <Link
                          href="/superadmin/profile"
                          className="text-base text-white  group-hover:text-white "
                        >
                          Profile
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="flex mb-0 mt-20 justify-start items-center gap-4 pl-5 hover:bg-lavender p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <Logout className="text-2xl text-white  group-hover:text-white " />
                      {isSidebarExpanded && (
                        <h3 className="text-base text-white  group-hover:text-white ">
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
