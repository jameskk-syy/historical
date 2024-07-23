"use client"
import SideNav from "@/app/components/AdminSideNav";
import React, { useState } from "react";
import Swal from "sweetalert2";

function CompanyAff() {
    const [loading, setLoading] = useState(false);

    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const [name, setName] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [company_tel, setCompanyTel] = useState("");
    const [reg_no, setRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_no, setMobile] = useState("");
    const [pobox, setPobox] = useState("");
    const [network_code, setNetworkCode] = useState("Mpesa");
    const [address, setAddress] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [allErr, setallErr] = useState(false);
    const [userErr, setuserErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);


    const postData = (e) => {
        e.preventDefault();

        if (
            mobile_no &&
            company_name &&
            company_tel &&
            reg_no &&
            pobox &&
            network_code &&
            address &&
            name &&
            email &&
            password &&
            cpassword
        ) {
            setLoading(true);
            Axios.post("https://us-east4-safechama.cloudfunctions.net/Signup", {
                message: {
                    access_token: token,
                    mobile_no: mobile_no,
                    affiliates_type: "company",
                    id_no: "",
                    company_name: company_name,
                    company_tel: company_tel,
                    reg_no: reg_no,
                    name: name,
                    email: email,
                    role: "affiliate",
                    NetworkCode: network_code,
                    password: password,
                    cpassword: cpassword,
                    kra_pin: "",
                    po_box: pobox,
                    county: "",
                    sub_county: "",
                    address: address,
                },
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
            setLoading(false);
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "All fields are requires",
            });
        }
    };

    return (
        <>
            <SideNav isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            <div className={`flex-grow transition-all duration-200 ease-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-24'} mt-4 me-3`}>
                <p className="text-xl text-card3 mt-3 mb-5 font-abc">
                    Register Company Affiliate
                </p>
                <main className="pt-6 md:pt-5 -mt-2 font-abc">
                    <div className="mx-auto p-2">
                        <div className="flex flex-wrap flex-row">
                            <div className="flex-shrink mx-auto max-w-full w-full lg:w-3/4 mb-6">
                                <div className="p-2 md:p-6 bg-card rounded-lg shadow-lg mb-6">


                                    <div className="flex-1 p-6 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20">
                                        <form className="flex flex-wrap flex-row -mx-4">
                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
                                                    id="inputcname"
                                                    value={company_name}
                                                    onChange={(e) => {
                                                        setCompanyName(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Reg. Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
                                                    id="inputreg_no"
                                                    value={reg_no}
                                                    onChange={(e) => {
                                                        setRegNo(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
                                                    id="inputaddress"
                                                    value={address}
                                                    onChange={(e) => {
                                                        setAddress(e.target.value);
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
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
                                                    id="inputpobox"
                                                    value={pobox}
                                                    onChange={(e) => {
                                                        setPobox(e.target.value);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Tel:
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
                                                    id="inputcmobile"
                                                    value={company_tel}
                                                    onChange={(e) => {
                                                        setCompanyTel(e.target.value);
                                                        setuserErr(false);
                                                        setallErr(false);
                                                    }}
                                                />
                                            </div>

                                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label className="inline-block mb-2 dark:text-gray-200">
                                                    Representative Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
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
                                                    Representative Phone:
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
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
                                                    Representative Email:
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
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
                                                    Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
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
                                                    className="w-full leading-5 relative py-2 px-4 rounded overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700"
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
                                                    className="text-center mb-3 rounded py-2 px-5 inline-block leading-5 text-gray-100 bg-transparent border hover:text-gray-100 bg-gray-900 hover:bg-card3 focus:outline-none focus:ring-0"
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
        </>
    );
}

export default CompanyAff;