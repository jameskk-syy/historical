"use client";
// Icons
import farm_fuzion_logo from "@public/assets/FARMFUZION_T_ICON.png";
import { FaHouse } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
// effects
import { useState, useEffect } from "react";
import Link from "next/link";
//  textstyles
const txtStyles = {
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "start",
  paddingLeft: "18%",
  paddingTop: "2px",
  color: "white",
};

function closeSideBar() {
  const open = document.getElementById("ns_bar");
  const imgF = document.getElementById("sbar_img");
  const imgSmall = document.getElementById("small_img");
  const direction_left = document.getElementById("ch_left");
  const direction_right = document.getElementById("ch_right");
  open.style.width = "64px";
  direction_left.style.visibility = "collapse";
  direction_right.style.visibility = "visible";
  imgF.style.visibility = "collapse";
  imgSmall.style.visibility = "visible";
}

function openSideBar() {
  const open = document.getElementById("ns_bar");
  const direction_left = document.getElementById("ch_left");
  const direction_right = document.getElementById("ch_right");
  direction_left.style.visibility = "visible";
  direction_right.style.visibility = "collapse";
  open.style.width = "20%";
  const imgF = document.getElementById("sbar_img");
  imgF.style.visibility = "visible";
  const imgSmall = document.getElementById("small_img");
  imgSmall.style.visibility = "collapse";
}
// `````````````````text is Invisible`````````````````````````````````````````````
function textInv_viz() {
  const farmT = document.getElementById("FF");
  const homeT = document.getElementById("home_text");
  const dashT = document.getElementById("dashboard_text");
  const fineT = document.getElementById("finance_text");
  const bizT = document.getElementById("biz_text");
  const persT = document.getElementById("pers_text");
  const logT = document.getElementById("log_text");

  farmT.style.visibility = "collapse";
  homeT.style.visibility = "collapse";
  dashT.style.visibility = "collapse";
  fineT.style.visibility = "collapse";
  bizT.style.visibility = "collapse";
  persT.style.visibility = "collapse";
  logT.style.visibility = "collapse";
}
// `````````````````text is visible`````````````````````````````````````````````
function text_viz() {
  const farmT = document.getElementById("FF");
  const homeT = document.getElementById("home_text");
  const dashT = document.getElementById("dashboard_text");
  const fineT = document.getElementById("finance_text");
  const bizT = document.getElementById("biz_text");
  const persT = document.getElementById("pers_text");
  const logT = document.getElementById("log_text");

  farmT.style.visibility = "visible";
  homeT.style.visibility = "visible";
  dashT.style.visibility = "visible";
  fineT.style.visibility = "visible";
  bizT.style.visibility = "visible";
  persT.style.visibility = "visible";
  logT.style.visibility = "visible";
}
function textTrans() {
  const farmT = document.getElementById("FF");
  const homeT = document.getElementById("home_text");
  const dashT = document.getElementById("dashboard_text");
  const fineT = document.getElementById("finance_text");
  const bizT = document.getElementById("biz_text");
  const persT = document.getElementById("pers_text");
  const logT = document.getElementById("log_text");

  farmT.style.animation = "fadeIn .8s ease-in-out forwards";
  homeT.style.animation = "fadeIn .8s ease-in-out forwards";
  dashT.style.animation = "fadeIn .8s ease-in-out forwards";
  fineT.style.animation = "fadeIn .8s ease-in-out forwards";
  bizT.style.animation = " fadeIn .8s ease-in-out forwards";
  persT.style.animation = "fadeIn .8s ease-in-out forwards";
  logT.style.animation = "fadeIn .8s ease-in-out forwards";
}
function open_Combined() {
  openSideBar();
  text_viz();
  textTrans();
}

