
import React, { Component } from 'react';
import FuelSelector from './FuelSelector';
import Slider from './Slider';
import CalculatorOutput from './CalculatorOutput';
import './calculator.css';
import '../../shared.css';

export default class Calculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayOutput: false,
      fuelType: 'Gasoline',
      milesPerGallon: 25,
      milesPerDay: 0,
      carbonPerDay: 0,
      emissionsCategory: 'average', // either 'low', 'average', or 'high'
    };
  }
  
  handleFuelTypeChange = (fuelType) => {
    this.setState({fuelType: fuelType}, () => {
      // Update emissions stats only after the state has finished updating
      this.calculateEmissions()
    })
  }
  handleMilesPerGallonChange = (event) => {
    event.preventDefault()
    this.setState({milesPerGallon: event.target.value}, () => {
      // Update emissions stats only after the state has finished updating
      this.calculateEmissions()
    })
  }
  handleMilesPerDayChange = (event) => {
    event.preventDefault()
    this.setState({milesPerDay: event.target.value}, () => {
      // Update emissions stats only after the state has finished updating
      this.calculateEmissions()
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.calculateEmissions()
    this.setState({displayOutput: true})
  }
  calculateEmissions = () => {
    
    // gas: 8.887 kg CO2 / gallon
    // diesel: 10.180 kg CO2 / gallon
    // electric: 0.000 kg CO2 / kWh
    
    const fuelTypeEmissions = {
      'Gasoline': 8.887,
      'Diesel': 10.180,
      'Electric': 0.000,
    }
    const carbonPerGallon = fuelTypeEmissions[this.state.fuelType]
    // Formula: (carbon per gallon) / (miles per gallon) * (miles per day)
    const carbonPerDay = carbonPerGallon / this.state.milesPerGallon * this.state.milesPerDay
    
    var category
    if (carbonPerDay < 8) {
      category = 'low'
    }
    if (carbonPerDay >= 8 && carbonPerDay < 16) {
      category = 'average'
    }
    if (carbonPerDay >= 16) {
      category = 'high'
    }
      
    this.setState({
      carbonPerDay: carbonPerDay,
      emissionsCategory: category,
    })
  }
  
  render() {
    return (<>
      <div className={'calculator ' + (this.state.displayOutput ? 'enlarged' : '')}>
        
        <div className='calculator-input'>
          <h1 className='calculator-title'>Carbon Emissions Calculator</h1>
          
          <form className='calculator-form' onSubmit={this.handleSubmit}>
            
            <FuelSelector selectedFuelType={this.state.fuelType} onChange={this.handleFuelTypeChange} />
            <Slider label={'Miles per gallon'} value={this.state.milesPerGallon} min={5} max={120} onChange={this.handleMilesPerGallonChange} />
            <Slider label={'Miles per day'} value={this.state.milesPerDay} min={0} max={300} onChange={this.handleMilesPerDayChange} />
            
            <input className='submit-button' type='submit' value='Calculate!' />
          </form>
        </div>
        
        <div className={'horizontal-divider ' + (this.state.displayOutput ? 'visible' : '')} />
        
        <CalculatorOutput visible={this.state.displayOutput} emissions={this.state.carbonPerDay} emissionsCategory={this.state.emissionsCategory} />
        
      </div>
    </>);
  }
}
