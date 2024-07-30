"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CreditScore, Info } from "@mui/icons-material";
import axios from "axios";
import Axios from "axios";
import {
  BarChartOutlined,
  CreditCardOutlined,
  GroupOutlined,
  Money,
  MoneyOffCsred,
  PaidOutlined,
  Security,
  ShoppingBag,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import DataTable from "react-data-table-component";
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import result from "autoprefixer/data/prefixes";
import Button from "@/app/components/Button";
import { FaDatabase } from "react-icons/fa";
import { saveAs } from "file-saver";

import LoanDecline from "@/app/components/LoanDecline";
import LoanApproval from "@/app/components/LoanApproval";

export default function CreateLoan() {
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  const router = useRouter();

  const [activeStep, setActiveStep] = useState("insuaranstatement");
  const [cooperativeId, setCooperativeId] = useState("");
  const [policyName, setPolicyName] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [premiumAmount, setPremiumAmount] = useState();
  const [coverageAmount, setCoverageAmount] = useState();
  const [duration, setDuration] = useState("");
  const [eligibilityCriteria, setEligibilityCriteria] = useState("");
  const [exclusions, setExclusions] = useState("");
  const [benefits, setBenefits] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [policyStatus, setPolicyStatus] = useState("");
  const [claimProcess, setClaimProcess] = useState("");
  const [additionalConsiderations, setAdditionalConsiderations] = useState("");
  const [memberinfo, setMemberInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtered, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [showApproval, setApproval] = useState(false);
  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };
  const downloadCSV = () => {
    // Define column headers
    const headers = [
      "Phone Number",
      "Name",
      "ID Number",
      "Monthly Income",
      "Insurance Category",
      "Employment Status",
      "Coverage Amount",
      "Insurance Status",
    ];

    // Convert filtered data (filter state) to CSV format
    const csvContent = [
      headers.join(","), // Add header row
      ...filter.map(
        (row) =>
          `${row.phoneNumber},${row.name},${row.desiredLoanAmount},${row.employmentStatus},${row.monthlyIncome},${row.employmentStatus},${row.modeOfPayment},${row.loanStatus}`
      ),
    ].join("\n");

    // Create a Blob object for the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Save blob as a file using file-saver library
    saveAs(blob, "Insurance.csv");
  };

  useEffect(() => {
    setCooperativeId(localStorage.getItem("registrationNumber"));
    console.log(localStorage.getItem("registrationNumber"));
  });
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const requestedInsurancecolumn = [
    {
      name: "Member Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Coverage Type",
      selector: (row) => row.coverageType,
    },
    {
      name: "Premium Amount",
      selector: (row) => row.premiumAmount,
    },
    {
      name: "Coverage Amount",
      selector: (row) => row.coverageAmount,
    },
    {
      name: "Policy Name",
      selector: (row) => row.policyName,
    },
    {
      name: "View details",
      cell: (row) => (
        <button
          style={{
            backgroundColor: "#01565b",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
            marginTop: "10px",
            border: "none",
          }}
          onClick={() => handleLoanAproval(row.phoneNumber)}
        >
          View details
        </button>
      ),
    },
  ];

  const [filter, setFilters] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [insurancerequests, setInsurancerequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");
    console.log("Response Reg:", registrationNumber);

    Axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/insurance_requests?registrationNumber=${registrationNumber}`)
      .then((response) => {
        console.log("Response for insurance request:", response.data.payload);
        setInsurancerequests(response.data.payload);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching insurancerequests:", error);
      });
  }, []);

  useEffect(() => {
    const result = insurancerequests.filter((item) => {
      return item.phoneNumber && item.phoneNumber.match(searchs);
    });
    setFilters(result);
    console.log("Result", result);
  }, [searchs, insurancerequests]);

  const tableHeaderStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        fontWeight: "bold",
        fontSize: "14px",
        text: "white",
        font: "abc",
      },
    },
  };

  const handleLoanAproval = (id) => {
    const result = insurancerequests.filter((item) => {
      return item.phoneNumber && item.phoneNumber.match(id);
    });
    if (result.length > 0) {
      setActiveStep("insuaranceinfo");
      setMemberInfo(result[0]);
    } else {
      alert("No details to view");
    }

    console.log("ID", id);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.fullName
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber

    },

    {
      name: "ID Number",
      selector: (row) => row.idNumber
    },
    {
      name: "Monthly Income",
      selector: (row) => row.monthlyIncome
    },
    {
      name: "Insurance Category",
      selector: (row) => row.policyName
    },
    {
      name: "Employment status",

      selector: (row) => row.employmentStatus

    },
    {
      name: "Coverage  Amount",
      selector: (row) => row.coverageAmount
    },
    // {
    //     name: "Insurance status",
    //     selector: (row) => row.loanStatus

    // },
  ];

  console.log("Results Response", memberinfo);

  const handleSubmit = async () => {
    if (!cooperativeId) {
      alert("no  data to  save");
      return;
    } else {
      const data = {
        cooperativeId,
        policyName,
        coverageType,
        premiumAmount,
        coverageAmount,
        duration,
        eligibilityCriteria,
        exclusions,
        benefits,
        termsAndConditions,
        policyStatus,
        claimProcess,
        // additionalConsiderations,
      };

      console.log("my data", data);

      try {
        const response = await axios.post(
          "https://us-central1-farmfuzion.cloudfunctions.net/policies",
          {
            registrationNumber: cooperativeId,
            policyName,
            coverageType,
            premiumAmount,
            coverageAmount,
            duration,
            eligibilityCriteria,
            exclusions,
            benefits,
            termsAndConditions,
            policyStatus,
            claimProcess,
            // additionalConsiderations,
          }
        );
        if (response.data.status === "success") {
          toast.success("Policy added successfully");
          console.log(response.data);
        }
      } catch (error) {
        toast.error(error.message);
        console.error("Error:", error);
      }
    }
  };
  const [showDecline, setShowDecline] = useState(false);

  const showdeclineform = () => {
    setShowDecline(true);
  };

  const closeDeclineForm = () => {
    setShowDecline(false);
  };

  const setShowApproval = () => {
    setApproval(true);
  };

  const closeApproval = () => {
    setApproval(false);
  };

  // conditionly rendering steps
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);

  }, []);

  return (
    <div className=" min-h-screen md:h-[100%] sm:overflow-x-hidden">
      <LoanDecline show={showDecline} onClose={closeDeclineForm} />
      <LoanApproval show={showApproval} onClose={closeApproval} />

      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-4 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
      </div>
      <div
        className={`flex-grow  transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-1 me-3`}
      >
        <div className="flex flex-grow  flex-col  pt-2">
          {/* Stepper Navigation */}
          <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("insuaranstatement")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaranstatement"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Insuarance Statements
              </button>
              <button
                onClick={() => setActiveStep("insuarancerequest")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuarancerequest"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Insuarance Application
              </button>

              <button
                disabled={memberinfo.length == 0}
                onClick={() => setActiveStep("insuaranceinfo")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaranceinfo"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Insuarance Information
              </button>

              <button
                onClick={() => setActiveStep("createinsuarance")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "createinsuarance"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Create Insuarance
              </button>
            </nav>
          </div>

          {/* <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("insuaranstatement")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranstatement" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Insurance Statements
              </button>
              <button
                onClick={() => setActiveStep("insuarancerequest")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuarancerequest" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Insurance Application
              </button>

              <button
                disabled={memberinfo.length === 0}
                onClick={() => setActiveStep("insuaranceinfo")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranceinfo" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-r`}
              >
                Insurance Information
              </button>

              {userRole === 'cooperative' && (
                <button
                  onClick={() => setActiveStep("createinsuarance")}
                  className={`py-2 px-4 border-b-2 ${activeStep === "createinsuarance" ? "border-sky-10" : "border-transparent"
                    } text-textcolor font-bold rounded-l`}
                >
                  Create Insurance
                </button>
              )}
            </nav>
          </div> */}

          {/* Create Loan Form */}
          {activeStep === "insuaranstatement" && (
            <div className="w-full ">
              <div className={`flex-grow mt-1 me-3`}>
                <div className="flex flex-col p-2 ">
                  <div className="flex md:flex-row  lg:flex-row w-full mt-4 gap-12 flex-col">
                    <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full bg-card1">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Insurance created
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-card3">+1</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc">12</p>
                          </div>
                          <div>
                            <FaDatabase className="text-card3 text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full bg-card2">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Insurance claimed
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              +100k
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc">12000</p>
                          </div>
                          <div>
                            <Security className="text-card3 text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full bg-card3">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-white">
                              Total premium
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-white">+1</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc text-white">120k</p>
                          </div>
                          <div>
                            <CreditCardOutlined className="text-white text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shadow-md rounded-md md:w-1/4 lg:w-1/4 w-full bg-card">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Total Beneficiaries
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-card3">+10k</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc">12</p>
                          </div>
                          <div>
                            <GroupOutlined className="text-card1 text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flex-grow mt-1 me-24`}>
                <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
                  <div>
                    <p className="text-2xl font-abc">
                      {" "}
                      Insurance transactiona Data
                    </p>
                  </div>
                  <div>
                    <input
                      placeholder="Search by Phone No ..."
                      style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        // marginBottom: '3px'
                      }}
                      value={searchs}
                      onChange={(e) => setSearchs(e.target.value)}
                    />
                    <button
                      onClick={downloadCSV}
                      className="bg-card3 text-white py-3 rounded-md p-4 ml-6"
                    >
                      Download statement
                    </button>
                  </div>
                </div>
                <div></div>
                <div className=" transition-all  md:pr-5 lg:pr-5 duration-200 ease-out ">
                  {loading ? (
                    <p className="text-xl text-center text-gray-900">
                      Loading...
                    </p>
                  ) : (
                    <>
                      <DataTable
                        customStyles={tableHeaderStyles}
                        columns={columns}
                        data={filter}
                        pagination
                        paginationPerPage={5}
                        fixedHeader
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeStep === "insuarancerequest" && (
            <div className=" mt-0 md:mr-20 md:pr-10 lg:pr-10 w-full">
              <div className=" transition-all duration-200 ease-out ">
                {loading ? (
                  <p className="text-xl p-3 text-center text-gray-900">
                    Loading...
                  </p>
                ) : (
                  <>
                    {/* <div className="flex items-center justify-between px-4 lg:px-8 py-4  "> */}
                    {/* <div className="text-lg font-semibold text-gray-900 font-abc">Loan Requests</div> */}
                    {/* </div> */}
                    <DataTable
                      customStyles={tableHeaderStyles}
                      columns={requestedInsurancecolumn}
                      data={filter}
                      pagination
                      paginationPerPage={10}
                      fixedHeader
                      selectableRowsHighlight
                      highlightOnHover
                      subHeader
                      subHeaderComponent={
                        <input
                          // type='number'
                          placeholder="Search by Phone No ..."
                          style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginBottom: "3px",
                          }}
                          value={searchs}
                          onChange={(e) => setSearchs(e.target.value)}
                        />
                      }
                    />
                  </>
                )}
              </div>
            </div>
          )}
          {activeStep === "createinsuarance" && (
            <div className="flex flex-wrap md:mx-2  justify-center ">
              <div className="w-full md:w-7/12 bg-card text-textcolor font-abc p-4 rounded shadow-lg me-5">
                <div className="flex justify-between mb-4">
                  <div>
                    <h2 className="text-md mb-1 text-[#828282] font-bold">
                      Insuarance Details
                    </h2>
                    <p className="text-xs text-[#828282]">
                      Please Provide the additional information below
                    </p>
                  </div>
                  <div className="me-5">
                    <CreditScore color="success" />
                  </div>
                </div>

                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Coverage Type
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        value={coverageType}
                        onChange={(e) => setCoverageType(e.target.value)}
                        style={styles}
                      >
                        <option value="Crop Insurance">Crop Insurance</option>
                        <option value="Livestock Insurance">
                          Livestock Insurance
                        </option>
                        <option value="Farm Property Insurance">
                          Farm Property Insurance
                        </option>
                        <option value="Farm Liability Insurance">
                          Farm Liability Insurance
                        </option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Policty Name
                      </label>
                      <input
                        type="text"
                        value={policyName}
                        onChange={(e) => setPolicyName(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Premium Amount
                      </label>
                      <input
                        type="text"
                        value={premiumAmount}
                        onChange={(e) => setPremiumAmount(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Coverage Amount
                      </label>
                      <input
                        type="text"
                        value={coverageAmount}
                        onChange={(e) => setCoverageAmount(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Policy Status
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        value={policyStatus}
                        onChange={(e) => setPolicyStatus(e.target.value)}
                        style={styles}
                      >
                        <option>Select Policy Status</option>
                        <option value="Active">Active</option>
                        <option value="Not Active">Not Active</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Benefits
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={benefits}
                        onChange={(e) => setBenefits(e.target.value)}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Eligibility Criteria
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={eligibilityCriteria}
                        onChange={(e) => setEligibilityCriteria(e.target.value)}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Excluisons
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={exclusions}
                        onChange={(e) => setExclusions(e.target.value)}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Terms & Conditions
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={termsAndConditions}
                        onChange={(e) => setTermsAndConditions(e.target.value)}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-4/12 bg-card text-textcolor font-abc p-3 rounded mx-2">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#828282]">
                      Kindly note that these will be displayed to your members
                    </p>
                  </div>
                  <div className="me-5">
                    <Info color="success" />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="block text-sm font-medium text-gray-700">
                    Claim Process
                  </label>
                  <textarea
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    value={claimProcess}
                    onChange={(e) => setClaimProcess(e.target.value)}
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Considerations
                  </label>
                  <textarea
                    value={additionalConsiderations}
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    onChange={(e) =>
                      setAdditionalConsiderations(e.target.value)
                    }
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    disabled={isLoading}
                    className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
                  >
                    {isLoading ? "Creating Insuarance" : "Create Insuarance"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeStep === "insuaranceinfo" && (
            <div className="md:mx-14 flex md:flex-row lg:flex-row flex-grow flex-col gap-6 p-2 w-full">
              <div className="flex-col flex w-full md:w-4/12 lg:w-4/12 bg-card md:mr-10  shadow-md">
                <div className="flex-row flex justify-between px-6 py-4  shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Employee name</p>
                  <p> {memberinfo.fullName}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Address</p>
                  <p>{memberinfo.address}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Phone number</p>
                  <p>{memberinfo.phoneNumber}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Bank account</p>
                  <p>{memberinfo.bankAccountNumber}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Gender</p>
                  <p>{memberinfo.gender}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Marital satatus</p>
                  <p>{memberinfo.maritalStatus}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Education level</p>
                  <p>{memberinfo.educationLevel}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Household members</p>
                  <p>{memberinfo.householdMembers}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-4 shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Employment status</p>
                  <p>{memberinfo.employmentStatus}</p>
                </div>
              </div>
              <div className="flex-col flex w-full md:w-6/12 lg:w-6/12 bg-card  md:ml-10 lg:ml-10 shadow-md">
                <div className="flex flex-col w-full">
                  <div className="w-full shadow-sm p-4 mb-3">
                    <p className="text-abc text-card3 font-semibold ">
                      Insurance Information
                    </p>
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Coverage Type
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.coverageType}
                    />
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Insurance status
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo?.policyStatus}
                    />
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Premium Amount
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.premiumAmount}
                    />
                  </div>
                  <div className="flex flex-row w-full flex-grow mb-1">
                    <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Employment status
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                        value={memberinfo.employmentStatus}
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Coverage Amount
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                        value={memberinfo.coverageAmount}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row lg:flex-row w-full flex-col flex-grow mb-1 justify-between p-2  items-center">
                  <button
                    className={`py-2 px-4 border-b-2  text-card3 font-semibold rounded-l`}
                  >
                    Eligibility
                  </button>
                  <button
                    onClick={showdeclineform}
                    type="submit"
                    className="px-20 py-2 bg-red-600 hover:bg-teal-700 font-bold text-white rounded font-abc mb-3"
                  >
                    Decline Request
                  </button>
                  <button
                    onClick={setShowApproval}
                    type="submit"
                    className="px-20 py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded font-abc mb-3"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
