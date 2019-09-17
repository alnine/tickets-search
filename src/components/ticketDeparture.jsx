import React from "react";
import { getDateString } from "./utils/utils";

const TicketDeparture = ({ time, date, origin, name }) => {
  return (
    <div className="ticket__info-departure">
      <span className="ticket__info-time">{time}</span>
      <span className="ticket__info-place">{`${origin}, ${name}`}</span>
      <span className="ticket__info-date">{getDateString(date)}</span>
    </div>
  );
};

export default TicketDeparture;
