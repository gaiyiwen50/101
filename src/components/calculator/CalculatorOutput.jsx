
import React from 'react'
import './calculator.css'
import '../../shared.css'

export default function CalculatorOutput({visible, emissions, emissionsCategory, barrelsOfOilPerYear}) {
  
  const oilBarrelsComponent = Array.from({length: Math.round(barrelsOfOilPerYear)}, (_, index) => {
    const style = {
      'margin-top': (index % 2 === 0) ? '-60px' : '0px',
      'z-index': (index % 2 === 0) ? '4' : '5',
      'margin-left': (index % 2 === 0) ? '-60px' : '-70px',
    }
    return (
      <img className='oil-barrel' key={index} src='https://freepngimg.com/thumb/machine/47749-2-crude-oil-barrel-image-free-transparent-image-hq.png' alt='' width='160' style={style}/>
    )
  })
  
  return (
    <div className={'calculator-output ' + (visible ? 'visible' : '')}>
      <p className='commute-cost'>Your daily commute emits <strong>{emissions.toFixed(1)} kg</strong> of carbon dioxide.</p>
      {/* <p>It takes a tree 10 days to absorb that much carbon!</p> */}
      {/* <p>That is 3 barrels of oil worth of CO2! [show images of barrels here]</p> */}
      <p className='emissions-comparison-title'>Relative to the average Bay Area adult, that is:</p>
      <div className='emissions-comparison-scale'>
        <div className={'emissions-comparison-item low ' + (emissionsCategory === 'low' ? 'selected' : '')}>Low</div>
        <div className={'emissions-comparison-item average ' + (emissionsCategory === 'average' ? 'selected' : '')}>Average</div>
        <div className={'emissions-comparison-item high ' + (emissionsCategory === 'high' ? 'selected' : '')}>High</div>
      </div>
      <p className='oil-barrels-text'>That's equivalent to burning roughly <strong>{Math.round(barrelsOfOilPerYear)}</strong> barrels of oil per year.</p>
      <div className='oil-barrels-group'>
        {oilBarrelsComponent}
      </div>
      <div className='call-to-action'>
      <a href='https://www.ipcc.ch/sr15/chapter/chapter-2/' target='_blank' rel='noopener noreferrer'>According to the IPCC</a>, if we are to avoid the most catastrophic effects of climate change, we need to halve our carbon emissions in the next 10 years. Try experimenting with the sliders above to see how changing your driving habits would lower your carbon footprint, and check out the articles below for tips on how to reduce your vehicular emissions.
      </div>
    </div>
  )
}