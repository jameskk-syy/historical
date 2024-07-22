"use client"
import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import SideNav from "@/app/components/AdminSideNav";
import Footer from "@/app/components/Footer";

function IndividualAff() {
    const [loading, setLoading] = useState(false);

    
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarExpanded(!isSidebarExpanded);
  };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id_no, setIDNo] = useState("");
    const [mobile_no, setMobile] = useState("");
    const [pobox, setPobox] = useState("");
    const [kra, setKRA] = useState("");
    const [county, setCounty] = useState("");
    const [network_code, setNetworkCode] = useState("Mpesa");
    const [cpassword, setCPassword] = useState("");
    const [allErr, setallErr] = useState(false);
    const [userErr, setuserErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);


    const postData = (e) => {
        e.preventDefault();

        if (
            mobile_no &&
            email &&
            id_no &&
            kra &&
            pobox &&
            county &&
            name &&
            password &&
            cpassword
        ) {
            setLoading(true);
            Axios.post("https://us-east4-safechama.cloudfunctions.net/Signup", {
                // message: {
                //   access_token: token,
                //   mobile_no: mobile_no,
                //   affiliates_type: "individual",
                //   company_name: "",
                //   company_tel: "",
                //   reg_no: "",
                //   id_no: id_no,
                //   name: name,
                //   email: email,
                //   role: "affiliate",
                //   NetworkCode: network_code,
                //   password: password,
                //   cpassword: cpassword,
                //   kra_pin: kra,
                //   po_box: pobox,
                //   county: county,
                //   sub_county: "",
                //   address: "",
                // },
            })
                .then((res) => {
                    // console.log("Posting Data From::", res.data);

                    if (res.data.code === 555) {
                        setLoading(false);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Affiliated Added Successfully",
                        });
                        navigate("/user");
                    } else if (res.data.code === 606) {
                        setLoading(false);
                        setuserErr(true);
                    } else if (res.data.code === 505) {
                        setLoading(false);
                        setpasswordErr(true);
                    }
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err.message);
                });
        } else {
            setallErr(true);
        }
    };

    return (
        <>
            <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
                
                <main className="pt-6 md:pt-20 -mt-2 font-abc">
                    <div className="mx-auto p-2">
                        <div className="flex flex-wrap flex-row">
                            <div className="flex-shrink mx-auto max-w-full  w-full lg:w-3/4 mb-6">
                                <div className="p-2 md:p-6 bg-card rounded-lg shadow-lg mb-6">
                                    <p className="text-xl font-semibold mt-3 mb-5 dark:text-gray-200 font-abc">
                                        Register Individual Affiliate
                                    </p>
                                    <div
                                        className={`${!allErr && "hidden"
                                            } bg-orange-100 my-5    border-t-4 border-green-500 rounded-b text-gray-900 px-4 py-3 shadow-md`}
                                        role="alert"
                                    >
                                        <div className="flex">
                                            <div className="py-1">
                                                <svg
                                                    className="fill-current h-6 w-6 text-gray-900 mr-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    Error Occured While Registering
                                                </p>
                                                <p className="text-sm">* All Fields are Required</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`${!userErr && "hidden"
                                            } bg-yellow-100 my-5    border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md`}
                                        role="alert"
                                    >
                                        <div className="flex">
                                            <div className="py-1">
                                                <svg
                                                    className="fill-current h-6 w-6 text-yellow-500 mr-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    Error Occured While Registering
                                                </p>
                                                <p className="text-sm">User Mobile No. Exists</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`${!passwordErr && "hidden"
                                            } bg-red-100 my-5    border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md`}
                                        role="alert"
                                    >
                                        <div className="flex">
                                            <div className="py-1">
                                                <svg
                                                    className="fill-current h-6 w-6 text-red-500 mr-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    Error Occured While Registering
                                                </p>
                                                <p className="text-sm">password dont match</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6  dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20">
                                        <form className="flex flex-wrap flex-row -mx-4">
                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    UserName:
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputname"
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Phone:
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputmobile"
                                                    value={mobile_no}
                                                    onChange={(e) => {
                                                        setMobile(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Email:
                                                </label>
                                                <input
                                                    type="email"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputemail"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    ID No.
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputname"
                                                    value={id_no}
                                                    onChange={(e) => {
                                                        setIDNo(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>
                                            {/* <div>
                      <label className="inline-block mb-2 dark:text-gray-200">
                        Network Code
                      </label>

                      <select
                        name="affiliate"
                        id="affiliate"
                        className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 dark:text-gray-200 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                        value={network_code}
                        aria-label="affiliate"
                        onChange={(e) => {
                          setNetworkCode(e.target.value);
                          setallErr(false);
                        }}
                      >
                        <option value="Mpesa">Mpesa</option>
                        <option value="AirtelMoney">AirtelMoney</option>
                        <option value="T-Kash">T-Kash</option>
                      </select>
                    </div> */}

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    KRA PIN
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputname"
                                                    value={kra}
                                                    onChange={(e) => {
                                                        setKRA(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    P.O. Box
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputname"
                                                    value={pobox}
                                                    onChange={(e) => {
                                                        setPobox(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    County
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputmobile"
                                                    value={county}
                                                    onChange={(e) => {
                                                        setCounty(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputpassword"
                                                    value={password}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Confirm Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className={`${userErr && " border-yellow-500 border text-yellow-900"
                                                        } w-full leading-5   relative py-2 px-4 rounded   overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700`}
                                                    id="inputcpassword"
                                                    value={cpassword}
                                                    onChange={(e) => {
                                                        setCPassword(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full mt-4 xl:mt-0 px-4 w-full">
                                                <button
                                                    type="submit"
                                                    onClick={postData}
                                                    className=" text-center mb-3 rounded py-2 px-5 inline-block   leading-5 text-gray-100 bg-gray-900 bg-transparent border  hover:text-gray-100 hover:bg-green-600 hover:ring-0 hover:border-green-700 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0"
                                                >
                                                    Add Affiliate +
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
                <Footer />
            </div>
        </>
    );
}

export default IndividualAff;