import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../components/dashboard/Dashboard";
import Authentication from "../pages/authentication/Authentication";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(false);
  const { token } = useSelector((store) => store.admin);
  return <div>{token ? <Dashboard /> : <Authentication />}</div>;
};

export default ProtectedRoute;
