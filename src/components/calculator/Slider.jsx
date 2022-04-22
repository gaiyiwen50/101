
import React from 'react';
import './calculator.css';
import '../../shared.css';

export default function Slider({label, value, onChange}) {
  return (
    <div className='label-and-slider'>
      <h3 className='calculator-form-label'>{label + ':'}</h3>
      <div className='slider-and-box'>
        <input className='slider' type='range' min='0' max='100' value={value} onChange={onChange} />
        <p className='slider-text-box'>{value}</p>
      </div>
    </div>
  )
}