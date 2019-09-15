import React from "react";
import Ticket from "./ticket";

const Tickets = ({ tickets, carriers }) => {
  return (
    <div className="app__tickets">
      {tickets.map((ticket, index) => (
        <Ticket key={index} data={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
