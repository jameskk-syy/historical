import "@app/components/TheHam.css";
// Icons

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";

export default function TheHam() {
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
    router.push("/cooperate/CDashboard/CLoans");
  }
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  function go_to_products() {
    router.push("/cooperate/CDashboard/Cproducts");
  }
  function go_to_insurance() {
    router.push("/cooperate/CDashboard/CInsurance");
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
  const openNav = () => (document.getElementById("side_bar").style.left = "3%");
  const closeNav = () =>
    (document.getElementById("side_bar").style.left = "-100%");

  return (
    <>
      <div className="c_dash_ham_menu" onClick={openNav}>
        <GiHamburgerMenu size={36} onClick={openNav} />
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
        <div className="insure" onClick={go_to_insurance}>
          Insurance Services
        </div>
        <div className="agro">Agronomy Services</div>
        <div className="logout" onClick={() => handleLogout()}>
          Log Out
        </div>
        <div className="close_side_menu">
          <MdClose size={20} onClick={closeNav} />
        </div>
      </div>
    </>
  );
}
