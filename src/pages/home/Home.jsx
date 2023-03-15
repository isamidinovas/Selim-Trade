import React from "react";
import About from "../../components/HomePage/About/About";
import Advantages from "../../components/HomePage/Advantages/Advantages";
import Hero from "../../components/HomePage/Hero/Hero";
import News from "../../components/HomePage/News/News";
import OurWorks from "../../components/HomePage/OurWorks/OurWorks";
import Revews from "../../components/HomePage/Revews/Revews";
import ServicesBlock from "../../components/HomePage/ServicesBlock/ServicesBlock";
import WeOffer from "../../components/HomePage/WeOffer/WeOffer";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <About />
      <WeOffer />
      <Advantages />
      <News />
      <div className={styles.background__services}>
        <OurWorks />
        <ServicesBlock />
      </div>
      <div className={styles.background_img_container}>
        <Revews />
      </div>
    </>
  );
};

export default Home;
