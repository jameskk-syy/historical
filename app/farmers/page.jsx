"use client";
import React, { useState } from "react";
import FarmerNav from "../components/FarmerNav";
import { FaAngleDoubleRight } from "react-icons/fa";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FaGraduationCap } from "react-icons/fa";
import SpaIcon from "@mui/icons-material/Spa";
import Link from "next/link";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
const testimonials = [
  {
    name: "Sarah L., Organic Farm Owner",
    rating: 5,
    testimonial: `Farm Fuzion has transformed the way I manage my farm. The agronomy services helped me optimize my crop yields, and the easy access to insurance has given me peace of mind during tough seasons. I highly recommend their platform for any farmer looking to grow sustainably. With the Farmers Virtual Market, I’ve been able to sell my produce directly to buyers at fair prices without relying on middlemen.`,
    image: "/womanz.png",
  },
  {
    name: "John D., Livestock Farmer",
    rating: 4,
    testimonial: `The platform has made my livestock management much easier. Their team helped me find affordable insurance plans and sell directly to buyers.`,
    image: "/blackfarmer.jpg",
  },
];
export default function Farmers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, rating, testimonial, image } = testimonials[currentIndex];
  return (
    <>
      <div className="h-screen w-full">
        <FarmerNav />
        <div
          className="flex flex-col h-screen pt-48 bg-center bg-cover justify-center items-center"
          style={{
            backgroundImage: "url('/bgop.png')",
          }}
        >
          <div className="px-6 md:px-16 lg:px-32 md:w-3/4 pt-48 md:pt-24 pb-24 md:pb-32 w-full mb-20">
            <div className="mx-auto bg-transparent  text-start px-4 md:px-8 py-2 text-white">
              <p
                className="font-abc text-3xl md:text-4xl mb-4"
                style={{ fontWeight: "500" }}
              >
                <span className="text-homeText">Harvesting </span>
                <span className="ml-2">Tomorrow,</span>
              </p>
              <p
                className="font-abc text-3xl md:text-4xl mb-8 md:mb-14"
                style={{ fontWeight: "500" }}
              >
                <span className="text-homeText">Cultivating </span>
                <span className="ml-2">Today</span>
              </p>
              <p className="mb-2 font-abc font-semibold text-sm md:text-base">
                Where Cutting-Edge Technology Meets Sustainable Agriculture
              </p>
              <p className="font-abc font-semibold text-sm md:text-base">
                Discover how our innovative solutions are transforming farming
                <br className="hidden md:block" />
                practices to cultivate a greener, more productive future
              </p>
              <div className="mt-10 md:mt-14 w-full md:w-1/4">
                <Link
                  href=""
                  className="flex items-center justify-center text-center w-full px-8 md:px-16 text-white text-base md:text-lg font-semibold mt-10 md:mt-14 border-2 py-2 md:py-3 border-customGreen rounded-full font-abc"
                >
                  Get Started <FaAngleDoubleRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white mt-10 flex justify-center h-full">
            <div className="px-6 md:pl-32 md:w-3/4 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-20">
              <div
                className="bg-white justify-center animate-slide-right px-10 items-center flex flex-col shadow-lg z-40 h-32 md:h-48 lg:h-56 w-full md:w-1/3 relative rounded-lg"
                style={{ top: "-40%" }}
              >
                <div className="text-5xl mb-4 border-4 text-center border-customGreen rounded-md w-3/12">
                  <AgricultureIcon className="text-5xl" />
                </div>
                <p className="font-abc text-md font-semibold">
                  E-commerce Intergration for all you needs
                </p>
              </div>
              <div
                className="bg-cardfa justify-center px-4 items-center flex flex-col shadow-lg z-40 h-32 md:h-48 lg:h-56 w-full md:w-1/3 relative rounded-lg"
                style={{ top: "-40%" }}
              >
                <div className="text-5xl mb-4 border-4 text-center border-white rounded-md w-3/12">
                  <SpaIcon className="text-5xl text-white" />
                </div>
                <p className="font-abc textlg font-semibold">
                  Fresh and Organic produce
                </p>
              </div>
              <div
                className="bg-white justify-center animate-slide-left px-4 items-center flex flex-col shadow-lg z-40 h-32 md:h-48 lg:h-56 w-full md:w-1/3 relative rounded-lg"
                style={{ top: "-40%" }}
              >
                <div className="text-5xl px-4 py-2 animate-slide-left mb-4 border-4 text-center border-customGreen rounded-md w-3/12">
                  <Image src="/lives.png" width={40} height={40} alt="live" />
                </div>
                <p className="font-abc textlg font-semibold">
                  Comprehensive care for all livestocks
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-24 flex-col px-4 md:px-48 gap-x-4 md:gap-x-10 md:flex-row">
          <div className="md:w-1/2 w-full  rounded-lg overflow-hidden border-2">
            <Image
              src="/tractor.jpg"
              width={400}
              height={500}
              alt="tractor"
              className="w-full rounded-md h-[60%] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:mt-10 mt-4 justify-center">
            <h1 className="text-lg md:text-3xl font-abc mb-4 text-black leading-relaxed">
              We provide farmers with{" "}
              <span className="text-yellow-500 leading-relaxed">
                innovative tools
              </span>{" "}
              and
              <span className="text-green-500 leading-relaxed">
                {" "}
                access to resources
              </span>{" "}
              that enhance productivity and sustainability.
            </h1>
            <p className="text-gray-700 font-abc leading-loose mt-4">
              By bridging the gap between farm and tech, we ensure that farms of
              all sizes can thrive in today's modern agricultural landscape.
              Leveraging data analytics and IoT to optimize crop management and
              boost yields.
            </p>
            <button className="mt-6  hover:bg-customGreen md:w-1/4 w-5/12 font-bold text-customGreen hover:text-white font-abc py-2 px-4 rounded-lg border-2 border-customGreen flex items-center">
              Learn More{" "}
              <span className="ml-2">
                <ArrowForwardIcon size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex md:mb-10 mb-0  flex-col">
          <div className="w-full mb-12 flex flex-col justify-center items-center">
            <p className="font-abc text-lg md:text-3xl mb-3 text-cardfa font-bold">
              Features we provide
            </p>
            <Image
              src="/bottomvine.png"
              width={100}
              height={10}
              className="h-10 md:w-1/3 w-2/3"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:gap-0 md:px-48 px-6 lg:mb-28 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative md:w-80 w-full p-6 z-20 border-2  border-cardfa rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <ArrowOutwardIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Farmer's Market
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8">
                Platform connecting farmers directly with buyers, empowering
                producers to sell their goods without intermediaries.
              </p>
              <button className="bg-white text-cardfa border border-cardfa hover:bg-cardfa hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Learn More <ArrowForwardIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2 border-green-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <ArrowOutwardIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Affordable Credit
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8">
                Our platform offers flexible loan services to help farmers
                invest in their operations, grow their businesses, and manage
                financial challenges.
              </p>
              <button className="bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Learn More <ArrowForwardIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2 border-green-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <ArrowOutwardIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Agronomy & Veterinary
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8">
                Our solutions provide farmers with crop management strategies
                and personalized advice to optimize yields and improve
                sustainability.
              </p>
              <button className="bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Learn More <ArrowForwardIcon className="ml-2" />
              </button>
            </div>
            <div className="relative md:w-80 w-full p-6 z-20 border-2 border-green-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-3 z-30 -right-3 bg-white rounded-full p-2 shadow-md">
                <ArrowOutwardIcon className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Insurance Service
              </h2>
              <div className="h-1 w-10 bg-yellow-400 mb-3"></div>
              <p className="text-gray-600 mb-8">
                Comprehensive Insurance Services for Farmers: Safeguard your
                farm and crops with our tailored insurance solutions.
              </p>
              <button className="bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center shadow-md">
                Learn More <ArrowForwardIcon className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-full flex mb-24 mt-14 md:mt-0 flex-col px-4 md:px-28 gap-x-4 md:gap-x-10 md:flex-row">
            <div
              className="md:w-1/2 w-full bg-cover overflow-hidden"
              style={{ backgroundImage: "/hallftone.png" }}
            >
              <Image
                src="/customgrowth.png"
                width={400}
                height={300}
                alt="tractor"
                className="w-3/4 rounded-md h-[60%] object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:mt-0">
              <h1 className="text-lg md:text-3xl font-abc mb-4 text-cardfa leading-relaxed">
                Get Custom offers to meet your fruitful needs.
              </h1>
              <p className="text-gray-700 md:pr-24 pr-0 font-abc leading-loose mt-8">
                Farm Fuzion provides innovative features designed to optimize
                modern agriculture, we provide a complete suite of services
                tailored to support and grow your farming business. From expert
                agronomy services and affordable insurance options to loans that
                fuel expansion and a virtual market to connect with buyers,
                we've got everything you and your produce need.
              </p>
              <button className="mt-12  hover:bg-customGreen md:w-1/3 w-2/3 font-bold text-customGreen hover:text-white font-abc py-3 px-6 rounded-full border-2 border-customGreen flex items-center">
                All Features & Services{" "}
                <span className="ml-2">
                  <FaAngleDoubleRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex md:mb-24 mb-10  flex-col">
          <div className="w-full md:mb-32 mb-4 flex flex-col justify-center  items-center">
            <p className="font-abc text-lg md:text-3xl mb-3 text-cardfa font-bold">
              Customer Testmonials
            </p>
            <Image
              src="/bottomvine.png"
              width={100}
              height={10}
              className="h-10 md:w-1/3 w-2/3"
            />
          </div>
          <div className="flex flex-col w-full md:px-40  md:flex-row">
            <div className="w-full flex-col px-4 md:px-0 mb-2 md:mb-0 md:w-2/3">
              <p className="mb-4 text-xl font-abc">{name}</p>
              <div className="flex mb-10">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="yellow"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27l5.18 2.73a.75.75 0 001.09-.79l-1-5.84 4.23-4.1a.75.75 0 00-.42-1.28l-5.85-.85-2.62-5.32a.75.75 0 00-1.35 0L8.77 7.84l-5.85.85a.75.75 0 00-.42 1.28l4.23 4.1-1 5.84a.75.75 0 001.09.79L12 17.27z"
                      />
                    </svg>
                  ))}
              </div>
              <div>
                <p className="font-abc text-lg  md:px-0 md:pr-32 pr-0 leading-loose">
                  {testimonial}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <Image
                src={image}
                height={100}
                width={300}
                alt="fff"
                className="w-11/12 rounded-md"
              />
              <div className="flex mt-4 justify-between items-center  w-1/4 pr-2 flex-row">
                <button
                  className="ml-2 bg-cardfa text-white p-2 rounded-full"
                  onClick={prevTestimonial}
                >
                  <ArrowBackIcon />
                </button>
                <p className="ml-2 p-2">{currentIndex + 1}</p>
                <button
                  className="bg-cardfa text-white p-2 rounded-full"
                  onClick={nextTestimonial}
                >
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-0 flex-col">
          <div className="w-full md:mb-32 mb-6 flex flex-col justify-center items-center">
            <p className="font-abc text-lg md:text-3xl mb-3 text-cardfa font-bold">
              FAQs
            </p>
            <Image
              src="/bottomvine.png"
              width={100}
              height={10}
              className="h-10 md:w-1/3 w-2/3"
            />
          </div>
          <div className="flex flex-col w-full md:px-40  md:flex-row">
            <div className="w-full md:w-1/3">
              <div
                className="md:w-1/2 w-full bg-cover md:mb-0 mb-6 overflow-hidden"
                style={{ backgroundImage: "/hallftone.png" }}
              >
                <Image
                  src="/green.jpeg"
                  width={400}
                  height={400}
                  alt="tractor"
                  className="w-3/4 md:w-full rounded-md md:h-[60%] h-[40%] object-cover"
                />
              </div>
            </div>
            <div className="w-full px-4 md:px-0 md:mt-4 mt-0 md:w-7/12 flex flex-col">
              <div className="border border-gray-300 rounded-lg mb-4">
                <button
                  className="w-full text-left p-4 text-gray-800 font-semibold flex justify-between items-center"
                  onClick={() => toggleFAQ(0)}
                >
                  What are the benefits of using insurance services?
                  <span
                    className={`transform ${
                      openIndex === 0 ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === 0 && (
                  <div className="p-4 bg-gray-100 text-gray-700">
                    Insurance services offer peace of mind, protect your assets,
                    and provide financial support in case of unforeseen events.
                  </div>
                )}
              </div>
              <div className="border border-gray-300 rounded-lg mb-4">
                <button
                  className="w-full text-left p-4 text-gray-800 font-semibold flex justify-between items-center"
                  onClick={() => toggleFAQ(1)}
                >
                  What is covered under insurance?
                  <span
                    className={`transform ${
                      openIndex === 1 ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === 1 && (
                  <div className="p-4 bg-gray-100 text-gray-700">
                    Coverage includes crop loss, equipment damage, and livestock
                    health.
                  </div>
                )}
              </div>
              <div className="border border-gray-300 rounded-lg mb-4">
                <button
                  className="w-full text-left p-4 text-gray-800 font-semibold flex justify-between items-center"
                  onClick={() => toggleFAQ(2)}
                >
                  How to renew policy?
                  <span
                    className={`transform ${
                      openIndex === 2 ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === 2 && (
                  <div className="p-4 bg-gray-100 text-gray-700">
                    Policies can be renewed online via your account dashboard or
                    through our support team.
                  </div>
                )}
              </div>
              <div className="border border-gray-300 rounded-lg">
                <button
                  className="w-full text-left p-4 text-gray-800 font-semibold flex justify-between items-center"
                  onClick={() => toggleFAQ(3)}
                >
                  How do I apply for a loan on the platform?
                  <span
                    className={`transform ${
                      openIndex === 3 ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === 3 && (
                  <div className="p-4 bg-gray-100 text-gray-700">
                    You can apply for a loan by submitting the required
                    documents on the platform and completing the application
                    process.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-right {
          animation: slideRight 0.8s ease-in-out;
        }
        .animate-slide-left {
          animation: slideLeft 0.8s ease-in-out;
        }
      `}</style>
    </>
  );
}
