import React, { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Dashboard from "../pages/dashboard/Dashboard";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(false);
  const { token } = useSelector((store) => store.admin);
  return <div>{token ? <Dashboard /> : <Authentication />}</div>;
};

export default ProtectedRoute;
