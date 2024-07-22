"use client"
import SideNav from '@/app/components/SideNav';
import TopCoop from '@/app/components/TopCoop';
import { BarChartOutlined, CreditCardOutlined, GroupOutlined, Money, MoneyOffCsred, PaidOutlined, Security, ShoppingBag, ShoppingCartCheckout } from '@mui/icons-material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaDatabase } from 'react-icons/fa';
import DataTable from "react-data-table-component";
import { saveAs } from 'file-saver';


export default function InsuranceStatments() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };
    // loan statements
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
        {
            name: "Insurance status",
            selector: (row) => row.loanStatus

        },
    ];

    const [filter, setFilters] = useState([]);
    const [searchs, setSearchs] = useState("");
    const [loanrequests, setloanrequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const coopetiveId = window.localStorage.getItem("registrationNumber");
        console.log("Response Reg:", coopetiveId);

        Axios.post(`https://us-central1-farmfuzion.cloudfunctions.net/insurance_requests`, {
            registrationNumber:coopetiveId
        })
            .then((response) => {
                console.log("Response Insurance:", response.data.loan_requests);
                setloanrequests(response.data.loan_requests);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching loan requests:', error);
            });
    }, []);

    useEffect(() => {
        const result = loanrequests.filter((item) => {
            return item.phoneNumber.match(searchs);

        })
        setFilters(result)
        console.log("Result", result)
    }, [searchs, loanrequests])

    const tableHeaderStyles = {
        headCells: {
            style: {
                backgroundColor: '#f3f4ff',
                fontWeight: 'bold',
                fontSize: '14px',
                text: "white",
                font: "abc"
            }
        }
    }
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
            "Insurance Status"
        ];

        // Convert filtered data (filter state) to CSV format
        const csvContent = [
            headers.join(','), // Add header row
            ...filter.map(row => (
                `${row.phoneNumber},${row.name},${row.desiredLoanAmount},${row.employmentStatus},${row.monthlyIncome},${row.employmentStatus},${row.modeOfPayment},${row.loanStatus}`
            ))
        ].join('\n');

        // Create a Blob object for the CSV data
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

        // Save blob as a file using file-saver library
        saveAs(blob, 'Insurance.csv');
    };


    return (
        <>
            <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
                <div className="mt-2 xb:ml-5">
                    <TopCoop />
                </div>
            </div>

        </>
    )
}
