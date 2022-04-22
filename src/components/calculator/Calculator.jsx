
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
      milesPerGallon: 0,
      milesPerDay: 0,
      emissions: 0,
      emissionsCategory: 'average', // either 'low', 'average', or 'high'
    };
  }
  
  handleFuelTypeChange = (fuelType) => {
    console.log('changed fuel type to', fuelType)
    this.setState({fuelType: fuelType})
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
    return (<>
      <div className={'calculator ' + (this.state.displayOutput ? 'enlarged' : '')}>
        
        <div className='calculator-input'>
          <h1 className='calculator-title'>Carbon Emissions Calculator</h1>
          
          <form className='calculator-form' onSubmit={this.handleSubmit}>
            
            <FuelSelector selectedFuelType={this.state.fuelType} onChange={this.handleFuelTypeChange} />
            <Slider label={'Miles per gallon'} value={this.state.milesPerGallon} onChange={this.handleMilesPerGallonChange} />
            <Slider label={'Miles per day'} value={this.state.milesPerDay} onChange={this.handleMilesPerDayChange} />
            
            <input className='submit-button' type='submit' value='Calculate!' />
          </form>
        </div>
        
        <div className={'horizontal-divider ' + (this.state.displayOutput ? 'visible' : '')} />
        
        <CalculatorOutput visible={this.state.displayOutput} emissions={1000} emissionsCategory={this.state.emissionsCategory} />
        
      </div>
    </>);
  }
}
