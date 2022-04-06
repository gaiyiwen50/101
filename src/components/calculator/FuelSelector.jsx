
import React from "react";
import "./calculator.css";

export default function FuelSelector({selectedFuelType, onChange}) {
  return (
    <div className="fuel-type-selector">
      <h3 className="calculator-form-label">Fuel Type:</h3>
        <div className="fuel-type-option-list">
          <button className="fuel-type-option" onClick={onChange}>Gasoline</button>
          <button className="fuel-type-option" onClick={onChange}>Diesel</button>
        </div>
    </div>
  );
}
