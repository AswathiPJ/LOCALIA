import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/customer/login";
import Newproduct from "./page/Newproduct";
import Signup from "./page/customer/Signup";
import Orders from "./page/customer/Orders"
import AddProduct from "./page/shopkeeper/AddProduct";
import ShopOrders from "./page/shopkeeper/Orders";
import ProductDisplay from "./page/shopkeeper/ProductDisplay";
import ShopkeeperLogin from "./page/shopkeeper/ShopkeeperLogin";
import ShopkeeperSignup from "./page/shopkeeper/ShopkeeperSignup";
import Shopprofile from "./page/shopkeeper/Shopprofile";
import Update from "./page/shopkeeper/Update";
import UpdateProduct from "./page/shopkeeper/UpdateProduct";
import AdminOrders from "./page/admin/AdminOrders";
import AssignDelivery from "./page/admin/AssignDelivery";
import AdminLogin from "./page/admin/AdminLogin";

import DeliverySignup from "./page/delivery/DeliverySignup";
import DeliveryLogin from "./page/delivery/DeliveryLogin";
import DeliveryProfile from "./page/delivery/DeliveryProfile";

import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from "./page/customer/Cart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="menu" element={<Menu />} /> */}
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<Newproduct />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders/:id" element={<Orders />} />

      <Route path='shopkeeperlogin' element={<ShopkeeperLogin/>}/>
        <Route path='shopkeepersignup' element={<ShopkeeperSignup/>}/>
        <Route path='shopprofile' element={<Shopprofile/>}/>
        <Route path='addproduct' element={<AddProduct/>}/>
        <Route path='productdisplay' element={<ProductDisplay/>}/>
        <Route path='updateproduct' element={<UpdateProduct/>}/>
        <Route path='update/:id' element={<Update/>}/>
        <Route path='shoporders/:id' element={<ShopOrders/>}/>

        <Route path='deliverysignup' element={<DeliverySignup/>}/>
        <Route path='deliverylogin' element={<DeliveryLogin/>}/>
        <Route path='deliveryprofile' element={<DeliveryProfile/>}/>

        <Route path='adminlogin' element={<AdminLogin/>}/>
        <Route path='adminorders' element={<AdminOrders/>}/>
        <Route path='assigndelivery/:id' element={<AssignDelivery/>}/>


    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
