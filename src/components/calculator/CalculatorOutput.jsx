
import React from 'react';
import './calculator.css';
import '../../shared.css';

export default function CalculatorOutput({visible, emissions, emissionsCategory}) {
  return (
	<div className={'calculator-output ' + (visible ? 'visible' : '')}>
	  <p className='commute-cost'>Your daily commute emits <strong>{emissions.toFixed(1)} kg</strong> of carbon dioxide.</p>
	  {/* <p>It takes a tree 10 days to absorb that much carbon!</p> */}
	  {/* <p>That is 3 barrels of oil worth of CO2! [show images of barrels here]</p> */}
	  <div>
		<h3 className='emissions-comparison-title'>Relative to the average Bay Area adult, your emissions are:</h3>
	    <div className='emissions-comparison-scale'>
	      <div className={'emissions-comparison-item low ' + (emissionsCategory === 'low' ? 'selected' : '')}>Low</div>
		  <div className={'emissions-comparison-item average ' + (emissionsCategory === 'average' ? 'selected' : '')}>Average</div>
		  <div className={'emissions-comparison-item high ' + (emissionsCategory === 'high' ? 'selected' : '')}>High</div>
	    </div>
	  </div>
	</div>
  )
}