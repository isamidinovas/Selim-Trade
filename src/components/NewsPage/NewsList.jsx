import { useState } from "react";
import Button from "../Button/Button";
import New from "../New/New";
import styles from "./NewsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/user/UserThunk";
import { useEffect } from "react";
import axios from "axios";
const NewsList = () => {
  const { newsList } = useSelector((state) => state.news);
  console.log("news", newsList);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  const img = `http://161.35.29.179:8090/api/v1/public/image/news/${newsList.coverImage}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews({ size, page }));
  }, [page, size]);

  const loadMoreNews = () => {
    axios
      .get(
        `http://161.35.29.179:8090/api/v1/public/news?page=${page}&size=${size}`
      )
      .then((response) => response.data.content)
      .then((content) => {
        setNews([...newsList, ...content]);
        setSize(size + 6);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.news__block}>
      <div className={styles.news__container}>
        <div className={styles.news__section}>
          <h2 className={styles.news__title}>Новости компании</h2>
          <p className={styles.news__text}>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
        </div>
        {newsList.length > 0 && (
          <div className={styles.news__items}>
            {newsList.map((item) => (
              <New item={item} id={item.id} key={item.id} />
            ))}
          </div>
        )}
        <Button text="Загрузить еще" onClick={loadMoreNews} />
      </div>
    </div>
  );
};

export default NewsList;
