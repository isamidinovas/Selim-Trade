import React from "react";
import FiltersList from "../../components/Works/Filters/FiltersList/FiltersList";
import WorksList from "../../components/Works/WorksList/WorksList";
import styles from "./Works.module.scss";
const Works = () => {
  return (
    <>
    <section className={styles.background}>
      <section className={styles.container}>
        <div className={styles.header_wrapper}>
          <header className={styles.header}>
            <h2>Наши работы</h2>
            <p>
              Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться
              идеями для собственного проекта. Вы найдёте проект по душе
              и нраву, который захотите воплотить в жизнь.
            </p>
          </header>
          <FiltersList />
        </div>
        <div className={styles.works_list}>
          <WorksList />
        </div>
      </section>
    </section>
    </>
  );
};

export default Works;
