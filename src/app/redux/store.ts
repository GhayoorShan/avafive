import { configureStore } from "@reduxjs/toolkit";
import { baseSliceAPI } from "../utils/api/baseSlice";

const rootReducer = {
  [baseSliceAPI.reducerPath]: baseSliceAPI.reducer,
};

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(baseSliceAPI.middleware);
// .concat(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export { store };
