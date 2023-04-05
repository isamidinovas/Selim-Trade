import React, { useState } from "react";
import Authentication from "../pages/authentication/Authentication";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(true);
  return <div>{isA ? "you are authorized" : <Authentication />}</div>;
};

export default ProtectedRoute;