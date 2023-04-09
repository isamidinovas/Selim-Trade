import React, { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Projects from "../pages/projects/Projects";
import AdminLayout from "./AdminLayout";

const ProtectedRoute = () => {
  // const token = useSelector((store) => store);
  const token = localStorage.getItem("token");
  console.log("tok", token);

  return <div>{token ? <AdminLayout /> : <Authentication />}</div>;
};

export default ProtectedRoute;
