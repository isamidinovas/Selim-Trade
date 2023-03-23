import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/admin/adminSlice";
// import { Admin, ListGuesser, Resource, useAuthProvider } from "react-admin";

const Authentication = () => {
  const initialState = {
    lastName: "",
    firstName: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    role: "ROLE_ADMIN",
  };
  const [adminInfo, setAdminInfo] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name1 = e.target.name;
    const value1 = e.target.value;
    setAdminInfo({ ...adminInfo, [name1]: value1 });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      lastName,
      firstName,
      username,
      password,
      passwordConfirmation,
      role,
    } = adminInfo;
    console.log(adminInfo);
    dispatch(
      register({
        lastName: lastName,
        firstName: firstName,
        username: username,
        password: password,
        passwordConfirmation,
        role,
      })
    );
    return;
  };

  return (
    <>
      <div className="container">
        <div className="inner_wrapper">
          <label>Фамилия</label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            value={adminInfo.lastName}
          />
          <label>Имя</label>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            value={adminInfo.firstName}
          />
          <label>Никнейм</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={adminInfo.username}
          />
          <label>Пароль</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={adminInfo.password}
          />
          <label>Потверждения пороля</label>
          <input
            onChange={handleChange}
            name="passwordConfirmation"
            type="password"
            value={adminInfo.passwordConfirmation}
          />
          <button onClick={onSubmit}>submit</button>
        </div>
      </div>
    </>
  );
};

export default Authentication;
