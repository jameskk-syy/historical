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
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const router = useRouter();

    const [activeStep, setActiveStep] = useState("VeterinarySupply");
    const [serviceName, setserviceName] = useState("");
    const [serviceFrequency, setServiceFrequency] = useState("");
    const [serviceDescription, setserviceDescription] = useState("");
    const [serviceCoverage, setserviceCoverage] = useState("");
    const [serviceAmount, setserviceAmount] = useState("");
    const [paymentMethod, setpaymentMethod] = useState("");
    const [serviceDuration, setserviceDuration] = useState("");
    const [servicePackage, setservicePackage] = useState("");
    const [serviceFee, setserviceFee] = useState("");
    const [specialInstructions, setspecialInstructions] = useState("");
    const [serviceProcess, setserviceProcess] = useState("");
    const [additionalConsideration, setadditionalConsideration] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    // Additional state values
    const [fetchedLoans, setFetchedLoans] = useState([]);
    const [documentation, setDocumentation] = useState("");
    const [registrationNumber, setCooperativeId] = useState("");
    const [providerName, setProviderName] = useState("");
    const [processingDuration, setProcessingDuration] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [claimSettelmentRatio, setClaimSettelmentRatio] = useState("");
    const [insuranceOffered, setInsuranceOffered] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [premiumAmount, setPremiumAmount] = useState("");
    const [email, setEmail] = useState("");
    const [coverageDetails, setCoverageDetails] = useState("");
    const [claimDetails, setClaimDetails] = useState("");
    const [minimumPremiumAmount, setMinimumPremiumAmount] = useState("");
    const [eligibility, setEligibility] = useState("");
    const [additionalConsiderations, setAdditionalConsiderations] = useState("");
    const [memberinfo, setMemberInfo] = useState([]);
    const [filtered, setFilter] = useState([]);
    const [fetchedProviders, setFetchedProviders] = useState([]);
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
    const requestedvetcolumn = [
        {
            name: "Client Name.",
            selector: (row) => row.phoneNumber,
        },
        {
            name: "Request ID",
            selector: (row) => row.desiredLoanAmount,
        },
        {
            name: "Category",
            selector: (row) => row.employmentStatus,
        },
        {
            name: "Appointment Date",
            selector: (row) => row.monthlyIncome,
        },
        {
            name: " Loacation",
            selector: (row) => row.totalYearlyIncome,
        },
        {
            name: "Price",
            selector: (row) => row.modeOfPayment,
        },
        {
            name: "Service Provider",
            selector: (row) => row.loanStatus,
        },
        {
            name: "Service Status",
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
                data: [30, 10, 20],
                backgroundColor: ["#01565b", "#e2f397", "#5aba8a"],
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
        labels: [
            "Crop",
            "Livestock",
            "Equipment",
            "Harvest",
            "Insurance",
            "Custom",
        ],
        datasets: [
            {
                data: [30000, 70000, 10000, 15000, 12000, 20000],
                backgroundColor: [
                    "#01565b",
                    "#e2f397",
                    "#5aba8a",
                    "#e2f397",
                    "#01565b",
                    "#5aba8a",
                ],
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

    return (
        <div className=" min-h-screen md:h-[100%]  sm:overflow-x-hidden">
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
                className={`flex flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
                    } mt-1 me-3 `}
            >
                <div className="flex flex-grow  flex-col pt-2">
                    {/* Stepper Navigation */}
                    <div className="mb-3">
                        <nav className="flex">
                            <button
                                onClick={() => setActiveStep("VeterinarySupply")}
                                className={`py-2 px-4 border-b-2 ${activeStep === "VeterinarySupply"
                                        ? "border-sky-10"
                                        : "border-transparent"
                                    } text-textcolor font-bold rounded-l`}
                            >
                                Agronomy Supply
                            </button>
                            <button
                                onClick={() => setActiveStep("marketsupply")}
                                className={`py-2 px-4 border-b-2 ${activeStep === "marketsupply"
                                        ? "border-sky-10"
                                        : "border-transparent"
                                    } text-textcolor font-bold rounded-l`}
                            >
                                Agronomy Requests
                            </button>

                            <button
                                onClick={() => setActiveStep("insurancesupply")}
                                className={`py-2 px-4 border-b-2 ${activeStep === "insurancesupply"
                                        ? "border-sky-10"
                                        : "border-transparent"
                                    } text-textcolor font-bold rounded-r`}
                            >
                                Agronomy info
                            </button>
                            <button
                                onClick={() => setActiveStep("createvetprovider")}
                                className={`py-2 px-4 border-b-2 ${activeStep === "createvetprovider"
                                        ? "border-sky-10"
                                        : "border-transparent"
                                    } text-textcolor font-bold rounded-r`}
                            >
                                Create Agrnomy service providers
                            </button>
                        </nav>
                    </div>

                    {/* Create Loan Form */}
                    {activeStep === "VeterinarySupply" && (
                        <div className="mt-4 flex flex-col w-full">
                            <div className="flex flex-row ml-10 w-full">
                                <div className="flex flex-col w-8/12 md:mr-5 lg:mr-5">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row">
                                            <div className="shadow-lg w-1/4 rounded-md mr-2 bg-card1">
                                                <div className="flex flex-row justify-between w-full py-1 px-3">
                                                    <p className="text-gray-500 text-sm font-bold font-abc">
                                                        Total Agronomy Services
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
                                                        AgronomyProviders
                                                    </p>

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
                                                        Active Requests
                                                    </p>
                                                    <div className="text-white flex flex-row items-center">
                                                        <CallReceived /> +4
                                                    </div>
                                                </div>

                                                <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                                                    <p className="text-white text-md font-bold mt-3">6</p>
                                                    <div className="mt-1 flex flex-row item-center">
                                                        <CreditScore className="text-white text-4xl" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shadow-lg flex-grow rounded-md w-1/4 mr-2 bg-card">
                                                <div className="flex flex-row justify-between w-full py-1 px-3">
                                                    <p className="text-gray-500 text-sm font-bold font-abc">
                                                        Total expenditure
                                                    </p>
                                                    {/* <div className="text-gray-500 flex flex-row items-center">
                            +1
                          </div> */}
                                                </div>

                                                <div className="flex flex-row justify-between font-abc w-full mt-5 item-center mb-2 py-1 px-3">
                                                    <p className="text-gray-700 text-md font-bold mt-3">
                                                        220K
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
                                            Agronomy Service Provider
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
                                                    most requested service provider
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
                                            Agronomy Requests Distribution
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
                                                    most popular Agronomy service
                                                    <span className="text-gray-500 text-sm">AI</span>
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
                                            Agronomy Service Data
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
                                                columns={requestedvetcolumn}
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
                            </div>
                            <div className={`flex-grow mt-1 me-24`}>
                                <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
                                    <div>
                                        <p className="text-lg font-semibold text-card3 font-abc">
                                            {" "}
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
                                                columns={requestedvetcolumn}
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

                    {activeStep === "createvetprovider" && (
                      <div className="flex flex-wrap md:mx-2 justify-center">
                      <div className="w-full md:w-7/12 bg-card text-textcolor font-abc p-4 rounded shadow-lg me-5">
                        <div className="flex justify-between mb-4">
                          <div>
                            <h2 className="text-md mb-1 text-[#828282] font-bold">
                              Agro Service Details
                            </h2>
                            <p className="text-xs text-[#828282]">
                              Please provide the additional information below
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
                                onChange={(e) => setserviceName(e.target.value)}
                                style={styles}
                              >
                                <option value="Soil Testing">Soil Testing</option>
                                <option value="Pest Control">Pest Control</option>
                                <option value="Crop Monitoring">Crop Monitoring</option>
                                <option value="Irrigation Services">Irrigation Services</option>
                                <option value="Harvesting Assistance">Harvesting Assistance</option>
                                <option value="Farm Equipment Rental">Farm Equipment Rental</option>
                                <option value="Fertilizer Application">Fertilizer Application</option>
                                <option value="Agricultural Consulting">Agricultural Consulting</option>
                                <option value="Seed Supply">Seed Supply</option>
                                <option value="Training and Workshops">Training and Workshops</option>
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
                                onChange={(e) => setserviceDescription(e.target.value)}
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
                                onChange={(e) => setserviceCoverage(e.target.value)}
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
                                onChange={(e) => setserviceAmount(e.target.value)}
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Payment Method
                              </label>
                              <select
                                className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                                value={paymentMethod}
                                onChange={(e) => setpaymentMethod(e.target.value)}
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
                                onChange={(e) => setserviceDuration(e.target.value)}
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
                                onChange={(e) => setservicePackage(e.target.value)}
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
                                onChange={(e) => setserviceFee(e.target.value)}
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
                                onChange={(e) => setspecialInstructions(e.target.value)}
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
                            Service Process
                          </label>
                          <textarea
                            className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                            style={styles}
                            value={serviceProcess}
                            onChange={(e) => setserviceProcess(e.target.value)}
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Additional Considerations
                          </label>
                          <textarea
                            value={additionalConsideration}
                            className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                            style={styles}
                            onChange={(e) => setadditionalConsideration(e.target.value)}
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
                              ? "Creating Agro Service"
                              : "Create Agro Service"}
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
