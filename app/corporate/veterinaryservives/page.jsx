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
import { Doughnut } from "react-chartjs-2";
import BarCharts from "@/app/components/BarCharts";
import CircularProgressBarApp from "@/app/components/CircularProgressApp";
import LoanDecline from "@/app/components/LoanDecline";
import LoanApproval from "@/app/components/LoanApproval";
import Link from "next/link";
import { CgTally } from "react-icons/cg";

export default function CreateLoan() {
  const styles = {
    border: "1px solid #6ac8d8",
    resize: "none",
  };
  const router = useRouter();

  const [activeStep, setActiveStep] = useState("insuaranstatement");
  const [serviceName, setServiceName] = useState("");
  const [serviceFrequency, setServiceFrequency] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceCoverage, setServiceCoverage] = useState("");
  const [serviceAmount, setServiceAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [servicePackage, setServicePackage] = useState("");
  const [serviceFee, setServiceFee] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [serviceProcess, setServiceProcess] = useState("");
  const [additionalConsiderations, setAdditionalConsiderations] = useState("");
  const [registration, setRegistration] = useState("");
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
    setRegistration(localStorage.getItem("registrationNumber"));
    console.log(localStorage.getItem("registrationNumber"));
  });
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const requestedInsurancecolumn = [
    {
      name: "Member Name",
      selector: (row) => row.serviceRequestDetails.fullName,
    },
    {
      name: "Request ID",
      selector: (row) => row.uid,
    },
    {
      name: "Vet Category",
      selector: (row) => row.serviceRequestDetails.requestedServiceName,
    },
    {
      name: "Appointment Date",
      selector: (row) => row.serviceRequestDetails.requestedDate,
    },
    {
      name: "Time",
      selector: (row) => row.serviceRequestDetails.preferredTime,
    },
    {
      name: "Member Location",
      selector: (row) => row.policyName,
    },
    {
      name: "Service Price",
      selector: (row) => row.policyName,
    },
    {
      name: "Vet Status",
      selector: (row) => (row = "Pending"),
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
    // console.log("Response Reg:", registrationNumber);

    Axios.post(
      "https://us-central1-farmfuzion.cloudfunctions.net/get_requested_veterinary_services-coop",
      {
        registrationNumber,
      }
    )
      .then((response) => {
        console.log("Response VetServices:", response.data.data);
        setInsurancerequests(response.data.data);
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
      selector: (row) => row.fullName,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },

    {
      name: "ID Number",
      selector: (row) => row.idNumber,
    },
    {
      name: "Monthly Income",
      selector: (row) => row.monthlyIncome,
    },
    {
      name: "Insurance Category",
      selector: (row) => row.policyName,
    },
    {
      name: "Employment status",

      selector: (row) => row.employmentStatus,
    },
    {
      name: "Coverage  Amount",
      selector: (row) => row.coverageAmount,
    },
    // {
    //     name: "Insurance status",
    //     selector: (row) => row.loanStatus

    // },
  ];

  // console.log("Results Response", memberinfo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!registration) {
      alert("You should be logged in to proceed");
      return;
    } else {
      // console.log("my data", data);

      try {
        const response = await axios.post(
          "https://us-central1-farmfuzion.cloudfunctions.net/create_veterinary_service-1",
          {
            registration,
            serviceName,
            serviceFrequency,
            serviceDescription,
            serviceCoverage,
            serviceAmount,
            paymentMethod,
            serviceDuration,
            servicePackage,
            serviceFee,
            specialInstructions,
            serviceProcess,
            additionalConsiderations,
          }
        );
        if (response.data.status === "success") {
          toast.success("Veterinary Service Added successfully");
          router.push("/");
          // console.log(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error.message);
        // console.error("Error:", error);
        setIsLoading(false);
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
  const doughnutLivestockDistribution = {
    labels: ["Cattle", "Horse", "Poultry"],
    datasets: [
      {
        data: [100, 70, 30],
        backgroundColor: ["#e2f397", "#5aba8a", "#01565b"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegendLivestockDistribution = ({ labels, colors }) => {
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
  const doughnutVeterinaryDistribution = {
    labels: ["Reproduction", "Health", "Emergency"],
    datasets: [
      {
        data: [100, 70, 30],
        backgroundColor: ["#e2f397", "#5aba8a", "#01565b"],
        hoverBackgroundColor: ["#5aba8a", "#e2f397"],
      },
    ],
  };
  const CustomLegendVeterinaryDistribution = ({ labels, colors }) => {
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

  // conditional rendering steps
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
          {/* <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("insuaranstatement")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranstatement"
                    ? "border-sky-10"
                    : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Veterinary Dashboard
              </button>
              <button
                onClick={() => setActiveStep("insuarancerequest")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuarancerequest"
                    ? "border-sky-10"
                    : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Veterinary Request
              </button>

              <button
                disabled={memberinfo.length == 0}
                onClick={() => setActiveStep("insuaranceinfo")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranceinfo"
                    ? "border-sky-10"
                    : "border-transparent"
                  } text-textcolor font-bold rounded-r`}
              >
                Client Information
              </button>

              <button
                onClick={() => setActiveStep("createinsuarance")}
                className={`py-2 px-4 border-b-2 ${activeStep === "createinsuarance"
                    ? "border-sky-10"
                    : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Create Service
              </button>
            </nav>
          </div> */}
          <div className="mb-3">
            <nav className="flex">
              <button
                onClick={() => setActiveStep("insuaranstatement")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranstatement" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Veterinary Dashboard
              </button>
              <button
                onClick={() => setActiveStep("insuarancerequest")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuarancerequest" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-l`}
              >
                Veterinary Request
              </button>

              <button
                disabled={memberinfo.length === 0}
                onClick={() => setActiveStep("insuaranceinfo")}
                className={`py-2 px-4 border-b-2 ${activeStep === "insuaranceinfo" ? "border-sky-10" : "border-transparent"
                  } text-textcolor font-bold rounded-r`}
              >
                Client Information
              </button>

              {userRole === 'cooperative' && (
                <button
                  onClick={() => setActiveStep("createinsuarance")}
                  className={`py-2 px-4 border-b-2 ${activeStep === "createinsuarance" ? "border-sky-10" : "border-transparent"
                    } text-textcolor font-bold rounded-l`}
                >
                  Create Service
                </button>
              )}
            </nav>
          </div>

          {/* Create Loan Form */}
          {activeStep === "insuaranstatement" && (
            <div className="w-full ">
              <div className={`flex-grow mt-1 me-3`}>
                <div className="flex flex-col p-2 ">
                  <div className="flex md:flex-row  lg:flex-row w-full mt-4 gap-12 flex-col">
                    <div className="shadow-md rounded-md md:w-1/4 bg-card1 lg:w-1/4 w-full">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Services Available
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
                    <div className="shadow-md rounded-md md:w-1/4 bg-card2 lg:w-1/4 w-full">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Vet Capital
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
                    <div className="shadow-md rounded-md md:w-1/4 bg-card3 lg:w-1/4 w-full">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-white">
                              Vet Revenue
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
                    <div className="shadow-md rounded-md md:w-1/4 bg-card1 lg:w-1/4 w-full">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              Active Request
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-card3">+10</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc">12</p>
                          </div>
                          <div>
                            <GroupOutlined className="text-card3 text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shadow-md rounded-md md:w-1/4 bg-card2 lg:w-1/4 w-full">
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-2xl font-abc text-card3">
                              On Duty
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-abc text-card3">10</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                          <div>
                            <p className="text-3xl font-abc">12/30</p>
                          </div>
                          <div>
                            <CgTally className="text-card3 text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flex-grow mt-1 me-24`}>
                <div className="flex md:flex-row lg:flex-row gap-12 p-2 flex-col">
                  <div className="md:w-3/4 lg:w-3/4">
                    <div
                      className="w-full shadow mt-14"
                      style={{ height: "550px" }}
                    >
                      <BarCharts />
                    </div>
                  </div>
                  <div className="flex flex-col md:w-4/12 w-full md:mr-14 mt-14">
                    <div className="shadow-md py-1 px-2">
                      <p className="font-bold text-gray-500 text-sm">
                        Livestock Distribution
                      </p>
                      <div className="flex flex-row mt-3">
                        <div className="w-1/4">
                          <Doughnut
                            data={doughnutLivestockDistribution}
                            className="mt-10"
                            options={{
                              plugins: { legend: { display: false } },
                            }}
                          />
                        </div>

                        <div className="flex flex-col ml-10 mt-8">
                          <p className="text-gray-700 text-sm font-abc font-bold">
                            Most requested for:
                            <span className="text-gray-500 text-sm">
                              {" "}
                              Cattle
                            </span>
                          </p>
                          <CustomLegendLivestockDistribution
                            labels={doughnutLivestockDistribution.labels}
                            colors={
                              doughnutLivestockDistribution.datasets[0]
                                .backgroundColor
                            }
                          />
                          {/* <div className="flex flex-col mt-1">
                            <p className="h-12 mr-5 text-gray-500">
                              <span className="h-32  text-5xl text-red-700">
                                .
                              </span>
                              cattle
                            </p>
                            <p className="h-12 text-gray-500">
                              <span className="h-32  text-5xl text-card3">
                                .
                              </span>
                              Horse
                            </p>
                            <p className="h-12 mb-2 text-gray-500">
                              <span className="h-32  text-5xl text-card2">
                                .
                              </span>
                              Poultry
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="shadow-md py-1 px-2">
                      <p className="font-bold text-gray-500 text-sm">
                        Veterinary Distribution
                      </p>
                      <div className="flex flex-row mt-3 items-center">
                        <div className="w-1/4">
                          <Doughnut
                            data={doughnutVeterinaryDistribution}
                            className="mt-10"
                            options={{
                              plugins: { legend: { display: false } },
                            }}
                          />
                        </div>
                        <div className="flex flex-col ml-10 mt-8">
                          <p className="text-gray-700 text-sm font-abc font-bold">
                            Most requested service{" "}
                            <span className="text-gray-500 text-sm">
                              :Reproduction
                            </span>
                          </p>
                          <CustomLegendVeterinaryDistribution
                            labels={doughnutVeterinaryDistribution.labels}
                            colors={
                              doughnutVeterinaryDistribution.datasets[0]
                                .backgroundColor
                            }
                          />
                          {/* <div className="flex flex-row mt-1">
                            <div className="flex flex-col mr-5">
                              <p className="text-gray-500">
                                {" "}
                                <span className="h-32  text-4xl text-red-400">
                                  .
                                </span>
                                Reproduction
                              </p>
                              <p className="text-gray-500">
                                {" "}
                                <span className="h-32  text-4xl text-card3">
                                  .
                                </span>
                                Health
                              </p>
                              <p className="text-gray-500">
                                {" "}
                                <span className="h-32  text-4xl text-card3">
                                  .
                                </span>
                                Emergency
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="px-4 w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                        <Link href="/corporate/agronomystatements/">
                          Veterinary Statements
                        </Link>
                      </button>
                    </div>
                  </div>
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
                      Service Details
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
                        Service Name
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        style={styles}
                      >
                        <option value="General Check-up">
                          General Check-up
                        </option>
                        <option value="Vaccinations">Vaccinations</option>
                        <option value="Dental Care">Dental Care</option>
                        <option value="Surgical Services">
                          Surgical Services
                        </option>
                        <option value="Emergency Care">Emergency Care</option>
                        <option value="Nutritional Counseling">
                          Nutritional Counseling
                        </option>
                        <option value="Parasite Control">
                          Parasite Control
                        </option>
                        <option value="Spaying and Neutering">
                          Spaying and Neutering
                        </option>
                        <option value="Microchipping">Microchipping</option>
                        <option value="Grooming Services">
                          Grooming Services
                        </option>
                        <option value="Behavioral Counseling">
                          Behavioral Counseling
                        </option>
                        <option value="Diagnostic Imaging">
                          Diagnostic Imaging
                        </option>
                        <option value="Laboratory Services">
                          Laboratory Services
                        </option>
                        <option value="Pharmacy Services">
                          Pharmacy Services
                        </option>
                        <option value="Hospice and Euthanasia Services">
                          Hospice and Euthanasia Services
                        </option>
                        <option value="Rehabilitation and Physical Therapy">
                          Rehabilitation and Physical Therapy
                        </option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Frequency
                      </label>
                      <input
                        type="text"
                        value={serviceFrequency}
                        onChange={(e) => setServiceFrequency(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Description
                      </label>
                      <input
                        type="text"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Coverage
                      </label>
                      <input
                        type="text"
                        value={serviceCoverage}
                        onChange={(e) => setServiceCoverage(e.target.value)}
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Amount
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={serviceAmount}
                        onChange={(e) => setServiceAmount(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Payment Method
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        style={styles}
                      >
                        <option>Select Payment Method</option>
                        <option value="Mpesa">Mpesa</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Equitel">Equitel</option>
                        <option value="Bank">Bank</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Duration
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={serviceDuration}
                        onChange={(e) => setServiceDuration(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Package
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={servicePackage}
                        onChange={(e) => setServicePackage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Application Fee
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={serviceFee}
                        onChange={(e) => setServiceFee(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Special Instructions
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Process
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={serviceProcess}
                        onChange={(e) => setServiceProcess(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-1/2 mt-2 px-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Additional Considerations
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                        style={styles}
                        value={additionalConsiderations}
                        onChange={(e) =>
                          setAdditionalConsiderations(e.target.value)
                        }
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
                    Process
                  </label>
                  <textarea
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    value={serviceProcess}
                    onChange={(e) => setServiceProcess(e.target.value)}
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
                    {isLoading
                      ? "Creating Veterinary Service"
                      : "Create Veterinary Service"}
                  </button>
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
                  <p className="text-2xl font-abc">
                    {" "}
                    {memberinfo.serviceRequestDetails.fullName}
                  </p>
                  <p className="text-xl font-abc"> {memberinfo.phoneNumber}</p>
                </div>
                <div className="flex-row flex justify-between px-6 py-1 text-card3 font-abc font-semibold text-3xl">
                  <p>User Details</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">Address:</p>
                  <p>{memberinfo.serviceRequestDetails.address}</p>
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
                  <p>{memberinfo.serviceRequestDetails.bankAccountNumber}</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">Gender:</p>
                  <p>{memberinfo.serviceRequestDetails.gender}</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">
                    Marital satatus:
                  </p>
                  <p>{memberinfo.serviceRequestDetails.maritalStatus}</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">
                    Education level:
                  </p>
                  <p>{memberinfo.serviceRequestDetails.educationLevel}</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">
                    Household members:
                  </p>
                  <p>{memberinfo.serviceRequestDetails.householdMembers}</p>
                </div>
                <div className="flex-col flex justify-between px-6 py-1  mb-1 text-card3 font-abc  ">
                  <p className="text-xl font-abc font-semibold">
                    Employment status:
                  </p>
                  <p>{memberinfo.serviceRequestDetails.employmentStatus}</p>
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
                        value={
                          memberinfo.serviceRequestDetails.employmentStatus
                        }
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Type of pest
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                        value={memberinfo.serviceRequestDetails.coverageAmount}
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
                        value={
                          memberinfo.serviceRequestDetails.employmentStatus
                        }
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Service Frequency
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                        value={memberinfo.serviceRequestDetails.serviceFee}
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
                        value={memberinfo.serviceRequestDetails.requestedDate}
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                        value={memberinfo.serviceRequestDetails.fullName}
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
                        value={memberinfo.employmentStatus}
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Farm Size (Ha)
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
                        value={memberinfo.coverageAmount}
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
                        value={memberinfo.employmentStatus}
                      />
                    </div>
                    <div className="flex flex-col p-2 w-1/2 mb-3 bg-card ">
                      <label className="block text-sm font-medium text-card3 font-abc">
                        Livestock affceted
                      </label>
                      <input
                        type="text"
                        className="mt-2 py-3  mb-1 block  border rounded-full shadow-md focus-none font-abc p-2"
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
