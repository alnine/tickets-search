import React, { Component } from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import { getTickets } from "./components/service/ticketsData";
import "./App.css";
import _ from "lodash";

class App extends Component {
  state = {
    tickets: [],
    currencies: ["RUB", "USD", "EUR"],
    currencyQuotes: {},
    selectedCurrency: "RUB",
    stopQuantity: {
      all: { value: "all", label: "Все", isActive: false },
      0: { value: 0, label: "Без пересадок", isActive: true },
      1: { value: 1, label: "1 пересадка", isActive: true },
      2: { value: 2, label: "2 пересадки", isActive: true },
      3: { value: 3, label: "3 пересадки", isActive: false }
    },
    sortData: { path: "price", order: "asc" }
  };

  async componentDidMount() {
    const { currencies } = this.state;
    const baseCurrency = "RUB";

    const currencyQuotes = await this.getCurrencyQuotes(
      baseCurrency,
      currencies
    );
    const tickets = await getTickets();

    this.setState({ currencyQuotes, tickets });
  }

  async getCurrencyQuotes(base, currencies) {
    const urlApi = "https://api.exchangeratesapi.io/latest?";
    const url = `${urlApi}base=${base}&symbols=${currencies.join(",")}`;

    const response = await fetch(url);
    const quotesData = await response.json();

    return quotesData.rates;
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

  getFilteredTickets = () => {
    const { tickets, stopQuantity, sortData } = this.state;

    const filtered = tickets.filter(
      ticket => stopQuantity[ticket.stops].isActive
    );

    return _.orderBy(filtered, [sortData.path], [sortData.order]);
  };

  render() {
    const {
      currencies,
      selectedCurrency,
      stopQuantity,
      currencyQuotes
    } = this.state;

    const tickets = this.getFilteredTickets();

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
