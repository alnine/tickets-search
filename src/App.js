import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

class App extends Component {
  state = {
    tickets: [
      {
        origin: "VVO",
        origin_name: "Владивосток",
        destination: "TLV",
        destination_name: "Тель-Авив",
        departure_date: "12.05.18",
        departure_time: "16:20",
        arrival_date: "12.05.18",
        arrival_time: "22:10",
        carrier: "TK",
        stops: 3,
        price: 12400
      }
    ],
    currencies: ["RUB", "USD", "EUR"],
    currencyQuotes: {},
    selectedCurrency: "RUB",
    stopQuantity: {
      all: { value: "all", label: "Все", isActive: false },
      0: { value: 0, label: "Без пересадок", isActive: true },
      1: { value: 1, label: "1 пересадка", isActive: true },
      2: { value: 2, label: "2 пересадки", isActive: true },
      3: { value: 3, label: "3 пересадки", isActive: false }
    }
  };

  componentDidMount() {
    this.getCurrencyQuotes("RUB", this.state.currencies);
  }

  getCurrencyQuotes(base, currencies) {
    const urlApi = "https://api.exchangeratesapi.io/latest?";
    const url = `${urlApi}base=${base}&symbols=${currencies.join(",")}`;

    fetch(url)
      .then(responce => responce.json())
      .then(result => this.setState({ currencyQuotes: result.rates }));
  }

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
    const {
      currencies,
      selectedCurrency,
      stopQuantity,
      tickets,
      currencyQuotes
    } = this.state;

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
          <Tickets
            tickets={tickets}
            selectedCurrency={selectedCurrency}
            currencyQuotes={currencyQuotes}
          />
        </main>
      </div>
    );
  }
}

export default App;
