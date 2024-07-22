"use client";

import { redirect } from "next/navigation";
import {  useLayoutEffect, useState } from "react";

export default function WithAuth(Component) {
  return function WithAuth(props) {
    const [userRole, setUserRole] = useState(null);
    useLayoutEffect(() => {
      const role = localStorage.getItem("userRole");

      setUserRole(role);
      if (!role) {
        redirect("/");
      }
    }, []);

    if (!userRole) {
      return null;
    } else if (userRole != "admin" && userRole !== "farmer" && userRole !== "coop") {
      redirect("/");
    }

    return <Component {...props} />;
  };
}
