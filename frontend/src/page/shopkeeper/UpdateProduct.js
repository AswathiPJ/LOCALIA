import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UpdateProduct.css";
import { setDataProduct } from "../../redux/productsSlice";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);
  const shopkeeperData = useSelector((state) => state.shopkeeper);
  console.log("shopkeeper" + shopkeeperData.shopname);
  const data = { shopname: shopkeeperData.shopname };
  console.log(data);

  useEffect(() => {
    const fetchTheData = async () => {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/productdisplay`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log("shop"+dataRes);
      dispatch(setDataProduct(dataRes));
    };

    fetchTheData();
  }, []);

  return (
    <div>
      <div className="product-list">
        <h3 className="text-xl text-bold text-pink-950 mb-5">PRODUCT LIST</h3>
        <table style={{ width: "100%" }} className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {productData.productList.map((item) => (
              <tr key={item._id}>
                <td>{item.productid}</td>
                <td>{item.productname}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                  <button className="bg-pink-800 hover:bg-red-950">
                    <Link to={"/update/" + item._id} className="text-white">
                      Update
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

export default UpdateProduct;
