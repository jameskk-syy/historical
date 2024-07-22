"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import coop_profile from "@public/assets/biz_laptop.png";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import Swal from "sweetalert2";

export default function TopNav() {
  const router = useRouter();
  function go_to_coop_profile_page() {
    router.push("/cooperate/CDashboard/CProfile");
  }
  return (
    <div className="flex flex-flow absolute top-1 right-0 h-12 w-top_nav_w">
      <div className="absolute top-3 right-32  h-12 w-12 cursor-pointer mini_s:collapse">
        <BiSolidMessageRounded size={32} />
      </div>

      {/* profile image */}
      <div
        className="h-8 w-8 absolute top-3 right-6 rounded-full cursor-pointer visible"
        style={{ overflow: "hidden" }}
        onClick={go_to_coop_profile_page}
      >
        <Image src={coop_profile} alt={coop_profile} fill priority />
      </div>

      {/* notification icon */}
      <div className="absolute top-3 right-16 h-12 w-12 cursor-pointer mini_s:collapse">
        <IoMdNotifications size={33} />
      </div>

      {/* cooperative name */}
      <div
        className="absolute top-3 left-3 h-8 w-2/5 text-xl xb:left-10 xb:w-3/6 xb:top-5  xb:text-base very_s:collapse"
        id="cooperative_name"
        style={{
          fontFamily: "poppins",
          fontWeight: "500",
          color: "#286d34",
        }}
      >
        Cooperative Name:
      </div>
    </div>
  );
}
