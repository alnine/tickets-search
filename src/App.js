import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

class App extends Component {
  state = {
    currencies: ["rub", "usd", "eur"],
    selectedCurrency: "rub"
  };

  handleCurrencySelect = currency => {
    this.setState({ selectedCurrency: currency });
  };

  render() {
    const { currencies, selectedCurrency } = this.state;

    return (
      <div className="container">
        <Header />
        <main className="app__content">
          <Filters
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            onCurrencySelect={this.handleCurrencySelect}
          />
          <Tickets />
        </main>
      </div>
    );
  }
}

export default App;
