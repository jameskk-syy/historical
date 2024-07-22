"use client";
import SideNav from '@/app/components/SideNav';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Axios from 'axios';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function LoanApplication() {
  const [ids,setIds] = useState();
  const [agronomyServices,setagronomyServices] = useState([]);
  const [agronomyFetch,setagronomyFetched] = useState([]);
  const router = useRouter();
  const [id,setId] = useState()
  const [dateAndTimeRequested,setAppointmentDateTime] = useState("");
  const [farmName,setFarmNAame] = useState("");
  const [farmLocation,setFarmLocation] =  useState("");
  const [farmSize,setFarmSize] = useState("");
  const [cropAffected,setAffectedCrop] = useState("");
  const [livestockAffected,setlivestockAffected] = useState("");
  const [typeOfAttack,settypeOfAttack] = useState("");

  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    setId(id);
  })

  useEffect(() => {
    const cooperativeIds = window.localStorage.getItem('registrationNumber');
    if (id) {
      setIds(id);
      async function getLoanDetails(){
         const  response = await axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/agronomy?cooperativeId=${cooperativeIds}`);
        //  setagronomyServices(response.data.payload);
        setagronomyServices(response.data.payload);
     
      }
      getLoanDetails();
    }
  }, [id]);


  useEffect(() => {
    agronomyServices.forEach(agro => {
      if (agro.serviceName === ids) {
        const agronomyObject = Object.fromEntries(Object.entries(agro));
        setagronomyFetched(agronomyObject);
      }
    },[ids,agronomyServices]);
   
  });  
  const [loading ,setLoading] = useState(false)
  const [userData, setUserData] = useState({
    fullName: '',
    phoneNumber: '',
    idNumber: '',
    email: '',
    county: '',
    address: '',
    maritalStatus: '',
    householdMembers: '',
    gender: '',
    educationLevel: '',
    employmentStatus: '',
    employeeName: '',
    monthlyIncome: '',
    totalYearlyIncome: '',
    bankAccountNumber: '',
    modeOfPayment: '',

  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setUserData({
        fullName: localStorage.getItem("fullName") || '',
        phoneNumber: localStorage.getItem("phoneNumber") || '',
        idNumber: localStorage.getItem("idNumber") || '',
        email: localStorage.getItem("email") || '',
        county: localStorage.getItem("county") || '',
        address: localStorage.getItem("address") || '',
        maritalStatus: localStorage.getItem("maritalStatus") || '',
        householdMembers: localStorage.getItem("householdMembers") || '',
        gender: localStorage.getItem("gender") || '',
        educationLevel: localStorage.getItem("educationLevel") || '',
        employmentStatus: localStorage.getItem("employmentStatus") || '',
        employeeName: localStorage.getItem("employeeName") || '',
        monthlyIncome: localStorage.getItem("monthlyIncome") || '',
        totalYearlyIncome: localStorage.getItem("totalYearlyIncome") || '',
        bankAccountNumber: localStorage.getItem("bankAccountNumber") || '',
        modeOfPayment: localStorage.getItem("modeOfPayment") || '',
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [registrationNumber, setRegistrationNumber] = useState();


  useEffect(()=>{
    const regiNo = window.localStorage.getItem("registrationNumber")
    setRegistrationNumber(regiNo)
    // console.log("RegiNo:" ,regiNo)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    Axios.post('https://us-central1-farmfuzion.cloudfunctions.net/agronomy_requests', {
      ...userData,
      registrationNumber:registrationNumber,
      serviceName:agronomyFetch.serviceName,
      servicePrice:agronomyFetch.serviceAmount,
      serviceFrequency:agronomyFetch.serviceFrequency,
      dateAndTimeRequested,
      farmName,
      farmLocation,
      farmSize,
      cropAffected,
      livestockAffected,
      typeOfAttack
    })
    .then((response) => {
        console.log("Response Status:", response);
        console.log("Response:", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Agronomy Service Request Sent',
          text: 'Wait for Approval!',
        });
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Agronomy Service Request Not Sent.',
          text: 'Please try again.',
        });
    });    
  };

  const [activeTab, setActiveTab] = useState('loan');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

//   console.log("loan fetch ", agronomyFetch)


  return (
    <div className='flex flex-col min-h-screen md:h-[100%]'>
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"} sm:ml-3 mt-4 me-3`}>
        <div className='flex flex-col sm:flex-row mx-10 flex-grow mt-1 me-3'>
          <div className="w-full">
            <div className='flex flex-row'>
              <div
               
                className={`flex items-center cursor-pointer ${activeTab === 'loan' ? 'text-white border-b-4 border-sidenav' : ''}`}
                style={{ borderRadius: '0.375rem', padding: '0.75rem', marginRight: '0.5rem' }}
                onClick={() => handleTabChange('loan')}
              >
                <p className="mr-2 text-xl font-abc font-semibold text-textcolor">Agronomy REQUEST</p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${activeTab === 'savings' ? 'text-white border-b-4 border-sidenav' : ''}`}
                style={{ borderRadius: '0.375rem', padding: '0.75rem' }}
                onClick={() => handleTabChange('savings')}
              >
                <p className='mr-2 text-xl font-abc font-semibold text-textcolor'>Service Payment</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className='bg-card'>
              <div className='flex flex-col w-full bg-card sm:px-3 md:justify-center md:p-2 mt-6 md:flex-col'>
                <div className='flex flex-col p-1 sm:flex-row w-full gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full sm:mx-2 md:m-2 p-2 border border-blue-200 rounded-md"
                      onChange={handleInputChange}
                      value={userData.fullName}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Phone number</label>
                  
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="2547123456789"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.phoneNumber}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">ID number</label>
                    <input
                      type="text"
                      name="idNumber"
                      className="w-full sm:mx-2 md:m-2 p-2 border border-blue-200 rounded-md"
                      onChange={handleInputChange}
                      value={userData.idNumber}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.email}
                    />
                  </div>
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">County</label>
                    <input
                      type="text"
                      name="county"
                      className="w-full md:m-2 sm:mx-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.county}
                    />
                  </div>
                  <div className='flex sm:px-2 flex-col md:w-3/12'>
                    <label className="m-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="w-full sm:mx-2 p-2 md:m-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.address}
                    />
                  </div>
                  {/* <div className='flex sm:px-2 flex-col md:w-3/12'>
                    <label className="m-1">Marital status</label>
                    <input
                      type="text"
                      name="maritalStatus"
                      className="w-full sm:mx-2 p-2 md:m-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.maritalStatus}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Marital status</label>
                    <select
                      name="maritalStatus"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.maritalStatus}
                    >
                      <option value="" disabled>Select Marital status</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className='flex sm:px-2 flex-col md:w-3/12'>
                    <label className="m-1">Household members</label>
                    <input
                      type="text"
                      name="householdMembers"
                      className="w-full sm:mx-2 p-2 md:m-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.householdMembers}
                    />
                  </div>
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Gender</label>
                    <select
                      name="gender"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.gender}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Education level</label>
                    <select
                      name="educationLevel" // Ensure the name matches your state key
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.educationLevel || ''}
                    >
                      <option value="" disabled>Select Education level</option>
                      <option value="primary school">Primary School</option>
                      <option value="Secondary school">Secondary School</option>
                      <option value="University">University</option>
                    </select>
                  </div>

                  {/* <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Education level</label>
                    <input
                      type="text"
                      name="educationLevel"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.educationLevel}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Employment status</label>
                    <select
                      name="employmentStatus"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.employmentStatus}
                    >
                      <option value="" disabled>Employment status</option>
                      <option value="EMPLOYED">EMPLOYED</option>
                      <option value="NOT EMPLOYED">NOT EMPLOYED</option>

                    </select>
                  </div>
                  {/* <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Employment status</label>
                    <input
                      type="text"
                      name="employmentStatus"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.employmentStatus}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Employee name</label>
                    <input
                      type="text"
                      name="employeeName"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.employeeName}
                    />
                  </div>
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Monthly income</label>
                    <input
                      type="text"
                      name="monthlyIncome"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.monthlyIncome}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Total yearly income</label>
                    <input
                      type="text"
                      name="totalYearlyIncome"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.totalYearlyIncome}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Farm Name</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e)=> setFarmNAame(e.target.value)}
                      value={farmName}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Bank account number</label>
                    <input
                      type="text"
                      name="bankAccountNumber"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.bankAccountNumber}
                    />
                  </div>
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Service Name</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                    //   onChange={}
                      value={agronomyFetch.serviceName}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Service Price</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                    //   onChange={}
                      value={agronomyFetch.serviceAmount}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Service Frequency</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                    //   onChange={(e)=}
                      value={agronomyFetch.serviceFrequency}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Mode of payment</label>
                    <select
                      name="modeOfPayment"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.modeOfPayment}
                    >
                      <option value="" disabled>Mode of payment</option>
                      <option value="bank">BANK</option>
                      <option value="mpesa">MPESA</option>
                      <option value="airtel">AIRTEL</option>
                      <option value="momo">MOMO</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-2'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Appointment Date/Time</label>
                    <input
                      type="datetime-local"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e)=> setAppointmentDateTime(e.target.value)}
                      value={dateAndTimeRequested}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Farm Location</label>
                    <input
                      type="text"
                     
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e) => setFarmLocation(e.target.value)}
                      value={farmLocation}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Farm Size</label>
                    <input
                      type="text"
                   
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e) => setFarmSize(e.target.value)}
                      value={farmSize}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-1">Crop Affected</label>
                    <input
                      type="text"
                  
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e) => setAffectedCrop(e.target.value)}
                      value={cropAffected}
                    />
                  </div>
                  
                </div>
                <div className='flex flex-col p-2 sm:flex-row gap-2'>
                  <div className='flex flex-col sm:px-2 md:w-1/2'>
                    <label className="m-1">Livestock Affected</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e) => setlivestockAffected(e.target.value)}
                      value={livestockAffected}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-1/2'>
                    <label className="m-1">Type of Attack</label>
                    <input
                      type="text"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={(e) => settypeOfAttack(e.target.value)}
                      value={typeOfAttack}
                    />
                  </div>      
                </div>
                <div className='flex justify-center'>
                  <button disabled={loading} type="submit" className="bg-card3 hover:bg-card3-200 text-white font-bold py-2 px-4 rounded mt-4">
                   {loading ? "Submiting Agronomy Service Request"  : "Submit Agronomy Service  Request"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
