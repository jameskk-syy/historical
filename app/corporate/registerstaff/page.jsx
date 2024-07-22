"use client"
import React, { useEffect, useState } from 'react'
import TopCoop from '@/app/components/TopCoop';
import Image from 'next/image';
import SB5 from '@/app/components/SB5';
import Axios from 'axios';
import Swal from 'sweetalert2';


export default function RegisterStaff() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleSelected, setRoleSelected] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  useEffect(() => {
   
    const registration= window.localStorage.getItem("registrationNumber");
    setRegistrationNumber(registration)
  })
    const handleSubmit = (e) => {
      setLoading(true)
      e.preventDefault()
      Axios.post("https://us-central1-farmfuzion.cloudfunctions.net/register_coop_staff", {
        role: roleSelected,
        name: name,
        phoneNumber: phone,
        email: email,
        registrationNumber,
        password: password
      })
        .then((response) => {
          console.log("Response:", response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: " Registion Successfully",
            text: "Staff Registered Successfully",
          });
          setLoading(false)

        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: " Registration Failed ",
            text: "Failed Retry !.",
          });
          setLoading(false)
        });
    }


  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <>
      <SB5 isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
        <div className='bg-card mr-4 rounded-md mt-4'>
          <>
            <h1 className="mb-2 ms-3 font-abc text-card3 text-center py-4 text-2xl">Register Staff</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center mt-4 ">
                <div className="flex flex-col w-2/3 mt-4">
                  <label className="m-2">Role</label>
                  <select
                    name='role'
                    onChange={(e) => setRoleSelected(e.target.value)} className="m-2 p-3 border rounded-md"
                    value={roleSelected}
                  >
                    <option value="chairman">Chairman</option>
                    <option value="treasurer">Treasurer</option>
                    <option value="secretary">Secretary</option>
                  </select>
                </div>
                <div className="flex flex-col w-2/3  mt-4">
                  <label className="m-2">{roleSelected == "chairman" ? "Chairman Name" : roleSelected == "secretary" ? "Secretary Name" : roleSelected == "treasurer" ? "Treasurer Name" : "Name"}</label>
                  <input
                    type="text"
                    className="m-2 p-3 border rounded-md border-blue-200"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="flex flex-col w-2/3 mt-4">
                  <label className="m-2">{roleSelected == "chairman" ? "Chairman Phone Number" : roleSelected == "secretary" ? "Secretary Phone Number" : roleSelected == "treasurer" ? "Treasurer Phone Number" : "Phone Number"}</label>
                  <input
                    type="text"
                    className="m-2 p-3 border rounded-md border-blue-200"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="flex flex-col w-2/3 mt-4 ">
                  <label className="m-2"> {roleSelected == "chairman" ? "Chairman Email" : roleSelected == "secretary" ? "Secretary Email" : roleSelected == "treasurer" ? "Treasurer Email" : "Email"}</label>
                  <input
                    type="text"
                    className="m-2 p-3 border rounded-md border-blue-200"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col w-2/3  mt-4 ">
                  <label className="m-2">{roleSelected == "chairman" ? "Chairman Password" : roleSelected == "secretary" ? "Secretary Password" : roleSelected == "treasurer" ? "Treasurer Password" : "Password"}</label>
                  <input
                    type="text"
                    className="m-2 p-3 border rounded-md border-blue-200"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="flex flex-col w-1/4  mt-4 ">
                  <button
                    disabled={loading}
                    type="submit"
                    className="bg-card3 text-white py-2 px-20 rounded-md hover:bg-sidenav hover:text-white"
                  >
                    {loading ? "Registering Staff ..." : "Register Staff"}
                  </button>
                </div>
                <p className="justify-center flex flex-row items-center mt-6">
              <span className='mr-2'>Powered by</span>
              <span className='mb-4'>
                <Image
                  src="/web_color_sign.png"
                  width={40}
                  height={70}
                  objectFit="fill"
                  alt="Farm Fuzion"

                />
              </span>
            </p>
              </div>
            </form>
         
          </>
        </div>
      </div>
    </>
  )
}
