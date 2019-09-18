import React from "react";
import TicketBuy from "./ticketBuy";
import TicketInfo from "./ticketInfo";

const Ticket = ({ data, selectedCurrency, currencyQuotes }) => {
  const departureData = {
    time: data.departure_time,
    date: data.departure_date,
    origin: data.origin,
    name: data.origin_name
  };

  const arrivalData = {
    time: data.arrival_time,
    date: data.arrival_date,
    destination: data.destination,
    name: data.destination_name
  };

  return (
    <div className="app__ticket ticket section">
      <TicketBuy
        carrierCode={data.carrier}
        price={data.price}
        selectedCurrency={selectedCurrency}
        currencyQuotes={currencyQuotes}
      />
      <TicketInfo
        departureData={departureData}
        arrivalData={arrivalData}
        stops={data.stops}
      />
    </div>
  );
};

export default Ticket;
