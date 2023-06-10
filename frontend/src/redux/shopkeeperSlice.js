import {createSlice} from '@reduxjs/toolkit';

const initialState={
    shoplicencenumber: "",
      shopname: "",
      city: "",
      landmark: "",
      pincode: "",
      workinghours: "",
      phonenumber: "",
      password: "",
      _id:""
}

export const shopkeeperSlice = createSlice({
    name:"shopkeeper",
    initialState,
    reducers: {
        sloginRedux:(state,action)=>{
            state._id=action.payload.data._id
            state.city=action.payload.data.city
            state.landmark=action.payload.data.landmark
            state.password=action.payload.data.password
            state.phonenumber=action.payload.data.phonenumber
            state.pincode=action.payload.data.pincode
            state.shoplicencenumber=action.payload.data.shoplicencenumber
            state.shopname=action.payload.data.shopname
            state.workinghours=action.payload.data.workinghours
        },
        slogoutRedux:(state,action)=>{
            state._id=""
            state.city=""
            state.landmark=""
            state.password=""
            state.phonenumber=""
            state.pincode=""
            state.shoplicencenumber=""
            state.shopname=""
            state.workinghours=""
        }
    }
})

export const {sloginRedux,slogoutRedux} = shopkeeperSlice.actions 
export default shopkeeperSlice.reducer