import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

class App extends Component {
  state = {
    currencies: ["rub", "usd", "eur"],
    selectedCurrency: "rub",
    stopQuantity: {
      all: { _id: "all", label: "Все", value: false },
      0: { _id: 0, label: "Без пересадок", value: true },
      1: { _id: 1, label: "1 пересадка", value: true },
      2: { _id: 2, label: "2 пересадки", value: true },
      3: { _id: 3, label: "3 пересадки", value: false }
    }
  };

  handleCurrencySelect = currency => {
    this.setState({ selectedCurrency: currency });
  };

  render() {
    const { currencies, selectedCurrency, stopQuantity } = this.state;

    return (
      <div className="container">
        <Header />
        <main className="app__content">
          <Filters
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            stopQuantity={stopQuantity}
            onCurrencySelect={this.handleCurrencySelect}
          />
          <Tickets />
        </main>
      </div>
    );
  }
}

export default App;
