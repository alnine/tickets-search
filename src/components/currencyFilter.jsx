import React from "react";

const CurrencyFilter = ({ currencies }) => {
  function renderFilterRow(currencies) {
    return (
      <React.Fragment>
        {currencies.map((currencyItem, index) => (
          <button key={index} className="currency-toggle__btn">
            {currencyItem}
          </button>
        ))}
      </React.Fragment>
    );
  }

  function prepareAllFilterRows(currencies) {
    const rowLength = 3;
    const rowCount = Math.ceil(currencies.length / rowLength);
    let rendered = 0;
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      let rowData = currencies.splice(rendered, rendered + rowLength);
      rows.push(renderFilterRow(rowData));
    }

    return rows;
  }

  const filterRows = prepareAllFilterRows(currencies);

  return (
    <React.Fragment>
      {filterRows.map((row, index) => (
        <div key={index} className="currency-toggle__row">
          {row}
        </div>
      ))}
    </React.Fragment>
  );
};

export default CurrencyFilter;