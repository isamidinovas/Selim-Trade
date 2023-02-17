import React from "react";
import styles from "./Forms.module.scss";

const Forms = () => {
  return (
    <div className={styles.forms__block}>
      <div className={styles.container}>
        <h2 className={styles.forms__title}>Остались вопросы?</h2>
        <div className={styles.forms}>
          <input type="text" className={styles.form} placeholder="Имя" />
          <input type="text" className={styles.form} placeholder="Телефон" />
          <button type="text" className={styles.btn}>
            Отправить заявку
          </button>
          <input
            type="text"
            className={styles.form__text}
            placeholder="Сообщение"
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
