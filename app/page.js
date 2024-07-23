"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import home_img from "@public/loginbg.png";
// import fa from "@public/assets/logoM.png";
import toast from "react-hot-toast";
import farmdark from "@public/darkfarm.png";
import { PhoneInTalk, Lock, PhoneAndroid } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkValue, setCheckValue] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Username and password are required");
      return;
    } else if (!checkValue) {
      toast.error("please check terms and conditions");
      return;
    } else {
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
          localStorage.setItem(
            "registrationNumber",
            userData.registrationNumber
          );
          localStorage.setItem(
            "registrationStatus",
            userData.registrationStatus
          );
          localStorage.setItem("secretaryEmail", userData.secretaryEmail);
          localStorage.setItem("secretaryName", userData.secretaryName);
          localStorage.setItem("secretaryPhone", userData.secretaryPhone);
          localStorage.setItem(
            "specificValueChain",
            userData.specificValueChain
          );
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
            router.push("/farmers/fdashboard");
          } else if (userData.role === "cooperative") {
            router.push("/cooperate/CDashboard");
          } else {
            router.push("/");
          }

          toast.success("Login Successful");
        } else {
          // Handle server errors or incorrect credentials
          throw new Error("Login failed");
          toast.error("Login Failed, check your  credentials");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Login Failed, check your credentials");
      } finally {
        setLoading(false);
      }
    }
  };

  const [year, setYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="min-h-screen h-screen overflow-hidden">
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1000,
          }}
        >
          <CircularProgress className="mr-10" />
          <p className="font-abc">
            Please wait,while system is logging you in...
          </p>
        </Box>
      )}
      <div className="w-full flex md:flex-row lg:flex-row flex-col h-full">
        <div className="flex flex-col md:w-full items-center lg:w-5/12 w-full h-full overflow-hidden">
          <div className="flex flex-col items-center  w-full lg:w-10/12 md:px-20 md:py-10 lg:py-10 lg:px-20 py-2 px-4">
            <div className="w-full flex mt-8 flex-col">
              <p className="mb-4 text-lg text-card3 font-abc">coming soon to</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row py-3 px-5 items-center rounded-md border border-gray-300">
                  <Image
                    src="/gpl.png"
                    width={30}
                    height={30}
                    alt="Farm fuzion"
                    className="object-contain"
                  />
                  <p className="ml-3 text-card3 font-abc font-bold">
                    Google Play
                  </p>
                </div>
                <div className="flex flex-row py-3 px-5 items-center rounded-md border border-gray-300">
                  <Image
                    src="/apple.svg"
                    width={30}
                    height={30}
                    alt="Farm fuzion"
                    className="object-contain"
                  />
                  <p className="ml-3 text-card3 font-abc font-bold">
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mt-14">
              <p className="text-card3 text-2xl font-abc font-bold">Sign In</p>
            </div>
            <form className="w-full mt-10" onSubmit={handleLogin}>
              <div
                style={styles}
                className="w-full items-center px-1 flex flex-row shadow-md rounded-md justify-between"
              >
                <input
                  type="text"
                  className="mt-1 p-2 py-3 block w-full focus:outline-none focus:ring-0 focus:border-0"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <PhoneAndroid />
              </div>
              <div
                style={styles}
                className="w-full items-center px-1 flex flex-row shadow-md rounded-md justify-between mt-10"
              >
                <input
                  type="password"
                  className="mt-1 p-2 py-3 block w-full focus:outline-none focus:ring-0 focus:border-0"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock />
              </div>
              <div className="mt-3 flex items-end justify-end w-full">
                <Link href="#" className="font-abc text-end text-gray-700">
                  Forgot password?
                </Link>
              </div>
              <div className="w-full mt-3">
                <input
                  type="checkbox"
                  checked={checkValue}
                  onChange={(e) => setCheckValue(e.target.checked)}
                  className="border border-blue-100  focus:outline-none focus:ring-0 focus:border-0"
                />
                <span className="ml-3 text-sm font-abc text-gray-700">
                  By logging in, I agree to the privacy policy, terms, and
                  conditions.
                </span>
              </div>
              <div className="w-full mt-5">
                <button
                  type="submit"
                  className="px-4 w-full py-3 font-abc bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md"
                >
                  Log In
                </button>
              </div>
              <div className="w-full flex flex-col mt-8">
                <div className="flex justify-center mb-3">
                  <p className="text-gray-900 font-abc">-or-</p>
                </div>
                <Link
                  type="button"
                  href="https://www.msimboit.net/#contact"
                  className="px-4 w-full py-2 border border-1 text-center hover:bg-card2 hover:text-white font-abc border-gray-300 text-gray-900 rounded-md"
                >
                  <PhoneInTalk /> Get In Touch
                </Link>
              </div>
              <div className="w-full flex items-center flex-col mt-8">
                <p className="text-card3">
                  &copy; <span>{year}</span> All rights reserved.{" "}
                  <u>msimbo.io</u>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex flex-col bg-card3  lg:w-7/12 pl-5 h-full w-full">
          <div className="flex mt-5 ml-14 items-center flex-row">
            <Image
              src="/logoM.png"
              width={100}
              height={100}
              alt="Farm fuzion"
            />
            <p
              className="text-white ml-4 font-abc"
              style={{ fontSize: "22px" }}
            >
              FARM FUZION
            </p>
          </div>
          <Image
            src={farmdark}
            priority
            width={900}
            height={600}
            className="ml-14"
            alt="Farm fuzion"
          />
          <div className="mt-20 ml-14">
            <p className="text-white font-abc" style={{ fontSize: "20px" }}>
              Boosting Financial Inclusion, Data Driven Farming, Reducing Waste
              & Ensuring a Sustainable Future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
