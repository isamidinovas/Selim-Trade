import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCreate } from "../../redux/user/UserThunk";
import styles from "./Forms.module.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Forms = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { status, errMessage } = useSelector((state) => state.orders);
  const phoneNumberRef = useRef("");

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

  const handlePhoneNumberChange = (value, country, event, formattedValue) => {
    setOrderData((previousValue) => {
      return {
        ...previousValue,
        customerPhone: formattedValue,
      };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !orderData.customerName ||
      !orderData.customerPhone ||
      !orderData.message
    ) {
      // Show error toast if any of the fields are empty
      toast.error("Заполните все поля!");
      return;
    }

    const capitalizedName =
      orderData.customerName.charAt(0).toUpperCase() +
      orderData.customerName.slice(1);
    const capitalizedMessage =
      orderData.message.charAt(0).toUpperCase() + orderData.message.slice(1);

    let formData = new FormData();
    formData.append("customerName", capitalizedName);
    formData.append("customerPhone", orderData.customerPhone);
    formData.append("message", capitalizedMessage);
    dispatch(orderCreate(formData)).then(() => {
      Swal.fire({
        width: "480px",
        padding: "0em 3em 5em 3em",
        icon: "success",
        title: "Заявка успешно отправлена",
        text: "Ваша заявка отправлена на рассмотрение. В ближайшее время с вами свяжется наш специалист",
        showConfirmButton: false,
      });
      setOrderData({
        customerName: "",
        customerPhone: "",
        message: "",
      });
      phoneNumberRef.current.setInputValue(""); // Очистить значение в поле телефона
      setPhoneNumber(""); // Очистить значение состояния phoneNumber
    });
  };
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const { status, errMessage } = useSelector((state) => state.orders);
  // const phoneNumberRef = useRef("");
  // // const formattedPhoneNumber = `+996${phoneNumberRef.current}`;

  // const dispatch = useDispatch();
  // const [orderData, setOrderData] = useState({
  //   customerName: "",
  //   customerPhone: "",
  //   message: "",
  // });

  // const onChange = (e) => {
  //   const { name, value } = e.target;

  //   setOrderData((previousValue) => {
  //     return {
  //       ...previousValue,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handlePhoneNumberChange = (value, country, event, formattedValue) => {
  //   setOrderData((previousValue) => {
  //     return {
  //       ...previousValue,
  //       customerPhone: formattedValue,
  //     };
  //   });
  // };
  // // const handlePhoneNumberChange = (e, country) => {
  // //   const { name, value } = e.target;

  // //   setOrderData((previousValue) => {
  // //     return {
  // //       ...previousValue,
  // //       [name]: value,
  // //     };
  // //   });
  // // };
  // //Валидация для phone

  // // const handlePhoneNumberInput = (event) => {
  // //   const inputValue = event.target.value.replace(/[^\d]/g, "");
  // //   phoneNumberRef.current = inputValue;
  // // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   const capitalizedName =
  //     orderData.customerName.charAt(0).toUpperCase() +
  //     orderData.customerName.slice(1);
  //   const capitalizedMessage =
  //     orderData.message.charAt(0).toUpperCase() + orderData.message.slice(1);

  //   let formData = new FormData();
  //   formData.append("customerName", capitalizedName);
  //   formData.append("customerPhone", orderData.customerPhone);
  //   formData.append("message", capitalizedMessage);
  //   dispatch(orderCreate(formData)).then(() => {
  //     Swal.fire({
  //       width: "480px",
  //       padding: "0em 3em 5em 3em",
  //       icon: "success",
  //       title: "Заявка успешно отправлена",
  //       text: "Ваша заявка отправлена на рассмотрение. В ближайшее время с вами свяжется наш специалист",
  //       showConfirmButton: false,
  //     });
  //     setOrderData({
  //       customerName: "",
  //       customerPhone: "",
  //       message: "",
  //     });
  //     phoneNumberRef.current.setInputValue(""); // Очистить значение в поле телефона
  //     setPhoneNumber(""); // Очистить значение состояния phoneNumber
  //   });
  // };

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
          <ReactPhoneInput
            defaultCountry="kg"
            defaultValue={phoneNumber}
            value={orderData.customerPhone}
            placeholder="+996 (777)-77-77-77"
            onChange={handlePhoneNumberChange}
            name="customerPhone"
            className={styles.react__input}
            ref={phoneNumberRef}
            style={{
              background: "rgba(249, 249, 249, 0.2)",
              padding: "0px 7px",
              width: "320px",
              height: "54px",
              fontSize: "20px",
              fontFamily: "Montserrat",
              border: "0.5px solid #414141",
              borderRadius: "20px",
            }}
            inputClass={styles.form__control}
            inputStyle={{
              border: "none",
              fontSize: "18px",
            }}
          />

          <button
            type="submit"
            className={styles.btn}
            onClick={(e) => handleClick(e)}
          >
            Отправить заявку
          </button>
          <input
            onChange={(e) => onChange(e)}
            name="message"
            type="text"
            value={orderData.message}
            className={styles.form__text}
            placeholder="Сообщение"
            maxLength="500"
          />
        </div>
        {status === "rejected" && (
          <p className={styles.check__err}>{errMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Forms;
