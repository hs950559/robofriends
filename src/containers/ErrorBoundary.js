import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That's not good</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
