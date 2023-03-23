import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/admin/adminSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  //   const { token } = useSelector((store) => store.admin);
  //   console.log("🚀 ~ file: Dashboard.jsx:7 ~ Dashboard ~ token:", token);
  return (
    <div>
      Dashboard
      <button onClick={() => dispatch(logOut())}>log out</button>
    </div>
  );
};

export default Dashboard;
