import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCreate } from "../../redux/user/UserThunk";
import styles from "./Forms.module.scss";

const Forms = () => {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState({
    customerName: "",
    customerPhone: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setOrderData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("customerName", orderData.customerName);
    formData.append("customerPhone", orderData.customerPhone);
    formData.append("message", orderData.message);
    dispatch(orderCreate(formData));
    setOrderData({
      customerName: "",
      customerPhone: "",
      message: "",
    });
  };
  return (
    <div id="form">
      <div className={styles.container}>
        <h2 className={styles.forms__title}>Остались вопросы?</h2>
        <div className={styles.forms}>
          <input
            onChange={(e) => onChange(e)}
            name="customerName"
            type="text"
            value={orderData.customerName}
            className={styles.form}
            placeholder="Имя"
          />
          <input
            onChange={(e) => onChange(e)}
            name="customerPhone"
            type="text"
            value={orderData.customerPhone}
            className={styles.form}
            placeholder="Телефон"
          />
          <button type="submit" className={styles.btn} onClick={handleClick}>
            Отправить заявку
          </button>
          <input
            onChange={(e) => onChange(e)}
            name="message"
            type="text"
            value={orderData.message}
            className={styles.form__text}
            placeholder="Сообщение"
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
