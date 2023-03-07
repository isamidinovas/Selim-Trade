import React from "react";
import SingleWork from "../SingleWork/SingleWork";
import styles from "./WorksList.module.scss";
const WorksList = () => {
  return (
    <>
      <section className={styles.container}>
        <SingleWork img="https://4kwallpapers.com/images/wallpapers/planet-earth-orbit-outer-space-cosmos-5120x2880-8769.jpg" />
        <SingleWork img="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" />
        <SingleWork img="https://miridei.com/files/img/c/idei-dosuga/kakoi-film-posmotret/man_in_space.jpg" />
        <SingleWork img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiztFccg-qFU0RvQRTps4i_IJNC3qTq-wTasTssUk-0Qxs6aKzkH1gjWfNs7LmUsFMc_g&usqp=CAU" />
        <div className={styles.horzontal}>
          <SingleWork img="https://gamerwall.pro/uploads/posts/2021-11/1637746724_1-gamerwall-pro-p-oboi-v-stile-kosmos-oboi-na-rabochii-stol-1.jpg" />
        </div>
        <SingleWork img="https://99px.ru/sstorage/53/2014/12/tmb_116422_8423.jpg" />
        <SingleWork img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQeRENOApf5Uy9DOXQqtUxXm066r6-eHVSZvDmareweRQdrO4t5BVp1DJeA1yMiILgQM&usqp=CAU" />
        <SingleWork img="https://look.com.ua/pic/201501/1280x1024/look.com.ua-114692.jpg" />
        <div className={styles.horzontal}>
          <SingleWork img="https://celes.club/uploads/posts/2022-06/1654723666_3-celes-club-p-oboi-na-telefon-chyornie-kosmos-krasivie-3.jpg" />
        </div>
        <SingleWork img="https://zastavok.net/ts/cosmos/167649774186.jpg" />
      </section>
    </>
  );
};

export default WorksList;
