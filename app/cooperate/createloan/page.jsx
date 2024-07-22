"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CreditScore, Info } from '@mui/icons-material';
import SideNav from "@/app/components/AdminSideNav";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import DataTable from "react-data-table-component";

const validateLoanData = (loanData) => {
  const errors = {};

  Object.keys(loanData).forEach(key => {
    if (!loanData[key]) {
      errors[key] = `${key} is required`;
    }
  });

  return errors;
};
export default function CreateLoan() {
  const styles = {
    border: '1px solid #6ac8d8',
    resize: 'none'
  };
const  router =  useRouter();

  const [activeStep, setActiveStep] = useState('createLoan');
  const [loanCategory, setLoanCategory] = useState("Crop Farming Loan");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [minimumloanAmount, setMinimumLoanAmount] = useState("");
  const [maximumloanAmount, setMaximumLoanAmount] = useState("");
  const [graceperiod, setGracePeriod] = useState("");
  const [specialconditions, setSpecialCondtions] = useState("");
  const [interestrate, setInterestRate] = useState("");
  const [disbursementperiod, setDisbursementPeriod] = useState("");
  const [loanterm, setLoanTerm] = useState("");
  const [insurancerequirement, setInsuaranceRequirement] = useState("");
  const [minimummonthlypayment, setMinimumMonthlyPayment] = useState("");
  const [repaymentperiod, setRepaymentPeriod] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [fetchedLoans,setFetchedLoans] =  useState([]);
  const [documentation, setDocumentation] = useState("");
  const [cooperativeId, setCooperativeId] = useState();
  const [additionalconsiderations, setAdditionalConsideration] = useState("");
  const [isLoading,setIsLoading] =  useState(false);
  const [filtered, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const tableHeaderStyle = {
    headCells: {
      style: {
        backgroundColor: "#f3f4ff",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };

  const columns = [
    {
      name: "Loan Category",
      selector: (row) => row.loanCategory,
    },
    {
      name: "Loan Term",
      selector: (row) => row.loanterm,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
    },
  ];
  useEffect(()=>{
     
        setCooperativeId(localStorage.getItem('registrationNumber'));
        console.log(localStorage.getItem('registrationNumber'))
     
  })

  useEffect(() => {
    const cooperativeIds = localStorage.getItem('registrationNumber');
    if (cooperativeIds) {
      async function fetchProducts() {
        try {
          const response = await axios.get(`https://us-central1-farmfuzion.cloudfunctions.net/loan_products?cooperativeId=${cooperativeIds}`);
          setFetchedLoans(response.data.payload);
          setFilter(response.data.payload);
        } catch (error) {
          toast.error(error.message);
        }
      }

      fetchProducts();
    } else {
      toast.error('Cooperative ID not found in localStorage');
    }
  }, []);
  useEffect(() => {
    if(fetchedLoans.length >0){
    const filteredData = fetchedLoans.filter((item) => {
      if (!item) return false;
      const { loanCategory, loanterm, paymentMethod } = item;
      return (
        (loanCategory &&
         loanCategory.toLowerCase().includes(search.toLowerCase())) ||
        (loanterm && loanterm.toLowerCase().includes(search.toLowerCase())) ||
        (paymentMethod &&
          paymentMethod.toString().toLowerCase().includes(search.toLowerCase()))
      );
    });
  
    setFilter(filteredData);}
    
  }, [search,fetchedLoans]);
  

  const handleSubmit = async(e) => {
    setIsLoading(true);

    e.preventDefault();
    const loanData = {
      loanCategory,
      cooperativeId:cooperativeId,
      paymentMethod,
      minimumloanAmount,
      maximumloanAmount,
      graceperiod,
      specialconditions,
      interestrate,
      disbursementperiod,
      loanterm,
      insurancerequirement,
      minimummonthlypayment,
      repaymentperiod,
      eligibility,
      documentation,
      additionalconsiderations
    };
  try {
    if(loanterm !== "" && loanCategory !== ""){
    const response = await axios.post('https://us-central1-farmfuzion.cloudfunctions.net/loan_products',loanData);
    
    if(response.data.status == "success"){
      toast.success("Loan added successfully")
      setIsLoading(false);
      router.push("/cooperate/CDashboard/")
    }}
    else{
      toast.error("All fields  are required")
      setIsLoading(false);
    }
  } catch (error) {
   
      toast.error( error.message);
    
   
  }
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className=" min-h-screen md:h-[100%] sm:overflow-x-hidden">
    <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
    <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
    <div className="container md:mx-auto pt-2">
      {/* Stepper Navigation */}
      <div className="mb-4">
        <nav className="flex">
          <button
            onClick={() => setActiveStep('createLoan')}
            className={`py-2 px-4 border-b-2 ${activeStep === 'createLoan' ? 'border-sky-10' : 'border-transparent'} text-textcolor font-bold rounded-l`}
          >
            Create Loan
          </button>
          <button
            onClick={() => setActiveStep('existingLoans')}
            className={`py-2 px-4 border-b-2 ${activeStep === 'existingLoans' ? 'border-sky-10' : 'border-transparent'} text-textcolor font-bold rounded-r`}
          >
            Existing Loans
          </button>
        </nav>
      </div>

      {/* Create Loan Form */}
      {activeStep === 'createLoan' && (
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12 bg-card text-textcolor font-abc p-4 rounded shadow-lg me-5">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg mb-1 text-[#828282] font-bold">Loan Details</h2>
                <p className="text-xs text-[#828282]">Please Provide the additional information below</p>
              </div>
              <div className="me-5"><CreditScore color="success" /></div>
            </div>

            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Loan Category</label>
                  <select
                    // value={loanCategory}
                    onChange={(e) => setLoanCategory(e.target.value)}
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                  >
                    <option value="Crop Framing Loan">Crop Framing Loan</option>
                    <option value="Livestock Loan">Livestock Loan</option>
                    <option value="Farm Equipment Loan">Farm Equipment Loan</option>
                    <option value="Post Harvest Loan">Post Harvest Loan</option>
                    <option value="Expansion Loan">Expansion Loan</option>
                    <option value="Consumer Loan">Consumer Loan</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <input
                    // value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Minimum Loan Amount</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={minimumloanAmount}
                    onChange={(e) => setMinimumLoanAmount(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Grace Period</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    value={graceperiod}
                    onChange={(e) => setGracePeriod(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Maximum Loan Amount</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={maximumloanAmount}
                    onChange={(e) => setMaximumLoanAmount(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Special Conditions</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={specialconditions}
                    onChange={(e) => setSpecialCondtions(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Interest Rate</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={interestrate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Disbursement Period</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={disbursementperiod}
                    onChange={(e) => setDisbursementPeriod(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Loan Term (Months)</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={loanterm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Insurance Requirement</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={insurancerequirement}
                    onChange={(e) => setInsuaranceRequirement(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700">Minimum Monthly Payment</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={minimummonthlypayment}
                    onChange={(e) => setMinimumMonthlyPayment(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-sm font-medium text-gray-700">Repayment Period</label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    style={styles}
                    // value={repaymentperiod}
                    onChange={(e) => setRepaymentPeriod(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-4/12 bg-card text-textcolor font-abc p-3 rounded mx-2 mt-2">
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="text-lg mb-1 text-[#828282] font-bold">Terms and Conditions</h2>
                <p className="text-xs text-[#828282]">Kindly note that these will be displayed to your members</p>
              </div>
              <div className="me-5"><Info color="success" /></div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Eligibility</label>
              <textarea
                className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                style={styles}
                rows="5"
                required
                // value={eligibility}
                onChange={(e) => setEligibility(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Documentation</label>
              <textarea
                className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                style={styles}
                rows="5"
                // value={documentation}
                onChange={(e) => setDocumentation(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Additional Considerations</label>
              <textarea
                className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                style={styles}
                rows="5"
                // value={additionalconsiderations}
                onChange={(e) => setAdditionalConsideration(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                disabled={isLoading}
                className="px-4 w-full py-2 bg-card3 hover:bg-teal-700 font-bold text-white rounded"
              >
                {isLoading ? "Creating Loan" : "Create Loan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeStep === 'existingLoans' && (
        <div id="existingLoans" className="md:border-t md:border-2 border-gray-200 border-t p-4 mt-20 rounded shadow-md">
            <DataTable
            customStyles={tableHeaderStyle}
              columns={columns}
              data={filtered}
              pagination
              paginationPerPage={3}
              fixedHeader
              selectableRowsHighlight
              highlightOnHover
              subHeader
              subHeaderComponent={
                <input
                  placeholder="Search..."
                  style={{
                    padding: "8px 40px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "3px",
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              }
            />
        </div>
      )} 
    </div>
    </div>
    </div>
  );
}
