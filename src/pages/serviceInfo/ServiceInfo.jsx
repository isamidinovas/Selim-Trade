import React from "react";
import Hero from "../../components/ServiceInfoPage/Hero/Hero";
import Section from "../../components/ServiceInfoPage/Section/Section";
import GateTypes from "../../components/ServiceInfoPage/gateTypes/GateTypes";
import Advantages from "../../components/ServiceInfoPage/Advantages/Advantages";

const ServiceInfo = () => {
  return (
    <>
      <Hero />
      <Section />
      <GateTypes />
      <Advantages />
    </>
  );
};

export default ServiceInfo;
