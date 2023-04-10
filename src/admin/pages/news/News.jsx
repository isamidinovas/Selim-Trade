import React, { useRef } from "react";
import styles from "./News.module.scss";
import { useState } from "react";
import {
  changeEditingStatus,
  createNewItem,
  getAllNews,
  updateNewItem,
} from "../../../redux/admin/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
const News = () => {
  const dispatch = useDispatch();
  const contentInputRef = useRef();
  const coverInputRef = useRef();
  const { newsUpdateValues, singleNew, isEditing } = useSelector(
    (store) => store.news
  );
  const [newsValue, setNewsValue] = useState({
    saveDto: {
      title: "",
      text: "",
    },
    coverImage: null,
    contentImage: null,
  });
  useEffect(() => {
    setNewsValue({
      saveDto: {
        title: newsUpdateValues.saveDto.title || "",
        text: newsUpdateValues.saveDto.text || "",
      },
      coverImage: singleNew.coverImage || null,
      contentImage: singleNew.contentImage || null,
    });
  }, [newsUpdateValues]);

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
      const localBlobImg = URL.createObjectURL(img);
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
    if (isEditing) {
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("contentImage", contentImage);

      formData.set(
        "updateDto",
        new Blob([JSON.stringify(newsValue.saveDto)], {
          type: "application/json",
        })
      );
      const id = singleNew?.id;
      dispatch(updateNewItem({ formData, id }));
      setNewsValue({
        saveDto: {
          title: "",
          text: "",
        },
        coverImage: null,
        contentImage: null,
      });
      setLocalImgs({
        coverImage: null,
        contentImage: null,
      });
      dispatch(changeEditingStatus(false));

      return;
    } else {
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("contentImage", contentImage);
      formData.append(
        "saveDto",
        new Blob([JSON.stringify(newsValue.saveDto)], {
          type: "application/json",
        })
      );
      dispatch(createNewItem({ formData }));
    }
    setNewsValue({
      saveDto: {
        title: "",
        text: "",
      },
      coverImage: null,
      contentImage: null,
    });
    setLocalImgs({
      coverImage: null,
      contentImage: null,
    });
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
            value={newsValue.saveDto.title}
            className={styles.title_input}
          />
        </div>
        <div className={styles.text_input_wrapper}>
          <label>Теск</label>
          <textarea
            type="text"
            name="text"
            onChange={handleChange}
            value={newsValue.saveDto.text}
            className={styles.text_input}
            // || newsUpdateValues?.saveDto?.text
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
            <div className={styles.img_border}>
              {!localImgs.coverImage && <h3>Фото</h3>}
              <img
                src={
                  localImgs.coverImage ||
                  `http://161.35.29.179:8090/api/v1/public/image/${newsValue.coverImage}` ||
                  null
                }
                onError="this.style.display='none'"
                alt=""
                className={styles.coverImg}
              />
            </div>
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
            <div className={styles.img_border}>
              {!localImgs.contentImage && <h3>Фото</h3>}
              <img
                onerror="this.style.display='none'"
                src={
                  localImgs.contentImage ||
                  `http://161.35.29.179:8090/api/v1/public/image/${newsValue.contentImage}`
                }
                alt=""
                className={styles.contentImg}
              />
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.submit_btn}>
          {isEditing ? "Редактировать ✨" : "Отправить ✨"}
        </button>
      </div>
      <div className={styles.list_container}>
        <NewsList />
      </div>
    </section>
  );
};

export default News;
