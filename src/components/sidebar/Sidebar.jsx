import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./sidebar.css";



export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      success: false,
      value: 0,
      emission: 0,
      time: 0,
      msg: "Please enter a valid value"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (isNaN(event.target.value) || event.target.value <= 0) {
      this.setState({success: false});
      return;
    }
    this.setState({value: event.target.value, success: true});
  }
  handleSubmit(event) {
    if (this.state.success) {
    this.setState({emission: (this.state.value * 403.95).toFixed(2), time: (this.state.value * 6.38).toFixed(2), display: true});
    } else {
      this.setState({display: false});
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="loginTitle">How many miles you drove for this trip?</span>
        </div>
        <div className="sidebarItem">
        <form className="loginForm">
          <label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter number of miles..."
              onChange={this.handleChange}
            />
            <button className="loginButton" onClick={(e) => this.handleSubmit(e)}>
              Enter
            </button>
          </label>
        </form>
        </div>
        {this.state.display && (
        <div className="sidebarItem">
          <div className="result">
            <p>Your vehicle roughly produced</p>
            <p className="data">{this.state.emission}</p>
            <p>grams of CO2</p>
          </div>
          <div className="result">
            <p>A single tree in Mangrove restoration needs</p>
            <p className="data">{this.state.time}</p>
            <p>days to absorb it</p>
          </div>
        </div>)}
      </div>
    );
  }
}

/*
references
https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-,A%20typical%20passenger%20vehicle%20emits%20about%204.6%20metric%20tons%20of,8%2C887%20grams%20of%20CO2.
8,887g/22 miles of CO2 produced


Mangrove restoration absorbs 23.1 t CO2/ha/year
1000 trees per hectare

1t = 1000000 gram
*/



