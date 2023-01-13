import React from "react";

export default function Filters({
  handleCostCheckboxClick,
  onClick,
  handleTypeCheckboxClick,
  handleColorCheckboxClick
}) {
  return (
    <div className="filter-col">
      <header>
        <h3>FILTERS</h3>
        <div>
          <i className="fa fa-filter"></i>
        </div>
      </header>
      <div className="filter-main">
        <div className="filter-cost">
          <p>Cost</p>
          <span>
            <input
              type="checkbox"
              //   value={`${1500}-${4000}`}
              onClick={() => handleCostCheckboxClick(1500, 4000)}
            />{" "}
            Rs. 1500-4000
          </span>
          <span>
            <input
              type="checkbox"
              //   value={`${4001}-${7000}`}
              onClick={() => handleCostCheckboxClick(4001, 7000)}
            />{" "}
            Rs. 4001-7000
          </span>
          <span>
            <input
              type="checkbox"
              //   value={`${7001}-${Infinity}`}
              onClick={() => handleCostCheckboxClick(7001, Infinity)}
            />{" "}
            Rs. 7000+
          </span>
        </div>
        <div className="filter-cost">
          <p>Color</p>
          <span className="color-checkbox">
            <input type="checkbox" className="color-black" onClick={() => handleColorCheckboxClick("black")}/>

            <input type="checkbox" className="color-red" onClick={() => handleColorCheckboxClick("red")} />

            
          </span>
        </div>
        <div className="filter-cost">
          <p>Design templates</p>
          <span>
            <input type="checkbox" /> 2
          </span>
          <span>
            <input type="checkbox" /> 3
          </span>
          <span>
            <input type="checkbox" /> 3+
          </span>
        </div>
        <div className="filter-cost">
          <p>Type</p>
          <span>
            <input
              type="checkbox"
              //    value={"Loafers"}
              onClick={() => handleTypeCheckboxClick("Loafers")}
            />{" "}
            Loafers
          </span>
          <span>
            <input
              type="checkbox"
              //    value={"Sneakers"}
              onClick={() => handleTypeCheckboxClick("Sneakers")}
            />
            Sneakers
          </span>
        </div>
      </div>
      <button type="submit" onClick={onClick}>
        Apply
      </button>
    </div>
  );
}
