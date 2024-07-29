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

  const [activeStep, setActiveStep] = useState("loanstatements");
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
  const [userRole,setUserRole] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [uid,setUid] = useState("");
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
    setCooperativeId(window.localStorage.getItem("registrationNumber"));
    setUserRole(window.localStorage.getItem("role"))
    setPhoneNumber(window.localStorage.getItem("phoneNumber"))
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

  // requested loans
  const requestedloanscolumn = [
    {
      name: "Phone No.",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Desired loan Amount",
      selector: (row) => row.desiredLoanAmount,
    },
    {
      name: "Employment status",
      selector: (row) => row.employmentStatus,
    },
    {
      name: "Monthly income",
      selector: (row) => row.monthlyIncome,
    },
    {
      name: "Total yearly income",
      selector: (row) => row.totalYearlyIncome,
    },
    {
      name: "Mode of payment",
      selector: (row) => row.modeOfPayment,
    },
    {
      name: "Loan status",
      selector: (row) => row.loanStatus,
    },
    {
      name: "Loan purpose",
      selector: (row) => row.purposeLoan,
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
      setUid(result[0].uid);
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
  const doughnutRevenueCollectedData = {
    labels: ["Denied", "Approved"],
    datasets: [
      {
        data: [30000, 70000],
        backgroundColor: ["#e2f397", "#5aba8a"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegenRevenueCollected = ({ labels, colors }) => {
    return (
      <div className="flex flex-row gap-2">
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
    labels: ["Denied", "Approved"],
    datasets: [
      {
        data: [30000, 70000],
        backgroundColor: ["#01565b", "#e2f397"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegenRevenueLost = ({ labels, colors }) => {
    return (
      <div className="flex flex-row gap-2">
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
    labels: ["Crop", "Livestock", "Equipment", "Harvest", "Insurance", "Custom"],
    datasets: [
      {
        data: [30000, 70000, 10000, 15000, 12000, 20000],
        backgroundColor: ["#01565b", "#e2f397", "#5aba8a", "#e2f397", "#01565b", "#5aba8a"],
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
  const CustomLegenPopularLivestock = ({ labels, colors }) => {
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

  {/* conditional rendering */ }
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);

  }, []);

  return (
    <div className=" min-h-screen md:h-[100%] overflow-x-hidden">
      <LoanDecline show={showDecline} onClose={closeDeclineForm} />
      <LoanApproval
        show={showApproval}
        onClose={closeApproval}
        role={userRole}
        uid={uid}
        phoneNumber={phoneNumber}
        amount={memberinfo.desiredLoanAmount}
      />
      <EligibilityTerm show={showEligibility} onClose={closeEligibilityForm} />

      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
<<<<<<< HEAD
        className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-4 me-3`}
=======
        className={`transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 md:me-3`}
>>>>>>> c9500436cd415e18568d4ffce30fd15718b6b996
      >
        <div className="mt-2">
          <TopCoop />
        </div>
      </div>
      <div
<<<<<<< HEAD
        className={`flex flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } mt-1 me-3 `}
=======
        className={`flex w-full md:pr-14  transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-1 md:me-3 `}
>>>>>>> c9500436cd415e18568d4ffce30fd15718b6b996
      >
        <div className="flex w-full flex-col pt-2">
          {/* Stepper Navigation */}
<<<<<<< HEAD

          <div className="mb-3">
            <nav className="flex">
=======
          <div className="mb-3 hidden md:flex">
            <nav className="flex ">
>>>>>>> c9500436cd415e18568d4ffce30fd15718b6b996
              <button
                onClick={() => setActiveStep("loanstatements")}
                className={`py-2 px-4 border-b-2 ${activeStep === "loanstatements" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Loan Statements
              </button>
              <button
                onClick={() => setActiveStep("loanrequest")}
                className={`py-2 px-4 border-b-2 ${activeStep === "loanrequest" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Loan requests
              </button>

              <button
                disabled={memberinfo.length === 0}
                onClick={() => setActiveStep("existingLoans")}
                className={`py-2 px-4 border-b-2 ${activeStep === "existingLoans" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-r`}
              >
                Member Info
              </button>

              {userRole !== 'secretary' && userRole !== 'treasurer' && userRole !== 'chairman' && (
                <button
                  onClick={() => setActiveStep("createLoan")}
                  className={`py-2 px-4 border-b-2 ${activeStep === "createLoan" ? "border-sky-10" : "border-transparent"
                    } text-textcolor font-bold rounded-l`}
                >
                  Create Loan
                </button>
              )}
            </nav>
          </div>
          {/* <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("loanstatements")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "loanstatements"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Loan Statements
              </button>
              <button
                onClick={() => setActiveStep("loanrequest")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "loanrequest"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Loan requests
              </button>

              <button
                disabled={memberinfo.length == 0}
                onClick={() => setActiveStep("existingLoans")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "existingLoans"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-r`}
              >
                Member Info
              </button>

              <button
                onClick={() => setActiveStep("createLoan")}
                className={`py-2 px-4 border-b-2 ${
                  activeStep === "createLoan"
                    ? "border-sky-10"
                    : "border-transparent"
                } text-textcolor font-bold rounded-l`}
              >
                Create Loan
              </button>
            </nav>
          </div> */}

          {/* Create Loan Form */}
          {activeStep === "loanstatements" && (
            <div className="mt-10 flex w-full  px-2 md:px-0 flex-col ">
              <div className="flex flex-col w-full md:flex-row md:ml-10">
                <div className="flex flex-col w-full md:w-8/12 md:mr-5 lg:mr-5">
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col w-full md:flex-row ">
                      <div className="shadow-lg md:w-1/4 mb-4 md:mb-0 w-full rounded-md mr-2 bg-card1">
                        <div className="flex flex-row justify-between w-full py-1 px-3">
                          <p className="text-gray-500 text-sm font-bold font-abc">
                            Loan Created
                          </p>
                          <div className="text-gray-500 flex flex-row items-center">
                            <ArrowOutward style={{ color: "gray" }} /> +1
                          </div>
                        </div>
                        <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                          <p className="text-gray-700 text-md font-bold mt-3">
                            12
                          </p>
                          <div className=" flex flex-row item-center">
                            <FaDatabase className="text-card1 text-4xl" />
                          </div>
                        </div>
                      </div>
                      <div className="shadow-lg  rounded-md md:w-1/4 mb-4 md:mb-0 w-full md:mr-2 bg-card2">
                        <div className="flex flex-row justify-between w-full py-1 px-3">
                          <p className="text-white text-sm font-bold font-abc">
                            Amount Disbursed
                          </p>
                          <div className="text-white flex flex-row items-center">
                            -14k
                          </div>
                        </div>
                        <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                          <p className="text-white text-md font-bold mt-3">
                            1.2M
                          </p>
                          <div className="mt-1 flex flex-row item-center">
                            <RedeemOutlined className="text-white text-4xl" />
                          </div>
                        </div>
                      </div>
                      <div className="shadow-lg flex-grow rounded-md md:w-1/4 mb-4 md:mb-0 w-full md:mr-2 bg-card3">
                        <div className="flex flex-row justify-between w-full py-1 px-3">
                          <p className="text-white text-sm font-bold font-abc">
                            Amount Repaid
                          </p>
                          <div className="text-white flex flex-row items-center">
                            <CallReceived /> +8k
                          </div>
                        </div>
                        <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                          <p className="text-white text-md font-bold mt-3">
                            845K
                          </p>
                          <div className="mt-1 flex flex-row item-center">
                            <CreditScore className="text-white text-4xl" />
                          </div>
                        </div>
                      </div>
                      <div className="shadow-lg flex-grow rounded-md md:w-1/4 mb-4 md:mb-0 w-full md:mr-2 bg-card">
                        <div className="flex flex-row justify-between w-full py-1 px-3">
                          <p className="text-gray-500 text-sm font-bold font-abc">
                            Loans Requested
                          </p>
                          <div className="text-gray-500 flex flex-row items-center">
                            <ArrowOutward /> +.12
                          </div>
                        </div>
                        <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                          <p className="text-gray-700 text-md font-bold mt-3">
                            5.1%
                          </p>
                          <div className="mt-1 flex flex-row item-center">
                            <InsertChartTwoTone className="text-card3 text-4xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full shadow mt-14"
                      style={{ height: "550px" }}
                    >
                      <BarCharts />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full px-1 mt-5 md:mt-0 md:px-0 mb-10 md:mb-0 md:w-4/12 md:mr-14">
                  <div className="shadow-md py-1 px-2 bg-card">
                    <p className="font-bold text-gray-500 text-sm">
                      Loan Appovals
                    </p>
                    <div className="flex items-center flex-row mt-1">
                      <div className="w-1/4">
                        <Doughnut
                          data={doughnutRevenueCollectedData}
                          className="mt-10"
                          options={{ plugins: { legend: { display: false } } }}
                        />
                      </div>
                      <div className="flex flex-col ml-10 ">
                        <p className="text-gray-700 text-sm font-abc font-bold">
                          Revenue Collected
                          <span className="text-gray-500 text-sm">
                            {" "}
                            100000KSH
                          </span>
                        </p>
                        <div className="flex flex-row mt-1">
                          <CustomLegenRevenueCollected
                            labels={doughnutRevenueCollectedData.labels}
                            colors={
                              doughnutRevenueCollectedData.datasets[0]
                                .backgroundColor
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-md py-1 px-2 bg-card">
                    <p className="font-bold text-gray-500 text-sm">
                      Loan Appovals
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
                          Revenue Lost
                          <span className="text-gray-500 text-sm">
                            {" "}
                            100000KSH
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
                  <div className="shadow-md py-1 px-2 bg-card">
                    <p className="font-bold text-gray-500 text-sm">
                      Loan Appovals
                    </p>
                    <div className="flex flex-row mt-3 items-center">
                      <div className="w-1/4">
                        <Doughnut
                          data={doughnutPopularLivestockData}
                          className="mt-10"
                          options={{ plugins: { legend: { display: false } } }}
                        />
                      </div>
                      <div className="flex flex-col ml-10 mt-8">
                        <p className="text-gray-700 text-sm font-abc font-bold">
                          Popular Loan{" "}
                          <span className="text-gray-500 text-sm">
                            Livestock Loan
                          </span>
                        </p>
                        <div className="flex flex-row mt-1">
                          <CustomLegenPopularLivestock
                            labels={doughnutPopularLivestockData.labels}
                            colors={
                              doughnutPopularLivestockData.datasets[0]
                                .backgroundColor
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className="px-4 w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                      <Link href="/corporate/loanstatements/">
                        Loan Statements
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeStep === "loanrequest" && (
            <div className=" mt-0 pr-10  mr-20 w-full">
              <div className=" transition-all duration-200 ease-out ">
                {loading ? (
                  <p className="text-xl p-3 text-center text-gray-900">
                    Loading...
                  </p>
                ) : (
                  <>
                    <DataTable
                      customStyles={tableHeaderStyles}
                      columns={requestedloanscolumn}
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
          {activeStep === "createLoan" && (
            <div className="flex flex-wrap md:mx-2  justify-center">
              <div className="w-full md:w-7/12 bg-card  md:mr-5text-textcolor font-abc p-4 rounded shadow-lg me-5">
                <div className="flex justify-between mb-4">
                  <div>
                    <h2 className="text-lg mb-1 text-[#828282] font-bold">
                      Loan Details
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
                        Loan Category
                      </label>
                      <select
                        // value={loanCategory}
                        onChange={(e) => setLoanCategory(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      >
                        <option value="Crop Framing Loan">
                          Crop Framing Loan
                        </option>
                        <option value="Livestock Loan">Livestock Loan</option>
                        <option value="Farm Equipment Loan">
                          Farm Equipment Loan
                        </option>
                        <option value="Post Harvest Loan">
                          Post Harvest Loan
                        </option>
                        <option value="Expansion Loan">Expansion Loan</option>
                        <option value="Consumer Loan">Consumer Loan</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Payment Method
                      </label>
                      <input
                        // value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Minimum Loan Amount
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={minimumloanAmount}
                        onChange={(e) => setMinimumLoanAmount(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Grace Period
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={graceperiod}
                        onChange={(e) => setGracePeriod(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Maximum Loan Amount
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={maximumloanAmount}
                        onChange={(e) => setMaximumLoanAmount(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Special Conditions
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={specialconditions}
                        onChange={(e) => setSpecialCondtions(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Interest Rate
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={interestrate}
                        onChange={(e) => setInterestRate(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Disbursement Period
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={disbursementperiod}
                        onChange={(e) => setDisbursementPeriod(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Loan Term (Months)
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={loanterm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Insurance Requirement
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={insurancerequirement}
                        onChange={(e) =>
                          setInsuaranceRequirement(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Minimum Monthly Payment
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={minimummonthlypayment}
                        onChange={(e) =>
                          setMinimumMonthlyPayment(e.target.value)
                        }
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Repayment Period
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        // value={repaymentperiod}
                        onChange={(e) => setRepaymentPeriod(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-4/12 bg-card text-textcolor font-abc p-3 rounded mx-2 mt-2">
                <div className="flex justify-between mb-6">
                  <div>
                    <h2 className="text-lg mb-1 text-[#828282] font-bold">
                      Terms and Conditions
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
                    // value={eligibility}
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
                    // value={documentation}
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
                    // value={additionalconsiderations}
                    onChange={(e) => setAdditionalConsideration(e.target.value)}
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    disabled={isLoading}
                    className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
                  >
                    {isLoading ? "Creating Loan" : "Create Loan"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeStep === "existingLoans" && (
            <div className="md:mx-14 flex md:flex-row lg:flex-row flex-grow flex-col gap-6 p-2 w-full">
              <div className="flex-col flex w-full md:w-4/12 lg:w-4/12 bg-card md:mr-10  shadow-md">
                <div className="flex-row flex justify-between px-6 py-4  shadow-sm mb-1 text-card3 font-abc font-semibold text-sm">
                  <p>Employee name</p>
                  <p> {memberinfo.employeeName}</p>
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
                  <p>Insurance cover</p>
                  <p>{memberinfo.insuranceCover}</p>
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
                      Loan Information
                    </p>
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Loan Purpose
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.purposeLoan}
                    />
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Loan status
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.loanStatus}
                    />
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Minimum loan Amount
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.monthlyIncome}
                    />
                  </div>
                  <div className="flex flex-col p-2 w-full mb-1 bg-card ">
                    <label className="block text-sm font-medium text-card3 font-abc">
                      Maximum loan amount
                    </label>
                    <input
                      type="text"
                      className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                      value={memberinfo.totalYearlyIncome}
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
                        Desired loan amount
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-md shadow-md focus-none font-abc p-2"
                        value={memberinfo.desiredLoanAmount}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row lg:flex-row w-full flex-col flex-grow mb-1 justify-between p-2  items-center">
                  <button
                    onClick={showEligibilityForm}
                    className={`py-2 px-5 border-b-2   hover:bg-opacity-75 bg-card1 text-card3 font-abc mb-3 rounde`}
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
