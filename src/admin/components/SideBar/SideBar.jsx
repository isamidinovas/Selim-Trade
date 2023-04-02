import React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const { pathname } = useLocation();
  const navigationLinks = [
    { path: "/admin/news", name: "News" },
    { path: "/admin/projects", name: "Projects" },
  ];
  return (
    <>
      <div className={styles.sidebar}>
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
