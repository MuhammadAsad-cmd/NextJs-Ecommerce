import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Slices/CartSlices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
  items: [],
  favourites: [],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
