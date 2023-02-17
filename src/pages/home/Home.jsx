import React from "react";
import About from "../../components/HomePage/About/About";
import Advantages from "../../components/HomePage/Advantages/Advantages";
import Hero from "../../components/HomePage/Hero/Hero";
import News from "../../components/HomePage/News/News";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <News />
    </>
  );
};

export default Home;
