import React from 'react'
import { AirportShuttle, BusAlert, CardGiftcard, ChevronLeft, Circle, Delete } from '@mui/icons-material'
import Image from 'next/image'
import Navp from '@/app/components/Navp'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function page() {

  return (
    <>
      <Navp />
      <span className='flex text-green-500 mt-4'>
        <ChevronLeft />
        <p className='ms-6'>Back</p>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-18 mb-10 ">
        <div className='flex flex-col shadow p-3 m-3 rounded-md'>
          <p className='text-3xl font-bold'>Thank you for your purchase</p>
          <p>We appreciate your order.
            You will receive a confirmation email soon.
            Once your items are ready for delivery,
            You will receive another email with the trackind details and estiamted arrival time.
          </p>
          <div className='flex justify-between text-gray-700 ms-3 me-3'>
            <div>
              <p className='font-bold'>Order details</p>
              <div className='flex flex-col'>
                <p>order no: 443EEREW23</p>
                <p>order date: 5th may 2023</p>
                <p>order total: Ksh 70</p>
              </div>
            </div>
            <div>
              <p className='font-bold'>Delivery</p>
              <div className='flex flex-col'>
                <p>Baraka</p>
                <p>Kahawa Wendani</p>
                <p>Nairobi</p>
              </div>
            </div>

          </div>
          <p className='text-gray-600 text-center'>Processing ...</p>
          <div className='flex justify-between text-gray-700 ms-3 me-3'>
            <div>
              <div className='flex flex-row gap-6'>
                <div>
                  <p className='font-bold'>Deliverly </p>
                </div>
                <div>
                  <p>standard(48 hours)</p>
                </div>
              </div>
              <div className='flex flex-row gap-6'>
                <div>
                  <p className='font-bold'>Payment </p>
                </div>
                <div>
                  <p>Card</p>
                </div>
              </div>
            </div>
            <div>
              <p className='font-bold'>Do you have any</p>
              <div className='flex flex-col'>
                <p>Visit our FAQ</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href="/farmers/cart/tracking" >
              <button className='bg-green-900 text-white font-bold py-3 px-10 md:px-28 rounded-full mt-4'>
                Track Your Order
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col shadow p-3 m-3 bg-red-700 rounded-md text-white mt-4'>
          <p className='text-3xl border-b border-white font-bold'>Order Details</p>
          <div className=" border-b border-white">
            <div className=" p-4 m-4 flex flex-col md:flex-row md:items-center flex-1 mt-0">
              <div className="flex-shrink-0">
                <Image src="/seeds.jpeg" alt="Green Peas" width={90} height={90} className="rounded-md mx-auto" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="text-lg font-bold">Green Peas</p>
                <p>Size:M Material: 100% Cotton</p>
                <p>Condition: Thrifted</p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>Ksh: 10</p>
              </div>
            </div>
            <div className=" p-4 m-4 flex flex-col md:flex-row md:items-center flex-1 mt-0">
              <div className="flex-shrink-0">
                <Image src="/seeds.jpeg" alt="Green Peas" width={90} height={90} className="rounded-md mx-auto" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="text-lg font-bold">Green Peas</p>
                <p>Size:M Material: 100% Cotton</p>
                <p>Condition: Thrifted</p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-10 md:text-left">
                <p>Ksh: 10</p>
              </div>
            </div>
          </div>
          <div className='border-b border-white mt-3 mb-3'>
            <div className='flex justify-between text-white'>
              <p>Sub total</p>
              <p>Ksh 10</p>
            </div>
            <div className='flex justify-between text-white'>
              <p>Delivery fee</p>
              <p>Ksh 10</p>
            </div>
          </div>
          <div className='flex justify-between font-bold text-white mt-3'>
            <p>Total</p>
            <p>Ksh 30</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
