import {createSlice} from '@reduxjs/toolkit';

const initialState={
    productid: "",
      productname: "",
      category: "",
      brand: "",
      otherdetails: "",
      stock: "",
      price: "",
      image: "",
      _id:""
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        loginproductRedux:(state,action)=>{
            //state.user = action.payload.data
            state._id=action.payload._id
            state.category=action.payload.category
            state.productid=action.payload.productid
            state.productname=action.payload.productname
            state.brand=action.payload.brand
            state.stock=action.payload.stock
            state.price=action.payload.price
            state.otherdetails=action.payload.otherdetails
            state.image=action.payload.image
        }
    }
})




export const {loginproductRedux} = productSlice.actions
export default productSlice.reducer