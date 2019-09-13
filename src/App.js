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
      all: { value: "all", label: "Все", isActive: false },
      0: { value: 0, label: "Без пересадок", isActive: true },
      1: { value: 1, label: "1 пересадка", isActive: true },
      2: { value: 2, label: "2 пересадки", isActive: true },
      3: { value: 3, label: "3 пересадки", isActive: false }
    }
  };

  handleCurrencySelect = currency => {
    this.setState({ selectedCurrency: currency });
  };

  handleStopQuantitySelect = stopValue => {
    const stopQuantity = { ...this.state.stopQuantity };

    if (stopValue === "all") {
      const allItemValue = !stopQuantity[stopValue].isActive;
      let item = "";
      for (item in stopQuantity) {
        stopQuantity[item].isActive = allItemValue;
      }
      this.setState({ stopQuantity });
      return;
    }

    if (stopQuantity.all.isActive) {
      stopQuantity.all.isActive = false;
    }
    stopQuantity[stopValue].isActive = !stopQuantity[stopValue].isActive;
    this.setState({ stopQuantity });
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
            onStopQuantitySelect={this.handleStopQuantitySelect}
          />
          <Tickets />
        </main>
      </div>
    );
  }
}

export default App;
