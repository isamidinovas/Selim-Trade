import React, { useEffect } from "react";
import Hero from "../../components/ServiceInfoPage/Hero/Hero";
import Section from "../../components/ServiceInfoPage/Section/Section";
import GateTypes from "../../components/ServiceInfoPage/gateTypes/GateTypes";
import Advantages from "../../components/ServiceInfoPage/Advantages/Advantages";
import { getGateInfo } from "../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const ServiceInfo = () => {
  const { gateInfoList } = useSelector((state) => state.gateInfo);
  const { id: gateId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGateInfo(gateId));
  }, [gateId]);
  return (
    <>
      <Hero name={gateInfoList.name} gateInfoList={gateInfoList} />
      <Section description={gateInfoList.description} />
      <GateTypes gates={gateInfoList.gates} />
      <Advantages advantages={gateInfoList.advantages} />
    </>
  );
};

export default ServiceInfo;
