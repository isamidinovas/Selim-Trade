import React from "react";
import Footer from "../../components/Footer/Footer";
import Forms from "../../components/Forms/Forms";
import About from "../../components/HomePage/About/About";
import Advantages from "../../components/HomePage/Advantages/Advantages";
import Hero from "../../components/HomePage/Hero/Hero";
import News from "../../components/HomePage/News/News";
import OurWorks from "../../components/HomePage/OurWorks/OurWorks";
import Revews from "../../components/HomePage/Revews/Revews";
import WeOffer from "../../components/HomePage/WeOffer/WeOffer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WeOffer />
      <Advantages />
      <News />
      <OurWorks />
      <Advantages />
      <div className={styles.background_img_container}>
        <Revews />
        <Forms />
      </div>
      <Footer />
    </>
  );
};

export default Home;
