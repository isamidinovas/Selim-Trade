import React from "react";
import styles from "./OrderList.module.scss";
import { useEffect } from "react";
import { getOrders } from "../../../redux/admin/adminOrdersSlice";
import { useDispatch, useSelector } from "react-redux";

const OrderList = () => {
  const { orders } = useSelector((store) => store.adminOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return <div>OrderList</div>;
};

export default OrderList;
