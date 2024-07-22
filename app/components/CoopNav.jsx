"use client";
import { Close, Landscape, Menu } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoopNav() {
  let Links = [
    { name: "Home", link: "/cooperate/homeCoop" },
    { name: "About", link: "#about" },
    { name: "Market", link: "/cooperate/homeCoop" },
    { name: "Dashboard", link: "/cooperate/CDashboard" },
    { name: "Profile", link: "/cooperate/CDashboard/CProfile" },
  ];
  const [open, setOpen] = useState(false);

  const [viewportWidth, setViewportWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-b-0 w-full fixed top-0 left-0 z-10">
      <div className="md:flex justify-between items-center  py-4 md:px-10 px-7">
        <div className="flex flex-col ">
          {/* {viewportWidth > 430 && ( */}
          <span
            className={`text-3xl text-green-500 mr-1 pt-2 ${
              viewportWidth <= 430 ? "hidden" : ""
            }`}
          >
            <Image
              src="/FARMFUZION.png"
              width={80}
              height={100}
              alt="Farm Fuzion"
            />
          </span>
          {/* )} */}
          <p className="text-3xl font-semibold capitalize text-white mt-2 font-abc">
            Farm Fuzion
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl  absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <Close /> : <Menu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 hover:text-green-600 cursor-pointer" : "top-[-490px]"
          }  `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link.link}
                className="text-white font-semibold hover:border-b-2 hover:border-green-400 duration-1000 font-abc"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
