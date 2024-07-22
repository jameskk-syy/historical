"use client";
import React, { useState, useEffect } from "react";
import SB5 from "@/app/components/SB5";
import TopCoop from "@/app/components/TopCoop";
import axios from "axios";

const FaqQuiz = () => {
  const [formData, setFormData] = useState({
    column1: { title: "", description: "" },
    column2: { title: "", description: "" },
    column3: { title: "", description: "" },
    column4: { title: "", description: "" },
  });
  const [cooperativeId, setCooperativeId] = useState();
  const [savedData, setSavedData] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleChange = (column, field, value) => {
    setFormData({
      ...formData,
      [column]: {
        ...formData[column],
        [field]: value,
      },
    });
  };

  useEffect(() => {
    setCooperativeId(localStorage.getItem("registrationNumber"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationNumber = cooperativeId;

    const extractFaqs = (formData) => {
      return Object.values(formData).map(({ title, description }) => ({
        registrationNumber,
        title,
        message: description,
      }));
    };

    const faqs = extractFaqs(formData);
    setSavedData([...savedData, ...faqs]);

    // try {
    //   const response = await axios.post(
    //     `https://us-central1-farmfuzion.cloudfunctions.net/faqs`,
    //     { faqs }
    //   );
    //   console.log("Response:", response);
    // } catch (error) {
    //   console.error("Error saving data:", error);
    // }

    faqs.map(faq=>{
      console.log("here is faqs", faq);
    })
  };

  const styles = {
    resize: "none",
  };

  return (
    <div className="min-h-screen md:h-[100%] sm:overflow-x-hidden">
      <SB5 isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <div className="mt-2 xb:ml-5">
          <TopCoop />
        </div>
      </div>
      <div
        className={`flex flex-row sm:flex-row b-6 transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } sm:ml-3 mt-4 me-3 px-5`}
      >
        <form onSubmit={handleSubmit} className="w-full h-3/4 mt-5">
          <p className="text-card3 text-xl font-abc font-semibold mb-3">Setting FAQS</p>
          <div className="mx-auto bg-card p-8 rounded-lg h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(formData).map((column, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xl font-semibold mb-2">FAQ {index + 1}</h2>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    style={styles}
                    value={formData[column].title}
                    onChange={(e) => handleChange(column, "title", e.target.value)}
                    className="mt-1 py-3 block w-full shadow-sm sm:text-sm border shadow border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    value={formData[column].description}
                    style={styles}
                    rows={10}
                    onChange={(e) => handleChange(column, "description", e.target.value)}
                    className="mt-1 p-2 block shadow w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
            <div className="flex md:justify-end lg:justify-end sm:w-full col-span-full">
              <button type="submit" className="bg-card3 hover:bg-opacity-75 text-white px-20 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqQuiz;
