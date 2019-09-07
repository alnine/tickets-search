import React from "react";

const Filters = () => {
  return (
    <div className="section app__filters">
      <div className="app__filter currency-toggle">
        <h2 className="app__filter-title">Валюта</h2>
        <div className="currency-toggle__row">
          <button className="currency-toggle__btn active">rub</button>
          <button className="currency-toggle__btn">usd</button>
          <button className="currency-toggle__btn">eur</button>
        </div>
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
