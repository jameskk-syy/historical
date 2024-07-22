"use client";
import React from "react";
import "@app/cooperate/form/form.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import msimbo_logo_icon from "@public/assets/msimbo_logo.png";
import farm_fuzion_logo from "@public/assets/farm_fuzion_logo.png";


export default function Form() {
  
  const router = useRouter();
  function go_to_next_form() {
    router.push("/cooperate/second_form");
  }

  return (
    <div className="form_container">
      <div className="form_title">WELCOME COOPERATIVE </div>
      <div className="form_subtitle">
        Please Provide the additonal infromation below
      </div>
      <div className="form_icon">
        <Image src={farm_fuzion_logo} fill priority alt="Farm Fuzion" />
      </div>
      <div className="form_line"></div>
      <div className="coop_details">Cooperative Details </div>

      <div className="form_section_1">
        <div className="coop_name">
          <label>Cooperative name</label>
          <input type="text" name="" id="coop_name_text_box" />
        </div>

        <div className="coop_county">
          <label>County</label>
          <input type="text" name="" id="coop_county_text_box" />
        </div>

        <div className="coop_registration">
          <label>Registration Status</label>
          <select name="" id="coop_reg_selection">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="coop_postal_address">
          <label>Postal address</label>
          <input type="text" name="" id="coop_postal_address_text_box" />
        </div>

        <div className="coop_type">
          <label>Type of cooperate</label>
          <select name="" id="cooperative_selection">
            <option value="Type_1">Type 1</option>
            <option value="Type_2">Type 2</option>
          </select>
        </div>
      </div>

      <div className="form_section_2">
        <div className="coop_email">
          <label>Cooperative Email</label>
          <input type="text" name="" id="coop_email_text_box" />
        </div>

        <div className="coop_sub_county">
          <label>Sub-County</label>
          <input type="text" name="" id="coop_sub_county_text_box" />
        </div>

        <div className="coop_registration_number">
          <label>Registration number (if registered)</label>
          <input type="number" id="coop_num" />
        </div>

        <div className="coop_telephone">
          <label>Phone number</label>
          <input type="number" name="" id="coop_telephone_text_box" />
        </div>

        <div className="coop_ward">
          <label>Ward</label>
          <input type="text" id="coop_ward" />
        </div>
      </div>

      <div className="next_button" onClick={go_to_next_form}>
        <button>Next</button>
      </div>
      <div className="reset_button">
        <button>Reset</button>
      </div>

      <div className="coop_powered_by">Powered by</div>
      <div className="coop_msimbo_logo">
        <Image src={msimbo_logo_icon} fill priority alt="Farm Fuzion"/>
      </div>
    </div>
  );
}
