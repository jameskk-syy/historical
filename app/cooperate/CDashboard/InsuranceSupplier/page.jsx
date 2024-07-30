"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import DataTable from "react-data-table-component";
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import result from "autoprefixer/data/prefixes";
import Button from "@/app/components/Button";
import { FaDatabase } from "react-icons/fa";
import { saveAs } from "file-saver";

import LoanDecline from "@/app/components/LoanDecline";
import LoanApproval from "@/app/components/LoanApproval";
import {
  ArrowOutward,
  CallReceived,
  CreditScore,
  Info,
  InsertChartTwoTone,
  RedeemOutlined,
} from "@mui/icons-material";
import axios from "axios";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Doughnut } from "react-chartjs-2";
import BarCharts from "@/app/components/BarCharts";
import CircularProgressBarApp from "@/app/components/CircularProgressApp";
import EligibilityTerm from "@/app/components/EligibilityTerm";
import Link from "next/link";
import { Checkbox } from "@mui/material";
import { BiBriefcase } from "react-icons/bi";
import {
  ArrowDownward,
  Bookmarks,
  ContactPage,
  ContactPhone,
  Description,
  KeyboardArrowDown,
  LocationCity,
  LocationOn,
} from "@mui/icons-material";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function CreateLoan() {
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  const router = useRouter();

  const [activeStep, setActiveStep] = useState("insuaransupply");
  const [documentation, setDocumentation] = useState("");
  const [registrationNumber, setCooperativeId] = useState();
  const [providerName, setProviderName] = useState("");
  const [processingDuration, setProcessingDuration] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [claimSettelmentRatio, setClaimSettelmentRatio] = useState("");
  const [insuranceOffered, setInsuranceOffered] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");
  const [email, setEmail] = useState("");
  const [coverageDetails, setCoverageDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [claimDetails, setClaimDetails] = useState("");
  const [minimumPremiumAmount, setMinimumPremiumAmount] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [additionalConsiderations, setAdditionalConsiderations] = useState("");
  const [memberinfo, setMemberInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtered, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchedProviders, setFetchedProviders] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


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
  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");
    async function fetchedServiceProviders() {
      const response = await axios.get(
        `https://us-central1-farmfuzion.cloudfunctions.net/service_providers?registrationNumber=${registrationNumber}`
      );
      setFetchedProviders(response.data.payload);
    }
    fetchedServiceProviders();
  });
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
      setActiveStep("insuaranceclaims");
      setMemberInfo(result[0]);
    } else {
      alert("No details to view");
    }

    console.log("ID", id);
  };

  const requestedloanscolumn = [
    {
      name: "Client Name.",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Request ID",
      selector: (row) => row.desiredLoanAmount,
    },
    {
      name: "Service Category",
      selector: (row) => row.employmentStatus,
    },
    {
      name: "Service Date",
      selector: (row) => row.monthlyIncome,
    },
    {
      name: "Service Loacation",
      selector: (row) => row.totalYearlyIncome,
    },
    {
      name: "Service Price",
      selector: (row) => row.modeOfPayment,
    },
    {
      name: "Service Provider",
      selector: (row) => row.loanStatus,
    },
    {
      name: "Service Stattus",
      selector: (row) => row.purposeLoan,
    },

    // {
    //   name: "View details",
    //   cell: (row) => (
    //     <button
    //       style={{
    //         backgroundColor: "#01565b",
    //         color: "white",
    //         padding: "10px",
    //         borderRadius: "5px",
    //         marginBottom: "10px",
    //         marginTop: "10px",
    //         border: "none",
    //       }}
    //       onClick={() => handleLoanAproval(row.phoneNumber)}
    //     >
    //       View details
    //     </button>
    //   ),
    // },
  ];


  // conditionly rendering steps
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);

  }, []);
  const doughnutProduct = {
    labels: ["Resolved", "Unresolved"],
    datasets: [
      {
        data: [10, 5],
        backgroundColor: ["#e2f397", "#5aba8a"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegendProduct = ({ labels, colors }) => {
    return (
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };
  const doughnutMostClaimData = {
    labels: ["Livestock Insurance", "Crop Insurance", "Farm Gear Insurance"],
    datasets: [
      {
        data: [30, 10, 20],
        backgroundColor: ["#01565b", "#e2f397", "#5aba8a"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegendClaimData = ({ labels, colors }) => {
    return (
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };
  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const providerData = {
      registrationNumber,
      providerName,
      processingDuration,
      contactNumber,
      claimSettelmentRatio,
      insuranceOffered,
      companyLocation,
      premiumAmount,
      email,
      coverageDetails,
      paymentMethod,
      claimDetails,
      minimumPremiumAmount,
      eligibility,
      documentation,
      additionalConsiderations,
    };
    try {
      const response = await axios.post(
        "https://us-central1-farmfuzion.cloudfunctions.net/service_providers",
        JSON.stringify(providerData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status == "success") {
        toast.success("Service provide added successfully");
        setIsLoading(false);
        router.push("/cooperate/CDashboard/");
      }
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className=" min-h-screen md:h-[100%] sm:overflow-x-hidden">
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
                onClick={() => setActiveStep("insuaransupply")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaransupply"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Insuarance Supply
              </button>
              <button
                onClick={() => setActiveStep("insuaranceprovider")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaranceprovider"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Insuarance Provider
              </button>

              <button
                onClick={() => setActiveStep("insuaranceclaims")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaranceclaims"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Insuarance Claims
              </button>
              <button
                onClick={() => setActiveStep("insuaranceinfo")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuaranceinfo"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Claims Info
              </button>

              <button
                onClick={() => setActiveStep("createinsuaranceprovider")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "createinsuaranceprovider"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Create  Provider
              </button>
            </nav>
          </div>

          {/* <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("insuaransupply")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaransupply" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Insurance Statements
              </button>
              <button
                onClick={() => setActiveStep("insuaranceprovider")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranceprovider" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Insurance Application
              </button>

              <button
                disabled={memberinfo.length === 0}
                onClick={() => setActiveStep("insuaranceclaims")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranceclaims" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-r`}
              >
                Insurance Information
              </button>

              {userRole === 'cooperative' && (
                <button
                  onClick={() => setActiveStep("createinsuaranceprovider")}
                  className={`py-2 px-4 border-b-2 ${activeStep === "createinsuaranceprovider" ? "border-sky-10" : "border-transparent"
                    } text-textcolor font-bold rounded-l`}
                >
                  Create Insurance
                </button>
              )}
            </nav>
          </div> */}

          {/* Create Loan Form */}
          {activeStep === "insuaransupply" && (
            <div className="mt-4 flex flex-col w-full">
            <div className="flex flex-row ml-10 w-full">
              <div className="flex flex-col w-8/12 md:mr-5 lg:mr-5">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="shadow-lg w-1/4 rounded-md mr-2 bg-card1">
                      <div className="flex flex-row justify-between w-full py-1 px-3">
                        <p className="text-gray-500 text-sm font-bold font-abc">
                          Total Suppliers
                        </p>
                      </div>
                      <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                        <p className="text-gray-700 text-md font-bold mt-3">
                          89
                        </p>
                        <div className=" flex flex-row item-center">
                          <FaDatabase className="text-black-500 text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card2">
                      <div className="flex flex-row justify-between w-full py-1 px-3">
                        <p className="text-white text-sm font-bold font-abc">
                          Total Orders
                        </p>
                        <div className="text-white flex flex-row items-center">
                          -12k
                        </div>
                      </div>
       
                      <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                        <p className="text-white text-md font-bold mt-3">
                          12
                        </p>
                        <div className="mt-1 flex flex-row item-center">
                          <RedeemOutlined className="text-white text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card3">
                      <div className="flex flex-row justify-between w-full py-1 px-3">
                        <p className="text-white text-sm font-bold font-abc">
                          Total Expenditure
                        </p>
                        <div className="text-white flex flex-row items-center">
                          <CallReceived /> +8k
                        </div>
                      </div>
       
                      <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                        <p className="text-white text-md font-bold mt-3"></p>
                        <div className="mt-1 flex flex-row item-center">
                          <CreditScore className="text-white text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card">
                      <div className="flex flex-row justify-between w-full py-1 px-3">
                        <p className="text-gray-500 text-sm font-bold font-abc">
                          Low In Stock
                        </p>
                        <div className="text-gray-500 flex flex-row items-center">
                          +1
                        </div>
                      </div>
       
                      <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                        <p className="text-gray-700 text-md font-bold mt-3">
                          Apples
                        </p>
                        <div className="mt-1 flex flex-row item-center">
                          <InsertChartTwoTone className="text-card2 text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full shadow mt-14"
                    style={{ height: "300px" }}
                  >
                    <BarCharts />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-4/12 mr-14">
                <div className="shadow-md py-1 px-2 bg-card">
                  <p className="font-bold text-gray-500 text-sm">
                    Product Service Provider
                  </p>
                  <div className="flex items-center flex-row mt-1">
                    <div className="w-1/4">
                      <Doughnut
                        data={doughnutProduct}
                        className="mt-10"
                        options={{ plugins: { legend: { display: false } } }}
                      />
                    </div>
                    <div className="flex flex-col ml-10 ">
                      <p className="text-gray-700 text-sm font-abc font-bold">
                        mostrequested service provider
                        <span className="text-gray-500 text-sm">
                          {" "}
                          supplier 5
                        </span>
                      </p>
                      <div className="flex flex-row mt-1">
                        <CustomLegendProduct
                          labels={doughnutProduct.labels}
                          colors={doughnutProduct.datasets[0].backgroundColor}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-md py-1 px-2 bg-card">
                  <p className="font-bold text-gray-500 text-sm">
                    Product Distribution
                  </p>
                  <div className="flex flex-row mt-3 items-center">
                    <div className="w-1/4">
                      <Doughnut
                        data={doughnutMostClaimData}
                        className="mt-10"
                        options={{ plugins: { legend: { display: false } } }}
                      />
                    </div>
                    <div className="flex flex-col ml-10 mt-8">
                      <p className="text-gray-700 text-sm font-abc font-bold">
                        most popular product
                        <span className="text-gray-500 text-sm"> Apple</span>
                      </p>
                      <div className="flex flex-row mt-1">
                        <CustomLegendClaimData
                          labels={doughnutMostClaimData.labels}
                          colors={
                            doughnutMostClaimData.datasets[0]
                              .backgroundColor
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-grow mt-1 me-24`}>
              <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
                <div>
                  <p className="text-lg font-semibold text-card3 font-abc">
                    {" "}
                    Insurance Supply Data
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
                      columns={requestedloanscolumn}
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
          {activeStep === "insuaranceprovider" && (
             <div className="mt-4 flex flex-col w-full ">
             <p className="p-2">InsuranceProviders</p>
              {fetchedProviders.map((provider,index) => (
                 <div key={index} className="flex flex-col items-center gap-2 p-10 shadow-md rounded-md w-full md:mr-24">
                 <div className="flex md:flex-row lg:flex-row justify-start items-start md:items-center gap-2 w-full md:justify-between flex-col">
                     <div className="flex flex-row s items-center">
                         <Checkbox checked={true} className="text-2xl text-card3" />
                         <p className="text-xl text-card3">Active</p>
                     </div>
                     <div className="flex flex-row items-center">
                         <BiBriefcase className="text-3xl text-card3 mr-2" />
                         <p className="text-xl text-card3">Provider Name : {provider.providerName}</p>
                     </div>
                     
                     <div className="flex flex-row items-center">
                         <Description className="text-2xl text-card3 mr-2" />
                         <p className="text-xl text-card3">Insurance Offered: {provider.insuranceOffered}</p>
                     </div>
                     
                     
                     <div className="flex flex-row items-center">
                         <ContactPhone className="text-2xl text-card3 mr-2" />
                         <p className="text-xl text-card3">Provider Contact : {provider.contactNumber}</p>
                     </div>
                     
                     <KeyboardArrowDown className="text-5xl text-card3 cursor-pointer" onClick={handleToggle} />
                 </div>
                 {isExpanded && (
                     <div className="flex flex-col items-start w-full mt-4">
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Provider Location:</p>
                             <p className="text-lg text-card3">{provider.companyLocation}</p>
                         </div>
                         
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Premium Amount:</p>
                             <p className="text-lg text-card3">{provider.premiumAmount}</p>
                         </div>
                         
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Payment Method : </p>
                             <p className="text-lg text-card3">{provider.paymentMethod}</p>
                         </div>
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Claim Details : </p>
                             <p className="text-lg text-card3">{provider.claimDetails}</p>
                         </div>
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Minimum Premium Amount : </p>
                             <p className="text-lg text-card3">{provider.minimumPremiumAmount}</p>
                         </div>
                         <div className="flex flex-row items-center mb-2">
                             <p className="text-lg text-card3 mr-2">Coverage Details : </p>
                             <p className="text-lg text-card3">{provider.coverageDetails}</p>
                         </div>
                         
                     </div>
                 )}
                </div>
              ))}
           </div>
          )}
          {activeStep === "createinsuaranceprovider" && (
             <div className="flex flex-wrap md:mx-2  justify-center">
             <div className="w-full md:w-7/12 bg-card  md:mr-5text-textcolor font-abc p-4 rounded shadow-lg me-5">
               <div className="flex justify-between mb-4">
                 <div>
                   <h2 className="text-lg mb-1 text-[#828282] font-bold">
                     Create Provider
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
                       provider Name
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={providerName}
                       onChange={(e) => setProviderName(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Processing Duration
                     </label>
                     <input
                       value={processingDuration}
                       onChange={(e) => setProcessingDuration(e.target.value)}
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                     />
                   </div>
                 </div>
                 <div className="flex flex-wrap -mx-3 mb-4">
                   <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                     <label className="block text-sm font-medium text-gray-700">
                       Contact Number
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={contactNumber}
                       onChange={(e) => setContactNumber(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Claim Settlement Ratio
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={claimSettelmentRatio}
                       onChange={(e) =>
                         setClaimSettelmentRatio(e.target.value)
                       }
                     />
                   </div>
                 </div>
                 <div className="flex flex-wrap -mx-3 mb-4">
                   <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                     <label className="block text-sm font-medium text-gray-700">
                       Insurance offered
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={insuranceOffered}
                       onChange={(e) => setInsuranceOffered(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Company Location
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={companyLocation}
                       onChange={(e) => setCompanyLocation(e.target.value)}
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
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={premiumAmount}
                       onChange={(e) => setPremiumAmount(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Email
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                   </div>
                 </div>
                 <div className="flex flex-wrap -mx-3 mb-4">
                   <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                     <label className="block text-sm font-medium text-gray-700">
                       Coverage Details
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={coverageDetails}
                       onChange={(e) => setCoverageDetails(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Minimum Premium Amount
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={minimumPremiumAmount}
                       onChange={(e) =>
                         setMinimumPremiumAmount(e.target.value)
                       }
                     />
                   </div>
                 </div>
                 <div className="flex flex-wrap -mx-3 mb-4">
                   <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                     <label className="block text-sm font-medium text-gray-700">
                       Claim Details
                     </label>
                     <input
                       type="text"
                       className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                       style={styles}
                       value={claimDetails}
                       onChange={(e) => setClaimDetails(e.target.value)}
                     />
                   </div>
                   <div className="w-full md:w-1/2 px-3">
                     <label className="block text-sm font-medium text-gray-700">
                       Payment Method
                     </label>
                     <select
                       name="modeOfPayment"
                       className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                       onChange={(e) => setPaymentMethod(e.target.value)}
                       value={paymentMethod}
                     >
                       <option value="" disabled>
                         Mode of payment
                       </option>
                       <option value="bank">BANK</option>
                       <option value="mpesa">MPESA</option>
                       <option value="airtel">AIRTEL</option>
                       <option value="momo">MOMO</option>
                     </select>
                   </div>
                 </div>
               </form>
             </div>
             <div className="w-full md:w-4/12 bg-card text-textcolor font-abc p-3 rounded mx-2 mt-2">
               <div className="flex justify-between mb-6">
                 <div>
                   <h2 className="text-lg mb-1 text-[#828282] font-bold">
                     {/* Terms and Conditions */}
                   </h2>
                   <p className="text-xs text-[#828282]">
                     Kindly note that these will be displayed to your members
                   </p>
                 </div>
                 <div className="me-5">
                   <Info color="success" />
                 </div>
               </div>
               <div className="mt-2">
                 <label className="block text-sm font-medium text-gray-700">
                   Eligibility
                 </label>
                 <textarea
                   className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                   style={styles}
                   rows="5"
                   required
                   value={eligibility}
                   onChange={(e) => setEligibility(e.target.value)}
                 ></textarea>
               </div>
               <div className="mt-4">
                 <label className="block text-sm font-medium text-gray-700">
                   Documentation
                 </label>
                 <textarea
                   className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                   style={styles}
                   rows="5"
                   value={documentation}
                   onChange={(e) => setDocumentation(e.target.value)}
                 ></textarea>
               </div>
               <div className="mt-4">
                 <label className="block text-sm font-medium text-gray-700">
                   Additional Considerations
                 </label>
                 <textarea
                   className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                   style={styles}
                   rows="5"
                   value={additionalConsiderations}
                   onChange={(e) =>
                     setAdditionalConsiderations(e.target.value)
                   }
                 ></textarea>
               </div>
               <div className="mt-6">
                 <button
                   type="submit"
                   onClick={(e) => handleSubmit(e)}
                   disabled={isLoading}
                   className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
                 >
                   {isLoading ? "Creating provider" : "Create Provider"}
                 </button>
               </div>
             </div>
           </div>
          )}

          {activeStep === "insuaranceclaims" && (
             <div className="mt-4 flex flex-col w-full">
             <div className="flex flex-row ml-10 w-full">
               <div className="flex flex-col w-8/12 md:mr-5 lg:mr-5">
                 <div className="flex flex-col">
                   <div className="flex flex-row">
                     <div className="shadow-lg w-1/4 rounded-md mr-2 bg-card1">
                       <div className="flex flex-row justify-between w-full py-1 px-3">
                         <p className="text-gray-500 text-sm font-bold font-abc">
                           Total Claims
                         </p>
                       </div>
                       <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                         <p className="text-gray-700 text-md font-bold mt-3">
                           89
                         </p>
                         <div className=" flex flex-row item-center">
                           <FaDatabase className="text-black-500 text-4xl" />
                         </div>
                       </div>
                     </div>
                     <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card2">
                       <div className="flex flex-row justify-between w-full py-1 px-3">
                         <p className="text-white text-sm font-bold font-abc">
                           Resolved
                         </p>
                         <div className="text-white flex flex-row items-center">
                           -12k
                         </div>
                       </div>
        
                       <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                         <p className="text-white text-md font-bold mt-3">
                           12
                         </p>
                         <div className="mt-1 flex flex-row item-center">
                           <RedeemOutlined className="text-white text-4xl" />
                         </div>
                       </div>
                     </div>
                     <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card3">
                       <div className="flex flex-row justify-between w-full py-1 px-3">
                         <p className="text-white text-sm font-bold font-abc">
                           Pending
                         </p>
                         <div className="text-white flex flex-row items-center">
                           <CallReceived /> +8k
                         </div>
                       </div>
        
                       <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                         <p className="text-white text-md font-bold mt-3"></p>
                         <div className="mt-1 flex flex-row item-center">
                           <CreditScore className="text-white text-4xl" />
                         </div>
                       </div>
                     </div>
                     <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card">
                       <div className="flex flex-row justify-between w-full py-1 px-3">
                         <p className="text-gray-500 text-sm font-bold font-abc">
                           Claim Expenditure
                         </p>
                         <div className="text-gray-500 flex flex-row items-center">
                           +1
                         </div>
                       </div>
        
                       <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                         <p className="text-gray-700 text-md font-bold mt-3">
                           100K
                         </p>
                         <div className="mt-1 flex flex-row item-center">
                           <InsertChartTwoTone className="text-card2 text-4xl" />
                         </div>
                       </div>
                     </div>
                   </div>
                   <div
                     className="w-full shadow mt-14"
                     style={{ height: "300px" }}
                   >
                     <BarCharts />
                   </div>
                 </div>
               </div>
               <div className="flex flex-col w-4/12 mr-14">
                 <div className="shadow-md py-1 px-2 bg-card">
                   <p className="font-bold text-gray-500 text-sm">
                     Claim Status
                   </p>
                   <div className="flex items-center flex-row mt-1">
                     <div className="w-1/4">
                       <Doughnut
                         data={doughnutProduct}
                         className="mt-10"
                         options={{ plugins: { legend: { display: false } } }}
                       />
                     </div>
                     <div className="flex flex-col ml-10 ">
                       <div className="flex flex-row mt-1">
                         <CustomLegendProduct
                           labels={doughnutProduct.labels}
                           colors={doughnutProduct.datasets[0].backgroundColor}
                         />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="shadow-md py-1 px-2 bg-card">
                   <p className="font-bold text-gray-500 text-sm">
                     Product Distribution
                   </p>
                   <div className="flex flex-row mt-3 items-center">
                     <div className="w-1/4">
                       <Doughnut
                         data={doughnutMostClaimData}
                         className="mt-10"
                         options={{ plugins: { legend: { display: false } } }}
                       />
                     </div>
                     <div className="flex flex-col ml-10 mt-8">
                       <p className="text-gray-700 text-sm font-abc font-bold">
                         most popular insurance service
                         <span className="text-gray-500 text-sm"> Livestock Insurance</span>
                       </p>
                       <div className="flex flex-row mt-1">
                         <CustomLegendClaimData
                           labels={doughnutMostClaimData.labels}
                           colors={
                             doughnutMostClaimData.datasets[0]
                               .backgroundColor
                           }
                         />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className={`flex-grow mt-1 me-24`}>
               <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
                 <div>
                   <p className="text-lg font-semibold text-card3 font-abc">
                     {" "}
                     Claim Data
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
                       columns={requestedloanscolumn}
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
         {activeStep === "insuaranceinfo" && (
          <div className="md:mx-14 flex md:flex-row lg:flex-row flex-grow flex-col gap-6 p-2 w-full">
          <div className="flex-col flex w-full md:w-4/12 lg:w-4/12 bg-card md:mr-10  shadow-md">
            <div className="flex-col flex justify-center items-center px-6 py-4   mb-1 text-card3 font-abc  ">
              <Image
                src="/profile.png"
                width={170}
                height={70}
                alt="profile"
              />
              {/* <p>Employee name</p> */}
              <p className="text-2xl font-abc"> {memberinfo.fullName}</p>
              <p className="text-xl font-abc"> {memberinfo.phoneNumber}</p>
            </div>
            <div className="flex-row flex justify-between px-6 py-1 text-card3 font-abc font-semibold text-3xl">
              <p>User Details</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">Address:</p>
              <p>{memberinfo.address}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Phone number:
              </p>
              <p>{memberinfo.phoneNumber}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Bank account:
              </p>
              <p>{memberinfo.bankAccountNumber}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">Gender:</p>
              <p>{memberinfo.gender}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Marital satatus:
              </p>
              <p>{memberinfo.maritalStatus}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Education level:
              </p>
              <p>{memberinfo.educationLevel}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Household members:
              </p>
              <p>{memberinfo.householdMembers}</p>
            </div>
            <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
              <p className="text-xl font-abc font-semibold">
                Employment status:
              </p>
              <p>{memberinfo.employmentStatus}</p>
            </div>
          </div>
          <div className="flex-col flex w-full md:w-6/12 lg:w-6/12 bg-card  md:ml-10 lg:ml-10 shadow-md">
            <div className="flex flex-col w-full">
              <p>Request Details</p>
              <div className="flex flex-row w-full flex-grow mb-1">
                <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Employment status
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.employmentStatus}
                  />
                </div>
                <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Type of pest
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.typeOfAttack}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full flex-grow mb-1">
                <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Service
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.serviceName}
                  />
                </div>
                <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Service Frequency
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.serviceFrequency}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full flex-grow mb-1">
                <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Date & Time requested
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.dateAndTimeRequested}
                  />
                </div>
                <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo?.fullName}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full flex-grow mb-1">
                <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Farm Location
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.farmLocation}
                  />
                </div>
                <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Farm Size (Ha)
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.farmSize}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full flex-grow mb-1">
                <div className="flex flex-col p-2  mb-3 bg-card w-1/2 ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Crop Affected
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.cropAffected}
                  />
                </div>
                <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                  <label className="block text-sm font-medium text-card3 font-abc">
                    Livestock affceted
                  </label>
                  <input
                    type="text"
                    className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                    value={memberinfo.livestockAffected}
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row lg:flex-row w-full flex-col flex-grow mb-1 justify-between p-2  items-center">
              {/* <button
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
              </button> */}
              {/* <button
                onClick={setShowApproval}
                type="submit"
                className="px-20 py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded font-abc mb-3"
              >
                Approve
              </button> */}
            </div>
          </div>
        </div>
         )}
        </div>
      </div>
    </div>
  );
}
