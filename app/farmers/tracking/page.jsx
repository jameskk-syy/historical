import Footer from '@/app/components/Footer'
import Navp from '@/app/components/Navp'
import { CheckCircle, Crop, Grass, LocalShipping, StackedBarChart } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function Tracking() {
    return (
        <>
            <Navp />
            <div className=" rounded-md me-3  h-80 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/map.jpg')" }}>
            </div>
            <div className="flex justify-center items-center h-full flex-wrap ms-3 me-3 mt-3  ">
                <div className="w-full md:w-3/4 p-4 ">
                    <div className='border-b-2 border-gray-200 '>
                        <p className='text-4xl font-bold  m-2'>Shipment Status</p>
                    </div>
                    <div className='relative mb-2 mt-2'>
                        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-3/4 w-2 bg-red-800 rounded-full'></div>
                        <div className='flex flex-row items-center border-b-2 border-gray-200 pl-4'>
                            <div>
                                <Image src='/i.png' alt='Icon' width={80} height={50} />
                            </div>

                            <div className='p-2 m-2'>
                                <p className='font-bold text-xl'>Preparing</p>
                                <p>Loading up shipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mb-2 mt-2'>
                        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-3/4 w-2 bg-violet-800 rounded-full'></div>
                        <div className='flex flex-row items-center border-b-2 border-gray-200 pl-4'>
                            <div>
                                <Image src='/i.png' alt='Icon' width={80} height={50} />
                            </div>

                            <div className='p-2 m-2'>
                                <p className='font-bold text-xl'>Shipment Packaged</p>
                                <p>Your order is ready for delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mb-2 mt-2'>
                        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-3/4 w-2 bg-orange-300 rounded-full'></div>
                        <div className='flex flex-row items-center border-b-2 border-gray-200 pl-4'>
                            <div>
                                <LocalShipping  style={{ width: 80, height: 50 }}/>
                            </div>

                            <div className='p-2 m-2'>
                                <p className='font-bold text-xl'>Shipment in Transit</p>
                                <p>Your order is being delivered</p>
                                <p>Destination:</p>
                                <p>ETA:</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mb-2 mt-2'>
                        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-3/4 w-2 bg-orange-500 rounded-full'></div>
                        <div className='flex flex-row items-center border-b-2 border-gray-200 pl-4'>
                            <div>
                                <CheckCircle  style={{ width: 80, height: 50 }}/>
                            </div>

                            <div className='p-2 m-2'>
                                <p className='font-bold text-xl'>Shipment Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-4 relative">
                    <div className='w-1/2 h-24 bg-black rounded-md absolute z-20' style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}>
                        <p className='text-white text-center flex justify-center items-center h-full'>Track</p>
                    </div>

                    <div className='w-full h-auto bg-slate-200 rounded-md relative z-10 p-4 '>
                        <div className="flex flex-col space-y-4">
                            <input type="text" placeholder="Enter Booking ID" className="mt-6 bg-white border-none border-b-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400" />
                            <hr className='border-b border-gray-400' />
                            <p className="text-gray-600 text-sm">Please enter your booking ID to retrieve your shipment history.</p>

                            <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Shipment History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
