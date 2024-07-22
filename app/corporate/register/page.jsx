"use client";
import SideNav from "@/app/components/AdminSideNav";
import SB2 from "@/app/components/SB4";
import { CheckBox } from "@mui/icons-material";
import axios from "axios";
import Axios from "axios";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";


// Define parseCSV function
const parseCSV = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
};

const parseExcel = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Assuming the first row contains the headers
      const headers = jsonData.shift();

      // Map column headers to field names
      const fieldMap = {
        cooperativeName: "cooperativeName",
        email: "email",
        password: "password",
        county: "county",
        subCounty: "subCounty",
        registrationStatus: "registrationStatus",
        registrationNumber: "registrationNumber",
        postalAddress: "postalAddress",
        telephone: "telephone",
        coopType: "coopType",
        ward: "ward",
        specificValueChain: "specificValueChain",
        chairpersonName: "chairpersonName",
        chairpersonPhone: "chairpersonPhone",
        chairpersonEmail: "chairpersonEmail",
        secretaryName: "secretaryName",
        secretaryPhone: "secretaryPhone",
        secretaryEmail: "secretaryEmail",
        treasurerName: "treasurerName",
        treasurerPhone: "treasurerPhone",
        treasurerEmail: "treasurerEmail",
        bankAndBranch: "bankAndBranch",
        accountNumber: "accountNumber",
        accountName: "accountName",
        paybillOrTillNumber: "paybillOrTillNumber",
        paybillOrTillName: "paybillOrTillName",
        authorizeSignatoryName: "authorizeSignatoryName",
        authorizeSignatoryPosition: "authorizeSignatoryPosition",
        authorizeSignatorySignature: "authorizeSignatorySignature",
        secondAuthorizeSignatoryName: "secondAuthorizeSignatoryName",
        secondAuthorizeSignatoryPosition: "secondAuthorizeSignatoryPosition",
        secondAuthorizeSignatorySignature: "secondAuthorizeSignatorySignature",
      };

      // Extract data based on column headers
      const formattedData = jsonData.map((row) => {
        const rowData = {};
        headers.forEach((header, index) => {
          const field = fieldMap[header.toLowerCase()];
          if (field) {
            rowData[field] = row[index] || "";
          }
        });
        return rowData;
      });

      resolve(formattedData);
    };

    reader.onerror = (error) => reject(error);

    reader.readAsArrayBuffer(file);
  });
};

