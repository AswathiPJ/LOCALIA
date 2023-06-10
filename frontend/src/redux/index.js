import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import shopkeeperSliceReducer from "./shopkeeperSlice";
import productsSliceReducer from "./productSlice";


export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    shopkeeper:shopkeeperSliceReducer,
    product: productSlideReducer,
    products :productsSliceReducer
    
    
  },
});
