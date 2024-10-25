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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AdjustTwoToneIcon from "@mui/icons-material/AdjustTwoTone";
export default function Farmers() {
  return (
    <>
      <div className="h-screen w-full">
        <FarmerNav />
        <div className="text-black flex flex-col mt-44 md:px-20 ">
          <div className="w-full mb-20 flex flex-col justify-center items-center">
            <p className="font-abc text-lg md:text-3xl mb-3 text-black font-bold">
              Our Features
            </p>
            <Image
              src="/bottomvine.png"
              width={100}
              height={10}
              className="h-10 md:w-1/3 w-2/3"
            />
          </div>
          <div className="grid mb-24 grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold leading-loose">
                Empowering Farmers with{" "}
                <span className="text-yellow-500">Tools</span> for{" "}
                <span className="text-green-500">Success</span>,{" "}
                <span className="text-blue-500">Growth</span>, and{" "}
                <span className="text-green-400">Sustainability</span>
              </h1>
              <p className="mt-10 text-lg text-gray-600 leading-loose font-abc">
                We offer a diverse range of features designed to help farmers
                achieve success and sustainability. Each feature is carefully
                crafted to address the unique challenges farmers face, while
                providing them with the tools, resources, and support needed to
                thrive in today’s agricultural landscape.
              </p>
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/soil.jpeg"
                width={700}
                height={400}
                alt="Soil Analysis Dashboard"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-6 p-4 items-center">
            <div className="relative flex justify-start">
              <Image
                src="/abouts.jpeg"
                width={600}
                height={400}
                alt="Tractor in the field"
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-abc text-green-500 font-bold leading-loose">
                Farming{" "}
                <span className="text-green-500">Services & Support</span>
              </h1>

              <div className="flex flex-row w-full md:gap-10 lg:gap-32 gap-4 mt-4">
                <div className="flex flex-col gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Agronomy
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Veterinary
                  </button>
                </div>
                <div className="flex flex-col  gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Soil Analysis
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" />
                    Pest management
                  </button>
                </div>
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-loose font-abc">
                From agronomy services that offer tailored guidance on soil
                health, crop selection, and disease prevention, to veterinary
                care that ensures livestock are healthy and productive, Farm
                Fuzion is committed to helping farmers optimize their
                operations. Through soil analysis and pest management
                assistance, we empower farmers to make informed decisions that
                enhance yield, reduce losses, and promote long-term
                sustainability. With these tools, farmers can manage their farms
                more efficiently and effectively, ensuring both immediate
                productivity and future resilience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-6 p-4 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-abc text-green-500 font-bold leading-loose">
                Risk{" "}
                <span className="text-green-500">& Insurance Solutions</span>
              </h1>

              <div className="flex flex-row w-full md:gap-10 lg:gap-32 gap-4 mt-4">
                <div className="flex flex-col gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Livestock
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Equipment
                  </button>
                </div>
                <div className="flex flex-col  gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Crop produce
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" />
                    Health
                  </button>
                </div>
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-loose font-abc">
                Designed to protect farmers from unexpected challenges and
                secure their investments. With crop and livestock insurance,
                farmers can safeguard their operations against losses caused by
                natural disasters, pests, diseases, and other unforeseen events.
                In addition, our farm equipment insurance ensures that essential
                machinery is covered in case of damage or breakdown, minimizing
                costly disruptions. By offering tailored insurance packages,
                Farm Fuzion helps farmers manage risks confidently and focus on
                growth, knowing that their crops, livestock, and equipment are
                well-protected.
              </p>
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/cattle.jpg"
                width={600}
                height={400}
                alt="Tractor in the field"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-6 p-4 items-center">
            <div className="relative flex justify-start">
              <Image
                src="/moneygrow.jpg"
                width={600}
                height={400}
                alt="Tractor in the field"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-abc text-green-500 font-bold leading-loose">
                Financial{" "}
                <span className="text-green-500">Assistance & Growth </span>
              </h1>

              <div className="flex flex-row w-full md:gap-10 lg:gap-32 gap-4 mt-4">
                <div className="flex flex-col gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Loans
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Savings
                  </button>
                </div>
                <div className="flex flex-col  gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Soil Analysis
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" />
                    Remittance
                  </button>
                </div>
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-loose font-abc">
                Tailored to help farmers access the capital they need to expand
                and modernize their operations. We offer flexible farm loans
                that cover everything from purchasing seeds and livestock to
                upgrading infrastructure and expanding acreage. Additionally,
                our equipment financing options make it easier for farmers to
                acquire modern machinery and tools that boost efficiency and
                productivity. By providing affordable loans with flexible
                repayment terms, Farm Fuzion empowers farmers to invest in their
                growth, innovate their practices, and scale their farms for
                long-term success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-6 p-4 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-abc text-green-500 font-bold leading-loose">
                Market{" "}
                <span className="text-green-500">Access & Profitablity </span>
              </h1>

              <div className="flex flex-row w-full md:gap-10 lg:gap-32 gap-4 mt-4">
                <div className="flex flex-row gap-10">
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> Virtual Market
                  </button>
                  <button className="border-2 border-cardfa text-yellow-500 py-2 lg:px-24 px-4 rounded-full">
                    <AdjustTwoToneIcon className="mr-1" /> E-commerce
                  </button>
                </div>
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-loose font-abc">
                Designed to connect farmers directly with buyers, ensuring they
                get fair prices for their produce. Through our virtual
                marketplace, farmers can showcase their crops, livestock, and
                products to a broader audience, eliminating the need for
                middlemen and maximizing their profits. This platform opens up
                new market opportunities, allowing farmers to negotiate better
                deals and access competitive pricing. By simplifying the selling
                process and providing greater visibility, Farm Fuzion helps
                farmers increase their profitability and grow their businesses
                sustainably.
              </p>
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/market.png"
                width={700}
                height={200}
                alt="Tractor in the field"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
