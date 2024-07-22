import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import {
  ArrowForward,
  Facebook,
  Favorite,
  Instagram,
  WhatsApp,
  X,
} from "@mui/icons-material";
import Footer from "../components/Footer";
import Navm from "../components/Navm";
import FarmerNav from "../components/FarmerNav";

export default function Farmers() {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backg.png')" }}
      >
        <FarmerNav />
        <div className="flex justify-start ml-12  items-center h-screen bg-fixed bg-center bg-cover">
          <div className=" bg-transparent text-start px-8 pl-0 py-2 text-white">
            <p
              className="font-abc"
              style={{ fontSize: "28px", fontWeight: "500" }}
            >
              Harvesting tomorrow, <br /> cultivating today. <br />
            </p>
            <p
              className="font-abc"
              style={{ fontSize: "28px", fontWeight: "500" }}
            >
              Your farming connection online!
            </p>
          </div>
        </div>
      </div>
      <section id="about" className="mt-16 ms-12 me-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/about.jpeg"
              alt="Farm Fuzion"
              width={500}
              height={300}
              className="w-full h-auto md:max-h-70"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-2xl font-bold mb-4 font-abc">
                Welcome To Farm Fuzion
              </h1>
              <p className="text-lg tracking-wider  mb-8 font-abc">
                Our online farming haven, where the seeds of knowledge blossom
                into a flourishing community! At Farm Fuzion, we plow through
                the digital fields to bring you a bountiful harvest of
                agricultural insights, expert advice, and a marketplace bustling
                with the finest seeds, equipment, and tools. Whether you are a
                seasoned farmer or just starting to till the soil of your
                dreams, our platform offers a fertile ground for learning,
                sharing experiences, and connecting with like-minded
                enthusiasts. Join us in sowing the seeds of a sustainable and
                prosperous future, where the spirit of farming thrives in the
                digital landscape. Welcome to a place where the roots run deep,
                and the possibilities are endless!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="market " className="mt-12 ms-12 me-12">
        <p className="text-center text-green-600 font-bold font-abc">
          OUR MARKET
        </p>
        <p className="text-center text-green-600 font-abc">
          Where freshness meets favor! Yor Plate deserves the finest
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/vegies.jpeg"
              width={400}
              height={70}
              objectFit="fill"
              alt="Farm Fuzion"
            />
            <span className="flex justify-between font-bold mt-2">
              Organic Vegetables
              <span className="ml-3">
                300
                <Favorite
                  className="ml-2"
                  style={{ color: "red", width: "0.5em", height: "0.5em" }}
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/eggies.jpeg"
              width={400}
              height={70}
              objectFit="fill"
              alt="Farm Fuzion"
            />
            <span className="flex justify-between font-bold mt-2">
              Organic Vegetables
              <span className="ml-3">
                300
                <Favorite
                  className="ml-2"
                  style={{ color: "red", width: "0.5em", height: "0.5em" }}
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/chees.jpeg"
              width={400}
              height={70}
              objectFit="fill"
              alt="Farm Fuzion"
            />
            <span className="flex justify-between font-bold mt-2">
              Organic Vegetables
              <span className="ml-3">
                300
                <Favorite
                  className="ml-2"
                  style={{ color: "red", width: "0.5em", height: "0.5em" }}
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/fruits.jpeg"
              width={400}
              height={70}
              objectFit="fill"
              alt="Farm Fuzion"
            />
            <span className="flex justify-between font-bold mt-2">
              Organic Vegetables
              <span className="ml-3">
                300
                <Favorite
                  className="ml-2"
                  style={{ color: "red", width: "0.5em", height: "0.5em" }}
                />
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="pattners" className="mt-16 ms-12 me-12">
        <p className="text-center text-green-600 font-bold">OUR PARTNERS</p>
        <p className="text-center text-green-600">
          Proudly Nurturing Partnership With Those Who Share Our Passion
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/about.jpeg"
              alt="Farm Fuzion"
              width={500}
              height={300}
              className="w-full h-auto md:max-h-70"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <p className="tracking-wider font-abc mb-4 lg:text-lg md:text-2xl">
                At Farm Fuzion, we take great pride in cultivating not only the
                finest produce but also nurturing strong bonds with our
                supporting partners. These relationships are the bedrock of our
                success, as we work hand-in-hand with trusted collaborators,
                suppliers, and allies who share our unwavering commitment to
                excellence. Together, we sow the seeds of a sustainable and
                thriving future, rooted in a shared passion for quality,
                innovation, and a profound respect for the land.
              </p>
              <div className="grid md:grid-cols-3 gap-4 font-abc ">
                <div>
                  <p className="font-semibold font-abc text-green-700">
                    SAFFECHAMA
                  </p>
                  <p>+254-716-003-792</p>
                  <p>+254-716-003-792</p>
                  <p>info@saffechama.com</p>
                </div>
                <div>
                  <p className="font-semibold font-abc text-green-700">
                    INSURANCE
                  </p>
                </div>
                <div>
                  <p className="font-semibold font-abc text-green-700">
                    COOPARATIVES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
