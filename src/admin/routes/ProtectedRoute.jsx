import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Projects from "../pages/projects/Projects";
import AdminLayout from "./AdminLayout";

const ProtectedRoute = () => {
  const token = useSelector((store) => store.admin.token);
  // const token = localStorage.getItem("token");
  console.log("token", token);
  // let token2 = "";
  // useEffect(() => {
  //   token2 = token;
  //   console.log("token2", token2);
  // }, [token]);

  return <div>{token ? <AdminLayout /> : <Authentication />}</div>;
};

export default ProtectedRoute;
