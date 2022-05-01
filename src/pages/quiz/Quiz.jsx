
import React, { Component } from 'react'
import './quiz.css'

const questions = [
  {
    text: 'What percentage of US transportation emissions come from passenger cars?',
    answers: [
      '9%',
      '21%',
      '38%',
      '48%',
    ],
    correctAnswer: 2,
    explanation: (<>
      <p>Passenger cars are the largest source of transportation emissions in the US. They account for <a href='https://www.epa.gov/system/files/documents/2022-04/us-ghg-inventory-2022-main-text.pdf' target='_blank' rel='noopener noreferrer'>38% of transportation emissions</a>, beating out freight trucks at 26% and dwarfing aircrafts at under 8%.</p>
    </>),
  },
  {
    text: 'What percentage of BART\'s energy usage comes from renewable sources?',
    answers: [
      '0%',
      '3%',
      '16%',
      '50%',
    ],
    correctAnswer: 3,
    explanation: (<>
      <p><a href='https://www.bart.gov/sites/default/files/docs/2015%20Green%20Fact%20Sheet%20-%20electronic_0.pdf' target='_blank' rel='noopener noreferrer'>100% of BART's power is electric, and over half of it comes from renewable sources.</a> BART emits fewer pounds of CO<sub>2</sub> per passenger mile than any other US transit system.</p>
      {/* <br/>
      <p>BART heavily uses recyclable materials — from parts of its aluminum hull to even its seats! It even snags some extra fuel efficiency every time it stops at a station by converting its kinetic energy into reusable electric energy.</p> */}
    </>),
  },
  {
    text: 'How many metric tons of carbon does the average car emit per year?',
    answers: [
      '0.06',
      '1.8',
      '4.6',
      '52.1',
    ],
    correctAnswer: 2,
    explanation: (<>
      <p>The average car emits the equivalent of <a href='https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle' target='_blank' rel='noopener noreferrer'>4.6 metric tons</a> of carbon per year. That's over 2,000 pounds!</p>
      <br/>
      <p>Of course, vehicular emissions vary greatly based on the fuel type, gas mileage, and car model. How do electric vehicles compare with conventional cars? Check out the next question to find out.</p>
    </>),
  },
  {
    text: 'How much does the average electric vehicle emit relative to the average gas-fueled vehicle?',
    answers: [
      '0%',
      '30%',
      '82%',
      '118%',
    ],
    correctAnswer: 1,
    explanation: (<>
      <p>Per mile, EVs typically emit about a third or a quarter of what conventional gas-powered vehicles emit. Check out <a href='https://www.carboncounter.com/#!/explore' target='_blank' rel='noopener noreferrer'>Carbon Counter</a>, an interactive tool from MIT that helps you understand how different vehicles stack up against each other emissions-wise.</p>
      <br/>
      <p>EVs have no tailpipe emissions, meaning they don't emit CO<sub>2</sub> directly. Instead, they emit CO<sub>2</sub> indirectly by consuming power from electricity grids that are fuelled by power plants. Thus, as grids shift towards renewable energy, the emissions of EVs will approach zero!</p>
    </>),
  },
  {
    text: 'How many deaths in the US are attributable to the air pollution caused by cars?',
    answers: [
      '1,000',
      '2,000',
      '4,000',
      '20,000',
    ],
    correctAnswer: 3,
    explanation: (<>
      <p>About <a href='https://www.pnas.org/doi/10.1073/pnas.2107402118' target='_blank' rel='noopener noreferrer'>20,000 premature deaths</a> occur every year in the US because of air pollution from cars. The good news is that regulations are reducing this number significantly, and as more people switch to electric vehicles, which produce no tailpipe exhaust, deaths from car-produced air pollution will continue to decrease.</p>
    </>),
  },
  {
    text: 'How much have per-capita emissions from cars increased in the Bay Area since 1990?',
    answers: [
      '-9%',
      '15%',
      '85%',
      '144%',
    ],
    correctAnswer: 0,
    explanation: (<>
      <p>While it is true that the total vehicular emissions have increased since 1990, the per-person emission rate <a href='https://www.nytimes.com/interactive/2019/10/10/climate/driving-emissions-map.html' target='_blank' rel='noopener noreferrer'>has decreased in the Bay Area</a>. However, transportation still remains the largest source of greenhouse gas emissions, but we can change that.</p>
    </>),
  },
  {
    text: 'A typical car gets about 21 miles per gallon of gas. How many miles per gallon-equivalent does a typical BART rider get?',
    answers: [
      '18',
      '33',
      '104',
      '249',
    ],
    correctAnswer: 3,
    explanation: (<>
      <p><a href='https://www.bart.gov/sites/default/files/docs/2015%20Green%20Fact%20Sheet%20-%20electronic_0.pdf' target='_blank' rel='noopener noreferrer'>BART riders enjoy the equivalent of 249 miles per gallon of gas.</a></p>
      <br/>
      <p>Riding BART is a great way to reduce your emissions, since choosing BART over your car for your daily commute can save 24 pounds of CO<sub>2</sub>!</p>
    </>),
  },
  {
    text: 'To prevent global warming from surpassing 1.5°C, by roughly how much do we need to reduce emissions by 2030?',
    answers: [
      '10%',
      '20%',
      '50%',
      '92%',
    ],
    correctAnswer: 2,
    explanation: (<>
      <p>The Intergovernmental Panel on Climate Change reports that limiting warming to 1.5°C will require reducing our greenhouse gas emissions by roughly <a href='https://www.ipcc.ch/sr15/chapter/chapter-2/' target='_blank' rel='noopener noreferrer'>45% from 2010 levels by 2030</a>.</p>
      <br/>
      <p>If we fail to achieve that, the climate will experience cataclysmic changes — by 2100, <a href='https://iopscience.iop.org/article/10.1088/1748-9326/aab827' target='_blank' rel='noopener noreferrer'>194 million people</a> would be in danger of extreme drought, <a href='https://iopscience.iop.org/article/10.1088/1748-9326/aab827' target='_blank' rel='noopener noreferrer'>37% of the world population</a> would be exposed to severe heatwaves, and the oceans would <a href='https://iopscience.iop.org/article/10.1088/1748-9326/aaac87' target='_blank' rel='noopener noreferrer'>56cm</a> higher than they are now, resulting in <a href='https://iopscience.iop.org/article/10.1088/1748-9326/aacc76/meta' target='_blank' rel='noopener noreferrer'>$11.7 trillion</a> in annual flood damages.</p>
      <br/>
      <p>We need to act now, and each of us has the ability to reduce our emissions significantly by changing our driving habits.</p>
    </>),
  },
]

