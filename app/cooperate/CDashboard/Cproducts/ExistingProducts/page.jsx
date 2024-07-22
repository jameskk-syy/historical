"use client"
import SideNav from '@/app/components/SideNav';
import TopCoop from '@/app/components/TopCoop';
import { BarChartOutlined, CreditCardOutlined, GroupOutlined, Money, MoneyOffCsred, PaidOutlined, Security, ShoppingBag, ShoppingCartCheckout } from '@mui/icons-material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaDatabase } from 'react-icons/fa';
import DataTable from "react-data-table-component";
import { saveAs } from 'file-saver';
import Image from 'next/image';


export default function SavingsStatments() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };
    // loan statements
    const columns = [
        {
            name: "Product Name",
            selector: (row) => row.title
        },
        {
            name: "Description",
            selector: (row) => row.description

        },
        {
            name: "Product Quantity",
            selector: (row) => row.itemQuantity
        },
        {
            name: "Product Price",
            selector: (row) => row.itemPrice
        },
        {
            name: "Total Price",
            selector: (row) => row.totalPrice
        },
        {
            name: "Product Category",
            selector: (row) => row.productCategory            
        },
        {
            name: "Product Status",
            selector: (row) => row.productStatus
        },
        {
          name:"Product Image",
          selector:(row)=><Image height={70} width={70} alt="product" src={row.media}/>
      },
      {
          name:"Action",
          cell:(row)=>(
         <button style={{ backgroundColor: '#01565b', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px', border: 'none'  }} onClick={()=>handleDelete(row.id)}>View</button>
              
          )
      }
      
    ];

    const handleDelete =(id) =>[
      console.log(id)
    ]

    const [filter, setFilters] = useState([]);
    const [searchs, setSearchs] = useState("");
    const [loanrequests, setloanrequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const registrationNumber = window.localStorage.getItem("registrationNumber");
        // console.log("Response Reg:", registrationNumber)

        Axios.post('https://us-central1-farmfuzion.cloudfunctions.net/get_product', {
            // registrationNumber: registrationNumber
        })
            .then((response) => {

                console.log("Response:", response.data.products)
                setloanrequests(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching loanrequests:', error);
            });
    }, []);

    useEffect(() => {
        const result = loanrequests.filter((item) => {
            return item.title.match(searchs);
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
          "Product Name",
          "Description",
          "Product Quantity",
          "Product Price",
          "Total Price",
          "Product Category",
          "Product Status",
          "Product Image",
          "Action"
      ];
  
      // Convert filtered data (filter state) to CSV format
      const csvContent = [
          headers.join(','), // Add header row
          ...filter.map(row => (
              `${row.title},${row.description},${row.itemQuantity},${row.itemPrice},${row.totalPrice},${row.productCategory},${row.productStatus},${row.media},View`
          ))
      ].join('\n');
  
      // Create a Blob object for the CSV data
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  
      // Save blob as a file using file-saver library
      saveAs(blob, 'Products.csv');
  };
  

    return (
        <>
            <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
                <div className="mt-2 xb:ml-5">
                    <TopCoop />
                </div>
            </div>
           
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-1 me-24`}>
                <div className="flex md:flex-row lg:flex-row justify-between p-2 flex-col ">
                    <div>
                        {/* <p className='text-2xl font-abc'>Products</p> */}
                    </div>
                    <div className=''>
                        <input
                            placeholder='Search by product name'
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                // marginBottom: '3px'
                            }}
                            value={searchs}
                            onChange={(e) => setSearchs(e.target.value)}
                        />
                        <button onClick={downloadCSV} className='bg-card3 text-white py-3 rounded-md p-4 ml-6'>Download Products List</button>
                    </div>
                </div>
                <div>
                </div>
                <div className=" transition-all duration-200 ease-out md:pr-2 lg:pr-2">
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
    )
}
