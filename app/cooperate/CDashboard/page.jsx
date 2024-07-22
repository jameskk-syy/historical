"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import TopCoop from "@/app/components/TopCoop";
import SB5 from "@/app/components/SB5";
import BarCharts from "@/app/components/BarCharts";
import { Group, GroupAddOutlined, GroupOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Cooperative_Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const [cooperativeName, setCooperativeName] = useState("");
  useEffect(() => {
    setCooperativeName(window.localStorage.getItem("cooperativeName"));
  }, []);
  return (
    <>
      <SB5
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-col transition-all duration-200 ease-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-24"
        } mt-4 me-3`}
      >
        <div className={`mt-0 xb:ml-5 `}>
          <TopCoop cooperativeName={cooperativeName} />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 mt-8">
          <div className="flex flex-col lg:w-3/4 w-full">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card1">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-card3">
                      Total Members
                    </p>
                    <p className="text-3xl font-abc text-card3 mt-4">250</p>
                  </div>
                  <div>
                    <Group className="text-card3 text-5xl" />
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card2">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-card3">Total Service</p>
                    <p className="text-3xl font-abc text-card3 mt-4">25</p>
                  </div>
                  <div>
                    <GroupAddOutlined className="text-card3 text-5xl" />
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md lg:w-4/12 w-full p-4 bg-card3">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-2xl font-abc text-white">
                      Total Loans
                    </p>
                    <p className="text-3xl font-abc text-white mt-4">2</p>
                  </div>
                  <div>
                    <Group className="text-white text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shadow mt-14" style={{ height: "550px" }}>
              <BarCharts />
            </div>
          </div>
          <div className="shadow-md rounded-md lg:w-1/4 w-full bg-card">
            <p className="p-2">Daily Activities Logs</p>
            <div className="flex flex-row p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Ten loans approved and disbursed</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 border-b-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Two hundred loans pending for approval</p>
              </div>
            </div>
            <p className="p-2">Recent activities</p>
            <div className="flex flex-row mt-2 border-b-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>Livestock management</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 p-2 gap-4 border-b-2">
              <button className="w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="/corporate/registerstaff">Add Staff</Link>
              </button>
              <button className="w-full py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="/cooperate/register">Register member</Link>
              </button>
            </div>
            <p className="p-2">Manage Claims</p>
            <div className="flex flex-row mt-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>John the farmer</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 p-2">
              <Image
                src="/about.jpeg"
                width={40}
                height={40}
                alt="activities log"
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p>John the farmer</p>
                <p>Progress</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mx-4 mb-8">
              <button className="w-3/4 py-2 bg-card3 hover:bg-opacity-75 font-bold text-white rounded-md">
                <Link href="">Manage complaints</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
