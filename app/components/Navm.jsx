"use client"
import { Close, DashboardOutlined, Home, HouseOutlined, Menu, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CartCount from './CartCount';


export default function Navm() {
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
        <div className='w-full z-10 bg-white  md:relative'>
            <div className='md:flex justify-between md:mx-5 lg:mx-5 lg:px-4 px-1 items-center py-2  md:px-4 '>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold capitalize mt-5 md:mt-2 lg:mt-2 text-card3'>Farmers virtual market</p>
                </div>
                <div onClick={() => setOpen(!open)} className='text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <Close /> : <Menu />}
                </div>
                <div className='text-xl md:hidden absolute right-8 top-6 '>
                    {open ? <Close onClick={() => setOpen(false)} /> : <Menu onClick={() => setOpen(true)} />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 ${open ? 'block' : 'hidden md:block'} transition-all duration-500 ease-in ml-auto`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link href="" className='font-bold hover:border-b-2 hover:border-green-400 duration-1000'><Home /></Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link href="" className='font-bold hover:border-b-2 hover:border-green-400 duration-1000'><DashboardOutlined /></Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link href="" className='font-bold hover:border-b-2 hover:border-green-400 duration-1000'><HouseOutlined /></Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link href="/farmers/cart" className='font-bold hover:border-b-2 hover:border-green-400 duration-1000'>
                            <span><ShoppingCart /><span className='text-green-500'><CartCount/></span></span>
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}