"use client";
// Imports
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@app/cooperate/Addmember/Addmember.css";
// Images
import coop_profile from "@public/assets/biz_laptop.png";
import farm_fuzion_logo from "@public/assets/FARMFUZION_T_ICON.png";
// Icons

import { FaHouse } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
// `````````````````Main Code``````````````````````````````````````````````````
export default function AddMember() {
  const router = useRouter();
  function go_to_login() {
    router.push("/");
  }
  function go_to_all_members() {
    router.push("/cooperate/Addmember/Allmembers");
  }
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  function go_to_coop_profile_page() {
    router.push("/cooperate/CDashboard/CProfile");
  }
  const open_profile_Nav = () =>
    (document.getElementById("add_mem_side_bar").style.left = "3%");
  const close_profile_Nav = () =>
    (document.getElementById("add_mem_side_bar").style.left = "-100%");

  return (
    //````````````````` Top Menu Section`````````````````````````````````
    <div className="add_member_container">
      <div className="add_mem_menu_section" id="add_mem_side_bar">
        <div className="Home" onClick={go_to_login}>
          Home
        </div>
        <div className="dash" onClick={go_to_coop_dashboard}>
          Dashboard
        </div>
        <div className="sell">Sell Products</div>
        <div className="loans">Loans Services</div>
        <div className="insure">Insurance Services</div>
        <div className="agro">Agronomy Services</div>
        <div className="notify">Notifications</div>
        <div className="close_farm_side_menu">
          <MdClose size={20} onClick={close_profile_Nav} />
        </div>
      </div>
      <div className="add_mem_top_menu">
        <div className="add_ham_menu">
          <GiHamburgerMenu size={30} onClick={open_profile_Nav} />
        </div>
        <div className="add_mem_name" id="cooperative_name">
          Cooperative Name:
        </div>
        <div
          className="add_mem_profile_image"
          onClick={go_to_coop_profile_page}
        >
          <Image
            src={coop_profile}
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="add_mem_notification_icon">
          <IoMdNotifications size={30} />
        </div>

        <div className="add_mem_message_icon">
          <BiSolidMessageRounded size={30} />
        </div>
      </div>
      {/* ```````````````````Side Bar Menu````````````````````````````` */}
      <div className="add_mem_left_menu">
        <div className="add_mem_farm_fusion_icon " onClick={go_to_login}>
          <Image src={farm_fuzion_logo} fill priority  alt="Farm Fuzion"/>
        </div>
        <div className="add_mem_dashboard" onClick={go_to_coop_dashboard}>
          <RxDashboard size={20} />
        </div>

        <div className="add_mem_home_icon">
          <FaHouse size={20} />
        </div>
        <div className="add_mem_loan_icon">
          <MdCreditScore size={20} />
        </div>

        <div className="add_mem_insurance_icon">
          <RiShieldCrossFill size={20} />
        </div>

        <div className="add_mem_store_icon">
          <MdOutlineStorefront size={20} />
        </div>
        <div className="add_mem_agronomy_icon">
          <MdMiscellaneousServices size={20} />
        </div>
      </div>

      {/* `````````````````````````Registation title `````````````````````` */}
      <div className="member_selection">
        <button className="register_member">REGISTER MEMBER</button>
        <button className="all_members" onClick={go_to_all_members}>
          ALL MEMBERS
        </button>
      </div>

      {/* ``````````````````````Farmer Detail Section ````````````````````` */}
      <div className="add_farmer_container">
        <label> Farmer Details</label>
        <div className="add_farmer_icon">
          <FaUser size={20} />
        </div>
        <div className="farmer_side_1">
          <input
            type="text"
            name=""
            id="add_farmer_name"
            placeholder="Full Name"
          />
          <input
            type="number"
            name=""
            id="add_farmer_name"
            placeholder="ID Number"
          />
          <input
            type="text"
            name=""
            id="add_farmer_name"
            placeholder="County"
          />
          <input
            type="text"
            name=""
            id="add_farmer_name"
            placeholder="Church"
          />
          <select name="" id="add_farmer_marital_status">
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
          </select>
        </div>

        <div className="farmer_side_2">
          <input
            type="number"
            name=""
            id="add_phone_number"
            placeholder="Phone Number"
          />

          <input
            type="email"
            name=""
            id="add_farmer_email"
            placeholder="Email"
          />

          <input
            type="text"
            name=""
            id="add_farmer_address"
            placeholder="Address"
          />

          <input
            type="number"
            name=""
            id="add_farmer_household"
            placeholder="Household members"
          />

          <select name="" id="add_farmer_gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* ``````````````````````Farm Detail Section ````````````````````` */}
      <div className="add_farm_container">
        <label> Farm Details</label>
        <div className="add_farm_icon">
          <FaSeedling size={20} />
        </div>
        <div className="farm_side_1">
          <input
            type="text"
            name=""
            id="add_farm_ownership"
            placeholder="Farm Ownership"
          />
          <input
            type="text"
            name=""
            id="add_farm_owner_name"
            placeholder="Owner Full Name"
          />
          <input
            type="text"
            name=""
            id="add_farm_address"
            placeholder="Postal Address"
          />
          <input
            type="text"
            name=""
            id="add_farm_main_econ"
            placeholder="Main Economic Activity"
          />
          <input
            type="number"
            name=""
            id="add_farm_annual_income"
            placeholder="Annual Income"
          />
        </div>

        <div className="farm_side_2">
          <input
            type="text"
            name=""
            id="add_farm_location"
            placeholder="Location"
          />

          <input
            type="text"
            name=""
            id="add_farm_business_name"
            placeholder="Business Name"
          />

          <input
            type="number"
            name=""
            id="add_farm_workers"
            placeholder="Number of Workers"
          />

          <input
            type="text"
            name=""
            id="add_farm_primary_value_chain"
            placeholder="Primary value chain"
          />

          <input
            type="number"
            name=""
            id="add_farm_size"
            placeholder="Farm Size (Ha)"
          />
        </div>
      </div>
      <button className="add_farmer_to_coop" onClick={go_to_all_members}>
        Complete Registration
      </button>
    </div>
  );
}
