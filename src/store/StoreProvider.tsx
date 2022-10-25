import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
interface IProp {
  children: React.ReactNode;
}
const StoreProvider: React.FC<IProp> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
