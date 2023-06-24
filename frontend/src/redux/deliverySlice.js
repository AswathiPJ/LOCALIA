import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  _id: "",
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    dloginRedux: (state, action) => {
      console.log("del"+action.payload.data);
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.firstname = action.payload.data.firstname;
      state.lastname = action.payload.data.lastname;
      state.phonenumber=action.payload.data.phonenumber;
      state.email = action.payload.data.email;
      state.licencenumber=action.payload.data.licencenumber;
      state.city=action.payload.data.city;
    },
    dlogoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";

    },
  },
});

export const { dloginRedux ,dlogoutRedux} = deliverySlice.actions;

export default deliverySlice.reducer;