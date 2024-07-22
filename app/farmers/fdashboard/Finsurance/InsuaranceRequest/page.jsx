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
  const [loanCategorys,setLoanCategorys] = useState([]);
  const [loanfetch,setFetchedLoan] = useState([]);
  const router = useRouter();
  const [id,setId] = useState()
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
         const  response = await axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/policies?registrationNumber=${cooperativeIds}`);
         setLoanCategorys(response.data.payload);
      }
      getLoanDetails();
    }
  }, [id]);
  useEffect(() => {
    loanCategorys.forEach(loan => {
      if (loan.coverageType === ids) {
        const loanObject = Object.fromEntries(Object.entries(loan));
        setFetchedLoan(loanObject);
      }
    });
  }, [ids, loanCategorys]);  

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
    console.log("RegiNo:" ,regiNo)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(loanfetch.coverageType == "" || userData.address == ""){
      toast.error("All fields are required")
    }else{
    setLoading(true)
    Axios.post('https://us-central1-farmfuzion.cloudfunctions.net/insurance_requests', {
      ...userData,
      registrationNumber,
      policyName: loanfetch.policyName,
      coverageType: loanfetch.coverageType,
      coverageAmount:loanfetch.coverageAmount,
      premiumAmount: loanfetch.premiumAmount,

    })
    .then((response) => {
        console.log("Response:", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Insurance Request Sent',
          text: 'Wait for Approval!',
        });
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Insurance Request Not Sent.',
          text: 'Please try again.',
        });
    });
}   
  };


  const [activeTab, setActiveTab] = useState('insurance');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };



  return (
    <div className='flex flex-col min-h-screen md:h-[100%]'>
      <SideNav
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? "md:ml-64" : "md:ml-24"} sm:ml-3 mt-4 me-3`}>
        <div className='flex flex-col sm:flex-row mx-10 flex-grow mt-6 me-3'>
          <div className="w-full">
            <div className='flex flex-row'>
              <div
               
                className={`flex items-center cursor-pointer ${activeTab === 'insurance' ? 'text-white border-b-4 border-sidenav' : ''}`}
                style={{ borderRadius: '0.375rem', padding: '0.75rem', marginRight: '0.5rem' }}
                onClick={() => handleTabChange('insurance')}
              >
                <p className="mr-2 text-xl font-abc font-semibold text-textcolor">Insurance Request</p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${activeTab === 'InsurancePayment' ? 'text-white border-b-4 border-sidenav' : ''}`}
                style={{ borderRadius: '0.375rem', padding: '0.75rem' }}
                onClick={() => handleTabChange('InsurancePayment')}
              >
                <p className='mr-2 text-xl font-abc font-semibold text-textcolor'>Insurance Payment</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className='bg-card'>
              <div className='flex flex-col w-full bg-card sm:px-3 md:justify-center md:p-10 mt-6 md:flex-col'>
                <div className='flex flex-col p-2 sm:flex-row w-full gap-4'>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full sm:mx-2 md:m-2 p-2 border border-blue-200 rounded-md"
                      onChange={handleInputChange}
                      value={userData.fullName}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Phone number</label>
                  
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
                    <label className="m-2">ID number</label>
                    <input
                      type="text"
                      name="idNumber"
                      className="w-full sm:mx-2 md:m-2 p-2 border border-blue-200 rounded-md"
                      onChange={handleInputChange}
                      value={userData.idNumber}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Email</label>
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
                    <label className="m-2">County</label>
                    <input
                      type="text"
                      name="county"
                      className="w-full md:m-2 sm:mx-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.county}
                    />
                  </div>
                  <div className='flex sm:px-2 flex-col md:w-3/12'>
                    <label className="m-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="w-full sm:mx-2 p-2 md:m-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.address}
                    />
                  </div>
                  {/* <div className='flex sm:px-2 flex-col md:w-3/12'>
                    <label className="m-2">Marital status</label>
                    <input
                      type="text"
                      name="maritalStatus"
                      className="w-full sm:mx-2 p-2 md:m-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.maritalStatus}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Marital status</label>
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
                    <label className="m-2">Household members</label>
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
                    <label className="m-2">Gender</label>
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
                    <label className="m-2">Education level</label>
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
                    <label className="m-2">Education level</label>
                    <input
                      type="text"
                      name="educationLevel"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.educationLevel}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Employment status</label>
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
                    <label className="m-2">Employment status</label>
                    <input
                      type="text"
                      name="employmentStatus"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.employmentStatus}
                    />
                  </div> */}
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Employee name</label>
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
                    <label className="m-2">Monthly income</label>
                    <input
                      type="text"
                      name="monthlyIncome"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.monthlyIncome}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Total yearly income</label>
                    <input
                      type="text"
                      name="totalYearlyIncome"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      onChange={handleInputChange}
                      value={userData.totalYearlyIncome}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Coverage Amount</label>
                    <input
                      type="text"
                      name="desiredLoanAmount"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      value={loanfetch.coverageAmount}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Bank account number</label>
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
                    <label className="m-2">Coverage Type</label>
                    <input
                      type="text"
                      name="purposeLoan"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      value={ids}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Insurance Status</label>
                    <input
                      type="text"
                      name="loanStatus"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      value={loanfetch.policyStatus}
                      readOnly
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Policy Name</label>
                    <input
                      type="text"
                      name="insuranceCover"
                      className="w-full sm:mx-2 md:m-2 p-2 border-blue-200 border rounded-md"
                      value={loanfetch.policyName}
                    />
                  </div>
                  <div className='flex flex-col sm:px-2 md:w-3/12'>
                    <label className="m-2">Mode of payment</label>
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
                <div className='flex justify-center'>
                  <button disabled={loading} type="submit" className="bg-card3 hover:bg-card3-200 text-white font-bold py-2 px-4 rounded mt-4">
                   {loading ? "Submiting Insurance Request"  : "Submit Insurance Request"}
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
