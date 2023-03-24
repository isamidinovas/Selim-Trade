import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/admin/adminSlice";
import { useState } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleClick = (e) => {
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(
      "🚀 ~ file: Dashboard.jsx:17 ~ handleClick ~ formData:",
      formData
    );
  };
  return (
    <div>
      Dashboard
      <button onClick={() => dispatch(logOut())}>log out</button>
      <h1>our works</h1>
      <label htmlFor="">select photo</label>
      <input onChange={handleChange} type="file" />
      <button onClick={handleClick}>Создать</button>
    </div>
  );
};

export default Dashboard;
