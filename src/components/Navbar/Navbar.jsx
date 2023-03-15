import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/icons/logo-navbar.svg";
import burger from "../../assets/icons/menu.svg";
import popUpLogo from "../../assets/icons/logo_small_dark.svg";
import popUpCallIcon from "../../assets/icons/Call_icon_dark.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.nav_wrapper}>
        <nav className={styles.navbar}>
          {isOpen && (
            <div ref={popupRef} className={styles.pop_up_menu}>
              <div className={styles.wrapper}>
                <img
                  className={styles.pop_up_logo}
                  src={popUpLogo}
                  alt="Selim-Trade"
                />
                <ul className={styles.list}>
                  <li>
                    <NavLink to="/">Главная</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">Услуги</NavLink>
                  </li>
                  <li>
                    <NavLink to="/news">Новости</NavLink>
                  </li>
                  <li>
                    <NavLink to="/works">Наши работы</NavLink>
                  </li>
                </ul>
                <div className={styles.pop_up_contact}>
                  <p>г. Бишкек</p>
                  <div>
                    <img src={popUpCallIcon} alt="call icon" />

                    <a href="tel:+1234567890">+996 (552) 57 07 55</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={styles.navbar_left}>
            <img className={styles.logo} src={logo} alt="Selim-Trade" />
          </div>
          <div className={styles.navbar_center}>
            <ul className={styles.nav_link}>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/service">Услуги</NavLink>
              </li>
              <li>
                <NavLink to="/news">Новости</NavLink>
              </li>
              <li>
                <NavLink to="/works">Наши работы</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.navbar_contact}>
            <p>г.Бишкек</p>
            <div className={styles.call}>
              <span className={styles.call_icon}>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 11.6833C14.9998 11.6833 14.9996 11.6835 14.9996 11.6838V14.63C14.9997 14.841 14.9197 15.0441 14.7759 15.1985C14.6321 15.3528 14.435 15.4469 14.2246 15.4617C13.8604 15.4867 13.5629 15.5 13.3329 15.5C5.96874 15.5 -0.000427246 9.53083 -0.000427246 2.16667C-0.000427246 1.93667 0.0120728 1.63917 0.0379061 1.275C0.0526747 1.06454 0.146724 0.867509 0.301076 0.723674C0.455428 0.579839 0.658592 0.499905 0.869573 0.5H3.81624C3.91961 0.499896 4.01932 0.538216 4.09601 0.607517C4.17271 0.676818 4.2209 0.772152 4.23124 0.875C4.25041 1.06667 4.26791 1.21917 4.28457 1.335C4.45018 2.49077 4.78958 3.61486 5.29124 4.66917C5.37041 4.83583 5.31874 5.035 5.16874 5.14167L4.68062 5.49045C3.91571 6.03702 3.61836 7.05445 4.11256 7.8542C5.00003 9.29038 6.21036 10.5007 7.64658 11.3881C8.44618 11.8821 9.46339 11.585 10.01 10.8204L10.3571 10.335C10.4095 10.2617 10.4861 10.2091 10.5733 10.1864C10.6606 10.1637 10.753 10.1723 10.8346 10.2108C11.8888 10.7116 13.0126 11.0501 14.1679 11.215C14.2837 11.2317 14.4362 11.25 14.6262 11.2683C14.7289 11.2789 14.8241 11.3271 14.8932 11.4038C14.9622 11.4804 15.0004 11.5798 15.0004 11.6829C15.0004 11.6831 15.0002 11.6833 15 11.6833Z"
                    fill="white"
                  />
                </svg>
              </span>
              <a href="tel:+1234567890" className={styles.call_text}>
                +996 (552) 57 07 55
              </a>
            </div>
          </div>
          <div
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
            onClick={handleClick}
          >
            <img src={burger} alt="menu" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
