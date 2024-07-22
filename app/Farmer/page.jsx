"use client";
import "@app/Farmer/farmer.css";
import Image from "next/image";
import farm_fuzion_logo from "@public/assets/farm_fuzion_logo.png";
import { useRouter } from "next/navigation";

export default function Farmer_additional() {
  const router = useRouter();
  function go_to_profile() {
    router.push("/Farmer/Profile");
  }
  return (
    <div className="farmer_container">
      <div className="farmer_title">WELCOME FARMER </div>
      <div className="farmer_subtitle">
        Please Provide the additonal infromation below
      </div>
      <div className="farmer_icon">
        <Image src={farm_fuzion_logo} fill priority alt="Farm"/>
      </div>
      <div className="farmer_line"></div>

      {/*`````````````` Farmer Form``````````````````````` */}
      {/* ``````````````Section 1````````````````````````` */}
      <div className="farmer_section_1">
        <div className="farmer_email">
          <label>Email</label>
          <input type="email" name="" id="farmer_email_address" required />
        </div>

        <div className="farmer_id">
          <label>National ID</label>
          <input
            type="text"
            name=""
            id="farmer_national_id_text_box"
            required
          />
        </div>

        <div className="farmer_county">
          <label>County</label>
          <input type="text" name="" id="farmer_county_text_box" required />
        </div>

        <div className="farmer_cooperative">
          <label>Co-operative</label>
          <input
            type="text"
            name=""
            id="farmer_cooperative_text_box"
            required
          />
        </div>

        <div className="farmer_village">
          <label>Village</label>
          <input type="text" name="" id="farmer_village_text_box" required />
        </div>

        <div className="farmer_farm_size">
          <label>Farm Size (Ha)</label>
          <input
            type="number"
            name=""
            id="farmer_farm_size_text_box"
            required
          />
        </div>

        <div className="farmer_primary_chain">
          <label>Primary Value</label>
          <input
            type="text"
            name=""
            id="farmer_primary_chain_text_box"
            required
          />
        </div>
      </div>

      {/* ```````````````````Section 2````````````````````````` */}

      <div className="farmer_section_2">
        <div className="farmer_phone" required>
          <label>Phone Number</label>
          <input type="number" name="" id="farmer_phone_number" required />
        </div>

        <div className="farmer_household">
          <label>Household number</label>
          <input
            type="number"
            name=""
            id="farmer_household_text_box"
            required
          />
        </div>

        <div className="farmer_sub_county">
          <label>Sub County</label>
          <input type="text" name="" id="farmer_sub_county_text_box" required />
        </div>

        <div className="farmer_church">
          <label>Church</label>
          <input type="text" name="" id="farmer_church_text_box" required />
        </div>

        <div className="farmer_ward">
          <label>Ward</label>
          <input type="text" name="" id="farmer_ward_text_box" required />
        </div>

        <div className="farmer_economic_activity">
          <label>Economic Activity </label>
          <input
            type="number"
            name=""
            id="farmer_economic_activity_text_box"
            required
          />
        </div>

        <div className="farmer_secondary_chain">
          <label>Secondary Value</label>
          <input
            type="text"
            name=""
            id="farmer_secondary_chain_text_box"
            required
          />
        </div>
      </div>
      <div className="farmer_confirm">
        <button className="farmer_confirm_btn" onClick={go_to_profile}>
          Confirm
        </button>
      </div>
    </div>
  );
}
