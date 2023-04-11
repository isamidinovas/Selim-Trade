import React from "react";
import styles from "./GateItem.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

const GateItem = ({ id, image, name }) => {
  const [gate, setGate] = useState({});

  const handleDelete = (e) => {};

  const handleUpdate = () => {};
  useEffect(() => {
    setGate({ image, name });
  }, [image, name]);
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
