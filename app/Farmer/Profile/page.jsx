"use client";
import React from "react";
import "@app/Farmer/Profile/Profile.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

import profile_img from "@public/assets/user_profile.jpeg";
import farm_fuzion_logo from "@public/assets/FARMFUZION_T_ICON.png";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaHouse } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Profile() {
  const router = useRouter();
  function go_to_login() {
    router.push("/");
  }

  const open_profile_Nav = () =>
    (document.getElementById("farm_side_bar").style.left = "3%");
  const close_profile_Nav = () =>
    (document.getElementById("farm_side_bar").style.left = "-100%");

  return (
    <div className="profile_container">
      <div className="farm_menu">
        <GiHamburgerMenu size={30} onClick={open_profile_Nav} />
      </div>

      <div className="farm_menu_section" id="farm_side_bar">
        <div className="Home" onClick={go_to_login}>
          Home
        </div>
        {/* <div className="mess">Messages</div>
        <div className="notify">Notifications</div> */}
        <div className="dash">Dashboard</div>
        <div className="sell">Sell Products</div>
        <div className="loans">Loans Services</div>
        <div className="insure">Insurance Services</div>
        <div className="agro">Agronomy Services</div>
        <div className="close_farm_side_menu">
          <MdClose size={20} onClick={close_profile_Nav} />
        </div>
      </div>

      <div className="profile_title">FARM FUSION </div>
      <div className="profile_search">
        <input type="search" name="" id="Search_box" placeholder="Search" />
      </div>
      <div className="mini_profile_image">
        <Image src={profile_img} fill priority alt="Farm Fuzion"/>
      </div>
      <div className="notification_icon">
        <IoMdNotifications size={30} />
      </div>
      <div className="profile_line"></div>
      <div className="profile_image">
        <Image src={profile_img} fill priority alt="Farm Fuzion" />
      </div>
      <div className="change">
        <button className="change_image">Edit Profile</button>
      </div>
      <div className="profile_section_1">
        <div className="profile_name">
          <label>Username</label>
          <input type="text" name="" id="profile_name_text_box" />
        </div>

        <div className="profile_email">
          <label>Email</label>
          <input type="email" name="" id="profile_email_text_box" />
        </div>
        <div className="profile_household">
          <label>Household number</label>
          <input type="number" name="" id="profile_household_text_box" />
        </div>
      </div>
      <div className="profile_section_2">
        <div className="profile_phone_number">
          <label>Phone Number</label>
          <input type="number" name="" id="profile_phone_number_text_box" />
        </div>

        <div className="profile_Nationl_id_number">
          <label>ID Number</label>
          <input
            type="number"
            name=""
            id="profile_Nationl_id_number_text_box"
          />
        </div>
        <div className="profile_role">
          <label>Role</label>
          <input type="text" name="" id="profile_role_text_box" />
        </div>
      </div>

      <div className="profile_section_3">
        <div className="profile_county">
          <label>County</label>
          <input type="text" name="" id="profile_county_text_box" />
        </div>
        <div className="profile_cooperate">
          <label>Cooperative</label>
          <input type="text" name="" id="profile_cooperate_text_box" />
        </div>

        <div className="profile_village">
          <label>Village</label>
          <input type="text" name="" id="profile_village_text_box" />
        </div>

        <div className="profile_land_size">
          <label>Land Size (Ha)</label>
          <input type="text" name="" id="profile_land_size_text_box" />
        </div>

        <div className="profile_primary_chain">
          <label>Primary Chain</label>
          <input type="text" name="" id="profile_primary_chain_text_box" />
        </div>
      </div>

      <div className="profile_section_4">
        <div className="profile_sub_county">
          <label>Sub-County</label>
          <input type="text" name="" id="profile_sub_county_text_box" />
        </div>

        <div className="profile_church">
          <label>Church</label>
          <input type="text" name="" id="profile_church_text_box" />
        </div>

        <div className="profile_ward">
          <label>Ward</label>
          <input type="text" name="" id="profile_ward_text_box" />
        </div>

        <div className="profile_economic_activity">
          <label>Economic Activity</label>
          <input type="text" name="" id="profile_economic_activity_text_box" />
        </div>

        <div className="profile_secondary_chain">
          <label>Secondary chain</label>
          <input type="text" name="" id="profile_secondary_chain_text_box" />
        </div>
      </div>
      <div className="profile_menu">
        <div className="profile_farm_fusion_icon " onClick={go_to_login}>
          <Image src={farm_fuzion_logo} fill priority  alt="Farm"/>
        </div>
        <div className="profile_dashboard">
          <RxDashboard size={20} />
        </div>

        <div className="profile_home_icon">
          <FaHouse size={20} />
        </div>
        <div className="profile_loan_icon">
          <MdCreditScore size={20} />
        </div>

        <div className="profile_insurance_icon">
          <RiShieldCrossFill size={20} />
        </div>

        <div className="profile_store_icon">
          <MdOutlineStorefront size={20} />
        </div>
        <div className="profile_agronomy_icon">
          <MdMiscellaneousServices size={20} />
        </div>
      </div>
    </div>
  );
}
