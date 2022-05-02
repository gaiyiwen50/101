
import React from 'react'
import './quiz.css'

export default function Question({question, selection, onAnswer}) {
  
  const answers = question.answers.map((answer, index) => {
    return (
      <div className={'answer ' + (selection === index ? 'selected' : '')} key={index} onClick={() => onAnswer(index)}>
        {answer}
      </div>
    )
  })
  
  return (
    <div className='question'>
      <div className='question-text'>
        {question.text}
      </div>
      <div className='answer-list'>
        {answers}
      </div>
    </div>
  )
}