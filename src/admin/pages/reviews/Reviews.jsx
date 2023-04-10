import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import { createReview } from "../../../redux/admin/reviewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../redux/user/UserThunk";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReviewItem from "../../../components/HomePage/Revews/ReviewItem/ReviewItem";

export const Reviews = () => {
  const { reviewsList } = useSelector((state) => state.reviewsList);
  console.log("rev", reviewsList);
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    saveDto: {
      firstName: "",
      lastName: "",
      gateCategory: "",
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
    formData.append("gateCategory", reviewData.gateCategory);
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
  }, [reviewsList.length]);

  return (
    <div className="admin_container">
      <div className={styles.content__top}>
      </div>

      <div className={styles.modal}>
        <label htmlFor="fileImg" className="select-photo-lable">
          Добавить фото
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
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="firstName"
          className="modal-input"
          value={reviewData.firstName}
        />
        Имя
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="lastName"
          className="modal-input"
          value={reviewData.lastName}
        />
        Фамилия
        <select
          onChange={(e) => onChange(e)}
          className="select-category"
          name="gateCategory"
        >
          {reviewsList.map((item, index) => (
            <option key={index} name="tag">
              {item.gateCategory.id}
            </option>
          ))}
        </select>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="reviewText"
          className="modal-input"
          value={reviewData.reviewText}
        />
        Текст
        <button onClick={handleClick}>Создать</button>
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
