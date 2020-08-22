import React from 'react'
import './Learn.css'

export default function learn() {
  const resource = [
    { imageName: 'bill', label: 'Line by line components in the Financial Statements' },
    { imageName: 'report', label: 'Format of the Financial Statements' },
    { imageName: 'magnifying-glass', label: 'Tools to analyse the Financial Statements' },
    { imageName: 'scheme', label: 'Drawing logical inferences based on the calculations using the tools' }
  ]
  const showCard = (item, index) => (
    <div key={index} className='learn-box'>
      <div className='learn-box_image'>
        <img alt={item.imageName} src={`./${item.imageName}.png`} />
      </div>
      <p className='learn-box_data'>{item.label}</p>
    </div>
  )

  return (
    <>
      <div className='learn-wrapper'>
        <div className='learn-container'>
          <p className='learn-heading'>{"What you'll learn?"}</p>
        </div>
        <div className='learn-container-cards'>
          {resource.map((item, index) => {
            return showCard(item, index)
          })}
        </div>
      </div>
    </>
  )
}
