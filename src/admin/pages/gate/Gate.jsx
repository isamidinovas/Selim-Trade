import React from "react";
import styles from "./Gate.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import GateList from "../../components/GateList/GateList";

const Gate = () => {
  const dispatch = useDispatch();
  const [gateValues, setGateValues] = useState({
    image: "string",
    saveDto: {
      name: "string",
      categoryId: 0,
    },
  });
  const [localPhot, setLocalPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gate_photo") {
      const img = e.target.files[0];
      const localImg = URL.createObjectURL(img);
      setGateValues({ ...gateValues, image: img });
      setLocalPhoto(localImg);
    }
    setGateValues({ ...gateValues, saveDto: { [name]: value } });
    console.log(gateValues);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", gateValues.image);
    formData.set(
      "saveDto",
      new Blob([JSON.stringify(gateValues.saveDto)], {
        type: "application/json",
      })
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.add_work}>
        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          name="gate_photo"
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