export default function Register() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Add members in bulk

  const [file, setFile] = useState(null);
  const handleSubmitBulk = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      let parsedData;

      // Check file extension to determine the type
      const extension = file.name.split(".").pop().toLowerCase();
      if (extension === "csv") {
        parsedData = parseCSV(file);
      } else if (extension === "xlsx" || extension === "xls") {
        parsedData = parseExcel(file);
      } else {
        // Unsupported file format
        Swal.fire({
          position: "center",
          icon: "error",
          title: "File Format",
          text: "Unsupported file format",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        navigate("/addMembers");
        return;
      }

      // Validate parsed data
      const invalidRows = parsedData.filter(
        (row) =>
          !row.cooperativeName ||
          !row.email ||
          !row.password ||
          !row.county ||
          !row.subCounty ||
          !row.registrationStatus ||
          !row.registrationNumber ||
          !row.postalAddress ||
          !row.telephone ||
          !row.coopType ||
          !row.ward ||
          !row.specificValueChain ||
          !row.chairpersonName ||
          !row.chairpersonPhone ||
          !row.chairpersonEmail ||
          !row.secretaryName ||
          !row.secretaryPhone ||
          !row.secretaryEmail ||
          !row.treasurerName ||
          !row.treasurerPhone ||
          !row.treasurerEmail ||
          !row.bankAndBranch ||
          !row.accountNumber ||
          !row.accountName ||
          !row.paybillOrTillNumber ||
          !row.paybillOrTillName ||
          !row.authorizeSignatoryName ||
          !row.authorizeSignatoryPosition ||
          !row.authorizeSignatorySignature ||
          !row.secondAuthorizeSignatoryName ||
          !row.secondAuthorizeSignatoryPosition ||
          !row.secondAuthorizeSignatorySignature
      );

      if (invalidRows.length > 0) {
        //  console.log("Parsed data:", parsedData);
        //  console.log("Invalid rows:", invalidRows);
        Swal.fire({
          icon: "error",
          title: "Empty Fields",
          text: "Some required fields are empty",
        });
        return;
        // throw new Error('Some required fields are empty');
      }

      // Map the parsed data to the required format
      const formattedData = parsedData.map((row) => ({
        cooperativeName: row.cooperativeName,
        email: row.email || "", // Making email optional
        password: row.password || "1234", // Default password
        county: row.county,
        subCounty: row.subCounty,
        registrationStatus: row.registrationStatus,
        registrationNumber: row.registrationNumber,
        postalAddress: row.postalAddress,
        telephone: row.telephone,
        coopType: row.coopType,
        ward: row.ward,
        specificValueChain: row.specificValueChain,
        chairpersonName: row.chairpersonName,
        chairpersonPhone: row.chairpersonPhone,
        chairpersonEmail: row.chairpersonEmail,
        secretaryName: row.secretaryName,
        secretaryPhone: row.secretaryPhone,
        secretaryEmail: row.secretaryEmail,
        treasurerName: row.treasurerName,
        treasurerPhone: row.treasurerPhone,
        treasurerEmail: row.treasurerEmail,
        bankAndBranch: row.bankAndBranch,
        accountNumber: row.accountNumber,
        accountName: row.accountName,
        paybillOrTillNumber: row.paybillOrTillNumber,
        paybillOrTillName: row.paybillOrTillName,
        authorizeSignatoryName: row.authorizeSignatoryName,
        authorizeSignatoryPosition: row.authorizeSignatoryPosition,
        authorizeSignatorySignature: row.authorizeSignatorySignature,
        secondAuthorizeSignatoryName: row.secondAuthorizeSignatoryName,
        secondAuthorizeSignatoryPosition: row.secondAuthorizeSignatoryPosition,
        secondAuthorizeSignatorySignature:
          row.secondAuthorizeSignatorySignature,
        role: row.role || "cooperative",
        status: row.status || "active",
      }));

      console.log("Formatted data:", formattedData);

      // Make a POST request to the endpoint with the formatted data
      const response = Axios.post(
        "https://us-central1-chillimbasaffe.cloudfunctions.net/uploadmembersbulk",
        { users: formattedData },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response from server:", response.data);

      // Handle success response
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add members",
          text: "Members added successfully",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/user");
        });
      } else {
        throw new Error("Failed to add members");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "Failed to add members",
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Add members Manually
  const [currentStep, setCurrentStep] = useState(1);
  const [cooperativeName, setCooperativeName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [county, setCounty] = useState("");
  const [subCounty, setSubCounty] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("Registered");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [coopType, setCoopType] = useState("");
  const [ward, setWard] = useState("");
  const [specificValueChain, setSpecificValueChain] = useState("");
  const [chairpersonName, setChairpersonName] = useState("");
  const [chairpersonPhone, setChairpersonPhone] = useState("");
  const [chairpersonEmail, setChairpersonEmail] = useState("");
  const [secretaryName, setSecretaryName] = useState("");
  const [secretaryPhone, setSecretaryPhone] = useState("");
  const [secretaryEmail, setSecretaryEmail] = useState("");
  const [treasurerName, setTreasurerName] = useState("");
  const [treasurerPhone, setTreasurerPhone] = useState("");
  const [treasurerEmail, setTreasurerEmail] = useState("");
  const [bankAndBranch, setBankAndBranch] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [fetchedDistrict, setFetchedDistrict] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [paybillOrTillNumber, setPaybillOrTillNumber] = useState("");
  const [paybillOrTillName, setPaybillOrTillName] = useState("");
  const [authorizeSignatoryName, setAuthorizeSignatoryName] = useState("");
  const [authorizeSignatoryPosition, setAuthorizeSignatoryPosition] = useState("");
  const [authorizeSignatorySignature, setAuthorizeSignatorySignature] = useState("");
  const [secondAuthorizeSignatoryName, setSecondAuthorizeSignatoryName] = useState("");
  const [secondAuthorizeSignatoryPosition, setSecondAuthorizeSignatoryPosition] = useState("");
  const [secondAuthorizeSignatorySignature, setSecondAuthorizeSignatorySignature] = useState("");


  useEffect(() => {
    async function fetchCountry() {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');

      const responseDataArray = Object.values(response.data.data);
      setCountry(responseDataArray);
    }
    fetchCountry();
  }, [])

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

 // Initialize state for file uploads
const [kraPin, setKraPin] = useState(null);
const [permit, setPermit] = useState(null);
const [regCertificate, setRegCertificate] = useState(null);

// Handle file changes
const handleFileChanges = (setter) => (e) => {
  const file = e.target.files[0];
  setter(file);
};

// Upload file function with async/await
const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path); // Ensure 'storage' is your Firebase storage instance

  try {
    // Upload file
    await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log('File uploaded successfully. Download URL:', downloadURL);

    return downloadURL; // Return download URL for further use
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error; // Propagate error to handle in calling function or component
  }
};

