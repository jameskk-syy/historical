"use client"
import { Agriculture, AgricultureOutlined, AgricultureSharp, AgricultureTwoTone, Close, Dashboard, DashboardOutlined, Home, House, HouseOutlined, Menu, Payment, Person, PersonOffOutlined, Search, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CartCount from './CartCount';


export default function Navp() {
    const [open, setOpen] = useState(false);

    const [viewportWidth, setViewportWidth] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth;
        } else {
            return 0;
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='border-b-0 w-full  top-0  left-0 z-10 '>
            <div className='md:flex justify-between md:mx-20 lg:mx-20 items-center border-b  py-4'>
                <div >
                    <ul className={`md:flex md:items-center md:pb-0 ${open ? 'block' : 'hidden md:block'} transition-all duration-500 ease-in ml-auto`}>
                        {/* <li className='text-card-3'><Payment /></li> */}
                        <li className='md:ml-8  md:my-0 my-7'>
                            <Link href="/farmers" className='   hover:bg-card3 hover:text-white rounded-full px-5 py-2 hover:rounded-full duration-200'>Home</Link>
                        </li>
                        {/* <li className='md:ml-8  md:my-0 my-7'>
                            <Link href="" className='   hover:bg-card3 hover:text-white  rounded-full px-5 py-2 hover:rounded-full duration-200'>Dashboard</Link>
                        </li> */}
                        <li className='md:ml-8  md:my-0 my-7'>
                            <Link href="" className='   hover:bg-card3 hover:text-white  rounded-full px-5 py-2 hover:rounded-full duration-200'>Market</Link>
                        </li>
                        {/* <li className='md:ml-8  md:my-0 my-7'>
                            <Link href="" className='   hover:bg-card3 hover:text-white  rounded-full px-5 py-2 hover:rounded-full duration-200'>Payment</Link>
                        </li> */}
                        <li className='md:ml-8  md:my-0 my-7'>
                            <Link href="" className='   hover:bg-card3 hover:text-white  rounded-full px-5 py-2 hover:rounded-full duration-200'>Tracking</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl  absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <Close /> : <Menu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0  ${open ? 'block' : 'hidden md:block'} transition-all duration-500 ease-in ml-auto`}>

                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link href="" className=' font-bold  '><Search /></Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link href="/farmers/cart" className='font-bold hover:border-b-2 hover:border-green-400 duration-1000'>
                            <span><ShoppingCart /><span className='text-green-500'><CartCount/></span></span>
                            </Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Image
                            className=' bg-green-300 rounded-full px-2 py-2'
                            src="/logo.jpg"
                            width={30}
                            height={70}
                            alt="profile"

                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
