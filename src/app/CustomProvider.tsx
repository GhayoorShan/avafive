"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ReactNode } from "react";

export const CustomProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
