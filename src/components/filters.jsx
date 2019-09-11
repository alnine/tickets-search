import React from "react";
import CurrencyFilter from "./currencyFilter";

const Filters = ({ currencies }) => {
  return (
    <div className="section app__filters">
      <div className="app__filter currency-toggle">
        <h2 className="app__filter-title">Валюта</h2>
        <CurrencyFilter currencies={currencies} />
      </div>
      <div className="app__filter app__filter--wide stop-quantity">
        <h2 className="app__filter-title stop-quantity__title">
          Количество пересадок
        </h2>
        <ul className="stop-quantity__list">
          <li className="stop-quantity__item">
            Все
            <span className="stop-quantity__item-checkbox"></span>
          </li>
          <li className="stop-quantity__item">
            Без пересадок
            <span className="stop-quantity__item-checkbox"></span>
          </li>
          <li className="stop-quantity__item">
            1 пересадка
            <span className="stop-quantity__item-checkbox"></span>
          </li>
          <li className="stop-quantity__item">
            2 пересадки
            <span className="stop-quantity__item-checkbox"></span>
          </li>
          <li className="stop-quantity__item">
            3 пересадки
            <span className="stop-quantity__item-checkbox"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
