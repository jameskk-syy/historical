import { InfoOutlined } from "@mui/icons-material";
import React from "react";

export default function LoanDecline({ show, onClose }) {
  if (!show) return null;
  const styles = {
    resize: 'none'
  };


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative  bg-white  rounded-lg shadow-md overflow-hidden max-w-md w-full">
          <div className=" text-white  bg-lavender py-4 px-6 flex justify-end items-center">
            <InfoOutlined className="justify-center mr-20 text-red-700 text-3xl"/>
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
          <div className="p-6 bg-card  z-index-10">
            <form >
              <div className="flex mb-4 flex-col">
                <label htmlFor="">Please enter reason for rejecting</label>
                <textarea
                className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                style={styles}
                rows="5"
              ></textarea>
              </div>
              <div className="flex flex-col mb-5">
              <label htmlFor="">Please enter your name</label>
              <input
                    type="text"
                    className="mt-1 p-2 block w-full border rounded-lg shadow-md"
                    // value={minimummonthlypayment}
                  />
              </div>
              <div className="flex flex-row justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 w-full py-2 bg-red-500 mr-3  hover:bg-red-400 font-bold text-white rounded"
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 w-full py-2 bg-card3 hover:opacity-75 font-bold text-white rounded"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
