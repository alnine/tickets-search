import React from "react";

const TicketInfo = ({ departureData, arrivalData, stops }) => {
  function getDateString(input) {
    const inputData = {
      day: parseInt(input.split(".")[0]),
      month: parseInt(input.split(".")[1]) - 1,
      year: 20 + input.split(".")[2]
    };

    const date = new Date(inputData.year, inputData.month, inputData.day);
    const day = date.getDate();
    const month = date.toLocaleString("ru", { month: "long" }).slice(0, 3);
    const weekDay = date.toLocaleString("ru", { weekday: "short" }).slice(0, 2);

    let capitalizeWeekDay = "";

    for (let char = 0; char < weekDay.length; char++) {
      if (char === 0) {
        capitalizeWeekDay = weekDay[char].toUpperCase();
        continue;
      }
      capitalizeWeekDay += weekDay[char];
    }

    const result = `${day} ${month} ${inputData.year}, ${capitalizeWeekDay}`;
    return result;
  }

  function getStopsStr(count) {
    if (count === 0) {
      return "";
    }

    return count === 1 ? "1 пересадка" : `${count} пересадки`;
  }

  return (
    <div className="ticket__info">
      <div className="ticket__info-departure">
        <span className="ticket__info-time">{departureData.time}</span>
        <span className="ticket__info-place">{`${departureData.origin}, ${departureData.name}`}</span>
        <span className="ticket__info-date">
          {getDateString(departureData.date)}
        </span>
      </div>
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
      <div className="ticket__info-arrival">
        <span className="ticket__info-time">{arrivalData.time}</span>
        <span className="ticket__info-place">{`${arrivalData.name}, ${arrivalData.destination}`}</span>
        <span className="ticket__info-date">
          {getDateString(arrivalData.date)}
        </span>
      </div>
    </div>
  );
};

export default TicketInfo;
