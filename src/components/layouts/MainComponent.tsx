import React from "react";
import ErrorBoundary from "./ErrorBoundary";

interface MainComponentProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, unknown>;
}

const MainComponent: React.FC<MainComponentProps> = ({ Component, pageProps }) => {

  return (
    <ErrorBoundary errorComponent={<h1>Something went wrong.</h1>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default MainComponent;
