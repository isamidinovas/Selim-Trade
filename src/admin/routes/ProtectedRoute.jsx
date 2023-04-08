import React, { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "../pages/authentication/Authentication";
import Projects from "../pages/projects/Projects";
import AdminLayout from "./AdminLayout";

const ProtectedRoute = () => {
  // const token =
  //   "eyJraWQiOiI0YWZlYTBkOC1hZGVhLTRkMjQtYWViZS0yOTQzZDg3OWFiOTUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzX2Fhc2hhZ3NzIiwic2NvcGUiOiJST0xFX0FETUlOIiwiaXNzIjoic2VsZiIsImV4cCI6MTY4MTAyMzUwNSwiaWF0IjoxNjgwOTM3MTA1LCJqdGkiOiI5In0.Qt06F4YyVPNh8Mj77UxSskwXYcVN0hpNcGCRgzjJ5VZGNETlRNQEJo5-kQ74loxc_VmOknSaYN6bqblMjnMBHqtm8mnn2s4mUZGXpSOd2nHBsYKKkW0A99m9fM331Cz6AhTyZpo5OlPMGTqbcaXGTKv62nzyBO5bEN2WlZzWMMGeAMMB6KDGfHcloyjYlpDXohisJQOuOqOLtUbCsziS7uyTntCdnzu7B7MeluYITDeKsDr3Q_IZKgLri_rEAWVBRRjgZVEtw8-bjVQ15tLffPVKBae3cO61eP4IbNuA6-OwsXOmjUyNkm3_WnYO25cugyPDN5zjqBY9TzL2If0HPA";
  const { token } = useSelector((store) => store.admin);
  console.log("tok", token);

  return <div>{token ? <AdminLayout /> : <Authentication />}</div>;
};

export default ProtectedRoute;