function closed_Combined() {
  closeSideBar();
  textInv_viz();
}
export default function NewSideBar() {
  // others
  const [isFinancialDropdownOpen, setIsFinancialDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isPersonalDropdownOpen, setIsPersonalDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(!isCollapsed);

  const toggleDropdown = (type) => {
    switch (type) {
      case "financial":
        setIsFinancialDropdownOpen(!isFinancialDropdownOpen);
        break;
      case "business":
        setIsBusinessDropdownOpen(!isBusinessDropdownOpen);
        break;
      case "personal":
        setIsPersonalDropdownOpen(!isPersonalDropdownOpen);
        break;
      default:
        break;
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      setIsFullyOpen(false); // Instantly hide text
      setTimeout(() => setIsFullyOpen(false), 0);
    } else {
      setTimeout(() => setIsFullyOpen(true), 500); // Match the duration of the transition
    }
  }, [isCollapsed]);

  //  functions
  const [showFinancialServices, setShowFinancialServices] = useState(false);

  const toggleFinancialServices = () => {
    setShowFinancialServices(!showFinancialServices);
  };
  return (
    <div
      className="flex flex-col h-full w-64 bg-newBg absolute right-0 p-4 transition-width duration-500 ease-in-out overflow-hidden"
      id="ns_bar"
    >
      {/* children */}
      <div className="flex flex-col h-14 w-full   mb-4">
        <Image
          id="sbar_img"
          className="absolute left-fw"
          src={farm_fuzion_logo}
          alt={farm_fuzion_logo}
          priority
          width={50}
          height={50}
        />
      </div>
      <div
        className="flex flex-col bg-purple-300 h-8 w-full mb-8 text-white"
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
        }}
        id="FF"
      >
        FarmFuxion
      </div>
      <nav className="flex flex-col bg-red-500 h-4/5 relative">
        <div
          className="flex flex-col h-8  w-full mb-8  transition-opacity duration-500 ease-in-out   "
          style={txtStyles}
          id="home_text"
        >
          Home
        </div>
        <div
          className="flex flex-col h-8 mb-8   transition-opacity duration-500 ease-in-out  "
          style={txtStyles}
          id="dashboard_text"
        >
          Dashboard
        </div>
        <div
          className="flex flex-col h-8 mb-8   cursor-pointer "
          style={txtStyles}
          id="finance_text"
          onClick={toggleFinancialServices}
        >
          <span>Finance</span>
        </div>
        {showFinancialServices && (
          <div className="flex flex-col ml-10 pl-0 bg-gray-700 ">
            <a className="p-2 hover:bg-gray-600">Service 1</a>

            <a className="p-2 hover:bg-gray-600">Service 2</a>

            <a className="p-2 hover:bg-gray-600">Service 3</a>
          </div>
        )}

        <div
          style={txtStyles}
          onClick={() => toggleDropdown("business")}
          id="biz_text"
        >
          <span
            className={`flex flex-col h-8 mb-8 cursor-pointer ${
              isCollapsed ? "hidden" : "block"
            } ${isFullyOpen ? "opacity-100" : ""}`}
            style={txtStyles}
          >
            Agri Business
          </span>
          {isBusinessDropdownOpen && !isCollapsed && (
            <div className="flex flex-col pl-8 bg-gray-700 transition-all duration-300 ease-in-out">
              <div className="p-2 hover:bg-gray-600">Service 1</div>
              <div className="p-2 hover:bg-gray-600">Service 2</div>
              <div className="p-2 hover:bg-gray-600">Service 3</div>
            </div>
          )}
        </div>

        <div
          className={`flex flex-col h-8 mb-8`}
          style={txtStyles}
          id="pers_text"
        >
          My Profile
        </div>
        <div
          className="flex flex-col h-8 mb-8   "
          style={txtStyles}
          id="log_text"
        >
          Log Out
        </div>
        <div
          className="flex flex-col h-8 mb-8   "
          style={txtStyles}
          id="log_text"
        >
          News and Events
        </div>
      </nav>
      {/* ````````````````````````````````````Icons Section `````````````````````````````````````` */}
      <FaHouse
        size={20}
        className="absolute mt-houseIcon left-6"
        style={{ color: "white" }}
      />
      <RxDashboard
        size={20}
        className="absolute mt-dashboard left-6"
        style={{ color: "white" }}
      />
      <MdCreditScore
        size={20}
        className="absolute mt-credit left-6"
        style={{ color: "white" }}
      />
      <RiShieldCrossFill
        size={20}
        className="absolute mt-shieldIcon left-6"
        style={{ color: "white" }}
      />
      <MdOutlineStorefront
        size={20}
        className="absolute mt-storeIcon left-6"
        style={{ color: "white" }}
      />
      <RiLogoutCircleLine
        size={20}
        className="absolute mt-logoutIcon left-6"
        style={{ color: "white" }}
      />
      <FaChevronLeft
        size={16}
        className="absolute mt-5 left-6 cursor-pointer"
        onClick={closed_Combined}
        id="ch_left"
        style={{ color: "white" }}
      />
      <FaChevronRight
        size={16}
        className="absolute mt-5 left-6 cursor-pointer"
        onClick={open_Combined}
        style={{ visibility: "collapse" }}
        id="ch_right"
      />
      <Image
        id="small_img"
        className="absolute left-4 mt-smallFF"
        src={farm_fuzion_logo}
        alt={farm_fuzion_logo}
        priority
        width={35}
        height={35}
        style={{ visibility: "collapse", color: "white" }}
      />
    </div>
  );
}