export default class Quiz extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      selection: null,
      displayOutput: false,
      isFadingOutButton: false,
    }
  }
  
  selectAnswer = (index) => {
    this.setState({selection: index})
    if (index === questions[this.state.currentQuestion].correctAnswer) {
      this.setState({displayOutput: true})
    }
    else {
      // Deselect automatically after a tiny delay
      setTimeout(() => {
        // If the selection has not changed, reset it
        if (this.state.selection === index) {
          this.setState({
            selection: null,
            isFadingOutButton: true,
          })
          // Remove the `isFadingOutButton` tag once the fade out has finished
          setTimeout(() => {
            this.setState({ isFadingOutButton: false })
          }, 1000)
        }
      }, 2000)
    }
  }
  moveToNextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      selection: null,
      displayOutput: false,
    })
  }
  classNameForAnswer = (index) => {
    if (this.state.selection === index) {
      if (index === questions[this.state.currentQuestion].correctAnswer) {
        return 'answer correct'
      }
      return 'answer incorrect'
    }
    if (this.state.isFadingOutButton) {
      return 'answer unselected fading-out'
    }
    return 'answer unselected'
  }
  
  render() {
    
    const question = questions[this.state.currentQuestion]
    
    const answers = question.answers.map((answer, index) => {
      return (
        <div className={this.classNameForAnswer(index)} key={index} onClick={() => this.selectAnswer(index)}>
          {answer}
        </div>
      )
    })
    
    return (<>
      <div className='quiz-root'>
        
        <h1 className='quiz-title'>Vehicular Emissions Quiz</h1>
        <p className='quiz-introduction'>Test your knowledge of topics related to vehicular carbon emissions below!</p>
        <div className='quiz-divider' />
        
        <div className={'quiz ' + (this.state.displayOutput ? 'enlarged' : '')}>
          
          <div className='question-number'>
            {this.state.currentQuestion + 1} / {questions.length}
          </div>
          
          <div className='quiz-contents'>
            <div className='question'>
              <div className='question-text'>
                {question.text}
              </div>
              <div className='answer-list'>
                {answers}
              </div>
            </div>
            
            <div className={'quiz-horizontal-divider ' + (this.state.displayOutput ? 'visible' : '')} />
            
            <div className={'quiz-output ' + (this.state.displayOutput ? 'visible' : '')}>
              <div className='answer-explanation'>
                <p><strong>Correct!</strong></p>
                <br />
                {question.explanation}
              </div>
              <button className={'next-question-button ' + (this.state.currentQuestion >= questions.length - 1 ? 'hidden' : '')} onClick={this.moveToNextQuestion}><strong>Next</strong></button>
            </div>
          </div>
        
        </div>
      </div>
    </>);
  }
  
}
