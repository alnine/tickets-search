import React from "react";
import Ticket from "./ticket";

const Tickets = ({ tickets, selectedCurrency }) => {
  return (
    <div className="app__tickets">
      {tickets.map((ticket, index) => (
        <Ticket key={index} data={ticket} selectedCurrency={selectedCurrency} />
      ))}
    </div>
  );
};

export default Tickets;
