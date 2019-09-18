import React from "react";
import { getCarrierData } from "./service/carrierData";

const TicketBuy = ({ carrierCode, price, selectedCurrency }) => {
  const carrier = getCarrierData(carrierCode);

  function getCost(price) {
    price = price.toLocaleString("ru", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0
    });
    return <span className="ticket__buy-btn-cost">{`за ${price}`}</span>;
  }

  return (
    <div className="ticket__buy">
      <div className="ticket__buy-company-logo">
        <img src={carrier.img} alt={carrier.name} />
      </div>
      <button className="ticket__buy-btn">
        Купить
        {getCost(price)}
      </button>
    </div>
  );
};

export default TicketBuy;
