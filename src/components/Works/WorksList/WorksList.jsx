import React from "react";

import SingleWork from "../SingleWork/SingleWork";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "../../../redux/user/UserThunk";

import styles from "./WorksList.module.scss";

const WorksList = () => {
  const { projectsList } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <>
      <section className={styles.container}>
        {projectsList.length ? (
          <div className={styles.items}>
            {projectsList.map((item) => (
              <SingleWork item={item} />
            ))}
          </div>
        ) : (
          <h2>Пока нету работ</h2>
        )}
      </section>
    </>
  );
};

export default WorksList;
