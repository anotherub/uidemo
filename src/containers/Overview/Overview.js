import React from 'react'
import './Overview.css'

export default function Overview() {
  const showCard = (item, index) => (
    <div key={index} className='overview-box'>
      <p className='overview-box_data'>{item}</p>
    </div>
  )
  const cardData = [
    `Meaningful & relevant interpretation of Financial Statements (“the bulky document”) is very important for every stakeholder of the business to make smart choices and decisions.`,
    `This course aims to make you an expert in finding out relevant information from the Financial Statements as well as draw meaningful analysis.`,
    `Anyone could be a stakeholder to the business - investor, creditor, supplier, customer, employee, management personnel, etc.`
  ]
  return (
    <div className='overview-wrapper'>
      <div className='overview-conatiner'>
        <p className='overview'>Overview</p>
      </div>
      <div className='overview-conatiner-cards'>
        {cardData.map((item, index) => {
          return showCard(item, index)
        })}
      </div>
    </div>
  )
}
