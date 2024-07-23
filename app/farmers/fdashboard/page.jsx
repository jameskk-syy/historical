"use client";
import SideNav from "@/app/components/SideNav";
import BarCharts from "@/app/components/BarCharts";
import React, { useEffect, useState } from "react";
import {
  Air,
  ArrowDownward,
  BarChart,
  Landscape,
  LineWeight,
  Scale,
  WindPower,
} from "@mui/icons-material";
import CircularProgressApp from "@/app/components/CircularProgressApp";
import ComparisonBarCharts from "@/app/components/ComparisonBarCharts";
import WithAuth from "@/app/components/WithAuth";
import { GiRaining, GiSunrise, GiSunset, GiWindsock } from "react-icons/gi";
import { PiSunLight } from "react-icons/pi";
import Link from "next/link";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdSunny } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import DataTable from "react-data-table-component";
import { getCurrency } from "../api";



function FDashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Currency exchange rates

  const [exchangeRates, setExchangeRates] = useState({});
  const currencies = ['KES', 'UGX', 'TZS', 'RWF', 'BIF', 'ZMW'];

  useEffect(() => {
    async function getConversionRates(){
     const data = await getCurrency();
     console.log("conversion rates", data)
     setExchangeRates(data);
    }
    getConversionRates();
  }, []);

  // Prepare data for DataTable
  const data = currencies.map((fromCurrency) => {
    const row = { Currency: fromCurrency };
    currencies.forEach((toCurrency) => {
      row[toCurrency] = fromCurrency === toCurrency
        ? '-'
        : (exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4);
    });
    return row;
  });

  // Define columns for DataTable
  const columns = [
    {
      name: 'Currency',
      selector: row => row.Currency,
      sortable: true,
    },
    ...currencies.map(currency => ({
      name: currency,
      selector: row => row[currency],
      sortable: true,
    })),
  ];


  const [currentDate, setCurrentDate] = useState(new Date());
  // Format options for date and time
  const dateFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const timeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  // Format date and time using Intl.DateTimeFormat
  const dateFormatter = new Intl.DateTimeFormat(undefined, dateFormatOptions);
  const timeFormatter = new Intl.DateTimeFormat(undefined, timeFormatOptions);

  // Format current date and time
  const formattedDate = dateFormatter.format(currentDate);
  const formattedTime = timeFormatter.format(currentDate);
  const doughnutCurrentProfitData = {
    labels: ["Current Profit", "Expected Profit"],
    datasets: [
      {
        data: [250000, 349000],
        backgroundColor: ["#01565b", "#e2f397"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  const CustomLegendCurrentProfit = ({ labels, colors }) => {
    return (
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2 px-4">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };
  const doughnutCurrentLossData = {
    labels: ["Current Loss", "Expected Revenue"],
    datasets: [
      {
        data: [250000, 349000],
        backgroundColor: ["#5aba8a", "#e2f397"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  const CustomLegendCurrentLoss = ({ labels, colors }) => {
    return (
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2 px-4">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };

  // food stuff prices
  const targetCountries = ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi', 'Zambia'];

  const sampleData = [
    { country: 'Kenya', food_item: 'Maize', price: '50', date: '2024-07-20' },
    { country: 'Tanzania', food_item: 'Rice', price: '60', date: '2024-07-21' },
    { country: 'Uganda', food_item: 'Beans', price: '45', date: '2024-07-19' },
    { country: 'Rwanda', food_item: 'Cassava', price: '40', date: '2024-07-18' },
    { country: 'Burundi', food_item: 'Sweet Potatoes', price: '55', date: '2024-07-17' },
    { country: 'Zambia', food_item: 'Groundnuts', price: '65', date: '2024-07-16' },
  ];
 

    const [foodPrices, setFoodPrices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate API call with hardcoded data
      setTimeout(() => {
        const filteredData = sampleData.filter(item => targetCountries.includes(item.country));
        setFoodPrices(filteredData);
        setLoading(false);
      }, 1000); // Simulate a delay
    }, []);
  

  
    // Define columns for the DataTable
    const columnsP = [
      {
        name: 'Country',
        selector: row => row.country,
        sortable: true,
      },
      {
        name: 'Food Item',
        selector: row => row.food_item,
        sortable: true,
      },
      {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
      },
      {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
      },
    ];
  

    // Transactions
    const [phoneNumber, setPhoneNumber] = useState();
    const [registrationNumber, setRegistrationNumber] = useState();
    const [amount, setAmount] = useState();
    const [datas, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState("");

    const tableHeaderStyle = {
      headCells: {
        style: {
          backgroundColor: "white",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
    };
    const columnsTransacion = [
      {
        name: "Transaction Date",
        selector: (row) => row.date_deposited,
      },
      {
        name: "Transaction Status",
        selector: (row) => row.status,
      },
      {
        name: "Transaction Code",
        selector: (row) => row?.['Transaction Code'],
      },
      {
        name: "Amount",
        selector: (row) => row.amount,
      },
    ];

    useEffect(() => {
      async function fetchData() {
        const userPhone = localStorage.getItem("userPhone");
        try {
          const response = await axios.post(
            "https://us-central1-farmfuzion.cloudfunctions.net/get_savings",
            {
              message: {
                phoneNumber: userPhone,
              },
            }
          );
          // console.log("Savings Response",response.data.data)
          const responseDataArray = Object.values(response.data);
          setData(Object.values(responseDataArray[1]));
          setFilter(Object.values(responseDataArray[1]));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);
  
    useEffect(() => {
      const filteredData = datas.filter((item) => {
        if (!item) return false;
        const { date_deposited, status, amount } = item;
        return (
          (date_deposited &&
            date_deposited.toLowerCase().includes(search.toLowerCase())) ||
          (status && status.toLowerCase().includes(search.toLowerCase())) ||
          (amount &&
            amount.toString().toLowerCase().includes(search.toLowerCase()))
        );
      });
      setFilter(filteredData);
    }, [search, datas]);
    console.log(data[1]);

  return (
    <div className="flex flex-col  min-h-screen">
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
    
      <div
        className={`flex flex-col md:flex-row transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"
          } sm:ml-3 mt-4 me-3`}
      >
        {/* Column 1 */}
        <div className="flex flex-col md:w-4/12 w-full">
          <div className="flex flex-col text-textcolor font-abc m-3 p-3 items-center justify-between flex-grow shadow-md rounded-md h-96">
            <BarCharts />
          </div>
          <div className="flex flex-col m-3 p-3 items-center text-textcolor font-abc flex-grow shadow-md rounded-md">
            <div className="flex flex-row w-full  justify-between">
              <div className="ms-4">
                <p className="font-abc">Financial statistics</p>
              </div>
              <div className="me-4 mb-0">
                <span className="shadow m-1 p-1 shadow-gray-200">
                  Sort by
                  <ArrowDownward style={{ color: "#01565b" }} />
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full mb-4  items-center">
              <div className="ms-1 w-3/12 h-36">
                <Doughnut
                  data={doughnutCurrentProfitData}
                  options={{ plugins: { legend: { display: false } } }}
                />
              </div>
              <div className="flex w-1/2  shadow rounded-md p-3 text-slate-500 me-4">
                <CustomLegendCurrentProfit
                  labels={doughnutCurrentProfitData.labels}
                  colors={
                    doughnutCurrentProfitData.datasets[0].backgroundColor
                  }
                />
              </div>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="ms-4 w-3/12 h-36">
                <Doughnut
                  data={doughnutCurrentLossData}
                  options={{ plugins: { legend: { display: false } } }}
                />
              </div>
              <div className="flex  w-1/2 flex-col shadow rounded-md p-3 text-slate-500 me-4">
                <CustomLegendCurrentLoss
                  labels={doughnutCurrentLossData.labels}
                  colors={
                    doughnutCurrentLossData.datasets[0].backgroundColor
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-5/12 w-full">
         
  
          <div className="flex flex-col m-3 p-3 items-center text-textcolor font-abc flex-grow shadow-md rounded-md">
          <h1 className="text-2xl text-card3 font-abc p-1">Food Prices</h1>
          <DataTable
            columns={columnsP}
            data={foodPrices}
            // pagination
            // highlightOnHover
            // striped
            responsive
          />
        
        </div>
        <div className="flex flex-col m-3 p-3 items-center text-textcolor font-abc flex-grow shadow-md rounded-md">
          <h1 className="text-2xl font-abc text-card3  p-1">Transactions</h1>
          <DataTable
            customStyles={tableHeaderStyle}
              columns={columnsTransacion}
              data={filter}
              pagination
              paginationPerPage={3}
              fixedHeader
              selectableRowsHighlight
              highlightOnHover
            />
        </div>
        </div>
        {/* Weather Column */}
        <div className="flex flex-col md:w-4/12 w-full m-3 p-3 items-center text-textcolor font-abc flex-grow shadow-md rounded-md bg-card3">
          {/* <p className="font-abc text-4xl text-white justify-start">Forecast</p> */}
          <div className="flex flex-row w-full justify-between p-3">
            <div className="flex flex-col">
              <p className="font-abc text-3xl text-white">Farmer Location</p>
              <p className="font-abc text-xl text-white">{formattedDate}</p>
            </div>
            <p className="font-abc text-xl text-white">{formattedTime}</p>
          </div>
          <div className="flex flex-row w-full justify-between p-3 ">
            <GiWindsock className="text-white text-3xl" />
            <p className="font-abc  text-white">Wind Speed</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">3Km/h</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3 ">
            <GiRaining className="text-white text-3xl" />
            <p className="font-abc  text-white">Rain Chance</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">40%</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3 ">
            <Air className="text-white text-3xl" />
            <p className="font-abc  text-white">Pressure</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">720hpa</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3 border-b-2">
            <PiSunLight className="text-white text-3xl" />
            <p className="font-abc  text-white">UV Index</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">2,3</p>
            </div>
          </div>
          <p className="font-abc text-4xl text-white justify-start">Forecast</p>
          <div className="flex flex-row w-full justify-between p-3">
            <TiWeatherPartlySunny className="text-white text-3xl" />
            <p className="font-abc  text-white">Sunny</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">{formattedDate}</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3">
            <GiRaining className="text-white text-3xl" />
            <p className="font-abc  text-white">Rainy</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">{formattedDate}</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3">
            <MdSunny className="text-white text-3xl" />
            <p className="font-abc  text-white">Sunny</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">{formattedDate}</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between p-3 border-b-2">
            <TiWeatherPartlySunny className="text-white text-3xl" />
            <p className="font-abc  text-white">Sunny</p>
            <div className="flex flex-col">
              <p className="font-abc text-xl text-white">{formattedDate}</p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between p-3">
          <h1 className="text-2xl font-abc text-white p-1">Exchange Rates</h1>
          <div className="flex flex-col text-textcolor font-abc p-2 items-center justify-between flex-grow  rounded-md h-96">
          <DataTable
            columns={columns}
            data={data}
            responsive
          />
        </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
export default WithAuth(FDashboard);
