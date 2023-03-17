import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Arrow from "./img/Arrow.png";
import styles from "./NavigateBtn.module.scss";
const NavigateBtn = () => {
  // if (window.pageYOffset === 1700) {
  //   window.btn.styles.top = "130px";
  // }

  return (
    <div className={styles.wrapper}>
      <Link to="hero" smooth={true} duration={500} id={styles.btn}>
        <div className={styles.scroll__btn}>
          <img src={Arrow} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default NavigateBtn;
