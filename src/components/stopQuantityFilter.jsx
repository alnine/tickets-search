import React from "react";

const StopQuantityFilter = ({ stops }) => {
  function renderStopQuantityItem(stop, id) {
    let classes = stop.value
      ? "stop-quantity__item active"
      : "stop-quantity__item";

    return (
      <li key={id} className={classes}>
        {stop.label}
        <span className="stop-quantity__item-checkbox"></span>
      </li>
    );
  }

  return (
    <ul className="stop-quantity__list">
      {stops.map((stop, index) => renderStopQuantityItem(stop, index))}
    </ul>
  );
};

export default StopQuantityFilter;
