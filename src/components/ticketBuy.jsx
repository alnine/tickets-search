import React from "react";
import { getCarrierData } from "./service/carrierData";

const TicketBuy = ({
  carrierCode,
  price,
  selectedCurrency,
  currencyQuotes
}) => {
  const carrier = getCarrierData(carrierCode);

  function getCost(price) {
    const convertedPrice = Math.ceil(price * currencyQuotes[selectedCurrency]);

    return convertedPrice.toLocaleString("ru", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0
    });
  }

  return (
    <div className="ticket__buy">
      <div className="ticket__buy-company-logo">
        <img src={carrier.img} alt={carrier.name} />
      </div>
      <button className="ticket__buy-btn">
        Купить
        <span className="ticket__buy-btn-cost">{`за ${getCost(price)}`}</span>
      </button>
    </div>
  );
};

export default TicketBuy;
