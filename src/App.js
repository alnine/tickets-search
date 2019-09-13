import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

class App extends Component {
  state = {
    currencies: ["rub", "usd", "eur"],
    selectedCurrency: "rub",
    stopQuantity: [
      { label: "Все", value: false },
      { label: "Без пересадок", value: true },
      { label: "1 пересадка", value: true },
      { label: "2 пересадки", value: true },
      { label: "3 пересадки", value: false }
    ]
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
