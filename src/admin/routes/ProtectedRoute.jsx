import React, { useState } from "react";
import Authentication from "../pages/authentication/Authentication";

const ProtectedRoute = () => {
  const [isA, setIsA] = useState(false);
  return <div>{isA ? <Authentication /> : "not aut"}</div>;
};

export default ProtectedRoute;
