import React from "react";

const StopQuantityFilter = ({ stops }) => {
  function renderStopQuantityItem(stop) {
    let classes = stop.value
      ? "stop-quantity__item active"
      : "stop-quantity__item";

    return (
      <li key={stop._id} className={classes}>
        {stop.label}
        <span className="stop-quantity__item-checkbox"></span>
      </li>
    );
  }

  let stopItem = "";
  let renderedItems = [renderStopQuantityItem(stops.all)];

  for (stopItem in stops) {
    if (stopItem !== "all") {
      renderedItems.push(renderStopQuantityItem(stops[stopItem]));
    }
  }

  return <ul className="stop-quantity__list">{renderedItems}</ul>;
};

export default StopQuantityFilter;
