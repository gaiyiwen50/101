
import React, { Component } from 'react';
import FuelSelector from './FuelSelector';
import CalculatorOutput from './CalculatorOutput';
import './calculator.css';
import '../../shared.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOutput: false,
      fuelType: 'Gasoline',
      milesPerGallon: 0,
      milesPerDay: 0,
      emissions: 0,
      emissionsCategory: 'average', // either 'low', 'average', or 'high'
    };
  }
  handleChange = (event) => {
    // if (isNaN(event.target.value) || event.target.value <= 0) {
    //   this.setState({success: false});
    //   return;
    // }
    // this.setState({value: event.target.value, success: true});
  }
  
  handleFuelTypeChange = (event) => {
    event.preventDefault()
    console.log('changed fuel type to', event.target.innerText)
    this.setState({fuelType: event.target.innerText})
  }
  handleMilesPerGallonChange = (event) => {
    event.preventDefault()
    this.setState({milesPerGallon: event.target.value})
  }
  handleMilesPerDayChange = (event) => {
    event.preventDefault()
    this.setState({milesPerDay: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({displayOutput: true});
    // if (this.state.success) {
    //   this.setState({
    //     emission: (this.state.value * 403.95).toFixed(2),
    //     time: (this.state.value * 6.38).toFixed(2),
    //     display: true
    //   });
    // }
    // else {
    //   this.setState({display: false});
    // }
  }
  
  render() {
    return (
      <div className={'calculator ' + (this.state.displayOutput ? 'enlarged' : '')}>
        
        <div className='calculator-input'>
          <h1 className='calculator-title'>Carbon Emissions Calculator</h1>
          
          <form className='calculator-form'>
            <FuelSelector selectedFuelType={this.state.fuelType} onChange={this.handleFuelTypeChange}></FuelSelector>
            <div className='miles-per-gallon'>
              <h3 className='calculator-form-label'>Miles per gallon:</h3>
              <input type='range' min='0' max='100' value={this.state.milesPerGallon} onChange={this.handleMilesPerGallonChange} />
            </div>
            
            <div className='miles-per-day'>
              <h3 className='calculator-form-label'>Miles per day:</h3>
              <input type='range' min='0' max='100' value={this.state.milesPerDay} onChange={this.handleMilesPerDayChange} />
            </div>
            
            <button className='submit-button' onClick={this.handleSubmit}>
              Calculate!
            </button>
          </form>
        </div>
        
        <div className={'vertical-divider ' + (this.state.displayOutput ? 'visible' : '')}></div>
        
        <CalculatorOutput visible={this.state.displayOutput} emissions={1000} emissionsCategory={this.state.emissionsCategory}></CalculatorOutput>
        
      </div>
    );
  }
}
