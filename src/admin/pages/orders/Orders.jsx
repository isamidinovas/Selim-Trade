import React from "react";
import styles from "./Orders.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCurrentStatus,
  getOrderHistory,
  getOrders,
} from "../../../redux/admin/adminOrdersSlice";
import { useState } from "react";
const Orders = () => {
  const { orders, orderHistory, currentStatus } = useSelector(
    (store) => store.adminOrders
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    dispatch(getOrderHistory(order.id));
    dispatch(getCurrentStatus(order.id));
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleStatusChange = (event) => {
    // const newStatus = event.target.value;
    // setOrders((prevOrders) =>
    //   prevOrders.map((order) =>
    //     order.id === selectedOrder.id
    //       ? {
    //           ...order,
    //           status: newStatus,
    //           lastUpdated: {
    //             by: "Admin",
    //             at: new Date().toLocaleString(),
    //           },
    //         }
    //       : order
    //   )
    // );
    // setSelectedOrder((prevOrder) => ({
    //   ...prevOrder,
    //   status: newStatus,
    //   lastUpdated: {
    //     by: "Admin",
    //     at: new Date().toLocaleString(),
    //   },
    // }));
  };

  return (
    <div className="admin_container">
      <h1>Заказы</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Сообщение</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              key={order.id}
              className={styles.row}
              key={order.id}
              onClick={() => handleRowClick(order)}
            >
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.customerPhone}</td>
              <td>
                {order.message.length > 150
                  ? `${order.message.slice(0, 150)}...`
                  : order.message}
              </td>
              <td>{order.currentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div
            className={styles.modal_content}
            onClick={(event) => event.stopPropagation()}
          >
            <span className={styles.close} onClick={handleCloseModal}>
              &times;
            </span>
            <div className={styles.order_info}>
              <h2>Детали заказа</h2>
              <p>
                <b>ID:</b> {selectedOrder.id}
              </p>
              <p>
                <b>Имя:</b> {selectedOrder.customerName}
              </p>
              <p>
                <b>Телефон:</b> {selectedOrder.customerPhone}
              </p>
              <p className={styles.message}>
                <b>Сообщения:</b>
                <br />
                <p className={styles.mess_con}>{selectedOrder.message}</p>
              </p>
            </div>
            <div>
              <label className={styles.status_label} htmlFor="status">
                Статус заказа:
              </label>
              <select
                className={styles.status_options}
                id="status"
                value={selectedOrder.currentStatus}
                onChange={handleStatusChange}
              >
                {/* <option value="New">{currentStatus?.currentStatus}</option> */}
                <option value="New">Новый</option>
                <option value="In Progress">В оброботке</option>
                <option value="Completed">Отсроченно</option>
                <option value="Cancelled">Обработанно</option>
              </select>
              <p className={styles.date_label}>Дата изминения:</p>
              {orderHistory?.map((item) => {
                return (
                  <p key={item.id} className={styles.date}>
                    <span>&#9679;</span> {item?.recordingDate}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

{
  /* <p>Last Updated By: {selectedOrder.lastUpdated.by}</p>
<p>Last Updated At: {selectedOrder.lastUpdated.at}</p> */
}
