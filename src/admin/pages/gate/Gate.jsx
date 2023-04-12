import React, { useEffect } from "react";
import styles from "./Gate.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GateList from "../../components/GateList/GateList";
import {
  changeEditingStatus,
  createGate,
  getGates,
  updateGateItem,
} from "../../../redux/admin/gateSlice";
import { toast } from "react-toastify";

const Gate = () => {
  const dispatch = useDispatch();
  const { gates, updateValues, isEditing, singleGateId } = useSelector(
    (store) => store.gate
  );
  const [localPhot, setLocalPhoto] = useState(null);
  const [gateValues, setGateValues] = useState({
    saveDto: {
      name: "",
      categoryId: 1,
    },
    image: null,
  });
  useEffect(() => {
    dispatch(getGates());
  }, [gates.length]);

  useEffect(() => {
    setGateValues({
      saveDto: {
        name: updateValues.saveDto.name || "",
        categoryId: 1,
      },
      image: updateValues.image || null,
    });

    setLocalPhoto();
  }, [updateValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const img = e.target.files[0];
      const localImg = URL.createObjectURL(img);
      setGateValues({ ...gateValues, [name]: img });
      setLocalPhoto(localImg);
    }

    setGateValues((prevState) => ({
      ...prevState,
      saveDto: {
        ...prevState.saveDto,
        [name]: value,
      },
    }));
  };

  const handleClick = (e) => {
    console.log(isEditing);
    e.preventDefault();
    const {
      image,
      saveDto: { name, categoryId },
    } = gateValues;
    if (!image || !name || !categoryId) {
      toast.error("Заполните все поля");
      return;
    }

    if (isEditing) {
      const formData = new FormData();
      formData.append("image", gateValues.image);
      formData.set(
        "updateDto",
        new Blob([JSON.stringify(gateValues.saveDto)], {
          type: "application/json",
        })
      );
      const id = singleGateId;
      dispatch(updateGateItem({ formData, id }));
      setGateValues({
        saveDto: {
          name: "",
          categoryId: 1,
        },
        image: null,
      });
      setLocalPhoto(null);
      dispatch(changeEditingStatus(false));
      return;
    }
    const formData = new FormData();
    formData.append("image", gateValues.image);
    formData.set(
      "saveDto",
      new Blob([JSON.stringify(gateValues.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createGate(formData));
    setGateValues({
      saveDto: {
        name: "",
        categoryId: 1,
      },
      image: null,
    });
    setLocalPhoto(null);
  };
  return (
    <div className={styles.container}>
      <div className={styles.add_work}>
        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          name="image"
          className={styles.file_input}
        />
        <div className={styles.image_placeholder}>
          {!localPhot && !gateValues.image && <h3>Фото</h3>}
          {localPhot ||
            (gateValues.image && (
              <img
                src={
                  localPhot ||
                  `http://161.35.29.179:8090/api/v1/public/image/${gateValues.image}`
                }
                alt="image"
                className={styles.gate_img}
              />
            ))}
        </div>
        <div>
          <label className={styles.name_label}>Названия</label>
          <input
            onChange={handleChange}
            type="text"
            className={styles.name_input}
            name="name"
            value={gateValues.saveDto.name}
          />
        </div>
        <button onClick={handleClick}>
          {isEditing ? "Редактировать ✨" : "Создать ✨"}
        </button>
      </div>
      <GateList />
    </div>
  );
};

export default Gate;
