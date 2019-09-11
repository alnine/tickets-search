import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

class App extends Component {
  state = {
    currencies: ["rub", "usd", "eur", "hrn"]
  };

  render() {
    return (
      <div className="container">
        <Header />
        <main className="app__content">
          <Filters currencies={this.state.currencies} />
          <Tickets />
        </main>
      </div>
    );
  }
}

export default App;
