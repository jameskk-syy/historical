"use client";
// Icons
import "../globals.css";
import { CgProfile } from "react-icons/cg";
import farm_fuzion_logo from "@public/assets/FARMFUZION_T_ICON.png";
import { FaHouse } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
// effects
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
//  textstyles
const txtStyles = {
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "start",
  paddingLeft: "1%",
  paddingTop: "4px",
  color: "white",
  visibility: "collapse",
};

const drop_styles = {
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: "600",
  textAlign: "start",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.36)",
  borderRadius: "6px",
  backgroundColor: "whitesmoke",
  cursor: "pointer",
  BorderBottom: "1px solid red",
};

function closeSideBar() {
  const open2 = document.getElementById("sb2_bar");
  const imgF = document.getElementById("sbar_img");
  const imgSmall = document.getElementById("small_img");
  const direction_left = document.getElementById("ch_left");
  const direction_right = document.getElementById("ch_right");
  open2.style.width = "64";
  direction_left.style.visibility = "collapse";
  direction_right.style.visibility = "visible";
  imgF.style.visibility = "collapse";
  imgSmall.style.visibility = "visible";
}

function openSideBar() {
  const open2 = document.getElementById("sb2_bar");
  const direction_left = document.getElementById("ch_left");
  const direction_right = document.getElementById("ch_right");
  direction_left.style.visibility = "visible";
  direction_right.style.visibility = "collapse";
  open2.style.width = "20%";
  const imgF = document.getElementById("sbar_img");
  imgF.style.visibility = "visible";
  const imgSmall = document.getElementById("small_img");
  imgSmall.style.visibility = "collapse";
}

function textInv_viz() {
  const farmT = document.getElementById("FF");
  const homeT = document.getElementById("home_text");
  const dashT = document.getElementById("dashboard_text");
  const fineT = document.getElementById("finance_text");
  const bizT = document.getElementById("biz_text");
  const persT = document.getElementById("pers_text");
  const logT = document.getElementById("log_text");
  const newsT = document.getElementById("news_text");

  farmT.style.visibility = "collapse";
  homeT.style.visibility = "collapse";
  dashT.style.visibility = "collapse";
  fineT.style.visibility = "collapse";
  bizT.style.visibility = "collapse";
  persT.style.visibility = "collapse";
  logT.style.visibility = "collapse";
  newsT.style.visibility = "collapse";
}

function text_viz() {
  const farmT = document.getElementById("FF");
  const homeT = document.getElementById("home_text");
  const dashT = document.getElementById("dashboard_text");
  const fineT = document.getElementById("finance_text");
  const bizT = document.getElementById("biz_text");
  const persT = document.getElementById("pers_text");
  const logT = document.getElementById("log_text");
  const newsT = document.getElementById("news_text");

  farmT.style.visibility = "visible";
  homeT.style.visibility = "visible";
  dashT.style.visibility = "visible";
  fineT.style.visibility = "visible";
  bizT.style.visibility = "visible";
  persT.style.visibility = "visible";
  logT.style.visibility = "visible";
  newsT.style.visibility = "visible";
}

