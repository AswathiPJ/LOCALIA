import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import shopkeeperSliceReducer from "./shopkeeperSlice";
import productSliceReducer from "./productSlice";
import productsSliceReducer from "./productsSlice";
import adminSliceReducer from "./adminSlice";
import deliverySliceReducer from "./deliverySlice";
import orderSliceReducer from "./orderSlice";


export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    shopkeeper:shopkeeperSliceReducer,
    product: productSlideReducer,
     //productss :productSliceReducer,
    products:productsSliceReducer,
    admin:adminSliceReducer,
    delivery:deliverySliceReducer,
    order:orderSliceReducer
    
    
  },
});
