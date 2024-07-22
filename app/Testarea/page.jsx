"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Axios from "axios";

export default function RegistrationPage() {
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kraPin, setKraPin] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [additionalDoc1, setAdditionalDoc1] = useState(null);
  const [additionalDoc2, setAdditionalDoc2] = useState(null);
  const [additionalDoc3, setAdditionalDoc3] = useState(null);

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    setter(file);
  };

  const uploadFile = async (file, path) => {
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (name && email && password && kraPin && idCard) {
      setLoading(true);

      try {
        const userId = uuidv4(); // Generate a unique user ID

        const kraPinUrl = await uploadFile(kraPin, `kyc_documents/${userId}/kra_pin`);
        const idCardUrl = await uploadFile(idCard, `kyc_documents/${userId}/id_card`); regCerticate
        const additionalDoc1Url = additionalDoc1 ? await uploadFile(additionalDoc1, `kyc_documents/${userId}/additional_doc1`) : null;
        const additionalDoc2Url = additionalDoc2 ? await uploadFile(additionalDoc2, `kyc_documents/${userId}/additional_doc2`) : null;
        const additionalDoc3Url = additionalDoc3 ? await uploadFile(additionalDoc3, `kyc_documents/${userId}/additional_doc3`) : null;

        const userData = {
          name,
          email,
          password, // In a real application, ensure you hash the password before storing
          kycDocuments: {
            kraPin: kraPinUrl,
            idCard: idCardUrl,
            additionalDoc1: additionalDoc1Url,
            additionalDoc2: additionalDoc2Url,
            additionalDoc3: additionalDoc3Url,
          },
        };
        

        console.log("kraPinUrl,",kraPinUrl);
        await Axios.post("https://your-api-endpoint.com/register", userData);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Registered Successfully",
          text: "User registration and KYC documents upload completed",
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "There was an error uploading the files or registering the user",
          icon: "error",
          confirmButtonText: "Ok",
        });
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Required Fields Missing!",
        text: "Please fill all fields and upload both KRA PIN and ID Card",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="file" onChange={handleFileChange(setKraPin)} required />
        <input type="file" onChange={handleFileChange(setIdCard)} required />
        <input type="file" onChange={handleFileChange(setAdditionalDoc1)} />
        <input type="file" onChange={handleFileChange(setAdditionalDoc2)} />
        <input type="file" onChange={handleFileChange(setAdditionalDoc3)} />
        <button type="submit" disabled={Loading}>
          {Loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
