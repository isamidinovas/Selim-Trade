import React from "react";
import { useSelector } from "react-redux";
import NewItem from "../NewItem/NewItem";
import styles from "./NewsList.module.scss";
const NewsList = () => {
  const { news } = useSelector((store) => store.news);
  return (
    <>
      <div className={styles.container}>
        {news.map((newItem) => {
          return <NewItem key={newItem.id} {...newItem} />;
        })}
      </div>
    </>
  );
};

export default NewsList;
