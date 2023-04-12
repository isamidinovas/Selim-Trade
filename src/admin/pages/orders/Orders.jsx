import React from "react";
import styles from "./Orders.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../../redux/admin/adminOrdersSlice";
const Orders = () => {
  const { orders } = useSelector((store) => store.adminOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <div className="admin_container">
     
    </div>
  );
};

export default Orders;