export default function SB2() {
 
  const [isFinancialDropdownOpen, setIsFinancialDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isPersonalDropdownOpen, setIsPersonalDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isTooltipVisible2, setIsTooltipVisible2] = useState(false);
  const [isTooltipVisible3, setIsTooltipVisible3] = useState(false);
  const [isTooltipVisible4, setIsTooltipVisible4] = useState(false);
  const [isTooltipVisible5, setIsTooltipVisible5] = useState(false);
  const [isTooltipVisible6, setIsTooltipVisible6] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);

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
      case "news":
        setIsNewsDropdownOpen(!isNewsDropdownOpen);
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
      setIsFullyOpen(false);
    } else {
      setTimeout(() => setIsFullyOpen(true), 200); // Match the duration of the transition
    }
  }, [isCollapsed]);

  //  functions
  // ````````````````````````````Routing``````````````````````````````````````
  // ````````````````````````````````````````````````````````````````````````
  const router = useRouter();
  function go_to_login() {
    router.push("/");
  }
  function go_Home() {
    router.push("/cooperate/homeCoop");
  }
  function go_to_products() {
    router.push("/cooperate/CDashboard/Cproducts");
  }
  function go_to_loans_page() {
    alert("hello")
    router.push("/cooperate/CDashboard/CLoans");
  }
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  function go_to_insurance() {
    router.push("/cooperate/CDashboard/CInsurance");
  }
  function go_to_coop_profile_page() {
    router.push("/cooperate/CDashboard/CProfile");
  }
  function go_to_coop_savings_page(){
    alert("savings")
  }
  function go_to_coop_payment_page(){
    alert("payment")
  }
  function go_to_coop_statements_page(){
    alert("statements")
  }
  // log out
  const handleLogout = async () => {
    // Show confirmation dialog
    const confirmLogout = await Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, stay logged in",
      reverseButtons: true,
    });

    // If user confirms logout
    if (confirmLogout.isConfirmed) {
      // Clear local storage or any other necessary logout actions
      localStorage.removeItem("userData");

      // Redirect to login page
      router.push("/");
    }
  };

  function startAnimation() {
    const textElement = document.getElementById("home_text");
    textElement.classList.add("animated_home_txt");
  }
  function open_Combined() {
    openSideBar();
    text_viz();
    toggleCollapse();
    startAnimation();
    // textTrans();
  }

  function closed_Combined() {
    closeSideBar();
    textInv_viz();
    toggleCollapse();
  }

  return (
    <div
      className={`flex flex-col h-screen w-16 bg-newBg absolute left-0 p-4 
       transition-width duration-500 ease-in-out overflow-hidden z-10 
       ${isCollapsed ? "w-16" : "w-64"} xb:collapse`}
      id="sb2_bar"
    >
      <div className="flex flex-col h-14 w-full  mb-2">
        <Image
          onClick={go_to_login}
          id="sbar_img"
          className="relative ml-fx"
          src='/FARMFUZION.png'
          alt="Farm Fuxion"
          priority
          width={50}
          height={50}
          style={{ visibility: "collapse" }}
        />
      </div>
      <div
        className=" h-8 w-full text-white"
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
          visibility: "collapse",
        }}
        id="FF"
      >
        FarmFuxion
      </div>
      <nav className="flex flex-col    absolute top-32 w-sb_width h-24">
        <div
          className="flex flex-row    w-full h-8 mb-8 cursor-pointer"
          onClick={go_Home}
        >
          <div className="iconarea h-8 w-12    ">
            <FaHouse
              size={20}
              className="mt-1.5 ml-1.5 cursor-pointer"
              style={{ color: "white" }}
            />
          </div>
          <div
            style={txtStyles}
            id="home_text"
            className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
          >
            Home
          </div>
        </div>

        <div
          className="flex flex-row    w-full h-8 mb-8 cursor-pointer"
          onClick={go_to_coop_dashboard}
        >
          <div className=" h-8 w-12    ">
            <RxDashboard
              onMouseEnter={() => setIsTooltipVisible5(true)}
              onMouseLeave={() => setIsTooltipVisible5(false)}
              size={20}
              className="mt-1.5   ml-1.5 cursor-pointer"
              style={{ color: "white" }}
            />
          </div>
          <div
            style={txtStyles}
            id="dashboard_text"
            className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
          >
            Dashboard
          </div>
          {isTooltipVisible5 && isCollapsed && (
            <div className="fixed left-20 top-48 mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
              <div className="p-2 hover:text-darkerGreen">Dashboard</div>
            </div>
          )}
        </div>
      </nav>
      <nav className="flex flex-col    absolute top-64 w-sb_width h-3/4 overflow-auto">
        <div className="mb-8">
          <MdCreditScore
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            onClick={go_to_loans_page}
            size={20}
            className="absolute mt-1.5   ml-1.5 cursor-pointer"
            style={{ color: "white" }}
          />
          <button
            onClick={() => toggleDropdown("financial")}
            className="h-8 w-3/4 ml-12  text-left    flex items-center focus:animate-pulse focus:border-b-2  transition-all duration-300 ease-in-out"
          >
            <span
              style={txtStyles}
              id="finance_text"
              className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
            >
              Financial Services
            </span>
          </button>
          {isTooltipVisible && isCollapsed && (
            <div className="fixed left-20 top-64 mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
              <div className="p-2 hover:text-darkerGreen">Credit</div>
              <div className="p-2 hover:text-darkerGreen">Savings</div>
              <div className="p-2 hover:text-darkerGreen">Payments</div>
              <div className="p-2 hover:text-darkerGreen">Statements</div>
            </div>
          )}
          {isFinancialDropdownOpen && (
            <div
              className="flex flex-col mt-1 w-3/4 ml-12 pl-0 text-black   transition-all duration-300 ease-in-out"
              style={drop_styles}
            >
              <div
                className="p-2 hover:text-darkerGreen"
                onClick={go_to_loans_page}
              >
                Credit
              </div>
              <div className="p-2 hover:text-darkerGreen" onClick={go_to_coop_savings_page}>Savings</div>
              <div className="p-2 hover:text-darkerGreen" onClick={go_to_coop_payment_page}>Payments</div>
              <div className="p-2 hover:text-darkerGreen"onClick={go_to_coop_statements_page}>Statements</div>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <RiShieldCrossFill
            onClick={go_to_insurance}
            onMouseEnter={() => setIsTooltipVisible2(true)}
            onMouseLeave={() => setIsTooltipVisible2(false)}
            size={20}
            className="absolute mt-1.5   ml-1.5 cursor-pointer"
            style={{ color: "white" }}
          />

          <button
            onClick={() => toggleDropdown("business")}
            className="h-8 w-3/4 ml-12  text-left   flex items-center focus:animate-pulse focus:border-b-2   transition-all duration-300 ease-in-out"
          >
            <span
              style={txtStyles}
              id="biz_text"
              className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
            >
              Agri Business
            </span>
          </button>
          {isTooltipVisible2 && isCollapsed && (
            <div className="fixed left-20 top-80 mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
              <div className="p-2 hover:text-darkerGreen">Agronomy</div>
              <div className="p-2 hover:text-darkerGreen">Veterinary </div>
              <div
                className="p-2 hover:text-darkerGreen"
                onClick={go_to_insurance}
              >
                Insurance
              </div>
              <div
                className="p-2 hover:text-darkerGreen"
                onClick={go_to_products}
              >
                Market
              </div>
              <div className="p-2 hover:text-darkerGreen">Warehousing</div>
              <div className="p-2 hover:text-darkerGreen">
                Request for Service
              </div>
            </div>
          )}
          {isBusinessDropdownOpen && (
            <div
              className="flex flex-col w-3/4 mt-1 ml-12 pl-0 bg-gray-700 transition-all duration-300 ease-in-out"
              style={drop_styles}
            >
              <div className="p-2 hover:text-darkerGreen">Agronomy</div>
              <div className="p-2 hover:text-darkerGreen">Veterinary </div>
              <div
                className="p-2 hover:text-darkerGreen"
                onClick={go_to_insurance}
              >
                Insurance
              </div>
              <div
                className="p-2 hover:text-darkerGreen"
                onClick={go_to_products}
              >
                Market
              </div>
              <div className="p-2 hover:text-darkerGreen">Warehousing</div>
              <div className="p-2 hover:text-darkerGreen">
                Request for Service
              </div>
            </div>
          )}
        </div>

        
        <div className="mb-8">
          <CgProfile
            onClick={go_to_coop_profile_page}
            onMouseEnter={() => setIsTooltipVisible3(true)}
            onMouseLeave={() => setIsTooltipVisible3(false)}
            size={20}
            className="absolute mt-1.5   ml-1.5 cursor-pointer"
            style={{ color: "white" }}
          />

          <button
            onClick={() => toggleDropdown("personal")}
            className="h-8 w-3/4 ml-12  text-left   flex items-center focus:animate-pulse focus:border-b-2   transition-all duration-300 ease-in-out"
          >
            <span
              style={txtStyles}
              id="pers_text"
              className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
            >
              My Profile
            </span>
          </button>
          {isTooltipVisible3 && isCollapsed && (
            <div className="fixed left-20 top-96 mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
              <div className="p-2 hover:text-darkerGreen">Help</div>
              <div className="p-2 hover:text-darkerGreen">User Profile</div>
              <div className="p-2 hover:text-darkerGreen">
                {" "}
                Data Transactions
              </div>
            </div>
          )}
          {isPersonalDropdownOpen && (
            <div
              className="flex flex-col w-3/4 mt-1 ml-12 pl-0 bg-gray-700 transition-all duration-300 ease-in-out"
              style={drop_styles}
            >
              <div className="p-2 hover:text-darkerGreen">Help</div>
              <div className="p-2 hover:text-darkerGreen">User Profile</div>
              <div className="p-2 hover:text-darkerGreen">
                {" "}
                Data Transactions
              </div>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <RiNewsLine
            onMouseEnter={() => setIsTooltipVisible4(true)}
            onMouseLeave={() => setIsTooltipVisible4(false)}
            size={20}
            className="absolute mt-1.5   ml-1.5 cursor-pointer "
            style={{ color: "white" }}
          />

          <button
            onClick={() => toggleDropdown("news")}
            className="h-8 w-3/4 ml-12  text-left   flex items-center focus:animate-pulse focus:border-b-2  transition-all duration-300 ease-in-out"
          >
            <span
              style={txtStyles}
              id="news_text"
              className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
            >
              News and Events
            </span>
          </button>
          {isTooltipVisible4 && isCollapsed && (
            <div className="fixed left-20 top-blogtotip mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
              <div className="p-2 hover:text-darkerGreen">Blogs</div>
              <div className="p-2 hover:text-darkerGreen">Weather</div>
              <div className="p-2 hover:text-darkerGreen">Newsletters </div>
            </div>
          )}
          {isNewsDropdownOpen && (
            <div
              className="flex flex-col w-3/4 mt-1 ml-12 pl-0  transition-all duration-300 ease-in-out"
              style={drop_styles}
            >
              {" "}
              <div className="p-2 hover:text-darkerGreen">Blogs</div>
              <div className="p-2 hover:text-darkerGreen">Weather</div>
              <div className="p-2 hover:text-darkerGreen">Newsletters </div>
            </div>
          )}
        </div>

       
        <div className="mb-8" onClick={() => handleLogout()}>
          <RiLogoutCircleLine
            onMouseEnter={() => setIsTooltipVisible6(true)}
            onMouseLeave={() => setIsTooltipVisible6(false)}
            size={20}
            className="absolute mt-1.5   ml-1.5 cursor-pointer"
            style={{ color: "white" }}
          />

          <button className="h-8 w-3/4 ml-12  text-left   flex items-center  transition-all duration-300 ease-in-out">
            <span
              style={txtStyles}
              id="log_text"
              className={`opacity-0 transition-opacity duration-200 ease-in-out 
                ${isFullyOpen ? "opacity-100" : "opacity-0"}
            }`}
            >
              Log Out
            </span>
            {isTooltipVisible6 && isCollapsed && (
              <div className="fixed left-20 top-spw mt-1 ml-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
                <div className="p-2 hover:text-darkerGreen">Log Out</div>
              </div>
            )}
          </button>
        </div>
      </nav>

      <FaChevronLeft
        size={16}
        className="absolute mt-5 left-6 cursor-pointer xb:collapse"
        onClick={closed_Combined}
        id="ch_left"
        style={{ color: "white", visibility: "hidden" }}
      />
      <FaChevronRight
        size={16}
        className="absolute mt-5 left-6 cursor-pointer xb:collapse"
        onClick={open_Combined}
        style={{ visibility: "visible", color: "white" }}
        id="ch_right"
      />
      <Image
        onClick={go_to_login}
        id="small_img"
        className="absolute left-supersmallFF mt-14 xb:collapse"
         src='/FARMFUZION.png'
          alt="Farm Fuxion"
        priority
        width={35}
        height={35}
        style={{ visibility: "visible" }}
      />
      
    </div>
  );
}
