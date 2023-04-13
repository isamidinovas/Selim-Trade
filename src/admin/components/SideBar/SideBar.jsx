import React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SideBar.module.scss";
import { useState } from "react";

const SideBar = () => {
  const { pathname } = useLocation();
  const navigationLinks = [
    { path: "/admin/news", name: "News" },
    { path: "/admin", name: "Projects" },
    { path: "/admin/reviews", name: "Reviews" },
    { path: "/admin/gateCategory", name: "GateCategory" },
    { path: "/admin/news", name: "Новости" },
    { path: "/admin", name: "Наши работы" },
    { path: "/admin/reviews", name: "Отзывы" },
    { path: "/admin/gates", name: "Ворота" },
    { path: "/admin/orders", name: "Заказы" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`${styles.sidebar}`}>
        <ul>
          {navigationLinks.map((link, index) => {
            const { name, path } = link;
            return (
              <li key={index}>
                <NavLink
                  className={`${pathname === path ? styles.active : null}`}
                  to={path}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