// Handle form submission
const handleSubmit = async (e) => {
  setIsSaving(true);
    e.preventDefault();
    setIsloading(true);
  // Generate a unique user ID
  const userId = uuidv4();

  try {
    // Upload KYC documents
    const kraPinUrl = kraPin ? await uploadFile(kraPin, `products/${userId}/kra_pin`) : null;
    const permitUrl = permit ? await uploadFile(permit, `products/${userId}/permit`) : null;
    const regCertificateUrl = regCertificate ? await uploadFile(regCertificate, `products/${userId}/reg_cert`) : null;

    // console.log('Uploaded URLs:', kraPinUrl, permitUrl, regCertificateUrl);

    // Make Axios POST request
    const response = await Axios.post(
      'https://us-central1-farmfuzion.cloudfunctions.net/add_cooperative2',
      {
        kraPin: kraPinUrl,
        permit: permitUrl,
        regCertificate: regCertificateUrl,
        cooperativeName,
        email,
        password: "1234",
        county,
        selectedCountry,
        district,
        subCounty,
        registrationStatus,
        registrationNumber,
        postalAddress,
        telephone,
        coopType,
        ward,
        specificValueChain,
        chairpersonName,
        chairpersonPhone,
        chairpersonEmail,
        secretaryName,
        secretaryPhone,
        secretaryEmail,
        treasurerName,
        treasurerPhone,
        treasurerEmail,
        bankAndBranch,
        accountNumber,
        accountNumber,
        accountName,
        paybillOrTillNumber,
        paybillOrTillName,
        authorizeSignatoryName,
        authorizeSignatoryName,
        authorizeSignatoryPosition,
        authorizeSignatorySignature,
        secondAuthorizeSignatoryName,
        secondAuthorizeSignatoryPosition,
        secondAuthorizeSignatorySignature,
      }
    )
      .then((response) => {
        setIsloading(false);
        // console.log("Response:", response.data)
        Swal.fire({
          icon: "success",
          title: "Register",
          text: "Cooperative registered successfully!",
        });
        setIsSaving(false)
      })
      .catch((error) => {
        // console.log("Error:", error);
        // console.error("Error:", error);
        toast.fire(error.message)
        Swal.fire({
          icon: "error",
          title: "Failed to register cooperative.",
          text: " Please try again later.",
        });
      });
    setIsSaving(false)
    }
    catch(error){
      toast.fire(error.message)
      Swal.fire({
        icon: "error",
        title: "Failed to register cooperative.",
        text: " Please try again later.",
      });
    }
  }

  // const handleSubmits = (e) => {
  //   setIsSaving(true);
  //   e.preventDefault();
  //   setIsloading(true);

  //   // kyc details

  //   const userId = uuidv4(); // Generate a unique user ID

  //   const kraPinUrl = uploadFile(kraPin, `products/${userId}/kra_pin`);
  //   const permitUrl = uploadFile(permit, `products/${userId}/permit`);
  //   const regCertificateUrl = uploadFile(regCerticate, `products/${userId}/reg_cert`);



  //   Axios.post(
  //     "https://us-central1-farmfuzion.cloudfunctions.net/add_cooperative2",
  //     {
  //       // kyc docs
  //       kraPin: kraPinUrl,
  //       permit: permitUrl,
  //       regCerticate: regCertificateUrl,
  //       cooperativeName,
  //       email,
  //       password: "1234",
  //       county,
  //       selectedCountry,
  //       district,
  //       subCounty,
  //       registrationStatus,
  //       registrationNumber,
  //       postalAddress,
  //       telephone,
  //       coopType,
  //       ward,
  //       specificValueChain,
  //       chairpersonName,
  //       chairpersonPhone,
  //       chairpersonEmail,
  //       secretaryName,
  //       secretaryPhone,
  //       secretaryEmail,
  //       treasurerName,
  //       treasurerPhone,
  //       treasurerEmail,
  //       bankAndBranch,
  //       accountNumber,
  //       accountNumber,
  //       accountName,
  //       paybillOrTillNumber,
  //       paybillOrTillName,
  //       authorizeSignatoryName,
  //       authorizeSignatoryName,
  //       authorizeSignatoryPosition,
  //       authorizeSignatorySignature,
  //       secondAuthorizeSignatoryName,
  //       secondAuthorizeSignatoryPosition,
  //       secondAuthorizeSignatorySignature,
  //     }
  //   )
  //     .then((response) => {
  //       setIsloading(false);
  //       // console.log("Response:", response.data)
  //       Swal.fire({
  //         icon: "success",
  //         title: "Register",
  //         text: "Cooperative registered successfully!",
  //       });
  //       setIsSaving(false)
  //     })
  //     .catch((error) => {
  //       // console.log("Error:", error);
  //       // console.error("Error:", error);
  //       toast.fire(error.message)
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed to register cooperative.",
  //         text: " Please try again later.",
  //       });
  //     });
  //   setIsSaving(false)
  // };
  const handleCountry = (name) => {
    setSelectedCountry(name);


    const selectedCountryData = country.find((county) => county.country === name);


    const data = selectedCountryData ? selectedCountryData.cities : [];

    setFetchedDistrict(data);
  };



  return (
    <div className="bg-white">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all p-5 mr-10 bg-card duration-200 ease-out  ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-4 me-3`}
      >
        <form onSubmit={handleSubmit}>
          <h1 className=" font-abc text-card3 text-xl mb-4">
            Register Cooperative In Bulk
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="csvFile"
            >
              Cooperatives CSV File
            </label>
            <input
              type="file"
              id="csvFile"
              name="csvFile"
              onChange={handleFileChange}
              className="border-gray-300 shadow-sm block w-full sm:text-sm  rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={!file || loading}
            className="bg-[#004953] text-white py-2 px-4 rounded-md bg-card3  disabled:bg-card3disabled:cursor-not-allowed"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
      <div
        className={`flex-grow p-5 transition-all bg-card mx-auto mr-10 duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-4 me-3`}
      >
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-3 md:flex-col">
              <h1 className=" font-abc text-card3 text-xl mb-2">
                Register Cooperative
              </h1>
              {currentStep === 1 && (

                <>
                  <h1 className="mb-14 ms-3 font-abc text-card3 font-semibold">Cooperative Details</h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Cooperative Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setCooperativeName(e.target.value)}
                        value={cooperativeName}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Email</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col md:w-1/2 lg:w-1/2 w-full">
                      <label className="m-2">Country</label>
                      <select
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => handleCountry(e.target.value)}
                        value={selectedCountry}
                      >
                        {country.map((coun, index) => (
                          <option value={coun.country} key={index}>
                            {coun.country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col md:w-1/2 lg:w-1/2 w-full">
                      <label className="m-2">Town</label>
                      <select
                        className="l m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setDistrict(e.target.value)}
                        value={district}
                      >
                        {fetchedDistrict.map((dis, index) => (
                          <option value={dis} key={index}>
                            {dis}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">County</label>
                      <input
                        type="text"
                        className="DD m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setCounty(e.target.value)}
                        value={county}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Sub-county</label>
                      <input
                        type="text"
                        className="l m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setSubCounty(e.target.value)}
                        value={subCounty}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col md:w-1/2 lg:w-1/2 w-full">
                      <label className="m-2">Registration status</label>
                      <select
                        name="registrationStatus"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setRegistrationStatus(e.target.value)}
                        value={registrationStatus}
                      >
                        <option value="Registered">Registered</option>
                        <option value="Not Registered">Not Registered</option>
                      </select>
                    </div>
                    <div className="flex flex-col flex-grow md:w-1/2 lg:w-1/2 w-ful">
                      <label className="m-2">Registration number (if registered)</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        value={registrationNumber}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-4 m-2">
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h1 className="mb-14 ms-3 font-abc text-card3 font-semibold">Cooperative Details</h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Postal address</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setPostalAddress(e.target.value)}
                        value={postalAddress}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Telephone</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setTelephone(e.target.value)}
                        value={telephone}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Cooperative type</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setCoopType(e.target.value)}
                        value={coopType}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Ward</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setWard(e.target.value)}
                        value={ward}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Specific value chain</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setSpecificValueChain(e.target.value)}
                        value={specificValueChain}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mt-10 pb-14 gap-4 m-2">
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h1 className="mb-2 ms-3 font-abc text-card3 font-semibold">Leadership Details</h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Chairperson Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setChairpersonName(e.target.value)}
                        value={chairpersonName}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Chairperson Phone</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setChairpersonPhone(e.target.value)}
                        value={chairpersonPhone}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Chairperson Email</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setChairpersonEmail(e.target.value)}
                        value={chairpersonEmail}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Secretary Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setSecretaryName(e.target.value)}
                        value={secretaryName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Secretary Phone</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setSecretaryPhone(e.target.value)}
                        value={secretaryPhone}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Secretary Email</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setSecretaryEmail(e.target.value)}
                        value={secretaryEmail}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Treasurer Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setTreasurerName(e.target.value)}
                        value={treasurerName}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Treasurer Phone</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setTreasurerPhone(e.target.value)}
                        value={treasurerPhone}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Treasurer Email</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setTreasurerEmail(e.target.value)}
                        value={treasurerEmail}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4 m-1">
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <h1 className=" ms-3 font-abc mb-14 text-card3 font-semibold">Bank Details</h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Bank and Branch</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setBankAndBranch(e.target.value)}
                        value={bankAndBranch}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Account Number</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setAccountNumber(e.target.value)}
                        value={accountNumber}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Account Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setAccountName(e.target.value)}
                        value={accountName}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Paybill or Till Number</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setPaybillOrTillNumber(e.target.value)}
                        value={paybillOrTillNumber}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col flex-grow">
                      <label className="m-2">Paybill or Till Name</label>
                      <input
                        type="text"
                        className="m-2 p-3 border rounded-md border-blue-200"
                        onChange={(e) => setPaybillOrTillName(e.target.value)}
                        value={paybillOrTillName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 pb-14 sm:flex-row justify-between gap-4 m-2">
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <h1 className=" ms-3 font-abc mb-14 text-card3 font-semibold">KYC Documents</h1>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="w-full md:w-1/3">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="kraPin">
                        KRA PIN
                      </label>
                      <input
                        type="file"
                        id="kraPin"
                        onChange={handleFileChanges(setKraPin)}
                        required
                        className="border-gray-300 shadow-sm block w-full sm:text-sm rounded-md"
                      />
                    </div>
                    <div className="w-full md:w-1/3">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="permit">
                        Permit
                      </label>
                      <input
                        type="file"
                        id="permit"
                        onChange={handleFileChanges(setPermit)}
                        required
                        className="border-gray-300 shadow-sm block w-full sm:text-sm rounded-md"
                      />
                    </div>
                    <div className="w-full md:w-1/3">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="regCertificate">
                        Registration Certificate
                      </label>
                      <input
                        type="file"
                        id="regCertificate"
                        onChange={handleFileChanges(setRegCertificate)}
                        required
                        className="border-gray-300 shadow-sm block w-full sm:text-sm rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 pb-14 sm:flex-row justify-between gap-4 m-2">
                    <button
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                    <button
                      disabled={loading}
                      type="button"
                      className="bg-card3 text-white px-6 py-2 rounded-full"
                      onClick={handleSubmit}
                    >
                      {loading ? "Registering Cooperative ..." : "Register Cooperative"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
