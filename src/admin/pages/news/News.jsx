import React, { useRef } from "react";
import styles from "./News.module.scss";
import { useState } from "react";
import { createNewItem, getAllNews } from "../../../redux/admin/newsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
// import NewsList from "../../components/NewsList/NewsList";

const News = () => {
  const dispatch = useDispatch();
  const contentInputRef = useRef();
  const coverInputRef = useRef();
  const [newsValue, setNewsValue] = useState({
    saveDto: {
      title: "",
      text: "",
    },
    coverImage: null,
    contentImage: null,
  });

  const [localImgs, setLocalImgs] = useState({
    coverImage: null,
    contentImage: null,
  });
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "coverImage" || name === "contentImage") {
      const img = e.target.files[0];
      const localBlobImg = URL.createObjectURL(e.target.files[0]);
      setLocalImgs({ ...localImgs, [name]: localBlobImg });
      setNewsValue({ ...newsValue, [name]: img });
      return;
    }
    setNewsValue((prevState) => ({
      ...prevState,
      saveDto: {
        ...prevState.saveDto,
        [name]: value,
      },
    }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      saveDto: { title, text },
      coverImage,
      contentImage,
    } = newsValue;
    if (!text || !title || !contentImage || !coverImage) {
      toast.error("Заполните все поля.");
      return;
    }
    const formData = new FormData();
    formData.append("coverImage", coverImage);
    formData.append("contentImage", contentImage);
    formData.append(
      "saveDto",
      new Blob([JSON.stringify(newsValue.saveDto)], {
        type: "application/json",
      })
    );
    dispatch(createNewItem(formData));
  };

  return (
    <section className="admin_container">
      <div className={styles.container}>
        <div>
          <label>Заголовок</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newsValue.title}
            className={styles.title_input}
          />
        </div>
        <div className={styles.text_input_wrapper}>
          <label>Теск</label>
          <textarea
            type="text"
            name="text"
            onChange={handleChange}
            value={newsValue.text}
            className={styles.text_input}
          />
        </div>
        <div className={styles.image_selects}>
          <div>
            <label>Внешняя картинка</label>
            <button
              onClick={() => coverInputRef.current.click()}
              className={styles.select_btn}
            >
              Выбрать
            </button>
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              name="coverImage"
              onChange={handleChange}
            />
            <img
              src={localImgs.coverImage}
              alt=""
              className={styles.coverImg}
            />
          </div>

          <div>
            <label>Внутренняя картинка</label>
            <button
              onClick={() => contentInputRef.current.click()}
              className={styles.select_btn}
            >
              Выбрать
            </button>
            <input
              ref={contentInputRef}
              type="file"
              accept="image/*"
              name="contentImage"
              onChange={handleChange}
            />
            <img
              src={localImgs.contentImage}
              alt=""
              className={styles.contentImg}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.submit_btn}>
          Отправить ✨
        </button>
      </div>
      <div className={styles.list_container}>
        <NewsList />
      </div>
    </section>
  );
};

export default News;
