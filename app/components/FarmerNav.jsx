"use client";
import { Close, Landscape, Menu } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function FarmerNav() {
  let Links = [
    { name: "Editorial", link: "/" },
    { name: "New Feeds", link: "/feeds" },
    { name: "Forum", link: "/forum" }
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
    <div className="border-b-0 w-full  bg-black bg-opacity-50  fixed top-0 left-0 z-50">
      <div className="md:flex justify-between items-center md:mx-auto py-3 md:px-10 px-7">
        <div className="flex flex-row items-center ">
          <p className="md:text-3xl text-lg md:ml-6 font-semibold capitalize text-customGreen mt-2 font-abc">
            Historical Heritage Tourism
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl  absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? <Close className="text-white" /> : <Menu className="text-white" />}
        </div>
        <ul
          className={`md:flex md:items-center hidden  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 hover:text-green-600 cursor-pointer" : "top-[-490px]"
          }  `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl text-white md:my-0 my-7"
            >
              <Link
                href={link.link}
                className={`text-white opacity-75 hover:text-customGreen font-semibold hover:border-b-2 hover:border-green-400 duration-1000 font-abc ${
                  link.name === "Sign In"
                    ? "text-customGreen border-2 p-2 px-8 border-customGreen rounded-full"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {open ?    <ul
          className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-19 hover:text-green-600 cursor-pointer" : "top-[-490px]"
          }  `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl text-black md:my-0 my-7"
            >
              <Link
                href={link.link}
                className={`text-black hover:text-customGreen font-semibold hover:border-b-2 hover:border-green-400 duration-1000 font-abc ${
                  link.name === "Sign In"
                    ? "text-customGreen border-2 p-2 px-8 border-customGreen rounded-full"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>: <></>}
      </div>
    </div>
  );
}
