import React from "react";

const CurrencyFilter = ({ currencies, selectedCurrency, onCurrencySelect }) => {
  return (
    <div className="currency-toggle__row">
      {currencies.map((currencyItem, index) => {
        let classes =
          currencyItem === selectedCurrency
            ? "currency-toggle__btn active"
            : "currency-toggle__btn";

        return (
          <button
            key={index}
            className={classes}
            onClick={() => onCurrencySelect(currencyItem)}
          >
            {currencyItem}
          </button>
        );
      })}
    </div>
  );
};

export default CurrencyFilter;
