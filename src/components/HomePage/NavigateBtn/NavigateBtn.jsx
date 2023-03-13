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
    <Link to="hero" smooth={true} duration={500} id={styles.btn}>
      <img src={Arrow} alt="" />
    </Link>
  );
};

export default NavigateBtn;
