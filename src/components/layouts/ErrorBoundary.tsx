import React, { ReactNode } from "react";


interface ErrorBoundaryProps {
  children: React.ReactNode;
  errorComponent?: React.ReactNode; // Make it optional
  errorStyles?: string;
  errorScripts?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
