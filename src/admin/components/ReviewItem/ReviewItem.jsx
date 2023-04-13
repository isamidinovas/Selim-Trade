import DefaultProfileIcon from "./img/default-profile-icon.png";
import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import styles from "./ReviewItem.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  changeEditingStatus,
  deleteReview,
  getId,
  updateReview,
} from "../../../redux/admin/reviewsSlice";

const ReviewItem = ({ item }) => {
  const dispatch = useDispatch();
  const img = item?.customerImage
    ? `http://161.35.29.179:8090/api/v1/public/image/${item.customerImage}`
    : DefaultProfileIcon;
  const maxLength = 120;
  // const shortenedText =
  //   item?.reviewText?.slice(0, maxLength) +
  //   (item?.reviewText?.length > maxLength ? "..." : "");

  const handleDeleteReview = () => {
    dispatch(deleteReview(item.id));
  };

  const handleEdit = () => {
    const {
      id,
      firstName,
      lastName,
      reviewText,
      customerImage,
      gateCategoryId,
    } = item;
    dispatch(
      updateReview({
        id,
        firstName,
        lastName,
        reviewText,
        customerImage,
        gateCategoryId,
      })
    );
    dispatch(getId(id));
    dispatch(changeEditingStatus(true));
  };

  return (
    <>
      <div>
        <div className={styles.grid_item}>
          <div className={styles.card_header}>
            <img className={styles.img} src={img} alt="" />

            <div className={styles.author}>
              <h4>{item?.firstName + " " + item?.lastName} </h4>
              <p>{item?.gateCategory?.name}</p>
            </div>
          </div>
          <p>{item.reviewText}</p>
          {/* <p>{shortenedText}</p> */}
        </div>
        <div className={styles.btn_container}>
          <Button
            handleclick={handleDeleteReview}
            text="Удалить"
            outline="#850000 3px solid"
            icon={<BsTrash3Fill />}
          />
          <Button
            handleclick={handleEdit}
            text="Редактировать"
            outline="#002b5b 3px solid"
            icon={
              <TbEdit
                style={{
                  display: "inline-block",
                  height: "23px",
                  width: "21px",
                }}
              />
            }
          />
        </div>
      </div>
    </>
  );
};
export default ReviewItem;
