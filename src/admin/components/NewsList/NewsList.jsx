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
          return (
            <div key={newItem.id}>
              <NewItem {...newItem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
