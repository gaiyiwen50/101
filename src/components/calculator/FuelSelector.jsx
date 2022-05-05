
import React from "react"
import "./calculator.css"

export default function FuelSelector({selectedFuelType, onChange}) {
  
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric']
  // const fuelTypes = ['Gasoline', 'Diesel']
  
  return (<>
    <div className="fuel-type-selector">
      <h3 className="calculator-form-label">Fuel type:</h3>
      <div className="fuel-type-option-list">
        {
          fuelTypes.map((fuelType) => {
            return (
              <div className={'fuel-type-option ' + (fuelType === selectedFuelType ? 'selected' : '')} key={fuelType} onClick={() => onChange(fuelType)}>
                {fuelType}
              </div>
            )
          })
        }
      </div>
    </div>
  </>)
}
