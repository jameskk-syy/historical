import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slices/cartSlice";
import cartReducer from "./slices/cartSlice";

//create a store and give it reducers
export  const store = configureStore({
  reducer: {
    cart:cartReducer
    // cart:cartSlice
  },
});
