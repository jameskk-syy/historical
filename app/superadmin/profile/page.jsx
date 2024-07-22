"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Card, CardContent } from '@mui/material';
import SideNav from '@/app/components/AdminSideNav';
import Image from 'next/image';


function Profile() {
    const router = useRouter();

    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const [userData, setUserData] = useState({
        role: '',
        username: '',
        cooperative: '',
        email: '',
        idNumber: '',
        phoneNumber: '',
        password: '', // Initialize with empty password
    });

    useEffect(() => {
        // Check if localStorage is available before accessing it
        if (typeof window !== 'undefined' && window.localStorage) {
            setUserData({
                role: localStorage.getItem('userRole'),
                username: localStorage.getItem('username'),
                cooperative: localStorage.getItem('userCop'),
                email: localStorage.getItem('userEmail'),
                idNumber: localStorage.getItem('userID'),
                phoneNumber: localStorage.getItem('userPhone'),
                password: '', // Initialize with empty password
            });
        }
    }, []);


    // Function to handle password change
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setUserData((prevUserData) => ({ ...prevUserData, password: newPassword }));
    };

    // Function to update profile
    const handleUpdateProfile = () => {
        // Implement update profile logic here
        console.log('Updating profile...');
        // Redirect to home page after updating profile
        router.push('/');
    };

    return (
        <div className='flex flex-col  mt-0'>
            <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3 ms-6`}>
                <div className="rounded-md h-60 bg-cover bg-center bg-no-repeat md:ms-24 md:me-24 bg-green-600" >
                    <div className="flex justify-center items-center h-full w-full bg-card1 bg-opacity-10">
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/profile.png"
                                alt='Profile'
                                width={150}
                                height={150}
                            />
                            <p className="text-white font-abc text-4xl">Update Profile.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3 ms-6`}>
                <div className="container mx-auto mt-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 ms-24 me-24 ">
                        {/* Left column - Editable form */}
                        <div className='bg-green-200 p-6 rounded-md'>
                            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                            <div className="mb-4">
                                <label htmlFor="password" className="block font-semibold mb-1">New Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    value={userData.password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block font-semibold mb-1">Phone No.</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    value={userData.password}
                                    onChange={handlePasswordChange}
                                />
                            </div>

                            <Button variant="contained" color="primary" >
                                Update
                            </Button>
                        </div>

                        {/* Right column - Read-only user details */}
                        <div>
                            <div className="rounded-md bg-cover bg-center bg-no-repeat " >
                                <div className="flex justify-center items-center h-full w-full bg-green-400 bg-opacity-10">
                                    <div className='flex flex-col items-center'>
                                        <Image
                                            src="/profile.png"
                                            alt='Profile'
                                            width={100}
                                            height={100}
                                        />
                                        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Details</h2>

                                    </div>
                                </div>
                                <div className="h-full w-full bg-green-300 bg-opacity-10 p-6">
                                    <div className="mb-4 ">
                                        <p className='text-xl font-abc text-center'><span className='font-semibold'>Role: </span>{userData.role}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className='text-xl font-abc text-center'><span className='font-semibold'>Phone Number: </span>{userData.phoneNumber}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className='text-xl font-abc text-center'><span className='font-semibold'>Phone Number: </span>{userData.email}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
