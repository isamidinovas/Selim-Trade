import { BsTrash3Fill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import styles from "./GateCategoryItem.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { GateAdvantages } from "../GateAdvantages/GateAdvantages";

const GateCategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
  console.log("i", item);
  //   const handleDeleteReview = () => {
  //     dispatch(deleteReview(item.id));
  //   };

  // dispatch(getId(id));

  return (
    <>
      <div>
        <div className={styles.grid_item}>
          <div className={styles.card_header}>
            <img className={styles.img} src={img} alt="" />

            <div className={styles.author}>
              <h4>{item.name} </h4>
              <p>{item.description}</p>
              {item.advantages?.length > 0 && (
                <div className={styles.content}>
                  {item.advantages.map((item, index) => (
                    <GateAdvantages index={index} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.author}>
          <h4>{item.advantages.title} </h4>
          <h4>{item.advantages.text} </h4>
        </div>
        <div className={styles.btn_container}>
          <Button
            text="Удалить"
            outline="#850000 3px solid"
            icon={<BsTrash3Fill />}
          />
          <Button
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
export default GateCategoryItem;
