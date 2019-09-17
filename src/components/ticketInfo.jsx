import React from "react";
import TicketDeparture from "./ticketDeparture";
import TicketArrival from "./ticketArrival";
import TicketStops from "./ticketStops";

const TicketInfo = ({ departureData, arrivalData, stops }) => {
  return (
    <div className="ticket__info">
      <TicketDeparture
        time={departureData.time}
        date={departureData.date}
        origin={departureData.origin}
        name={departureData.name}
      />
      <TicketStops stops={stops} />
      <TicketArrival
        time={arrivalData.time}
        date={arrivalData.date}
        destination={arrivalData.destination}
        name={arrivalData.name}
      />
    </div>
  );
};

export default TicketInfo;
