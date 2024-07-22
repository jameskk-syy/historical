import React from 'react'
import { ArrowForward, Facebook, Favorite, Instagram, WhatsApp, X } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-4 shadow-lg md:border-t-2 lg:border-t-2 border-t-2 px-6 py-2 mt-14">
    <div className="flex-1 md:w-4/12 p-3 w-full m border-gray-400 border-r-4 md:border-r-4 lg:border-r-4">
      <h1 className="text-md font-abc font-bold mb-2 ">Farmers Network</h1>
      <p className='leading-7 mb-1 abc text-card3' >Your number one app for managing farming activities, tracking farm statistics, and receiving updates. .</p>
      <p className='pt-3 text-sm font-semibold'>Join our farming community</p>
      <div className='flex flex-row mt-3 justify-between  shadow-md rounded-full px-2 py-2'>
      <input type='text' placeholder='Enter your farm email' className='focus:outline-none focus:ring-0' />
      <button className="">
        <span className='bg-card3 rounded-full ml-2'><ArrowForward style={{ fontSize: 20, color: 'white' }} /></span>
      </button>
      </div>
    </div>
    <div className="flex-1 items-center justify-center md:px-10 lg:px-10 md:w-4/12 p-3 w-full">
      <h1 className="text-sm font-abc font-bold">Connect</h1>
      <p className='p-2 font-abc text-card3  mt-4'>Farm profile</p>
      <p className='p-2 font-abc text-card3 '>Messages</p>
      <p className='p-2 font-abc text-card3 '>Set up farm details</p>
    </div>
    <div className="flex-1  md:w-4/12 p-3 w-full">
      <h1 className="text-sm font-abc font-bold">Notifications</h1>
      <p className='p-2 font-abc text-card3  mt-4'>Term of service</p>
      <p className='p-2 font-abc text-card3 '>Contact us</p>
      <p className='p-2 font-abc text-card3 '>Farm Guidelines</p>
    </div>
    <div className="flex-1  md:w-4/12 p-3 w-full">
      <h1 className="text-md font-abc font-bold">Sell products</h1>
      <p className='p-2 font-abc text-card3  mt-4'>Farm profile</p>
      <p className='p-2 font-abc text-card3 '>Add product</p>
      <p className='p-2 font-abc text-card3 '>Help center</p>
    </div>
    <div className="flex-1  md:w-4/12 p-3 w-full">
      <h1 className="text-sm font-abc font-bold">Follow</h1>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className='p-2' style={{ fontSize: '32px' }}>
          <Instagram style={{ color: 'grey' }} />
        </div>
        <div className='p-2' style={{ fontSize: '24px' }}>
          <WhatsApp style={{ color: 'grey' }} />
        </div>
        <div className='p-2' style={{ fontSize: '24px' }}>
          <X style={{ color: 'grey' }} />
        </div>
        <div className='p-2' style={{ fontSize: '24px' }}>
          <Facebook style={{ color: 'grey' }} />
        </div>
      </div>

    </div>
  </div>
  )
}
