"use client"
import React, { useState } from 'react'
import SideNav from '../components/AdminSideNav'
import { ArrowForward, Group, GroupOutlined, Landscape, LocalFlorist, MonetizationOnOutlined, NaturePeople, PaymentOutlined, PolicyOutlined, ProductionQuantityLimitsSharp, RequestQuote, Savings, ShoppingCart, Water } from '@mui/icons-material'
import Image from 'next/image'
import WithAuth from '../components/WithAuth'
import SB2 from '../components/SB4'
import ACharts from '../components/ACharts'
import Navbar from '../components/NavBar'





function SuperAdmin() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning, Admin!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon, Admin!";
  } else {
    greeting = "Good evening, Admin!";
  }
  // calender
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <div className="flex flex-col   min-h-screen font-abc text-white">
       <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
       <div className={`flex-grow transition-all duration-200 ease-out md:flex sm:hidden ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
        <div className="flex flex-row sm:flex-row w-full justify-between ms-4 me-4">
          <div >
            {/* <Image
              src="/FARMFUZION.png"
              width={40}
              height={70}
              objectFit="fill"
              alt="Farm Fuzion"
            /> */}
            <h1 className='text-textcolor font-semibold text-xl'>Farm Fuzion Admin Dashboard</h1>
          </div>
          <div >
            <input type="text" className='shadow rounded-md p-1 m-1' placeholder='Searh Statistics' />
            <button className='bg-sidenav rounded-md m-1 p-1 px-4 text-white '>Search</button>
            {/* <button className='bg-card rounded-md m-1 p-1 px-6 text-white '>Custom Loan</button> */}
          </div>
        </div>
      </div>
   
      <h1 className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow mt-4 ms-3  text-card3 ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} me-3`}>{greeting}  Here is what is happening with FarmFuxion Today </h1>
      <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow mt-4 ms-3  ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} me-3`}>
        <div className='flex flex-col shadow rounded-lg m-4 p-4 bg-card1 lg:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6 text-card3'>Total Cooperatives</h1>
            <span className='p-2'>
              <Group style={{ color: '#42526d' }} />
            </span>
          </div>
          <div>
            <p className='text-gray-600 text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-card3'> <span className='text-card3'><ArrowForward /> </span>No.</h1>
            <h1 className='text-card3'>Cooparatives</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-lg m-4 p-4 bg-card2  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Total aAffiliate</h1>
            <span className='p-2'>
              <Group style={{ color: '#42526d' }} />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-green'> <span className='text-green-600'><ArrowForward /> </span>No.</h1>
            <h1 className='text-white'>Affiliate</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-lg m-4 p-4 bg-card3  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Total Farmers</h1>
            <span className=' p-2'>
              <GroupOutlined style={{ color: 'white' }} />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>125</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-green'> <span className='text-white'><ArrowForward /> </span>No.</h1>
            <h1 className='text-white'>Farmers</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card1  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc text-card3 font-semibold mr-6'>Total Savings</h1>
            <span className=' p-2'>
              <Savings style={{ color: '#42526d' }} />
            </span>
          </div>
          <div>
            <p className='text-card3 text-2xl'>24</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-card3'> <span className='text-green-600'><ArrowForward /> </span>Ksh.</h1>
            <h1 className='text-card3'>Amount</h1>
          </div>
        </div>

      </div>
      {/* <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow mt-4 ms-3 ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} me-3`}>
        <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card1  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc text-card3 mr-6'>Most Requested Services</h1>
            <span className=' p-2'>
              <NaturePeople className='text-card3' />
            </span>
          </div>
          <div>
            <p className='text-card3 text-2xl'>24</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-card3'> <span className='text-card3'><ArrowForward /> </span>No.</h1>
            <h1 className='text-card3'>Services</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card2  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Total Insurance Policies Issued</h1>
            <span className=' p-2'>
              <PolicyOutlined className='text-card3' />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>10</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-white'> <span className='text-white'><ArrowForward /> </span>No.</h1>
            <h1 className='text-white'>Policies</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card3  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Types of Insurance Policies</h1>
            <span className='p-2'>
              <ShoppingCart className='text-white'/>
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='white'> <span className='text-white'><ArrowForward /> </span>No.</h1>
            <h1 className='text-white'>Policies</h1>
          </div>
        </div>
        <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card2  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Number of Claims Filed and Approved</h1>
            <span className=' p-2'>
              <ProductionQuantityLimitsSharp className='text-card3' />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3'>
            <h1 className='text-white'> <span className='text-white'><ArrowForward /> </span>No.</h1>
            <h1 className='text-white'>Products</h1>
          </div>
        </div>

      </div> */}
      {/* <h1 className='text-center mt-2 me-3 font-semibold font-abc text-green-500 ms-4'>ECOMERCE  STATISTICS</h1> */}
      <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow  mt-4 ms-3 mb-12 gap-2 ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} me-3`}  >       
         <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card md:w-full' style={{ height: '400px' }}>
          <div className='flex flex-col justify-between'>
            <ACharts />
          </div>
          
        </div>
        {/* <div className='flex flex-col shadow rounded-md m-4 p-4 bg-card3  md:w-1/4'>
          <div className='flex flex-row justify-between'>
            <h1 className='font-abc  mr-6'>Total loan DIsbursed</h1>
            <span className=' rounded-full p-2'>
              <PaymentOutlined style={{ color: 'white' }} />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3 border-b-2 '>
            <h1 className='text-white'> <span className='text-white'><ArrowForward /> </span>Ksh.</h1>
            <h1 className='text-white mb-12'>Amount</h1>
          </div>
          <div className='flex flex-row justify-between mt-12'>
            <h1 className='font-abc  mr-6'>Total Loans Defaulted</h1>
            <span className=' rounded-full p-2'>
              <MonetizationOnOutlined style={{ color: 'white' }} />
            </span>
          </div>
          <div>
            <p className='text-white text-2xl'>12</p>
          </div>
          <div className='flex flex-col justify-between mt-3  '>
            <h1 className='text-white'> <span className='text-white'><ArrowForward /> </span>Ksh.</h1>
            <h1 className='text-white '>Amount</h1>
          </div>
        </div> */}
        
      </div>
    
    </div>
  )
}

export default WithAuth(SuperAdmin)
