import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import { createReview } from "../../../redux/admin/reviewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getGates, getReviews } from "../../../redux/user/UserThunk";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

export const Reviews = () => {
  const { reviewsList } = useSelector((state) => state.reviewsList);
  const { gatesList } = useSelector((state) => state.gates);

  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    saveDto: {
      firstName: "",
      lastName: "",
      gateCategoryId: "",
      reviewText: "",
    },
    image: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setReviewData((previousValue) => ({
      ...previousValue,
      saveDto: {
        ...previousValue.saveDto,
        [name]: value,
      },
    }));
  };
  const handleSelectImage = (image) => {
    setReviewData((previousValue) => {
      return {
        ...previousValue,
        image,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const {
      saveDto: { firstName, lastName, gateCategoryId, reviewText },
      image,
    } = reviewData;
    if (!firstName || !lastName || !gateCategoryId || !reviewText) {
      toast.error("Заполните все поля.");
      return;
    }

    const formData = new FormData();
    formData.append("image", reviewData.image);
    formData.append("firstName", reviewData.firstName);
    formData.append("lastName", reviewData.lastName);
    formData.append("reviewText", reviewData.reviewText);
    formData.append("gateCategoryId", reviewData.gateCategoryId);
    formData.append(
      "saveDto",
      new Blob([JSON.stringify(reviewData.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createReview(formData));
  };
  useEffect(() => {
    dispatch(getReviews());
    dispatch(getGates());
  }, [reviewsList.length]);

  return (
    <div className="admin_container">
      <div className={styles.container}>
        <label>Имя</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="firstName"
          value={reviewData.firstName}
          className={styles.title_input}
        />
        <label>Фамилия</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="lastName"
          value={reviewData.lastName}
          className={styles.title_input}
        />
        <label>Категория</label>
        <select
          onChange={(e) => onChange(e)}
          className={styles.select__category}
          name="gateCategoryId"
        >
          {gatesList.map((item, index) => (
            <option key={index} name="tag">
              {item.id}
            </option>
          ))}
        </select>
        <label>Текст</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="reviewText"
          className={styles.text_input}
          value={reviewData.reviewText}
        />

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
        <button onClick={handleClick} className={styles.submit_btn}>
          Создать ✨
        </button>
      </div>
      <div className={styles.content}>
        {reviewsList.length > 0 && (
          <div className={styles.content}>
            {reviewsList.map((item) => (
              <ReviewItem item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
