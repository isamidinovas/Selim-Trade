import React from "react";
import New from "../New/New";
import Img from "./img/image.png";
import { getNewDetail, getSimilarNews } from "../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import styles from "./NewInfos.module.scss";

const NewInfos = () => {
  const { newDetailList } = useSelector((state) => state.newDetail);
  const { id: newId } = useParams();
  const { similarNewsList } = useSelector((state) => state.similarNews);
  const img = `http://161.35.29.179:8090/api/v1/public/image/${newDetailList.contentImage}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewDetail(newId));
    dispatch(getSimilarNews(newId));
  }, [newId]);
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content__top}>
            <img src={Img} alt="img" className={styles.img} />
            <div className={styles.content__info}>
              <h2 className={styles.title}>{newDetailList.title}</h2>
              <p className={styles.text}>{newDetailList.text}</p>
            </div>
          </div>
          <div className={styles.content__bottom}>
            <img src={img} alt="img" />
          </div>
        </div>
        <h2 className={styles.news__title}>Похожие новости</h2>

        {similarNewsList.length ? (
          <div className={styles.news}>
            {similarNewsList.map((item) => (
              <New item={item} id={item.id} key={item.id} />
            ))}
          </div>
        ) : (
          <h2 className={styles.message}>Нету похожих новостей!</h2>
        )}
      </div>
    </div>
  );
};

export default NewInfos;
