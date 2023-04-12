import React from "react";
import styles from "./NewItem.module.scss";
import Button from "../Button/Button";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEditingStatus,
  deleteANew,
  getNewById,
  updateNew,
} from "../../../redux/admin/newsSlice";
import { useState } from "react";
import { useEffect } from "react";
const NewItem = ({ title, text, coverImage, id }) => {
  const { singleNew } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const [cor, setCov] = useState(false);
  const shortText = text?.length > 150 ? text.slice(0, 150) + "..." : text;
  useEffect(() => {
    setCov(!cor);
  }, [coverImage]);
  const handleDelete = () => {
    dispatch(deleteANew(id));
  };

  const handleUpdate = () => {
    dispatch(updateNew({ title, text, coverImage }));
    dispatch(getNewById({ id }));
    dispatch(changeEditingStatus(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={`http://161.35.29.179:8090/api/v1/public/image/${coverImage}`}
          alt="News Image"
          className={styles.image}
        />
        <h3>{title}</h3>
        <p>{shortText}</p>
      </div>
      <div className={styles.btn_container}>
        <Button
          text="Удалить"
          outline="#850000 3px solid"
          icon={<BsTrash3Fill />}
          handleclick={handleDelete}
        />
        <Button
          handleclick={() => handleUpdate()}
          text="Редактировать"
          outline="#002b5b 3px solid"
          icon={
            <TbEdit
              style={{ display: "inline-block", height: "23px", width: "21px" }}
            />
          }
        />
      </div>
    </div>
  );
};

export default NewItem;
