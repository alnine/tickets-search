import React from "react";

const Ticket = () => {
  return (
    <div className="app__ticket ticket section">
      <div className="ticket__buy">
        <div className="ticket__buy-company-logo">
          <img
            src="https://via.placeholder.com/160x46?text=Company+logo"
            alt="Company name"
          />
        </div>
        <button className="ticket__buy-btn">
          Купить
          <span>
            за&nbsp;
            <span className="ticket__buy-btn-cost">21032р</span>
          </span>
        </button>
      </div>
      <div className="ticket__info">
        <div className="ticket__info-departure">
          <span className="ticket__info-time">09:25</span>
          <span className="ticket__info-place">VVO, Владивосток</span>
          <span className="ticket__info-date">9 окт 2018, Пт</span>
        </div>
        <div className="ticket__info-transfer">
          1 пересадка
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.9 13H5.2L8.45 7.52632L12.025 7.52632C12.5645 7.52632 13 7.06789 13 6.5C13 5.93211 12.5645 5.47368 12.025 5.47368L8.45 5.47368L5.2 0L3.9 0L5.525 5.47368H1.95L0.975 4.10526L0 4.10526L0.65 6.5L0 8.89474H0.975L1.95 7.52632H5.525L3.9 13Z" />
          </svg>
        </div>
        <div className="ticket__info-arrival">
          <span className="ticket__info-time">11:45</span>
          <span className="ticket__info-place">Тель-Авив, TLV</span>
          <span className="ticket__info-date">10 окт 2018, Пт</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
