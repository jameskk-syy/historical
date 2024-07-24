"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import DataTable from "react-data-table-component";
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import result from "autoprefixer/data/prefixes";
import Button from "@/app/components/Button";
import { Doughnut } from "react-chartjs-2";
import { saveAs } from "file-saver";
import LoanDecline from "@/app/components/LoanDecline";
import LoanApproval from "@/app/components/LoanApproval";
import { FaDatabase } from "react-icons/fa";
import BarCharts from "@/app/components/BarCharts";
import CircularProgressBarApp from "@/app/components/CircularProgressApp";
import EligibilityTerm from "@/app/components/EligibilityTerm";
import Link from "next/link";

const validateLoanData = (loanData) => {
  const errors = {};

  Object.keys(loanData).forEach((key) => {
    if (!loanData[key]) {
      errors[key] = `${key} is required`;
    }
  });

  return errors;
};
export default function CreateLoan() {
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  const router = useRouter();

  const [activeStep, setActiveStep] = useState("Supplierdashboard");
  const [loanCategory, setLoanCategory] = useState("Crop Farming Loan");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [minimumloanAmount, setMinimumLoanAmount] = useState("");
  const [maximumloanAmount, setMaximumLoanAmount] = useState("");
  const [graceperiod, setGracePeriod] = useState("");
  const [specialconditions, setSpecialCondtions] = useState("");
  const [interestrate, setInterestRate] = useState("");
  const [disbursementperiod, setDisbursementPeriod] = useState("");
  const [loanterm, setLoanTerm] = useState("");
  const [insurancerequirement, setInsuaranceRequirement] = useState("");
  const [minimummonthlypayment, setMinimumMonthlyPayment] = useState("");
  const [repaymentperiod, setRepaymentPeriod] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [fetchedLoans, setFetchedLoans] = useState([]);
  const [documentation, setDocumentation] = useState("");
  const [registrationNumber, setCooperativeId] = useState();
  const [memberinfo, setMemberInfo] = useState([]);
  const [additionalconsiderations, setAdditionalConsideration] = useState("");
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
  const columns = [
    {
      name: "Loan Category",
      selector: (row) => row.loanCategory,
    },
    {
      name: "Loan Term",
      selector: (row) => row.loanterm,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
    },
  ];
  useEffect(() => {
    setCooperativeId(localStorage.getItem("registrationNumber"));
    // console.log(localStorage.getItem("registrationNumber"));
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const loanData = {
      loanCategory,
      registrationNumber,
      paymentMethod,
      minimumloanAmount,
      maximumloanAmount,
      graceperiod,
      specialconditions,
      interestrate,
      disbursementperiod,
      loanterm,
      insurancerequirement,
      minimummonthlypayment,
      repaymentperiod,
      eligibility,
      documentation,
      additionalconsiderations,
    };
    try {
      if (loanterm !== "" && loanCategory !== "") {
        const response = await axios.post(
          "https://us-central1-farmfuzion.cloudfunctions.net/loan_products",
          JSON.stringify(loanData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status == "success") {
          toast.success("Loan added successfully");
          setIsLoading(false);
          router.push("/cooperate/CDashboard/");
        }
      } else {
        toast.error("All fields  are required");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
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

  // requested loans
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

  const [filter, setFilters] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [loanrequests, setloanrequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const registrationNumber =
      window.localStorage.getItem("registrationNumber");
    console.log("Response Reg:", registrationNumber);

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/getrequestedloans-coop",
      {
        registrationNumber: registrationNumber,
      }
    )
      .then((response) => {
        console.log("Response:", response.data.loan_requests);
        setloanrequests(response.data.loan_requests);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loanrequests:", error);
      });
  }, []);

  useEffect(() => {
    const result = loanrequests.filter((item) => {
      // return item.bankAccountNumber.match(searchs);
      return item.phoneNumber && item.phoneNumber.match(searchs);
    });
    setFilters(result);
    console.log("Result", result);
  }, [searchs, loanrequests]);

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

  // loan approval/decline
  const handleLoanAproval = (id) => {
    const result = loanrequests.filter((item) => {
      return item.phoneNumber && item.phoneNumber.match(id);
    });
    if (result.length > 0) {
      setActiveStep("existingLoans");
      setMemberInfo(result[0]);
    } else {
      alert("No details to view");
    }

    console.log("ID", id);
  };

  console.log("Results Response", memberinfo);

  // loan decline modal
  const [showDecline, setShowDecline] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);

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
  const showEligibilityForm = () => {
    // alert("clicked")
    setShowEligibility(true);
  };
  const closeEligibilityForm = () => {
    setShowEligibility(false);
  };
  const doughnutProduct = {
    labels: ["Supplier 5", "Supplier 2"],
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
  const doughnutRevenueLostData = {
    labels: ["Apple", "Farm Gear", "Potatoes"],
    datasets: [
      {
        data: [30, 10,20],
        backgroundColor: ["#01565b", "#e2f397","#5aba8a"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegenRevenueLost = ({ labels, colors }) => {
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
  const doughnutPopularLivestockData = {
    labels: ["Crop", "Livestock","Equipment","Harvest","Insurance","Custom"],
    datasets: [
      {
        data: [30000, 70000,10000,15000,12000,20000],
        backgroundColor: ["#01565b", "#e2f397","#5aba8a","#e2f397","#01565b","#5aba8a"],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };
  const  CustomLegenPopularLivestock = ({ labels, colors }) => {
    return (
      <div className="grid grid-cols-2 gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center px-4 gap-2 mb-4">
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
  
  return (
    <div className=" min-h-screen md:h-[100%]  sm:overflow-x-hidden">
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
      </div>
      <div
        className={`flex flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-1 me-3 `}
      >
        <div className="flex flex-grow  flex-col pt-2">
          {/* Stepper Navigation */}
          <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("Supplierdashboard")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep ==="Supplierdashboard"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Supplier Dashboard
              </button>
              <button
                onClick={() => setActiveStep("marketsupply")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "marketsupply"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Market Supply
              </button>

              <button
                onClick={() => setActiveStep("insurancesupply")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insurancesupply"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Insurance Supply
              </button>
              <button
                onClick={() => setActiveStep("agronomyvet")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "agronomyvet"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Agronomy & Veterinary Supply
              </button>
              <button
                onClick={() => setActiveStep("insuranceprovider")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "insuranceprovider"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
              Insurance Provider
              </button>

              <button
                onClick={() => setActiveStep("createprovider")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "createprovider"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Create Service Provider
              </button>
            </nav>
          </div>

          {/* Create Loan Form */}
          {activeStep === "Supplierdashboard" && (
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
                          <p className="text-white text-md font-bold mt-3">
                            
                          </p>
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
                            colors={
                              doughnutProduct.datasets[0]
                                .backgroundColor
                            }
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
                          data={doughnutRevenueLostData}
                          className="mt-10"
                          options={{ plugins: { legend: { display: false } } }}
                        />
                      </div>
                      <div className="flex flex-col ml-10 mt-8">
                        <p className="text-gray-700 text-sm font-abc font-bold">
                        most popular product
                          <span className="text-gray-500 text-sm">
                            {" "}
                            Apple
                          </span>
                        </p>
                        <div className="flex flex-row mt-1">
                          <CustomLegenRevenueLost
                            labels={doughnutRevenueLostData.labels}
                            colors={
                              doughnutRevenueLostData.datasets[0]
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
                      Suppliers Data
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
                        columns={requestedloanscolumn }
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
          {activeStep === "marketsupply" && (
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
                        <p className="text-white text-md font-bold mt-3">
                          
                        </p>
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
                          colors={
                            doughnutProduct.datasets[0]
                              .backgroundColor
                          }
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
                        data={doughnutRevenueLostData}
                        className="mt-10"
                        options={{ plugins: { legend: { display: false } } }}
                      />
                    </div>
                    <div className="flex flex-col ml-10 mt-8">
                      <p className="text-gray-700 text-sm font-abc font-bold">
                      most popular product
                        <span className="text-gray-500 text-sm">
                          {" "}
                          Apple
                        </span>
                      </p>
                      <div className="flex flex-row mt-1">
                        <CustomLegenRevenueLost
                          labels={doughnutRevenueLostData.labels}
                          colors={
                            doughnutRevenueLostData.datasets[0]
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
                    Market Supply Data
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
                      columns={requestedloanscolumn }
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
          {activeStep === "insurancesupply" && (
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
                      <p className="text-white text-md font-bold mt-3">
                        
                      </p>
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
                        colors={
                          doughnutProduct.datasets[0]
                            .backgroundColor
                        }
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
                      data={doughnutRevenueLostData}
                      className="mt-10"
                      options={{ plugins: { legend: { display: false } } }}
                    />
                  </div>
                  <div className="flex flex-col ml-10 mt-8">
                    <p className="text-gray-700 text-sm font-abc font-bold">
                    most popular product
                      <span className="text-gray-500 text-sm">
                        {" "}
                        Apple
                      </span>
                    </p>
                    <div className="flex flex-row mt-1">
                      <CustomLegenRevenueLost
                        labels={doughnutRevenueLostData.labels}
                        colors={
                          doughnutRevenueLostData.datasets[0]
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
                    columns={requestedloanscolumn }
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

          {activeStep === "agronomyvet" && (
          <>Agrovet</>
          )}
          {activeStep === "insuranceprovider" && (
            <></>
          )}
          {activeStep === "createprovider" && (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
