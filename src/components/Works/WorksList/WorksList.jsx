import React from "react";

import SingleWork from "../SingleWork/SingleWork";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "../../../redux/user/UserThunk";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./WorksList.module.scss";

const WorksList = () => {
  const { projectsList, isloading } = useSelector(
    (state) => state.projectsList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <section className={styles.container}>
      {isloading ? (
        <div className={styles.items}>
          <Skeleton width={400} height={240} />
          <Skeleton width={310} height={240} />
          <Skeleton width={400} height={240} />
          <Skeleton width={400} height={240} />
          <Skeleton width={810} height={240} />
        </div>
      ) : (
        projectsList.length > 0 && (
          <div className={styles.items}>
            {projectsList.map((item) => (
              <SingleWork item={item} />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export default WorksList;
