
import React from 'react';
import './calculator.css';
import '../../shared.css';

export default function Slider({label, value, min, max, onChange}) {
  return (<>
    <div className='label-and-slider'>
      <h3 className='calculator-form-label'>{label + ':'}</h3>
      <div className='slider-and-box'>
        <div className='slider-padding-left'></div>
        <input className='slider' type='range' min={min} max={max} value={value} onChange={onChange} />
        <p className='slider-text-box'>{value}</p>
      </div>
    </div>
  </>)
}