import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/admin/contentControlSlice";
import Work from "../Work/Work";
import styles from "./WorksList.module.scss";

const PostList = () => {
  const { projects } = useSelector((store) => store.contentControl);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.list_container}>
        {projects?.map((project) => {
          return <Work key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
