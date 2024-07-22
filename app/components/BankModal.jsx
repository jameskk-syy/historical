import React from "react";

export default function BankPaymentForm({ show, onClose, handlePayment, phoneNumber, setPhoneNumber, amount, setAmount }) {
    if (!show) return null;
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
                    <div className="bg-sidenav text-white py-4 px-6 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Enter Bank Payment Details</h2>
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
                            <div>
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">Account Holder Name*</label>
                                    <input id="accountHolderName" className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm  focus:border-green-500  rounded-md" type="text"
                                        placeholder="Eg James Doe" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name*</label>
                                    <input id="bankName" className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm  focus:border-green-500  rounded-md" type="text" placeholder="Bank Name" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number*</label>
                                    <input id="accountNumber" className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm  focus:border-green-500  rounded-md" type="text" placeholder="****" />
                                </div>
                                <div className="flex flex-row mb-4 ">
                                   <div className="mr-2 flex flex-col">
                                   <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">Expiration*</label>
                                   <input
                                        type="text"
                                        id="amount"
                                        className="mt-1 block w-full px-3 py-3 shadow-lg sm:text-sm   rounded-md"
                                        
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                   </div>
                                   <div className="flex flex-col">
                                   <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">CVV*</label>
                                   <input
                                        type="text"
                                        id="amount"
                                        className="mt-1 mr-2 block w-full px-3 py-3 shadow-lg sm:text-sm   rounded-md"
                                        
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                   </div>
                                </div>
                                <div className="flex justify-center mt-3">
                                    <button onClick={handlePayment} className="bg-sidenav w-full text-white hover:bg-lavender hover:text-black font-abc py-3 px-10 md:px-28 rounded-lg">
                                        Make Payment
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
