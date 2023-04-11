import React from "react";
import styles from "./Gate.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import GateList from "../../components/GateList/GateList";
import { createGate } from "../../../redux/admin/gateSlice";
import { toast } from "react-toastify";

const Gate = () => {
  const dispatch = useDispatch();
  const [gateValues, setGateValues] = useState({
    saveDto: {
      name: "",
      categoryId: 1,
    },
    image: null,
  });
  const [localPhot, setLocalPhoto] = useState(null);

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
    e.preventDefault();
    const {
      image,
      saveDto: { name, categoryId },
    } = gateValues;
    if (!image || !name || !categoryId) {
      toast.error("Заполните все поля");
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
          {!localPhot && <h3>Фото</h3>}
          {localPhot && (
            <img
              src={localPhot || ``}
              alt="image"
              className={styles.gate_img}
            />
          )}
        </div>
        <div>
          <label className={styles.name_label}>Названия</label>
          <input
            onChange={handleChange}
            type="text"
            className={styles.name_input}
            name="name"
          />
        </div>
        <button onClick={handleClick}>Создать ✨</button>
      </div>
      <GateList />
    </div>
  );
};

export default Gate;
