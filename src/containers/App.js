import React, { Component } from "react";
import CardList from "../components/card-list/CardList";
import SearchBox from "../components/SearchBox";
import "./App.scss";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  state = {
    robots: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          robots: res,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const { robots, searchTerm } = this.state;
    const filteredRobos = robots.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (robots.length) {
      return (
        <div className="container-fluid mt-2">
          <h1 className="text-center display-1 text-success">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <ErrorBoundary>
            <CardList robots={filteredRobos} />
          </ErrorBoundary>
        </div>
      );
    } else {
      return <h2 className="text-center text-warning"> Loading... </h2>;
    }
  }
}

export default App;
