import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import {
  createReview,
  editReview,
  getReviews,
} from "../../../redux/admin/reviewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getGates } from "../../../redux/user/UserThunk";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import { changeEditingStatus } from "../../../redux/admin/newsSlice";

export const Reviews = () => {
  const { reviewsEditData, isEditing, reviews, reviewId } = useSelector(
    (state) => state.reviews
  );
  console.log("id", reviewId);
  const { gatesList } = useSelector((state) => state.gates);
  const [localImage, setLocalImage] = useState(null);
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    saveDto: {
      firstName: "",
      lastName: "",
      gateCategory: "",
      reviewText: "",
    },
    customerImage: null,
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
        customerImage: image,
      };
    });
    setLocalImage(localBlobImg);
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
    if (isEditing) {
      const id = reviewId;
      // const data = {
      //   saveDto: {
      //     id: id,
      //     firstName: reviewData.saveDto.firstName,
      //     lastName: reviewData.saveDto.lastName,
      //     gateCategorId: reviewData.saveDto.gateCategoryId,
      //     reviewText: reviewData.saveDto.reviewText,
      //   },
      // };
      const formData = new FormData();
      formData.append("image", reviewData.customerImage);
      formData.set(
        "updateDto",
        new Blob([JSON.stringify(reviewData.saveDto)], {
          type: "application/json",
        })
      );
      dispatch(editReview({ formData, id }));
      dispatch(changeEditingStatus(false));
      return;
    }

    const formData = new FormData();
    formData.append("image", reviewData.customerImage);
    formData.append(
      "saveDto",
      new Blob([JSON.stringify(reviewData.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createReview(formData));
    setLocalImage(null);
    setReviewData({
      saveDto: {
        firstName: "",
        lastName: "",
        gateCategoryId: "",
        reviewText: "",
      },
      customerImage: null,
    });
  };
  useEffect(() => {
    setReviewData({
      saveDto: {
        firstName: reviewsEditData?.saveDto.firstName || "",
        lastName: reviewsEditData?.saveDto.lastName || "",
        gateCategoryId: reviewsEditData?.saveDto.gateCategoryId || "",
        reviewText: reviewsEditData?.saveDto.reviewText || "",
      },
      customerImage: reviewsEditData?.customerImage || null,
    });
  }, [reviewsEditData]);
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
          value={reviewData.saveDto?.firstName}
          className={styles.title_input}
        />
        <label>Фамилия</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="lastName"
          value={reviewData.saveDto?.lastName}
          className={styles.title_input}
        />
        <label>Категория</label>
        <select
          onChange={(e) => onChange(e)}
          className={styles.select__category}
          name="gateCategoryId"
        >
          {gatesList.map((item, index) => (
            <option key={index} name="category" value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <label>Текст</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="reviewText"
          className={styles.text_input}
          value={reviewData.saveDto?.reviewText}
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
          <img
            src={
              localImage ||
              `http://161.35.29.179:8090/api/v1/public/image/${reviewData.customerImage}`
            }
            alt=""
            className={styles.image}
          />
        </div>

        <button onClick={handleClick} className={styles.submit_btn}>
          {isEditing ? "Редактировать ✨" : "Создать ✨"}
        </button>
      </div>
      <div className={styles.content}>
        {reviews.length > 0 && (
          <div className={styles.content}>
            {reviews.map((item) => (
              <ReviewItem
                item={item}
                key={item?.id}
                // handleEditClick={handleEditClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
