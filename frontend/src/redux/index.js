import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import shopkeeperSliceReducer from "./shopkeeperSlice";
import productSliceReducer from "./productSlice";
import productsSliceReducer from "./productsSlice";


export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    shopkeeper:shopkeeperSliceReducer,
    product: productSlideReducer,
    // products :productSliceReducer,
    products:productsSliceReducer
    
    
  },
});
