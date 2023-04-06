import styles from "./ReviewItem.module.scss";

const ReviewItem = ({ item }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.customerImage}`;
  return (
    <>
      <div className={styles.grid_item}>
        <div className={styles.card_header}>
          <img className={styles.img} src={img} alt="" />

          <div className={styles.author}>
            <h4>{item.firstName + " " + item.lastName} </h4>
            <p>{item.gateCategory.name}</p>
          </div>
        </div>
        <p>{item.reviewText}</p>
      </div>
    </>
  );
};
export default ReviewItem;
