import React from "react";
import styles from "./NewItem.module.scss";
import Button from "../Button/Button";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { deleteANew } from "../../../redux/admin/newsSlice";
const NewItem = ({ title, text, coverImage,id }) => {
  const dispatch = useDispatch()
  const image = `http://161.35.29.179:8090/api/v1/public/image/${coverImage}`;
  const shortText = text.length > 150 ? text.slice(0, 150) + "..." : text;

  const handleDelete = () => {
dispatch(deleteANew(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{id}</p>
        <img src={image} alt="News Image" className={styles.image} />
        <h3>{title}</h3>
        <p>{shortText}</p>
      </div>
      <div className={styles.btn_container}>
        <Button
          text="Удалить"
          outline="#850000 3px solid"
          icon={<BsTrash3Fill />}
          handleClick={handleDelete}
        />
        <Button
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