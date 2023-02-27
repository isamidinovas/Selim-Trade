import React from "react";
import styles from "./OurServices.module.scss";

const OurServices = () => {
  return (
    <>
      <section className={styles.background_img_container}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2>Наши услуги</h2>
            <p>
              Наши сотрудники прошли сертифицированные тренинги в Учебных
              центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны
              а так же успешно сдали экзамены и являются обладателями
              сертификатов по направлениям «Воротные системы, ролл ставни, ролл
              ворота, автоматические системы», «Монтаж автоматики».
            </p>
          </header>
          <div className={styles.servicesList}>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
