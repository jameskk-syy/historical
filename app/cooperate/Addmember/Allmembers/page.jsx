"use client";
// Imports
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@app/cooperate/Addmember/Allmembers/all_members.css";
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
import { FaEye } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiUserDelete } from "react-icons/ti";

// `````````````````Main Code``````````````````````````````````````````````````
export default function AddMember() {
  const router = useRouter();
  function go_to_login() {
    router.push("/");
  }
  function go_to_register_member() {
    router.push("/cooperate/Addmember");
  }
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  function go_to_coop_profile_page() {
    router.push("/cooperate/CDashboard/CProfile");
  }

  const open_add_member_side_Nav = () =>
    (document.getElementById("all_members_side_bar").style.left = "3%");
  const close_add_member_side_Nav = () =>
    (document.getElementById("all_members_side_bar").style.left = "-100%");

  return (
    //````````````````` Top Menu Section`````````````````````````````````
    <div className="all_members_container">
      <div className="all_members_menu_section" id="all_members_side_bar">
        <div className="Home">Home</div>
        <div className="dash" onClick={go_to_coop_dashboard}>
          Dashboard
        </div>
        <div className="sell">Sell Products</div>
        <div className="loans">Loans Services</div>
        <div className="insure">Insurance Services</div>
        <div className="agro">Agronomy Services</div>
        <div className="notify">Notifications</div>
        <div className="close_all_members_side_menu">
          <MdClose size={20} onClick={close_add_member_side_Nav} />
        </div>
      </div>

      <div className="all_members_top_menu">
        <div className="all_members_ham_menu">
          <GiHamburgerMenu size={30} onClick={open_add_member_side_Nav} />
        </div>
        <div className="all_members_name" id="cooperative_name">
          Cooperative Name:
        </div>
        <div
          className="all_members_profile_image"
          onClick={go_to_coop_profile_page}
        >
          <Image
            src={coop_profile}
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="all_members_notification_icon">
          <IoMdNotifications size={30} />
        </div>

        <div className="all_members_message_icon">
          <BiSolidMessageRounded size={30} />
        </div>
      </div>
      {/* ```````````````````Side Bar Menu````````````````````````````` */}
      <div className="all_members_left_menu">
        <div className="all_members_farm_fusion_icon " onClick={go_to_login}>
          <Image src={farm_fuzion_logo} fill priority alt="Farm fuzion" />
        </div>
        <div className="all_members_dashboard" onClick={go_to_coop_dashboard}>
          <RxDashboard size={20} />
        </div>

        <div className="all_members_home_icon">
          <FaHouse size={20} />
        </div>
        <div className="all_members_loan_icon">
          <MdCreditScore size={20} />
        </div>

        <div className="all_members_insurance_icon">
          <RiShieldCrossFill size={20} />
        </div>

        <div className="all_members_store_icon">
          <MdOutlineStorefront size={20} />
        </div>
        <div className="all_members_agronomy_icon">
          <MdMiscellaneousServices size={20} />
        </div>
      </div>

      {/* `````````````````````````Registation title `````````````````````` */}
      <div className="all_member_selection">
        <button className="all_register_member" onClick={go_to_register_member}>
          REGISTER MEMBER
        </button>
        <button className="all_coop_members">ALL MEMBERS</button>
      </div>

      {/* ``````````````````````````Content``````````````````````````````````````` */}
      <select name="" id="All_registered_farmers">
        <option value="All">All Farmers</option>
        <option value="farmer_1">Farmer 1</option>
      </select>

      {/* ```````````````````````````Farmer Search info`````````````````````````` */}
      <div className="farmer_info_container">
        <div className="farm_owner">
          <label>Farm owner:</label>
          <div className="farmer_name_box">John Doe</div>
        </div>

        <div className="farmer_National_id">
          <label>National ID:</label>
          <div className="farmer_id_box">2347959</div>
        </div>

        <div className="farmer_phone">
          <label>Farmer phone:</label>
          <div className="farmer_phone_number_box">0711723325</div>
        </div>

        <div className="farm_locate">
          <label>Farm location:</label>
          <div className="farm_location_box">Middle of nowhere</div>
        </div>

        <div className="farmer_email">
          <label>Farm email:</label>
          <div className="farmer_email_box">Johndoe@gmail.com</div>
        </div>

        <div className="farmer_info_line"></div>

        <div className="farmer_user_id">
          <label>User ID:</label>
          <div className="farm_user_id_box">12389</div>
        </div>

        <div className="farmer_date">
          <label>Date of Registration:</label>
          <div className="farmer_reg_date">19-12-2024</div>
        </div>
      </div>
      {/* `````````````````````Modifications````````````````````````````` */}
      <div className="reveal_btn">
        Reveal
        <div className="reveal_btn_icon">
          <FaEye size={25} />
        </div>
      </div>
      <div className="modify_btn">
        Modify
        <div className="modify_btn_icon">
          <FaUserCog size={25} />
        </div>
      </div>
      <div className="delete_btn">
        Delete Member
        <div className="delete_btn_icon">
          <TiUserDelete size={25} />
        </div>
      </div>

      {/* `````````````````````Farm Data``````````````````````````````` */}
      <div className="farm_data_title">Farm Info</div>
      <div className="farm_inputs">
        <input type="text" name="" id="Biz_name" placeholder="Business Name" />
        <input type="text" name="" id="Biz_Location" placeholder="Location" />
        <input type="text" name="" id="Biz_Address" placeholder="Address" />
        <input
          type="text"
          name=""
          id="Biz_econ"
          placeholder="Main economic activity"
        />
        <input
          type="text"
          name=""
          id="Biz_value"
          placeholder="Primary value chain"
        />
      </div>

      <div className="additional_farm_inputs">
        <div className="additonal_data_title">Additional Info</div>
        <div className="additional_1">
          <input
            type="number"
            name=""
            id="additional_number_workers"
            placeholder="Number of workers"
          />
          <input
            type="number"
            name=""
            id="additional_annual_income"
            placeholder="Annual Income"
          />
        </div>
        <div className="additional_2">
          <input
            type="number"
            name=""
            id="additional_land_size"
            placeholder="Land Size"
          />
          <input
            type="number"
            name=""
            id="additional_household"
            placeholder="Secondary Chain"
          />
        </div>
      </div>
    </div>
  );
}
