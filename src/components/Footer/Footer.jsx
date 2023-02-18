import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/icons/logo.svg";
// import { Map } from "2gis-maps-react";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_col_1}>
            <img className={styles.logo} src={logo} alt="Selim trade" />

            <div>
              <p>СОЦИАЛЬНЫЕ СЕТИ</p>
              <div className={styles.social_icons}>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5 2H10.5C5.80558 2 2 5.80558 2 10.5V25.5C2 30.1944 5.80558 34 10.5 34H25.5C30.1944 34 34 30.1944 34 25.5V10.5C34 5.80558 30.1944 2 25.5 2Z"
                      stroke="url(#paint0_linear_1203_72)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.2778 21.1595C24.9559 19.8526 25.2047 18.3652 24.9887 16.9088C24.7684 15.4232 24.0762 14.0478 23.0142 12.9858C21.9522 11.9238 20.5769 11.2316 19.0912 11.0113C17.6348 10.7953 16.1474 11.0441 14.8405 11.7222C13.5336 12.4003 12.4738 13.4733 11.8118 14.7884C11.1499 16.1036 10.9194 17.594 11.1534 19.0476C11.3873 20.5013 12.0736 21.8442 13.1147 22.8853C14.1558 23.9264 15.4987 24.6127 16.9524 24.8467C18.406 25.0806 19.8964 24.8502 21.2116 24.1882C22.5268 23.5262 23.5997 22.4664 24.2778 21.1595Z"
                      stroke="url(#paint1_linear_1203_72)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.25 9.75H26.2642"
                      stroke="url(#paint2_linear_1203_72)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1203_72"
                        x1="3"
                        y1="16.5495"
                        x2="43.2688"
                        y2="16.6374"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1203_72"
                        x1="12.0645"
                        y1="17.3553"
                        x2="28.172"
                        y2="17.3905"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1203_72"
                        x1="26.25"
                        y1="10.2016"
                        x2="26.269"
                        y2="10.2016"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.02931 33.8931L8.46339 31.914L17 34V34.25C17.0001 34.25 17.0002 34.25 17.0002 34.25C26.2367 34.2499 33.75 26.7365 33.75 17.5C33.75 8.26345 26.2365 0.75 17 0.75C7.76345 0.75 0.25 8.26345 0.25 17.5C0.25 20.6131 1.10484 23.6371 2.72773 26.2714C2.40389 27.4088 1.96277 29.0015 1.59697 30.3304C1.40825 31.016 1.23951 31.6315 1.11716 32.0786L0.971718 32.6103L0.931292 32.7582L0.920258 32.7986L0.917207 32.8097L0.916185 32.8134L0.915719 32.8151C0.873802 32.968 0.873888 33.1294 0.915968 33.2823C0.958049 33.4352 1.04057 33.5739 1.15483 33.6839L1.15486 33.6839C1.38714 33.9073 1.72265 33.987 2.02904 33.8932L2.02931 33.8931ZM17 32.4808H16.9998C14.1894 32.4835 11.4352 31.6937 9.05341 30.2019L9.05335 30.2019C8.94568 30.1345 8.82478 30.0911 8.69885 30.0746C8.57294 30.0581 8.44496 30.0689 8.3236 30.1063C8.32358 30.1063 8.32356 30.1063 8.32354 30.1063L3.04725 31.7304C3.53606 29.944 4.03276 28.1597 4.53733 26.3776C4.60795 26.1315 4.56796 25.8668 4.42947 25.6524L4.4291 25.6518C2.85251 23.2258 2.01524 20.3937 2.01923 17.5003V17.5C2.01923 9.2402 8.7402 2.51923 17 2.51923C25.2598 2.51923 31.9808 9.2402 31.9808 17.5C31.9808 25.7598 25.2598 32.4808 17 32.4808Z"
                      fill="url(#paint0_linear_1203_77)"
                      stroke="url(#paint1_linear_1203_77)"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M27.184 20.9863C26.0492 20.3449 25.0828 19.7016 24.3776 19.2323C23.8391 18.8743 23.45 18.6159 23.1647 18.4701C22.3674 18.0652 21.7631 18.3512 21.5331 18.5877C21.5045 18.6168 21.4788 18.6486 21.4563 18.6828C20.6282 19.9475 19.5468 21.1571 19.2302 21.2222C18.8645 21.164 17.1523 20.1734 15.4507 18.731C13.7134 17.2573 12.6203 15.8462 12.4599 14.885C13.5744 13.7173 13.9759 12.9827 13.9759 12.1466C13.9759 11.2849 12.0013 7.68735 11.6441 7.32378C11.2857 6.95957 10.4785 6.90263 9.24467 7.15294C9.12581 7.17744 9.0166 7.23682 8.93053 7.32378C8.78114 7.47584 5.28561 11.1035 6.94669 15.5001C8.77007 20.3255 13.4503 25.9343 19.4171 26.8454C20.0952 26.9487 20.7309 27 21.326 27C24.8362 27 26.908 25.2022 27.4914 21.6359C27.5126 21.5085 27.4944 21.3776 27.4393 21.2613C27.3843 21.1449 27.295 21.0488 27.184 20.9863ZM19.5997 25.6077C13.2898 24.6446 9.31537 18.2811 8.09445 15.0508C6.88337 11.8469 9.1168 8.99021 9.67746 8.34441C10.1336 8.26557 10.6137 8.2324 10.8142 8.26431C11.2328 8.85692 12.6824 11.6447 12.7463 12.1466C12.7463 12.4751 12.6412 12.9326 11.3896 14.2073C11.3324 14.2653 11.287 14.3343 11.2561 14.4102C11.2252 14.4861 11.2093 14.5675 11.2094 14.6497C11.2094 17.9263 17.9989 22.4719 19.2013 22.4719C20.247 22.4719 21.6106 20.6828 22.387 19.517C22.4672 19.5249 22.5448 19.5496 22.6151 19.5896C22.8364 19.7028 23.22 19.9575 23.7051 20.2804C24.3457 20.7066 25.1965 21.2723 26.201 21.8586C25.7449 24.0927 24.4698 26.3523 19.5997 25.6077Z"
                      fill="url(#paint2_linear_1203_77)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1203_77"
                        x1="0.5"
                        y1="15.9044"
                        x2="44.7956"
                        y2="16.0011"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1203_77"
                        x1="0.5"
                        y1="15.9044"
                        x2="44.7956"
                        y2="16.0011"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1203_77"
                        x1="6.5"
                        y1="16.033"
                        x2="34.6881"
                        y2="16.0976"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#105BFB" />
                        <stop offset="1" stopColor="#5061FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.footer_col_2}>
            <div>
              <a href="#">Главная</a>
              <a href="#">О нас</a>
              <a href="#">Услуги</a>
            </div>
            <div>
              <a href="#">Работы</a>
              <a href="#">Отзывы</a>
              <a href="#">Новости</a>
            </div>
          </div>
          <div className={styles.footer_col_3}>
            <div>
              <p>РЕЖИМ РАБОТЫ</p>
              <p>Пн-Пт 8:30–18:30</p>
              <p>Суббота 8:30–14:00</p>
            </div>
            <div>
              <p>ТЕЛЕФОН</p>
              <p>+996 (552) 57 07 55</p>
              <p>+996 (500) 88 80 51</p>
              <p>+996 (772) 32 76 76</p>
            </div>
          </div>
          <div className={styles.footer_col_4}>{/* <Map /> */}</div>
        </div>

        <span className={styles.location_pin}>
          <svg
            width="329"
            height="322"
            viewBox="0 0 329 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_146_191)">
              <path
                d="M287.281 132.247C287.281 234.489 163.992 322.125 163.992 322.125C163.992 322.125 40.7026 234.489 40.7026 132.247C40.7026 97.3826 53.692 63.9467 76.8132 39.2942C99.9344 14.6417 131.293 0.792023 163.992 0.792023C196.69 0.792023 228.049 14.6417 251.17 39.2942C274.292 63.9467 287.281 97.3826 287.281 132.247Z"
                fill="url(#paint0_linear_146_191)"
                fillOpacity="0.15"
              />
              <path
                d="M164.843 189.018C195.569 189.018 220.478 163.529 220.478 132.086C220.478 100.643 195.569 75.1542 164.843 75.1542C134.117 75.1542 109.208 100.643 109.208 132.086C109.208 163.529 134.117 189.018 164.843 189.018Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_146_191"
                x1="163.992"
                y1="0.792023"
                x2="163.992"
                y2="322.125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#105BFB" />
                <stop offset="0.484375" stopColor="#89F1FF" />
                <stop offset="1" stopColor="#367CFF" />
              </linearGradient>
              <clipPath id="clip0_146_191">
                <rect
                  width="329"
                  height="325"
                  fill="white"
                  transform="translate(0 -3)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className={styles.location_pin_small}>
          <svg
            width="138"
            height="137"
            viewBox="0 0 138 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1203_454)">
              <path
                d="M120.501 57.0409C120.501 99.8254 68.7869 136.498 68.7869 136.498C68.7869 136.498 17.0729 99.8254 17.0729 57.0409C17.0729 42.4517 22.5213 28.46 32.2196 18.1439C41.9178 7.82776 55.0715 2.03223 68.7869 2.03223C82.5023 2.03223 95.6559 7.82776 105.354 18.1439C115.052 28.46 120.501 42.4517 120.501 57.0409Z"
                fill="url(#paint0_linear_1203_454)"
                fillOpacity="0.15"
              />
              <path
                d="M69.144 80.7975C82.0322 80.7975 92.4801 70.1312 92.4801 56.9737C92.4801 43.8162 82.0322 33.1499 69.144 33.1499C56.2558 33.1499 45.8079 43.8162 45.8079 56.9737C45.8079 70.1312 56.2558 80.7975 69.144 80.7975Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1203_454"
                x1="68.7869"
                y1="2.03223"
                x2="68.7869"
                y2="136.498"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#105BFB" />
                <stop offset="0.484375" stopColor="#89F1FF" />
                <stop offset="1" stopColor="#367CFF" />
              </linearGradient>
              <clipPath id="clip0_1203_454">
                <rect
                  width="138"
                  height="136"
                  fill="white"
                  transform="translate(0 0.445312)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </footer>
      <div className={styles.footer_under}>
        <div>11111111111</div>
        <div className={styles.footer_under__text}>
          <p>
            © 2023 Selim Trade. Данный сайт защищён от копирования. Любая
            передача данных в интернете запрещена.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
