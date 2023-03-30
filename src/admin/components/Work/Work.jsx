import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../redux/admin/contentControlSlice";
import styles from "./Work.module.scss";
import {BsTrash3} from "react-icons/bs"
import {TbEdit} from "react-icons/tb"
const Work = ({ id, image }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };
  return (
    <div key={id} className={styles.container}>
      <img
        src="https://hello-triggerapp.com/wp-content/uploads/2020/10/pmpmpm.jpg"
        key={id}
      />
      <div className={styles.btn_container}>
        <button className={styles.delete_btn} onClick={() => handleDelete(id)}>
          Удалить {" "} <BsTrash3 className={styles.trash_icon}/>
        </button>
        <label htmlFor="file" className={styles.file_input_label}>
          Редактировать {"  "} <TbEdit className={styles.edit_icon}/>
        </label>
        <input type="file" id="file" className={styles.input} />
      </div>
    </div>
  );
};

export default Work;
