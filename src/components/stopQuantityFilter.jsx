import React from "react";

const StopQuantityFilter = ({ stops, onStopQuantitySelect }) => {
  function renderStopQuantityItem(stop) {
    let classes = stop.isActive
      ? "stop-quantity__item active"
      : "stop-quantity__item";

    return (
      <li
        key={stop.value}
        className={classes}
        data-value={stop.value}
        onClick={() => onStopQuantitySelect(stop.value)}
      >
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
