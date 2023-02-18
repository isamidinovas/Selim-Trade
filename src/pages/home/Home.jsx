import React from "react";
import Footer from "../../components/Footer/Footer";
import Forms from "../../components/Forms/Forms";
import About from "../../components/HomePage/About/About";
import Advantages from "../../components/HomePage/Advantages/Advantages";
import Hero from "../../components/HomePage/Hero/Hero";
import News from "../../components/HomePage/News/News";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <News />
      <Advantages />
      <Forms />
      <Footer />
    </>
  );
};

export default Home;
