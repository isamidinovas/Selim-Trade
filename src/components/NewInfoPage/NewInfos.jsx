import React from "react";
import New from "../New/New";
import Img from "./img/image.png";
import {
  getNewDetail,
  getNewsPag,
  getSimilarNews,
} from "../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./NewInfos.module.scss";

const NewInfos = () => {
  const { newDetailList } = useSelector((state) => state.newDetail);
  const { newsPaginationList } = useSelector((state) => state.newsPagination);
  const { id: newId } = useParams();
  const { similarNewsList, isloading } = useSelector(
    (state) => state.similarNews
  );
  const img = `http://161.35.29.179:8090/api/v1/public/image/${newDetailList.contentImage}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewDetail(newId));
    dispatch(getSimilarNews(newId));
    dispatch(getNewsPag());
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
        <h2 className={styles.news__title}>
          {similarNewsList.length ? "ПОХОЖИЕ НОВОСТИ" : "ПОСЛЕДНИЕ НОВОСТИ"}
        </h2>
        {isloading ? (
          <div className={styles.news}>
            <Skeleton width={440} height={300} />
            <Skeleton width={440} height={300} />
            <Skeleton width={440} height={300} />
          </div>
        ) : similarNewsList.length ? (
          <div className={styles.news}>
            {similarNewsList.map((item) => (
              <New item={item} id={item.id} key={item.id} />
            ))}
          </div>
        ) : (
          newsPaginationList.length > 0 && (
            <div className={styles.news}>
              {newsPaginationList.map((item) => (
                <New item={item} id={item.id} key={item.id} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NewInfos;
