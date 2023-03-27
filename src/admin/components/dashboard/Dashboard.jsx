import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/admin/adminSlice";
import { useState } from "react";
import {
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
} from "../../../utils/localStorage";
import {
  createProject,
  getAllProjects,
} from "../../../redux/admin/contentControlSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const { projects } = useSelector((store) => store.contentControl);
  console.log("🚀 ~ file: Dashboard.jsx:17 ~ Dashboard ~ projects:", projects);

  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleClick = (e) => {
    const formData = new FormData();
    formData.append("file", photo);
    dispatch(createProject(formData));
    dispatch(getAllProjects());
  };
  return (
    <div>
      Dashboard
      <button onClick={() => dispatch(logOut())}>log out</button>
      <h1>our works</h1>
      <label htmlFor="">select photo</label>
      <input onChange={handleChange} type="file" />
      <button onClick={handleClick}>Создать</button>
      {projects?.map((project) => {
        const { image, id } = project;
        return (
          <div>
            <img
              style={{ width: "300px" }}
              src="https://hello-triggerapp.com/wp-content/uploads/2020/10/pmpmpm.jpg"
              key={id}
            />
            <p>{id}</p>
            <button>delete</button>
            <button>edit</button>
            {/* <img src={`http://198.199.91.23${image}`} key={id} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
