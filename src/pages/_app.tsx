import React, { memo } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "@redux/store";
import MainComponent from "@components/layouts/MainComponent";
import "@styles/globals.scss";



// Main App component welcome
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MainComponent Component={Component} {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
};

// Use `memo` to optimize rendering
export default memo(App);
