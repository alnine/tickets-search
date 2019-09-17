import React from "react";
import TicketDeparture from "./ticketDeparture";
import TicketArrival from "./ticketArrival";

const TicketInfo = ({ departureData, arrivalData, stops }) => {
  function getStopsStr(count) {
    if (count === 0) {
      return "";
    }

    return count === 1 ? "1 пересадка" : `${count} пересадки`;
  }

  return (
    <div className="ticket__info">
      <TicketDeparture
        time={departureData.time}
        date={departureData.date}
        origin={departureData.origin}
        name={departureData.name}
      />
      <div className="ticket__info-transfer">
        {getStopsStr(stops)}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.9 13H5.2L8.45 7.52632L12.025 7.52632C12.5645 7.52632 13 7.06789 13 6.5C13 5.93211 12.5645 5.47368 12.025 5.47368L8.45 5.47368L5.2 0L3.9 0L5.525 5.47368H1.95L0.975 4.10526L0 4.10526L0.65 6.5L0 8.89474H0.975L1.95 7.52632H5.525L3.9 13Z" />
        </svg>
      </div>
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
