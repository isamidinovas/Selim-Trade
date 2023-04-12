import React from "react";
import styles from "./GateItem.module.scss";
import Button from "../Button/Button";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  changeEditingStatus,
  deleteGate,
  getGateId,
  updateGate,
} from "../../../redux/admin/gateSlice";

const GateItem = ({ id, image, name, categoryId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteGate(id));
  };

  const handleUpdate = () => {
    dispatch(updateGate({ id, image, name, categoryId }));
    dispatch(getGateId({ id }));
    dispatch(changeEditingStatus(true));
  };

  return (
    <>
      <div className={styles.gate_item}>
        <img
          src={`http://161.35.29.179:8090/api/v1/public/image/${image}`}
          alt=""
        />
        <h4>{name}</h4>
      </div>
      <div className={styles.btns_container}>
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
    </>
  );
};

export default GateItem;
