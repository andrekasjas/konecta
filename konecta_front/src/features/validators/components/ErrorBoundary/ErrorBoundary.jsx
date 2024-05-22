import { Component } from "react";
import { ErrorFallback } from "./ErrorFallback";

export class ErrorBoundary extends Component {

  state = { hasError: false, error: new Error(), errorInfo: undefined };

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false });
  }

  render() {

    if (this.state.hasError) {
      return (
        <ErrorFallback resetErrorBoundary={this.resetErrorBoundary} />
      );
    }
    return this.props.children;
  }
}