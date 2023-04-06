import React from "react";
import styles from "./News.module.scss";
import { useState } from "react";
import { createNewItem, getAllNews } from "../../../redux/admin/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
const News = () => {
  const { news } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const [newsValue, setNewsValue] = useState({
    saveDto: {
      title: "",
      text: "",
    },
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
      console.log(name);
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
    formData.append("coverImage", newsValue.coverImage);
    formData.append("contentImage", newsValue.contentImage);
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
        <label htmlFor="">title</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={newsValue.title}
        />

        <label htmlFor="">cover Img</label>
        <input
          type="file"
          accept="image/*"
          name="coverImage"
          onChange={handleChange}
        />

        <label htmlFor="">text</label>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          value={newsValue.text}
        />

        <label htmlFor="">content Img</label>
        <input
          type="file"
          accept="image/*"
          name="contentImage"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
      {news.map((newItem) => {
        return <h1>{newItem.title}</h1>;
      })}
    </section>
  );
};

export default News;
