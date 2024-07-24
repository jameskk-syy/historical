"use client";
import TopCoop from "@/app/components/TopCoop";
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
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";
import SB5 from "@/app/components/SB5";
import { FaServicestack } from "react-icons/fa6";
import { MdEmergency } from "react-icons/md";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function SavingsStatments() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };


    const columns = [
        {
            name: "Name",
            selector: (row) => row?.['Date & Time'],
        },
        {
            name: "Request ID",
            selector: (row) => row?.['Transaction ID'],
        },
        {
            name: "Vet Category",
            selector: (row) => row?.['Date & Time'],
        },

        {
            name: "Appointment Date ",
            selector: (row) => row?.['Date & Time'],
        },
        {
            name: "Phone Number",
            selector: (row) => row?.['Phone Number'],
        },
        {
            name: "Location ",
            selector: (row) => row?.['Date & Time'],
        },

        {
            name: "Service Price",
            selector: (row) => row?.['Transaction ID'],
        },
        {
            name: "Mode of Payment",
            selector: (row) => row.payment,
        },
        {
            name: "Status",
            selector: (row) => row?.['Savings Amount'],
        },
    ];

    const [filter, setFilters] = useState([]);
    const [searchs, setSearchs] = useState("");
    const [loanrequests, setloanrequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [savings, setSavings] = useState(true);
    const [psavings, setPSavings] = useState(true);
    const [ptotalSavings, setPTotalSavings] = useState(true);
    const [totalSavings, setTotalSavings] = useState(true);

    useEffect(() => {
        const registrationNumber = window.localStorage.getItem("registrationNumber");
        const userPhone = window.localStorage.getItem("userPhone");

        Axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
            {
                identifier: registrationNumber,
                identifierType: "registrationNumber"
            }
        )
            .then((response) => {
                console.log("Response Total Savings:", response.data);
                setSavings(response.data.total_savings)
                setTotalSavings(response.data.total_savings_current_month)
                // console.log("Total Savings:", response.data.total_savings);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching loanrequests:", error);
            });

        Axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/get_total_savings",
            {
                identifier: userPhone,
                identifierType: "phoneNumber"
            }
        )
            .then((response) => {
                console.log("Response Personal Total Savings:", response.data);
                setPSavings(response.data.total_savings)
                setPTotalSavings(response.data.total_savings_current_month)
                // console.log("Total Savings:", response.data.total_savings);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching loanrequests:", error);
            });
    })

    useEffect(() => {
        const registrationNumber = window.localStorage.getItem("registrationNumber");
        // console.log("Response Reg:", registrationNumber);

        Axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/fetch_coop_savings",
            {
                registrationNumber: registrationNumber,
            }
        )
            .then((response) => {
                console.log("Response:", response.data.data);
                setloanrequests(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching loanrequests:", error);
            });
    }, []);

    useEffect(() => {
        const result = loanrequests.filter((item) => {
            return item?.['Phone Number'].match(searchs);
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
    const downloadCSV = () => {
        // Define column headers
        const headers = [
            "Phone Number",
            "Name",
            "ID Number",
            "Transaction ID",
            "Date & Time",
            "Mode of Payment",
            "Savings Amount",
            "Transaction Type",
        ];

        // Convert filtered data (filter state) to CSV format
        const csvContent = [
            headers.join(","), // Add header row
            ...filter.map(
                (row) =>
                    `${row.phoneNumber},${row.name},${row.desiredLoanAmount},${row.transactionId},${row.dateTime},${row.modeOfPayment},${row.savingsAmount},${row.transactionType}`
            ),
        ].join("\n");

        // Create a Blob object for the CSV data
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

        // Save blob as a file using file-saver library
        saveAs(blob, "Savings.csv");
    };
    //   Calendar
    const bookedDates = [
        '2024-07-10',
        '2024-07-15',
        '2024-07-20'
        // Add more booked dates as needed
    ];

    const [view, setView] = useState('month');

    const isBookedDate = (date) => {
        return bookedDates.some(
            (bookedDate) => new Date(bookedDate).toDateString() === date.toDateString()
        );
    };

    const tileContent = ({ date, view }) => {
        if (isBookedDate(date)) {
            return <div className="underline text-green-500">{date.getDate()}</div>;
        }
        return null;
    };
    return (
        <>
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
                className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
                    } mt-1 me-3`}
            >
                <div className="flex flex-col p-2 ">
                    <p className="border-b-2 border-card text-card3 font-abc text-2xl p-2">
                        Appointments Dashboard
                    </p>
                    <div className="flex md:flex-row  lg:flex-row w-full mt-6 gap-12 flex-col">
                        <div className="shadow-md bg-card1 rounded-md md:w-1/4 lg:w-1/4 w-full">
                            <div className="flex flex-col ">
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-2xl font-abc text-card3">
                                            Total Appointments
                                        </p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-3xl font-abc">80</p>
                                    </div>
                                    <div>
                                        <FaDatabase className="text-card3 text-5xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md bg-card2 rounded-md md:w-1/4 lg:w-1/4 w-full">
                            <div className="flex flex-col ">
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-2xl font-abc text-card3">
                                            Active Requests
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-abc text-card3">+10</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-3xl text-card3 font-abc">120</p>
                                    </div>
                                    <div>
                                        <Security className="text-card3 text-5xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md bg-card3 rounded-md md:w-1/4 lg:w-1/4 w-full">
                            <div className="flex flex-col ">
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-2xl font-abc text-white">
                                            Total Service Providers
                                        </p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-3xl text-white font-abc">12</p>
                                    </div>
                                    <div>
                                        <FaServicestack className="text-white text-5xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md bg-card rounded-md md:w-1/4 lg:w-1/4 w-full">
                            <div className="flex flex-col ">
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-2xl font-abc text-black">
                                            Emergencies
                                        </p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-3xl font-abc">12</p>
                                    </div>
                                    <div>
                                        <MdEmergency className="text-card3 text-5xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md  rounded-md md:w-1/4 lg:w-1/4 w-full">
                            <div className="flex flex-col ">
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-2xl font-abc text-black">
                                            Active Service Providers
                                        </p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between p-4">
                                    <div>
                                        <p className="text-3xl font-abc">12</p>
                                    </div>
                                    <div>
                                        <FaServicestack className="text-card3 text-5xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"} mt-1 me-24`}>
                <div className="flex flex-col flex-grow w-full p-4 overflow-x-auto">
                    <div className="mb-4 flex flex-wrap justify-start">
                        <button
                            onClick={() => setView('month')}
                            className="px-4 py-2 m-2 border rounded text-white bg-card3 hover:bg-opacity-80"
                        >
                            Monthly View
                        </button>
                        <button
                            onClick={() => setView('week')}
                            className="px-4 py-2 m-2 border rounded text-white bg-card3 hover:bg-opacity-80"
                        >
                            Weekly View
                        </button>
                    </div>
                    <div className="w-full min-w-full">
                        <Calendar
                            view={view}
                            tileContent={tileContent}
                            className="w-full min-w-full border-none"
                        />
                    </div>
                </div>
            </div>
            <div
                className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
                    } mt-1 me-24`}
            >
                <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col">
                    <div>
                        <p className="text-3xl font-abc">Appointments</p>
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
                            Download Appointments
                        </button>
                    </div>
                </div>
                <div></div>
                <div className=" transition-all duration-200 ease-out ">
                    {loading ? (
                        <p className="text-xl text-center text-gray-900">Loading...</p>
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
        </>
    );
}
