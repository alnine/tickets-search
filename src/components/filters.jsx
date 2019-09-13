import React from "react";
import CurrencyFilter from "./currencyFilter";
import StopQuantityFilter from "./stopQuantityFilter";

const Filters = ({
  currencies,
  selectedCurrency,
  stopQuantity,
  onCurrencySelect,
  onStopQuantitySelect
}) => {
  return (
    <div className="section app__filters">
      <div className="app__filter currency-toggle">
        <h2 className="app__filter-title">Валюта</h2>
        <CurrencyFilter
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          onCurrencySelect={onCurrencySelect}
        />
      </div>
      <div className="app__filter app__filter--wide stop-quantity">
        <h2 className="app__filter-title stop-quantity__title">
          Количество пересадок
        </h2>
        <StopQuantityFilter
          stops={stopQuantity}
          onStopQuantitySelect={onStopQuantitySelect}
        />
      </div>
    </div>
  );
};

export default Filters;
