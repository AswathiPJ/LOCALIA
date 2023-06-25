import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UpdateProduct.css";
import { setDataOrder } from "../../redux/orderSlice";


const DeliveryOrders = () => {
  const dispatch = useDispatch();
  
  
  const deliveryData = useSelector((state) => state.delivery);
  const orderData = useSelector((state) => state.order);
  
  const data = { deliveryguy: deliveryData.firstname };
  console.log(data);

  useEffect(() => {
    const fetchTheData = async () => {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/orderdisplay`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log("orders"+dataRes);
      dispatch(setDataOrder(dataRes))
      console.log(orderData)
      
    };

    fetchTheData();
  }, []);

  return (
    <div>
      <div className="product-list">
        <h3 className="text-xl text-bold text-pink-950 mb-5">ORDER LIST</h3>
        <table style={{ width: "100%" }} className="styled-table">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Shop name</th>
              <th>Shop city</th>
              <th>Shop landmark</th>
              <th>Quantity</th>
              <th>Delivery address </th>
              <th>Total</th>
              <th>Current Status</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {orderData.orderList.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.shopname}</td>
                <td>{item.city}</td>
                <td>{item.landmark}</td>
                <td>{item.qty}</td>
                <td>{item.address}</td>
                <td>{item.total}</td>
                <td>{item.deliverystatus}</td>
                <td>
                  <button className="bg-pink-800 hover:bg-red-950">
                    <Link to={"/deliverystatus/" + item._id} className="text-white">
                      Update order status
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryOrders;
