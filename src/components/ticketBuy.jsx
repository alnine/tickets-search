import React from "react";
import { getCarrierData } from "./service/carrierData";

const TicketBuy = ({ carrierCode, price }) => {
  const carrier = getCarrierData(carrierCode);

  return (
    <div className="ticket__buy">
      <div className="ticket__buy-company-logo">
        <img src={carrier.img} alt={carrier.name} />
      </div>
      <button className="ticket__buy-btn">
        Купить
        <span>
          за&nbsp;
          <span className="ticket__buy-btn-cost">{price}р</span>
        </span>
      </button>
    </div>
  );
};

export default TicketBuy;
