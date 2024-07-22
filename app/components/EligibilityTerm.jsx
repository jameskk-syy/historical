import React from 'react';
import { InfoOutlined } from "@mui/icons-material";

const EligibilityTerm = ({ show ,onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed z-10 inset-0">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
          <div className="text-white bg-lavender py-4 px-6 flex justify-end items-center">
            {/* <InfoOutlined className="justify-center mr-20 text-red-700 text-3xl"/> */}
            <button
              onClick={onClose}
              className="text-red-700 hover:text-red-500 ml-20 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 bg-card z-index-10 h-96 overflow-y-auto">
            <form>
              <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-xl text-card3 font-semibold text-left  mb-6">
                  Loan Eligibility Requirements
                </h1>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Personal Information</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Age: Must be at least 18 years old.</li>
                    <li>Citizenship: Must be a citizen or permanent resident of the country.</li>
                    <li>Identification: Must provide a valid government-issued ID (e.g. driver license passport).</li>
                    <li>Residency: Must provide proof of current address (e.g. utility bill lease agreement).</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Employment and Income</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Employment Status: Must be employed or have a stable source of income.</li>
                    <li>Employment Duration: Must have been employed at the current job for a minimum period (e.g. 6 months to 1 year).</li>
                    <li>Monthly Income: Must meet a minimum income threshold which can vary depending on the loan amount and type.</li>
                    <li>Proof of Income: Must provide recent pay stubs tax returns or bank statements as proof of income.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Financial Stability</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Credit Score: Must have a minimum credit score (the specific score required can vary by lender).</li>
                    <li>Credit History: Must have a clean credit history without recent bankruptcies foreclosures or significant delinquencies.</li>
                    <li>Debt-to-Income Ratio: Must have a debt-to-income ratio below a certain threshold (e.g. 40%).</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Assets and Liabilities</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Bank Account: Must have an active checking or savings account.</li>
                    <li>Collateral: If applicable must provide collateral for secured loans (e.g. property vehicle).</li>
                    <li>Other Assets: Disclosure of other assets (e.g. investments real estate) can be required for larger loans.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Documentation</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Loan Application: Must complete and sign a loan application form.</li>
                    <li>Consent for Credit Check: Must consent to a credit check and verification of financial information.</li>
                    <li>References: May need to provide personal or professional references.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Legal and Regulatory Compliance</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Legal Standing: Must not have any outstanding judgments or legal actions that could impact the ability to repay the loan.</li>
                    <li>Bankruptcy: Must not have declared bankruptcy in the recent past (e.g. last 5-7 years).</li>
                    <li>Anti-Fraud Measures: Must pass anti-fraud checks including verification of identity and employment.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-card3">Additional Considerations for Specific Loan Types</h2>
                  <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>
                      Mortgage Loans
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Property Appraisal: Must provide a property appraisal report.</li>
                        <li>Down Payment: Must have a minimum down payment amount.</li>
                        <li>Home Insurance: Must provide proof of home insurance.</li>
                      </ul>
                    </li>
                    <li>
                      Auto Loans
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Vehicle Information: Must provide details of the vehicle being purchased.</li>
                        <li>Vehicle Insurance: Must provide proof of vehicle insurance.</li>
                      </ul>
                    </li>
                    <li>
                      Personal Loans
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Purpose of Loan: Must specify the purpose of the loan (e.g. debt consolidation medical expenses).</li>
                      </ul>
                    </li>
                    <li>
                      Business Loans
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Business Plan: Must provide a detailed business plan and financial projections.</li>
                        <li>Business Financials: Must provide business financial statements and tax returns.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EligibilityTerm;
