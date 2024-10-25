import React from "react";
import {
  ArrowForward,
  Facebook,
  Twitter,
  Favorite,
  Instagram,
  WhatsApp,
  X,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col h-auto w-full">
      <div
        className="w-full h-auto bg-cover bg-center"
        style={{ backgroundImage: "url(/wavefooter.svg)" }}
      >
        <div className="flex flex-col w-full md:pt-10 pt-36 mt-48 h-full">
          <div className="flex md:flex-row flex-col w-full md:px-20 px-4 md:justify-between md:items-center">
            <p className="text-white font-abc font-semibold text-xl">
              Do you want to know more or just have a question? Write to us
            </p>
            <Link
              href="/contact"
              className="text-white w-6/12 md:w-1/12 mt-6 md:mt-0 px-7 border-oranges border-2 rounded-full py-3 md:px-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-footer md:px-20 px-4 pb-32">
        <hr className="my-8 border-t border-2 mt-10 mb-16 border-white opacity-50" />
        <div className="w-full text-white">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 gap-20 px-6">
            <div className="col-span-1 flex flex-col md:items-start items-center">
              <h2 className="font-bold text-xl mb-3">FARM FUZION</h2>
              <Image src="/logoM.png" height={80} width={170} alt="ff" />
            </div>

            {/* Column 2: Connect */}
            <div className="col-span-1">
              <h2 className="font-bold text-xl mb-10 text-yellow-400">
                Connect
              </h2>
              <ul>
                <li className="mb-8">Farm Profile</li>
                <li className="mb-8">Messages</li>
                <li>Set up farm details</li>
              </ul>
            </div>

            {/* Column 3: Notifications */}
            <div className="col-span-1">
              <h2 className="font-bold text-xl mb-10 text-yellow-400">
                Notifications
              </h2>
              <ul>
                <li className="mb-8">Terms of Service</li>
                <li className="mb-8">Contact us</li>
                <li>Farm Guidelines</li>
              </ul>
            </div>

            {/* Column 4: Sell Products */}
            <div className="col-span-1">
              <h2 className="font-bold text-xl mb-10 text-yellow-400">
                Sell Products
              </h2>
              <ul>
                <li className="mb-8">Farm Profile</li>
                <li className="mb-8">Add Products</li>
                <li>Help Center</li>
              </ul>
            </div>

            {/* Column 5: Follow Us */}
            <div className="col-span-1">
              <h2 className="font-bold text-xl mb-10 text-yellow-400">
                Follow Us
              </h2>
              <div className="flex flex-row w-3/12 justify-between text-3xl">
                <div className="flex flex-col mr-10 md:mr-0">
                  <Instagram className="text-gray-400 mb-8" />
                  <WhatsApp className="text-gray-400" />
                </div>
                <div className="flex flex-col">
                  <Twitter className="text-gray-400  mb-8" />
                  <Facebook className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
