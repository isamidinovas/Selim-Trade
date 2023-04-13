import React from "react";
import { Link } from "react-scroll";
import Arrow from "./img/Arrow.png";
import styles from "./NavigateBtn.module.scss";
const NavigateBtn = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="scroll__top" smooth={true} duration={500} id={styles.btn}>
        <div className={styles.scroll__btn}>
          <img src={Arrow} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default NavigateBtn;
