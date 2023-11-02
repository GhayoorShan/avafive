import { configureStore } from "@reduxjs/toolkit";
import { baseSliceAPI } from "../utils/api/baseSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cart";

// Define the persistConfig for the wallet slice
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  // whitelist: ["cart"],
};
const rootReducer = {
  [baseSliceAPI.reducerPath]: baseSliceAPI.reducer,
  cart: persistReducer(cartPersistConfig, cartSlice),
};

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(baseSliceAPI.middleware);
// .concat(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
