import React from "react";

export default function ModalForm({ show, onClose, handlePayment, phoneNumber, setPhoneNumber, amount, setAmount }) {
  if (!show) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
          <div className="bg-sidenav text-white py-4 px-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Enter Mobile Payment Details</h2>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label htmlFor="provider" className="block text-sm font-abd text-textcolor">
                  Select Mobile Provider
                </label>
                <select
                  id="provider"
                  className="mt-1 block w-full px-3 py-3 rounded-md border-gray-800 shadow-lg  sm:text-sm"
                >
                  <option value="Mpesa">Mpesa</option>
                  <option value="Airtel Money">Airtel Money</option>
                  <option value="Equitel">Equitel</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNo" className="block text-sm font-abd text-textcolor">
                  Enter Mobile No
                </label>
                <input
                  type="text"
                  id="mobileNo"
                  className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm  focus:border-green-500  rounded-md"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="amount" className="block text-sm font-abd text-textcolor">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm   rounded-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-sidenav w-full text-white hover:bg-lavender hover:text-black font-abc py-3 px-10 md:px-28 rounded-lg"
                >
                  Add to Savings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
