const { createSlice } = require("@reduxjs/toolkit");

const cartSlices = createSlice({
  name: "cart",
  initialState: {
    items: [],
    favourites: [],
    selectedProduct: null,
  },
  reducers: {
    increment: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    addtofavourites: (state, action) => {
      const newItem = action.payload;
      const isAlreadyinFavourites = state.favourites.some(
        (item) => item.id === newItem.id,
      );
      if (!isAlreadyinFavourites) {
        state.favourites.push(newItem);
      }
    },
    removefromfavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    addtocart: (state, action) => {
      const Product = { ...action.payload, quantity: 1 };
      const ExistingProduct = state.items.find(
        (item) => item.id === Product.id,
      );
      if (ExistingProduct) {
        ExistingProduct.quantity += 1;
      } else {
        state.items.push(Product);
      }
    },
    removefromcart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    setProductDetails: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});
export const {
  increment,
  decrement,
  addtofavourites,
  removefromfavourites,
  addtocart,
  removefromcart,
  setProductDetails,
} = cartSlices.actions;
export const cartReducer = cartSlices.reducer;
