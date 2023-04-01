import React, { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Projects from "../pages/projects/Projects";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(false);
  const { token } = useSelector((store) => store.admin);
  return <div>{token ? <Projects /> : <Authentication />}</div>;
};

export default ProtectedRoute;
