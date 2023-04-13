import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  updateProject,
} from "../../../redux/admin/projectsSlice";
import styles from "./Work.module.scss";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
const Work = ({ id, image }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [updatePhoto, setUpdatePhoto] = useState(null);
  const [localImg, setLocalImg] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const img =
    localImg || `http://161.35.29.179:8090/api/v1/public/image/${image}`;

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };
  const handleChange = (e) => {
    const localUrlImg = URL.createObjectURL(e.target.files[0]);
    setLocalImg(localUrlImg);
    setIsEditing(!isEditing);
    console.log("is ed");
    e.preventDefault();
    setUpdatePhoto(e.target.files[0]);
  };

  const handleUpdate = (e) => {
    const formData = new FormData();
    formData.append("image", updatePhoto);
    setIsEditing(!isEditing);
    if (updatePhoto) {
      dispatch(updateProject({ formData, id }));
    }
  };

  const callRef = (e) => {
    inputRef.current.click();
  };
  return (
    <div key={id} className={styles.container}>
      <img src={img} key={id} />
      <div className={styles.btn_container}>
        <button className={styles.delete_btn} onClick={() => handleDelete(id)}>
          Удалить <BsTrash3Fill className={styles.trash_icon} />
        </button>
        {isEditing ? (
          <button onClick={handleUpdate} className={styles.submit_btn}>
            Подтвердить <FaCheck className={styles.check_icon} />
          </button>
        ) : (
          <button onClick={callRef} className={styles.edit_btn}>
            Редактировать <TbEdit className={styles.edit_icon} />
          </button>
        )}
        <input
          onChange={handleChange}
          type="file"
          id="file"
          accept="image/*"
          className={styles.input_ru}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Work;
