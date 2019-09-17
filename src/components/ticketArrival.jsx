import React from "react";
import { getDateString } from "./utils/utils";

const TicketArrival = ({ time, date, destination, name }) => {
  return (
    <div className="ticket__info-arrival">
      <span className="ticket__info-time">{time}</span>
      <span className="ticket__info-place">{`${name}, ${destination}`}</span>
      <span className="ticket__info-date">{getDateString(date)}</span>
    </div>
  );
};

export default TicketArrival;
