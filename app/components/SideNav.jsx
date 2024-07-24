"use client";
import React, { useState } from "react";
import {
  ArrowBack,
  CreditScore,
  ArrowForward,
  Storefront,
  MiscellaneousServices,
  CorporateFareOutlined,
  HealthAndSafety,
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
import { BiLogOut } from "react-icons/bi";


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
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-green-800 hover:bg-[#d6daed] hover:text-textcolor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-textcolor group md:hidden"
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
                    className="ml-2 mb-1 text-white"
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
                  <div className=" my-4  pb-4">
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <DashboardOutlined className="text-2xl  group-hover:text-white text-white  " />
                      <Link
                        href="/farmers/fdashboard/"
                        className="text-base text-white  group-hover:text-white  font-semibold font-abd "
                      >
                        Dashboard
                      </Link>
                    </div>
                    {/* <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <Home className="text-2xl  group-hover:text-white text-white  " />
                                <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                                    Home
                                </h3>
                            </div> */}
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <CreditScore className="text-xl  group-hover:text-white text-white  " />
                      <Link
                        href="/farmers/fdashboard/loansandsavings"
                        className="text-base text-white   group-hover:text-white  font-semibold "
                      >
                        Loans
                      </Link>
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <CreditScore className="text-xl  group-hover:text-white text-white  " />
                      <Link
                        href="/farmers/fdashboard/loansandsavings/savings"
                        className="text-base text-white  group-hover:text-white  font-semibold "
                      >
                        Savings
                      </Link>
                    </div>

                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <HealthAndSafety className="text-2xl  group-hover:text-white text-white  " />

                      <Link
                        className="text-base text-white  group-hover:text-white  font-semibold "
                        href="/farmers/fdashboard/Finsurance"
                      >
                        Insurance
                      </Link>
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Storefront className="text-2xl  group-hover:text-white text-white  " />
                      <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                        Sell Products
                      </h3>
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Person className="text-2xl  group-hover:text-white text-white  " />
                      <Link
                        href="/farmers/profile"
                        className="text-base text-white  group-hover:text-white  font-semibold "
                      >
                        Profile
                      </Link>
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MiscellaneousServices className="text-2xl  group-hover:text-white text-white  " />
                      <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                        Agronomy services
                      </h3>
                    </div>
                    <div
                      onClick={() => handleLogout()}
                      className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <LogoutOutlined className="text-2xl  group-hover:text-white text-white  " />
                      <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                        Log out
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
            <div className="hidden md:flex">
              <div
                className={`p-6 h-screen bg-card3 shadow-md  z-20 fixed top-0 ${
                  isSidebarExpanded ? "w-60" : "w-20"
                } transition-all duration-200 ease-out text-textcolor`}
              >
                <div className="flex flex-col justify-start items-center">
                  <button
                    onClick={toggleSidebar}
                    className="ml-2 mb-1 text-white"
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
                  {isSidebarExpanded && (
                    <p className="mt-1 text-base text-center text-white cursor-pointer font-semibold  pb-4 w-full">
                      TIM THE FARMER
                    </p>
                  )}
                  <div className="my-4 pb-4">
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <DashboardOutlined  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link
                          href="/farmers/fdashboard/"
                          className="text-base text-white  group-hover:text-white  font-semibold "
                        >
                          Dashboard
                        </Link>
                      )}
                    </div>
                    <div className="mb-1">
                      <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <CreditScore  onClick={toggleSidebar} className="text-xl  group-hover:text-white text-white  " />
                        {isSidebarExpanded && (
                          <Link
                            href="/farmers/fdashboard/loansandsavings"
                            className="text-base text-white  group-hover:text-white  font-semibold "
                          >
                            Loans
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <CreditScore  onClick={toggleSidebar} className="text-xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link
                          href="/farmers/fdashboard/loansandsavings/savings"
                          className="text-base text-white  group-hover:text-white  font-semibold "
                        >
                          Savings
                        </Link>
                      )}
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <HealthAndSafety  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link
                          className="text-base text-white  group-hover:text-white  font-semibold "
                          href="/farmers/fdashboard/Finsurance"
                        >
                          Insuarance
                        </Link>
                      )}
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Storefront  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                          Sell Products
                        </h3>
                      )}
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MiscellaneousServices  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link href="/farmers/fdashboard/fagronomy" className="text-base text-white  group-hover:text-white  font-semibold ">
                          Agronomy
                        </Link> 
                      )}
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      < MdAgriculture  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link href="/farmers/fdashboard/vetinaryservices" className="text-base text-white  group-hover:text-white  font-semibold ">
                          Veterinary
                        </Link> 
                      )}
                    </div>
                    <div className="flex  mb-1 justify-start items-center gap-4 pl-5 hover:bg-sidenav p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <Person  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white  " />
                      {isSidebarExpanded && (
                        <Link
                          href="/farmers/profile"
                          className="text-base text-white  group-hover:text-white  font-semibold "
                        >
                          Profile
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={() => handleLogout()}
                      className="flex  mb-1 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto  md:mt-40  lg:mt-40 "
                    >
                      <BiLogOut  onClick={toggleSidebar} className="text-2xl  group-hover:text-white text-white" />
                      {isSidebarExpanded && (
                        <h3 className="text-base text-white  group-hover:text-white  font-semibold ">
                          Log out
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
