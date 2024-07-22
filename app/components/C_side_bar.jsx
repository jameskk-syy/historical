// Icons
import { FaHouse } from "react-icons/fa6";

import { RxDashboard } from "react-icons/rx";
import { RiShieldCrossFill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import farm_fuzion_logo from "@public/assets/FARMFUZION_T_ICON.png";
import "@app/components/C_side_bar.css";

export default function C_side_bar() {
  const router = useRouter();
  function go_to_login() {
    router.push("/");
  }
  function go_to_products() {
    router.push("/cooperate/CDashboard/Cproducts");
  }
  function go_to_loans_page() {
    router.push("/cooperate/CDashboard/CLoans");
  }
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  function go_to_products() {
    router.push("/cooperate/CDashboard/Cproducts");
  }

  const openNav = () => (document.getElementById("side_bar").style.left = "3%");
  const closeNav = () =>
    (document.getElementById("side_bar").style.left = "-100%");

  return (
    <>
      <div className="c_dash_left_menu">
        <div className="profile_farm_fusion_icon " onClick={go_to_login}>
          <Image src={farm_fuzion_logo} fill priority alt="Farm fuzion"/>
        </div>
        <div
          className="profile_dashboard"
          title="Dashboard"
          onClick={go_to_coop_dashboard}
        >
          <RxDashboard size={20} />
        </div>
        <div className="profile_home_icon" title="Homepage">
          <FaHouse size={20} />
        </div>
        <div
          className="profile_loan_icon"
          title="Loan Services"
          onClick={go_to_loans_page}
        >
          <MdCreditScore size={20} />
        </div>

        <div className="profile_insurance_icon" title="Insurance Services">
          <RiShieldCrossFill size={20} />
        </div>

        <div
          className="profile_store_icon"
          onClick={go_to_products}
          title="Sell Products"
        >
          <MdOutlineStorefront size={20} />
        </div>
        <div className="profile_agronomy_icon" title="Agronomy Services">
          <MdMiscellaneousServices size={20} />
        </div>
      </div>

      <div className="c_dash_ham_menu" onClick={openNav}>
        <GiHamburgerMenu size={40} onClick={openNav} />
      </div>

      <div className="ham_menu_section" id="side_bar">
        <div className="Home" onClick={go_to_login}>
          Home
        </div>
        {/* <div className="mess">Messages</div>
        <div className="notify">Notifications</div> */}
        <div className="dash" onClick={go_to_coop_dashboard}>
          Dashboard
        </div>
        <div className="sell" onClick={go_to_products}>
          Sell Products
        </div>
        <div className="loans">Loans Services</div>
        <div className="insure">Insurance Services</div>
        <div className="agro">Agronomy Services</div>
        <div className="close_side_menu">
          <MdClose size={20} onClick={closeNav} />
        </div>
      </div>
    </>
  );
}
