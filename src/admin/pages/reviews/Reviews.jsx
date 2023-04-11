import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import { createReview, getReviews } from "../../../redux/admin/reviewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getGates } from "../../../redux/user/UserThunk";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

export const Reviews = () => {
  const { reviews } = useSelector((state) => state.reviews);
  console.log("ff", reviews);
  const { gatesList } = useSelector((state) => state.gates);
  const [localImage, setLocalImage] = useState(null);
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
    const localBlobImg = URL.createObjectURL(image);
    setReviewData((previousValue) => {
      return {
        ...previousValue,
        image,
      };
    });
    setLocalImage(localBlobImg);
    // return;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const {
      saveDto: { firstName, lastName, gateCategoryId, reviewText },
    } = reviewData;
    if (!firstName || !lastName || !gateCategoryId || !reviewText) {
      toast.error("Заполните все поля.");
      return;
    }

    const formData = new FormData();
    formData.append("image", reviewData.image);
    formData.append(
      "saveDto",
      new Blob([JSON.stringify(reviewData.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createReview(formData));
  };

  // const handleEditClick = () => {
  //   setReviewData({
  //     saveDto: {
  //       firstName: reviews.firstName,
  //       lastName: reviews.lastName,
  //       gateCategoryId: reviews.gateCategory,
  //       reviewText: reviews.reviewText,
  //     },
  //     image: reviews.image,
  //   });
  // };
  useEffect(() => {
    dispatch(getReviews());
    dispatch(getGates());
  }, [reviews.length]);

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
            <option key={index} name="category">
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
        <div className={styles.img_placeholder}>
          {localImage && (
            <img src={localImage} alt="" className={styles.image} />
          )}
        </div>

        <button onClick={handleClick} className={styles.submit_btn}>
          Создать ✨
        </button>
      </div>
      <div className={styles.content}>
        {reviews.length > 0 && (
          <div className={styles.content}>
            {reviews.map((item) => (
              <ReviewItem
                item={item}
                // key={item.id}
                // handleEditClick={handleEditClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
