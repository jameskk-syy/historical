// ````````````````````````````````````````````````````````````````````````````````
// `````````````````````````````````````IMPORTS``````````````````````````````````````````````
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
import SB5 from "@/app/components/SB5";

import TopNav from "@/app/components/Top_Navigation";
import { IoIosCloseCircle } from "react-icons/io";
import TopCoop from "@/app/components/TopCoop";

//  `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// `````````````````````````````````````````Insurance Info Main Function`````````````````````````````````````````````````````````````````````

export default function Insurance_Info_Page() {
  const router = useRouter();
  function go_to_insurance_applications() {
    router.push("/cooperate/CDashboard/CInsurance");
  }
  // decline popup functions
  function denied_insurance_Close() {
    const denied_text_area = document.getElementById("pop_decline_text_area");
    const denied_name_input = document.getElementById("popup_decline_name");
    const popup = document.getElementById("Decline_insurance_popup");
    // ```
    popup.classList.add("hidden");
    denied_text_area.value = "";
    denied_name_input.value = "";
  }

  function denied_insurance_Open() {
    const popup = document.getElementById("Decline_insurance_popup");
    popup.classList.remove("hidden");
  }

  // approve popup functions
  function approve_insurance_Close() {
    const popup = document.getElementById("Approve_insurance_popup");
    popup.classList.add("hidden");
    // ```
    const approve_name_input = document.getElementById("approve_decline_name");
    approve_name_input.value = "";
  }

  function approve_insurance_Open() {
    const popup = document.getElementById("Approve_insurance_popup");
    popup.classList.remove("hidden");
  }

  // Insurance confirmed
  function confirmedInsurance() {
    const popup = document.getElementById("Approve_insurance_popup");
    popup.classList.add("hidden");
    // ```
    const approve_name_input = document.getElementById("approve_decline_name");
    approve_name_input.value = "";
    Swal.fire({
      title: "INSURANCE APPROVED!",
      text: "The Application is successful.",
      icon: "success",
      // showCloseButton: true,
    });
  }

  // Insurance Denied

  function deniedInsurance() {
    const popup = document.getElementById("Decline_insurance_popup");
    popup.classList.add("hidden");
    // ```
    const decline_name_input = document.getElementById("popup_decline_name");
    const denied_text_area = document.getElementById("pop_decline_text_area");
    decline_name_input.value = "";
    denied_text_area.value = "";
    Swal.fire({
      title: "INSURANCE DENIED!",
      text: "The Insurance application has been rejected.",
      icon: "info",
      // showCloseButton: true,
    });
  }

  //   insurance eligbility open

  function insurance_eligibility_Open() {
    const ins_open = document.getElementById("insurance_eligibility");
    ins_open.classList.remove("hidden");
  }

  function insurance_eligibility_Close() {
    const ins_close = document.getElementById("insurance_eligibility");
    ins_close.classList.add("hidden");
  }
  // styles dictionary
  var stylies_dict = {
    fontFamily: "Poppins",
    fontSize: "12px",
    color: "whitesmoke",
    fontWeight: "500",
    paddingTop: "1.1%",
    paddingLeft: "1%",
  };

  //  loan input styles
  var loan_input_styles = {
    fontFamily: "poppins",
    fontSize: "14px",
    border: "none",
    outline: "none",
    paddingRight: "2%",
    textAlign: "end",
    color: "white",
    borderRadius: "8px",
  };

  //  loan info styles
  var loan_info_styles = {
    fontFamily: "poppins",
    fontSize: "14px",
    border: "1px solid rgb(0, 255, 242)",
    outline: "none",
    paddingLeft: ".5%",
    textAlign: "start",
    color: "white",
    borderRadius: "8px",
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return ( 
    <>
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-0 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
        <div className="flex flex-flow  h-10 w-tw ">
          <button
            className=" h-10 w-56 text-base border-b-2 xb:ml-5 border-b-transparent hover:border-b-blue-300 xs:w-32 xs:text-sm mini_s:text-vs mini_s:w-36 very_s:collapse"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#19802a",
              textAlign: "start",
            }}
            onClick={go_to_insurance_applications}
          >
            INSURANCE APPLICATIONS
          </button>

          <button
            className="xb:ml-5 h-10 w-48 text-base   xs:w-36 xs:text-sm xs:left-36  mini_s:text-vs mini_s:w-28 mini_s:left-40 very_s:collapse"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#19802a",
              borderBottom: "1px solid #76c5dc",
            }}
          >
            INSURANCE INFO
          </button>
        </div>

        {/*   ````````````````````````````````````````Insurance Info````````````````````````````````````````` */}
        <div className="flex flex-wrap h-lr_body  w-Ep_w mt-2 ml-0   gap-x-2 xs:w-s_Ep  xb:ml-5 ">
          {/*-----Farmer Data----- */}
          <div className="flex flex-col h-full/5 w-1/3 relative xs:w-full xs:h-tw">
            {/* Insurance Search box */}
            <input
              type="search"
              name=""
              id="insurance_info_id_box"
              placeholder="Enter Insurance ID"
              className="mt-1 w-p_inpt_w h-8 rounded-lg mini_s:text_mini "
              style={{
                fontFamily: "poppins",
                fontSize: "14px",
                border: "1px solid #76c5dc",
                outline: "none",
                paddingLeft: "2%",
              }}
            />
            {/* Insurance info Search button */}
            <button
              className="absolute top-0  right-0 mt-1 w-4/12 h-8 rounded-lg p-.5 bg-green-400 outline-none hover:bg-blue-500 mini_s:text_mini"
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                border: "1px solid #76c5dc",
                color: "white",
                fontWeight: "600",
              }}
            >
              Search
            </button>
            <div className="flex flex-col mt-3 h-lr_yearly w-full bg-green-700">
              {/* Farm owner */}
              <label
                className="absolute top-12  h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                Farm Owner:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_farm_owner_box"
                placeholder="Farm Owner Name"
                className="absolute top-12 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini  "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm Bank A/C number */}
              <label
                className="absolute top-24 h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                A/C number:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_bank_ac_box"
                placeholder="Bank A/C number"
                className="absolute top-24 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm phone number */}
              <label
                className="absolute top-36  h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                Phone number:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_phone_number_box"
                placeholder="Farm Phone"
                className="absolute top-36 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini  "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm Bank A/C number */}
              <label
                className="absolute top-48  h-8 w-1/3 left-0 mini_s:text_mini "
                style={stylies_dict}
              >
                {" "}
                Farmer Location:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_farmer_location_box"
                placeholder="Farmer Location"
                className="absolute top-48 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm Email */}
              <label
                className="absolute top-60  h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                Farmer Email:
              </label>
              <input
                type="email"
                name=""
                id="insurance_info_farmer_email_box"
                placeholder="Farmer Email"
                className="absolute top-60 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini  "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm Gender */}
              <label
                className="absolute top-72 h-8 w-1/3 left-0 mini_s:text_mini "
                style={stylies_dict}
              >
                {" "}
                Farmer Gender:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_farmer_gender_box"
                placeholder="Farmer Gender"
                className="absolute top-72 right-0 w-2/3 h-8  bg-transparent mini_s:text_mini "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm houshold*/}
              <label
                className="absolute top-lr_t  h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                Household Number:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_farmer_household_box"
                placeholder="Household number"
                className="absolute top-lr_t right-0 w-2/3 h-8  bg-transparent mini_s:text_mini"
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Farm marital status */}
              <label
                className="absolute top-96 h-8 w-1/3 left-0 mini_s:text_mini"
                style={stylies_dict}
              >
                {" "}
                Marital Status:
              </label>
              <input
                type="email"
                name=""
                id="insurance_info_farmer_marital_box"
                placeholder="Farmer Marital Status"
                className="absolute top-96 right-0 w-2/3 h-8 bg-transparent  mini_s:text_mini  "
                style={loan_input_styles}
                readOnly={true}
              />

              {/* Date of registration */}
              <label
                className="absolute top-date_lr b h-8 w-1/3 left-0 mini_s:text_mini "
                style={stylies_dict}
              >
                {" "}
                Date of registration:
              </label>
              <input
                type="text"
                name=""
                id="insurance_info_farmer_date_box"
                placeholder="Date of registration"
                className="absolute top-date_lr right-0 w-2/3 h-8  bg-transparent mini_s:text_mini "
                style={loan_input_styles}
                readOnly={true}
              />
            </div>
          </div>
          {/*-----Farmer Data----- */}
          <div className="flex flex-col h-full/5 w-lr_sec_div relative  xs:w-full xs:h-tw">
            <label
              className="absolute top-1  h-8 w-full left-0 mini_s:text_mini "
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                color: "blue",
                fontWeight: "600",
                paddingTop: ".1%",
                borderBottom: "1px solid #76c5dc",
              }}
            >
              Insurance Info
            </label>
            <input
              type="text"
              name=""
              id="insurance_info_cat_box"
              placeholder="Insurance Category"
              className="absolute top-12 left-0 w-full h-12 mini_s:text_mini  "
              style={loan_info_styles}
              readOnly={true}
            />
            <input
              type="text"
              name=""
              id="insurance_info_value_chain"
              placeholder="Primary Value Chain"
              className="absolute top-28 left-0 w-full h-12  mini_s:text_mini"
              style={loan_info_styles}
              readOnly={true}
            />
            <input
              type="text"
              name=""
              id="insurance_info_amount_box"
              placeholder="Coverage Amount"
              className="absolute top-44 left-0 w-full h-12  mini_s:text_mini"
              style={loan_info_styles}
              readOnly={true}
            />

            <input
              type="text"
              name=""
              id="insurance_info_monthly_box"
              placeholder="Monthly income"
              className="absolute top-60 left-0 w-full h-12  mini_s:text_mini"
              style={loan_info_styles}
              readOnly={true}
            />
            <input
              type="text"
              name=""
              id="insurance_info_education_box"
              placeholder="Level of education"
              className="absolute top-lr_inp left-0 w-full h-12 mini_s:text_mini "
              style={loan_info_styles}
              readOnly={true}
            />

            <label
              className="absolute top-lr_additional  h-8 w-full left-0 mini_s:text_mini "
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                color: "blue",
                fontWeight: "600",
                paddingTop: ".1%",
              }}
            >
              Additional Info
            </label>

            <input
              type="text"
              name=""
              id="insurance_info_employ_box"
              placeholder="Employment Status"
              className="absolute top-96 left-0 w-cw h-12  mini_s:text_mini "
              style={loan_info_styles}
              readOnly={true}
            />

            <input
              type="text"
              name=""
              id="yearly_box"
              placeholder="Yearly Income"
              className="absolute top-lr_yearly left-0 w-cw h-12  mini_s:text_mini "
              style={loan_info_styles}
              readOnly={true}
            />

            <input
              type="text"
              name=""
              id="insurance_info_landsize_box"
              placeholder="Land Size(Ha)"
              className="absolute top-96 right-0 w-cw h-12 mini_s:text_mini "
              style={loan_info_styles}
              readOnly={true}
            />

            <input
              type="text"
              name=""
              id="insurance_info_gender_box"
              placeholder="Gender"
              className="absolute top-lr_yearly right-0 w-cw h-12 mini_s:text_mini  "
              style={loan_info_styles}
              readOnly={true}
            />
            <div className="flex justify-end  absolute top-lr_btns h-10 right-0 w-full p-1 gap-x-4 ">
              <button
                className="h-8 w-28 mr-8  bg-transparent outline-none text-blue-500  hover:text-red-500 mini_s:text_mini"
                style={{
                  fontSize: "14px",
                  fontFamily: "Quicksand",
                  fontWeight: "600",
                  borderBottom: "1px solid #76c5dc",
                }}
                onClick={insurance_eligibility_Open}
              >
                Eligibility
              </button>
              <button
                onClick={denied_insurance_Open}
                id="open_Decline_insurance_popup"
                className="h-8 w-2/5 bg-red-600 outline-none rounded-lg  hover:bg-red-800 mini_s:text_mini"
                style={{
                  fontSize: "12px",
                  fontFamily: "Poppins",

                  color: "white",
                  fontWeight: "600",
                }}
              >
                Decline Application
              </button>
              <button
                onClick={approve_insurance_Open}
                className="h-8 w-2/5 bg-green-600 outline-none rounded-lg hover:bg-blue-500 mini_s:text_mini"
                style={{
                  fontSize: "12px",
                  fontFamily: "Poppins",

                  color: "white",
                  fontWeight: "600",
                }}
              >
                Approve Application
              </button>
            </div>
          </div>
          {/* ``````````````````````````````````````````Loan Popup````````````````````````````````````````` ```````````*/}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* `````````````````Decline Popup`````````````````` */}
          <div
            id="Decline_insurance_popup"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm items-center justify-center hidden"
            style={{ zIndex: "1" }}
          >
            <div
              id=""
              className="flex flex-flow h-72 w-2/5 absolute top-1/4 bg-white left-dec_pop p-2 rounded-md xs:w-resize_w xs:left-6"
              style={{
                zIndex: "1",
                boxShadow: "0px 0px 20px rgba(201, 56, 56, 0.596)",
              }}
            >
              <CgDanger
                size={50}
                style={{ color: "rgb(231, 46, 46)" }}
                className="absolute top-1 left-bt"
              />
              <label
                className="absolute top-10 left-0  h-8 w-full text-left text-black text-sm mini_s:text-xs mini_s:top-12"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  paddingTop: "1.1%",
                  paddingLeft: "1%",
                }}
              >
                Please provide a reason for application rejection:
              </label>

              <textarea
                required={true}
                name=""
                id="pop_decline_text_area"
                placeholder="Enter reason here"
                className="mt-16 w-full_width h-28 rounded-lg p-2 mini_s:mt-20 mini_s:h-24 "
                style={{
                  resize: "none",
                  border: "1px solid #76c5dc",
                  outline: "none",
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "black",
                }}
              ></textarea>

              <input
                type="text"
                required={true}
                name=""
                id="popup_decline_name"
                className="h-8 w-pop_inpt absolute top-48 left-2 rounded-lg p-2"
                placeholder="Enter your name to finalize"
                style={{
                  border: "1px solid #76c5dc",
                  outline: "none",
                  color: "black",
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: "poppins",
                }}
              />
              {/* ````````````````````````````````````Decline popup button`````` */}

              <button
                className="absolute top-60 right-2 h-8 w-bt bg-green-400 rounded-lg text-white hover:bg-blue-500 "
                onClick={deniedInsurance}
              >
                Submit
              </button>

              <button
                className="absolute top-60 left-2 h-8 w-bt bg-red-500 rounded-lg text-white hover:bg-red-700 "
                onClick={denied_insurance_Close}
              >
                Cancel
              </button>
            </div>
          </div>
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* -------------------------------------------Loan approve popup---------------------------------------````````````````` */}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}
          {/* ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */}

          <div
            id="Approve_insurance_popup"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm items-center justify-center hidden"
            style={{ zIndex: "1" }}
          >
            <div
              id=""
              className="flex flex-flow h-72 w-2/5 absolute top-1/4 bg-white left-dec_pop p-2 rounded-md xs:w-resize_w xs:left-6 "
              style={{
                zIndex: "1",
                boxShadow: "0px 0px 20px rgba(38, 224, 63, 0.596)",
              }}
            >
              <FaQuestionCircle
                size={50}
                style={{ color: "#2db867" }}
                className="absolute top-1 left-bt"
              />

              <label
                className="absolute top-14 left-0  h-8 w-full text-center text-black "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "700",
                  paddingTop: "1.1%",
                  paddingLeft: "1%",
                }}
              >
                Are you sure?
              </label>
              <label
                className="absolute top-28 left-0  h-8 w-2/3 text-end text-black text-sm mini_s:text-text_mini "
                style={{
                  fontFamily: "Poppins",

                  fontWeight: "500",
                  paddingTop: "1.1%",
                  paddingLeft: "1%",
                }}
              >
                This user will recieve:{"Crop Insurance "}
              </label>
              <input
                readOnly={true}
                value={"50000$"}
                type="text"
                id="approve_insurance_amount"
                className="h-8 w-1/3  absolute top-28 right-0 outline-none border-none text-start"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "19px",
                  fontWeight: "700",
                  paddingLeft: "1%",
                  color: "#2db867",
                }}
              />

              <input
                type="text"
                required={true}
                name=""
                id="approve_decline_name"
                className="h-8 w-pop_inpt absolute top-40 left-2 rounded-lg p-2"
                placeholder="Enter your name to Finalize"
                style={{
                  border: "1px solid #76c5dc",
                  outline: "none",
                  color: "black",
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: "poppins",
                }}
              />
              {/* ````````````````````````````````````Approve popup button`````` */}

              <button
                className="absolute top-52 right-2 h-10 w-bt bg-green-400 rounded-lg text-white hover:bg-blue-500 "
                onClick={confirmedInsurance}
              >
                Approve
              </button>

              <button
                className="absolute top-52 left-2 h-10 w-bt bg-red-500 rounded-lg text-white hover:bg-red-700 "
                onClick={approve_insurance_Close}
              >
                Cancel
              </button>
            </div>
          </div>
          {/* ```````````````````````WEligibility List````````````````````````` */}
          <div
            id="insurance_eligibility"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm  items-center justify-center hidden "
            style={{ zIndex: "1" }}
          >
            <div className="flex flex-col relative h-4/5 w-3/5 p-6">
              <IoIosCloseCircle
                size={25}
                className="absolute top-0 right-4 cursor-pointer"
                style={{ color: "#6bc1e9" }}
                onClick={insurance_eligibility_Close}
              />
              <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg overflow-auto">
                <h1 class="text-2xl font-bold text-center mb-6">
                  Insurance Eligibility Requirements
                </h1>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Personal Information
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Age: Must be within the insurance providers age limits
                      (varies by policy).
                    </li>
                    <li>
                      Citizenship: Must be a citizen or permanent resident of
                      the country.
                    </li>
                    <li>
                      Identification: Must provide a valid government-issued ID
                      (e.g., drivers license, passport).
                    </li>
                    <li>
                      Residency: Must provide proof of current address (e.g.,
                      utility bill, lease agreement).
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Health and Medical History
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Medical Examination: Must undergo a medical examination if
                      required by the insurer.
                    </li>
                    <li>
                      Health Questionnaire: Must complete a health questionnaire
                      disclosing any pre-existing conditions.
                    </li>
                    <li>
                      Medical Records: Must provide access to medical records if
                      requested by the insurer.
                    </li>
                    <li>
                      Non-Smoker Status: Must be a non-smoker or disclose
                      smoking habits, as premiums may vary.
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Financial Information
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Income Proof: Must provide proof of income (e.g., pay
                      stubs, tax returns) for certain types of insurance.
                    </li>
                    <li>
                      Net Worth Statement: May be required to provide a
                      statement of net worth for high-value policies.
                    </li>
                    <li>
                      Current Insurance: Must disclose any existing insurance
                      policies.
                    </li>
                    <li>
                      Credit Score: Must have a minimum credit score (varies by
                      insurer).
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Lifestyle and Occupation
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Occupation: Must provide details of occupation, as some
                      jobs may be considered high-risk.
                    </li>
                    <li>
                      Hobbies and Activities: Must disclose high-risk hobbies
                      (e.g., skydiving, scuba diving).
                    </li>
                    <li>
                      Travel History: Must disclose travel history, especially
                      to high-risk regions.
                    </li>
                    <li>
                      Driving Record: Must provide a recent driving record for
                      auto insurance policies.
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">Documentation</h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Insurance Application: Must complete and sign an insurance
                      application form.
                    </li>
                    <li>
                      Consent for Background Check: Must consent to background
                      checks and verification of information.
                    </li>
                    <li>
                      References: May need to provide personal or professional
                      references.
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Legal and Regulatory Compliance
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Legal Standing: Must not have any outstanding judgments or
                      legal actions that could impact eligibility.
                    </li>
                    <li>
                      Criminal Record: Must disclose any criminal record, as it
                      may affect eligibility and premiums.
                    </li>
                    <li>
                      Regulatory Requirements: Must meet any additional
                      regulatory requirements specific to the insurance type.
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h2 class="text-xl font-semibold mb-2">
                    Additional Considerations for Specific Insurance Types
                  </h2>
                  <ul class="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Health Insurance
                      <ul class="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Pre-Existing Conditions: Must disclose any
                          pre-existing health conditions.
                        </li>
                        <li>
                          Family Health History: May need to provide family
                          health history for certain policies.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Life Insurance
                      <ul class="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Beneficiary Designation: Must designate one or more
                          beneficiaries.
                        </li>
                        <li>
                          Medical Examination: May require a more detailed
                          medical examination.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Auto Insurance
                      <ul class="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Vehicle Information: Must provide details of the
                          vehicle being insured.
                        </li>
                        <li>
                          Driving Record: Must provide a recent driving record.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Home Insurance
                      <ul class="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Property Details: Must provide details of the property
                          being insured.
                        </li>
                        <li>
                          Home Inspection: May require a home inspection report.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
