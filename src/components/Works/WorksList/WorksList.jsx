import React, { useEffect, useState } from "react";
import { Pagination, PaginationActions, SelectArrayInput } from "react-admin";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/user/UserThunk";
import { BOOKS } from "../../newss";
import SingleWork from "../SingleWork/SingleWork";
import styles from "./WorksList.module.scss";
const WorksList = () => {
  // const { projectsList } = useSelector((state) => state.projects);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.items}>
          {BOOKS.map((book) => (
            <SingleWork img={book.imageUrl} />
          ))}
        </div>
      </section>
    </>
  );
};

export default WorksList;
