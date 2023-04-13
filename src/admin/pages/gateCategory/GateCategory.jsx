import React from "react";
import styles from "./GateCategory.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  createGareCategory,
  getGateCategores,
} from "../../../redux/admin/gateCategorySlice";
import { useEffect } from "react";
import GateCategoryItem from "../../components/GateCategoryItem/GateCategoryItem.jsx";
export const GateCategory = () => {
  const { gateCategory } = useSelector((state) => state.gateCategories);
  const [localImage, setLocalImage] = useState(null);
  const dispatch = useDispatch();
  const [gateCategoryData, setGateCategoryData] = useState({
    saveDto: {
      name: "",
      description: "",
      advantages: "",
    },
    image: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setGateCategoryData((previousValue) => ({
      ...previousValue,
      saveDto: {
        ...previousValue.saveDto,
        [name]: value,
      },
    }));
  };
  const handleSelectImage = (image) => {
    const localBlobImg = URL.createObjectURL(image);

    setGateCategoryData((previousValue) => {
      return {
        ...previousValue,
        image,
      };
    });
    setLocalImage(localBlobImg);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const {
      saveDto: { name, description, advantages },
      image,
    } = gateCategoryData;
    if (!name || !description || !advantages || !image) {
      toast.error("Заполните все поля.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "saveDto",
      new Blob([JSON.stringify(gateCategoryData.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createGareCategory(formData));
    // setLocalImage(null);
    setGateCategoryData({
      saveDto: {
        name: "",
        description: "",
        advantages: [],
      },
      image: null,
    });
  };
  useEffect(() => {
    dispatch(getGateCategores());
  }, [gateCategory?.length]);
  return (
    <div className="admin_container">
      <div className={styles.container}>
        <label>Название</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="name"
          value={gateCategoryData.saveDto?.name}
          className={styles.title_input}
        />
        <label>Описание</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="description"
          value={gateCategoryData.saveDto?.description}
          className={styles.title_input}
        />

        <label>Примущества</label>
        <div className={styles.inputs}>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="tt"
            className={styles.inputt}
            placeholder="title"
            value={gateCategoryData.saveDto?.advantages}
          />
          <input
            type="text"
            onChange={(e) => onChange(e)}
            placeholder="text"
            name="ee"
            className={styles.inputt}
            value={gateCategoryData.saveDto?.advantages}
          />
        </div>

        <label htmlFor="fileImg" className="select-photo-lable">
          Фото
        </label>
        <input
          onChange={(event) => {
            handleSelectImage(event.target.files[0]);
          }}
          id="fileImg"
          name="image"
          accept="image/*"
          type={"file"}
        />
        <div className={styles.img_placeholder}>
          <img
            src={
              localImage ||
              `http://161.35.29.179:8090/api/v1/public/image/${gateCategoryData.image}`
            }
            alt=""
            className={styles.image}
          />
        </div>

        <button className={styles.submit_btn} onClick={handleClick}>
          "Создать ✨
        </button>
      </div>
      <div className={styles.content}>
        {gateCategory?.length > 0 && (
          <div className={styles.content}>
            {gateCategory.map((item) => (
              <GateCategoryItem item={item} key={item?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
