import React, { useRef, useState } from "react";
import styles from "./Revews.module.scss";
import LeftArrow from "../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
import NavigateBtn from "../NavigateBtn/NavigateBtn";

const Revews = () => {
  const [scrollAmount, setScrollAmount] = useState(347);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollAmount;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += scrollAmount;
  };

  return (
    <>
      <div id="reviews" className={styles.wrapper}>
        <h2 className={styles.title}>Отзывы наших клиентов</h2>
        <div className={styles.grid} ref={scrollRef}>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.card_header}>
              <img
                className={styles.img}
                src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                alt=""
              />

              <div className={styles.author}>
                <h4>Мадина Аимбекова </h4>
                <p>секционные ворота</p>
              </div>
            </div>
            <p className={styles.card_text}>
              Ворота стоят уже более двух лет. За это время с ними не было
              никаких проблем. Спасибо, Selim Trade!
            </p>
          </div>

          <div className={styles.grid_item}>end</div>
        </div>
        <div className={styles.scrollBtns}>
          <button onClick={scrollLeft} className={styles.scrollBtn}>
            <img src={LeftArrow} alt="LeftArrow" />
          </button>
          <button onClick={scrollRight} className={styles.scrollBtn}>
            <img src={RightArrow} alt="RightArrow" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Revews;
