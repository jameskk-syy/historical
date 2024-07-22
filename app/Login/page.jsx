"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import home_img from "@public/assets/growing_again.jpg";
import msimbo_logo_icon from "@public/assets/msimbo_logo.png";
import farm_fuzion_logo from "@public/assets/farm_fuzion_logo.png";
import "@app/Login/login.css";
import Loading from "../components/loading";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://us-central1-farmfuzion.cloudfunctions.net/loginmember",
        {
          mobile_no: username,
          password: password,
        }
      );

      if (response.status === 200) {
        console.log(response.data.user_data);
        const userData = response.data.user_data;
        localStorage.setItem("userRole", userData.role);
        localStorage.setItem("username", username);
        localStorage.setItem("userCop", userData.cooperative);
        localStorage.setItem("userEmail", userData.email);
        localStorage.setItem("userID", userData.idNumber);
        localStorage.setItem("userPhone", userData.phoneNumber);
        localStorage.setItem("chairpersonEmail", userData.chairpersonEmail);
        localStorage.setItem("chairpersonName", userData.chairpersonName);
        localStorage.setItem("chairpersonPhone", userData.chairpersonPhone);
        localStorage.setItem("coopType", userData.coopType);
        localStorage.setItem("cooperativeName", userData.cooperativeName);
        localStorage.setItem("county", userData.county);
        localStorage.setItem("postalAddress", userData.postalAddress);
        localStorage.setItem("registrationNumber", userData.registrationNumber);
        localStorage.setItem("registrationStatus", userData.registrationStatus);
        localStorage.setItem("secretaryEmail", userData.secretaryEmail);
        localStorage.setItem("secretaryName", userData.secretaryName);
        localStorage.setItem("secretaryPhone", userData.secretaryPhone);
        localStorage.setItem("specificValueChain", userData.specificValueChain);
        localStorage.setItem("subCounty", userData.subCounty);
        localStorage.setItem("treasurerName", userData.treasurerName);
        localStorage.setItem("treasurerPhone", userData.treasurerPhone);
        localStorage.setItem("ward", userData.ward);
        // farmer
        localStorage.setItem("role", userData.role);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("cooperative", userData.cooperative);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("idNumber", userData.idNumber);
        localStorage.setItem("phoneNumber", userData.phoneNumber);
        localStorage.setItem("password", userData.password);
        localStorage.setItem("church", userData.church);
        localStorage.setItem("county", userData.county);
        localStorage.setItem("economicActivity", userData.economicActivity);
        localStorage.setItem("householdNumber", userData.householdNumber);
        localStorage.setItem("landSize", userData.landSize);
        localStorage.setItem("primaryValueChain", userData.primaryValueChain);
        localStorage.setItem(
          "secondaryValueChain",
          userData.secondaryValueChain
        );
        localStorage.setItem("subCounty", userData.subCounty);
        localStorage.setItem("village", userData.village);
        localStorage.setItem("ward", userData.ward);

        // Redirect based on user role or any condition
        if (userData.role === "admin") {
          router.push("/superadmin");
        } else if (userData.role === "farmer") {
          router.push("/farmers/");
        } else if (userData.role === "cooperative") {
          router.push("/cooperate/homeCoop");
        } else {
          router.push("/");
        }

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
        });
      } else {
        // Handle server errors or incorrect credentials
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login Failed!",
        text: "Please check your credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main_container">
      <div className="section_1">
        <Image
          src={home_img}
          style={{ objectFit: "cover" }}
          fill
          priority
          alt="Farm fuzion "
        />
      </div>
      <div className="section_2">
        <div className="login_logo">
          <Image src={farm_fuzion_logo} fill priority alt="Farm fuzion " />
        </div>
        <div className="login_label">Log in</div>
        <div className="user_input">
          <label htmlFor="username">Phone No.</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login_btn">
          <button id="login_button" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
          {loading && <Loading />}
        </div>
        <div className="or_section">Powered by</div>
        <div className="msimbo_logo">
          <Image src={msimbo_logo_icon} fill priority alt="Farm fuzion " />
        </div>
      </div>
    </div>
  );
}
