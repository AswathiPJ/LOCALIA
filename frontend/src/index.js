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
import AddProduct from "./page/shopkeeper/AddProduct";
import Orders from "./page/shopkeeper/Orders";
import ProductDisplay from "./page/shopkeeper/ProductDisplay";
import ShopkeeperLogin from "./page/shopkeeper/ShopkeeperLogin";
import ShopkeeperSignup from "./page/shopkeeper/ShopkeeperSignup";
import Shopprofile from "./page/shopkeeper/Shopprofile";
import Update from "./page/shopkeeper/Update";
import UpdateProduct from "./page/shopkeeper/UpdateProduct";

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

      <Route path='shopkeeperlogin' element={<ShopkeeperLogin/>}/>
        <Route path='shopkeepersignup' element={<ShopkeeperSignup/>}/>
        <Route path='shopprofile' element={<Shopprofile/>}/>
        <Route path='addproduct' element={<AddProduct/>}/>
        <Route path='productdisplay' element={<ProductDisplay/>}/>
        <Route path='updateproduct' element={<UpdateProduct/>}/>
        <Route path='update/:id' element={<Update/>}/>
        <Route path='orders' element={<Orders/>}/>

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
