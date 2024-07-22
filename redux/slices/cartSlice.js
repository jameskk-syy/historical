import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
// const initialState = [];


//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartItems: (state, action) => {
      return action.payload; 
    },

    addToCart: (state, action) => {
      // console.log(action.payload)
      const { uid, title, totalPrice, media ,qty } = action.payload;

      const exsistingItem = state.find((item) => item.uid === uid);
      if (exsistingItem) {
        exsistingItem.qty += 1;
      }
      else {
        state.push({ uid, title, totalPrice, media , qty: 1 });
      }

       // Save updated cart items to local storage
       localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.uid !== cartId);
    },
    
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const  exsistingItem = state.find((item) => item.uid === cartId);
      if ( exsistingItem) {
        exsistingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const  exsistingItem = state.find((item) => item.uid === cartId);
      if (exsistingItem &&  exsistingItem.qty > 1) {
        exsistingItem.qty -= 1;
      }
    }
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart , incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;
export const { setCartItems } = cartSlice.actions;
