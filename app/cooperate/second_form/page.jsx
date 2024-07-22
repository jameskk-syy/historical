"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import msimbo_logo_icon from "@public/assets/msimbo_logo.png";
import "@app/cooperate/second_form/second_form.css";
import farm_fuzion_logo from "@public/assets/farm_fuzion_logo.png";
import Multiselect from "multiselect-react-dropdown";

export default function Second_form() {
  const router = useRouter();
  function go_to_coop_dashboard() {
    router.push("/cooperate/CDashboard");
  }
  const liStyle = { height: "100%", color: "red" };
  const multi_select_options = [
    "Business Services",
    "Tourism Services",
    "Health Care Services",
    "Table Banking",
    "Poultry Keeping",
    "Skill development",
    "General Insurance",
    "Livestock rearing",
    "Health insurance",
    "Youth empowerment",
    "Crop farmings",
    "Fishery Services",
    "Financial Services",
    "Enivronment Conservation",
    "Knowledge management",
    "Merry go round",
    "Data Collection",
    "Crop Insurance",
    "Policy services",
    "Community Project",
    "Risk profiling and mitigation",
  ].map((x) => {
    return { name: x };
  });
  return (
    <div className="second_form">
      <div className="second_title">WELCOME COOPERATIVE </div>
      <div className="second_subtitle">
        Please Provide the additonal infromation below
      </div>
      <div className="second_icon">
        <Image src={farm_fuzion_logo} fill priority  alt="Farm Fuzion" />
      </div>
      <div className="second_line"></div>
      <div className="second_core">Core Activities </div>
      <div className="core_subtitle">
        Select options relevant to your cooperation
      </div>

      {/* ```````````````````````Core Activities````````````````````````````` */}

      <div className="core_boxes_1">
        <Multiselect
          id="banana"
          className="mutli"
          displayValue="name"
          isObject={true}
          options={multi_select_options}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          onKeyPressFn={function noRefCheck() {}}
          placeholder="Core Activities"
          style={{
            chips: {
              background: "#27bae7",
              "font-size": "11px;",
            },
            multiselectContainer: {
              color: "black",
              "font-size": "13px;",
            },
            searchBox: {
              border: "none",
            },
            optionContainer: {
              // To change css for option container
            },
            option: {
              // To change css for dropdown options
            },
          }}
        />
        {/* <select name="" id="" multiple="true">
          <option value="1">1000</option>
          <option value="2">2000</option>
          <option value="3">3000</option>
        </select> */}
      </div>

      {/* ```````````````````````Inner Section``````````````````````````````` */}

      <div className="coop_value_chain">
        <label>Specific Value Chain</label>
        <input type="text" name="" id="coop_value_chain_text_box" />
      </div>

      {/*````````````````````````Contact section`````````````````````````````  */}
      <div className="third_core">Contact Details </div>
      <div className="contact_section_1">
        <div className="chairperson_name">
          <label>Chairperson name</label>
          <input type="text" name="" id="chairperson_name_text_box" />
        </div>

        <div className="secretary_name">
          <label>Secretary name</label>
          <input type="text" name="" id="secretary_name_text_box" />
        </div>

        <div className="treasurer_name">
          <label>Treasurer name</label>
          <input type="text" name="" id="treasurer_name_text_box" />
        </div>
      </div>

      <div className="contact_section_2">
        <div className="chairperson_phone_number">
          <label>Phone number</label>
          <input type="number" name="" id="chairperson_phone_number_text_box" />
        </div>

        <div className="secretary_phone_number">
          <label>Phone number</label>
          <input type="number" name="" id="secretary_phone_number_text_box" />
        </div>

        <div className="treasurer_phone_number">
          <label>Phone number</label>
          <input type="number" name="" id="treasurer_phone_number_text_box" />
        </div>
      </div>

      <div className="contact_section_3">
        <div className="chairperson_email">
          <label>Email</label>
          <input type="email" name="" id="chairperson_email_text_box" />
        </div>

        <div className="secretary_email">
          <label>Email</label>
          <input type="email" name="" id="secretary_email_text_box" />
        </div>

        <div className="treasurer_email">
          <label>Email</label>
          <input type="email" name="" id="treasurer_email_text_box" />
        </div>
      </div>

      {/* ``````````````````Bank Section````````````````````````` */}
      <div className="banking_section">
        <div className="fourth_core">Bank Details </div>
        <div className="bank_branch_name">
          <label>Bank name</label>
          <input type="text" name="" id="bank_branch_name_text_box" />
        </div>

        <div className="bank_account_number">
          <label>Account number</label>
          <input type="number" name="" id="bank_account_number_text_box" />
        </div>

        <div className="bank_account_name">
          <label>Account name</label>
          <input type="text" name="" id="bank_account_name_text_box" />
        </div>
      </div>

      {/* ```````````````````````Paybill Section``````````````````````````` */}

      <div className="paybill_core">Paybill/Till Details (if applicable) </div>
      <div className="paybill_section_1">
        <div className="paybill_name">
          <label>Paybill/Till name</label>
          <input type="text" name="" id="paybill_name_text_box" />
        </div>

        <div className="Authorize_name_1">
          <label> Signatory name</label>
          <input type="text" name="" id="Authorize_name_1_text_box" />
        </div>

        <div className="second_Authorize_name">
          <label>2nd signatory name</label>
          <input type="text" name="" id="second_Authorize_name_text_box" />
        </div>
      </div>

      <div className="paybill_section_2">
        <div className="paybill_number">
          <label>Paybill/Till number</label>
          <input type="number" name="" id="paybill_number_text_box" />
        </div>

        <div className="Authorize_position_1">
          <label>Position</label>
          <input type="text" name="" id="Authorize_position_1_text_box" />
        </div>

        <div className="second_Authorize_position">
          <label>Position</label>
          <input type="text" name="" id="second_Authorize_position_text_box" />
        </div>
      </div>

      <div className="paybill_section_3">
        <div className="paybill_store">
          <label>Store number</label>
          <input type="text" name="" id="paybill_store_text_box" />
        </div>

        <div className="Authorize_signature_1">
          <label>Signture</label>
          <input type="text" name="" id="secretary_email_text_box" />
        </div>

        <div className="second_Authorize_signature">
          <label>Signture</label>
          <input type="text" name="" id="second_Authorize_signature_text_box" />
        </div>
      </div>

      <div className="second_button" onClick={go_to_coop_dashboard}>
        <button>Submit</button>
      </div>
      <div className="second_reset_button">
        <button>Reset</button>
      </div>

      <div className="second_coop_powered_by">Powered by</div>
      <div className="second_coop_msimbo_logo">
        <Image src={msimbo_logo_icon} fill priority alt="Farm Fuzion"/>
      </div>
    </div>
  );
}
