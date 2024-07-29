"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import coop_profile from "@public/assets/biz_laptop.png";
/* ``````````````````````````````Top Navigation`````````````````````````````````````````` */

export default function TopCoop({cooperativeName}) {
  const router = useRouter();
  function go_to_coop_profile_page() {
    router.push("/cooperate/CDashboard/CProfile"); 
  }
  return (
    <>
      <div className="flex flex-row  relative  h-12 w-full">
        <div className="absolute top-3 right-32 xb:collapse h-12 w-12 cursor-pointer mini_s:collapse">
          <BiSolidMessageRounded size={32} />
        </div>
        {/* profile image */}
        <div
          className="h-8 w-8 absolute top-3 right-6 rounded-full xb:collapse cursor-pointer visible"
          style={{ overflow: "hidden" }}
          onClick={go_to_coop_profile_page}
        >
          <Image src={coop_profile} alt={coop_profile} fill priority />
        </div>
        {/* notification icon */}
        <div className="absolute top-3 right-16 h-12 w-12 cursor-pointer xb:collapse mini_s:collapse">
          <IoMdNotifications size={33} />
        </div>

        {/* cooperative name */}
        <div
          className="absolute top-3 left-0  h-8 w-4/5 text-xl xb:left-0  xb:text-base very_s:collapse"
          id="cooperative_name"
          style={{
            fontFamily: "poppins",
            fontWeight: "500",
            color: "#286d34",
          }}
        >
          {cooperativeName} 
        </div>
      </div>
    </>
  );
}
