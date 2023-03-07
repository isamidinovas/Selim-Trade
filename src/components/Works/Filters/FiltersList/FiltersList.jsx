import React from "react";
import SingleFilter from "../SingleFilter/SingleFilter";
import styles from "./FiltersList.module.scss";
const FiltersList = () => {
  return (
    <>
      <section className={styles.container}>
        <SingleFilter text="все" />
        <SingleFilter text="автоматика" />
        <SingleFilter text="ворота" />
        <SingleFilter text="жалюзи" />
      </section>
    </>
  );
};

export default FiltersList;
