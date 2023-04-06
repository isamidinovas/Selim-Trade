import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn, register } from "../../../redux/admin/adminSlice";
import styles from "./Authentication.module.scss";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    // LOG IN
    if (isLoggedIn) {
      if (!username || !password) toast.error("Заполните все поля");
      dispatch(logIn({ username, password }));
      return;
    }

    // FORM VALIDATIONS
    if (
      !lastName ||
      !firstName ||
      !username ||
      !password ||
      !passwordConfirmation
    ) {
      toast.warn("Заполните все поля");
      return;
    }

    if (password !== passwordConfirmation) {
      toast.error("Потвердите пороль верно");
      return;
    }

    // REJISTER
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
      <div className={styles.container}>
        <div className={styles.inner_wrapper}>
          {!isLoggedIn && (
            <div>
              <label>Фамилия</label>
              <input
                onChange={handleChange}
                name="lastName"
                type="text"
                value={adminInfo.lastName}
              />
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <label>Имя</label>
              <input
                onChange={handleChange}
                name="firstName"
                type="text"
                value={adminInfo.firstName}
              />
            </div>
          )}
          <div>
            <label>Никнейм</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              value={adminInfo.username}
            />
          </div>
          <div>
            <label>Пароль</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              value={adminInfo.password}
            />
          </div>
          {!isLoggedIn && (
            <div>
              <label>Потверждения пороля</label>
              <input
                onChange={handleChange}
                name="passwordConfirmation"
                type="password"
                value={adminInfo.passwordConfirmation}
              />
            </div>
          )}
          <button className={styles.submit_btn} onClick={onSubmit}>Отправить</button>
          <p
          className={styles.question}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Создать аккаунт ?" : "Есть аккаунт ?"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Authentication;
