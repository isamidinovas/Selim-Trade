import React, { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Projects from "../pages/projects/Projects";
import AdminLayout from "./AdminLayout";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(false);
  const { token } = useSelector((store) => store.admin);
  return <div>{token ? <AdminLayout /> : <Authentication />}</div>;
};

export default ProtectedRoute;
