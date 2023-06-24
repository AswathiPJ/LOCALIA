import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:"",
  password:""
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    aloginRedux: (state, action) => {
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      state.email= action.payload.data.email;
      state.password = action.payload.data.password;
      
    },
    alogoutRedux: (state, action) => {
        state.email="";
        state.password ="";
    },
  },
});

export const { aloginRedux ,alogoutRedux} = adminSlice.actions;

export default adminSlice.reducer;
