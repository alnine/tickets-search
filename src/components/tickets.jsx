import React from "react";
import Ticket from "./ticket";

const Tickets = ({ tickets, selectedCurrency, currencyQuotes }) => {
  return (
    <div className="app__tickets">
      {tickets.map((ticket, index) => (
        <Ticket
          key={index}
          data={ticket}
          selectedCurrency={selectedCurrency}
          currencyQuotes={currencyQuotes}
        />
      ))}
    </div>
  );
};

export default Tickets;
