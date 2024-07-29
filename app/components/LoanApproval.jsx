"use client"
import React, { useState } from 'react'
import { InfoOutlined } from "@mui/icons-material";
import axios from 'axios';
import toast from "react-hot-toast";
const LoanApproval = ({ show, onClose,amount,role,uid,phoneNumber, }) => {
  const[username, setUsername] = useState("");


  const handleApproval = async(e) =>{
   e.preventDefault();
  //  console.log("my phone number", phoneNumber,role,uid,username)
   if(role == "secretary"){
   try {
    const response =  await axios.post(`https://us-central1-farmfuzion.cloudfunctions.net/loan_approvals?role=${role}&username=${username}`,{
      uid,phoneNumber,username
    });
    console.log("response info", response.data)
    if(response.data.statusCode == 200){
     toast.success("loan approval was successful");
    }else if(response.data.statusCode == 400){
    toast.error("loan already approved")
     
    }
    else{
      toast.error("loan approval failed")
    }
   } catch (error) {
    toast.error("loan approval failed")
   }}
   else if(role == "treasurer"){
    try {
      const response =  await axios.post(`https://us-central1-farmfuzion.cloudfunctions.net/loan_approvals?role=${role}&username=${username}`,{
        uid
      });
      console.log("response info", response.data)
      if(response.data.statusCode == 200){
       toast.success("loan approval was successful");
      }else if(response.data.statusCode == 400){
        toast.error("loan already approved")
         
        }
        else{
          toast.error("loan approval failed")
        }
     } catch (error) {
      toast.error("loan approval failed")
     }
   }
   else if(role == "chairman"){
    try {
      const response =  await axios.post(`https://us-central1-farmfuzion.cloudfunctions.net/loan_approvals?role=${role}&username=${username}`,{
        uid
      });
      console.log("response info", response.data)
      if(response.data.statusCode == 200){
       toast.success("loan approval was successful");
       
      }else if(response.data.statusCode == 400){
        toast.error("loan already approved")
         
        }
        else{
          toast.error("loan approval failed")
        }
     } catch (error) {
      toast.error("loan approval failed")
     }
   }

  }
 if (!show) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
        <div className=" bg-lavender justify-between py-4 px-6 flex  items-center">
          <p className='text-black-700'>Loan Approval</p>
          <button
            onClick={onClose}
            className="text-red-700 hover:text-red-400 ml-20 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 bg-card z-index-10">
          <form >
             <div className="flex flex-col mb-5">
             <label className='text-sm' htmlFor="">Enter Approver Name</label>
             <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                  />
             </div>
             <div className="flex flex-col mb-5">
             <label className='text-sm' htmlFor="">Applied Amount</label>
             <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    value={amount}
                  />
             </div>
             <div className="flex flex-row justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 w-full hover:bg-red-400 py-2 bg-red-500 mr-3  font-bold text-white rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleApproval}
                className="px-4 w-full py-2 bg-card3 hover:opacity-75 font-bold text-white rounded"
              >
                Approve
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoanApproval
