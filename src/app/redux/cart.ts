import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartInitialState {
  product: any[];
}

const cartItems = localStorage.getItem("cartItems");

const initialSate: ICartInitialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialSate,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action?.payload || {};
      const productIndex = state.product.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        const quantity =
          state.product[productIndex].quantity + action.payload.quantity;
        state.product[productIndex] = { ...action?.payload, quantity };
      } else {
        state.product.push(action?.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
