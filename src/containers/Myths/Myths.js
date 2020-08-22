import React from 'react'
import './Myths.css'
function Myths() {
  const resource = [
    {
      label: 'Myth',
      sign: 'cross',
      subLables: [
        `Reading and analysing the financial statements is the domain of a Commerce student ONLY.`,
        `Individuals from other streams do not require this particular skill to do performance and profitability analysis of a business.`
      ]
    },
    {
      label: 'Truth',
      sign: 'tick',
      subLables: [
        `Since reading and analysing Financial Statements requires an understanding of only the basic accounting principles, anyone from any field of study can master this skill.`,
        `Since reading and analysing Financial Statements requires an understanding of only the basic accounting principles, anyone from any field of study can master this skill.`
      ]
    }
  ]

  const showCard = (item, index) => {
    return (
      // <div key={index} className='myth-box'>
      <div className='myth-box_data' id={item.label} key={index}>
        <div className='myth-box-heading'>{item.label}</div>
        <div>
          <ul>
            {item.subLables.map((data, index) => {
              return (
                <li key={index}>
                  <div className={`list-${item.sign}`}></div>
                  <div className='myth-box-list' key={index}>
                    {data}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      // </div>
    )
  }

  return (
    <>
      <div className='myth-wrapper'>
        <div className='myth-container'>
          <p className='myth-heading'>
            {'Bursting some Myths'}
            <br />
            {'about the course'}
          </p>
        </div>
        <div className='myth-container-cards'>
          {resource.map((item, index) => {
            return showCard(item, index)
          })}
        </div>
      </div>
    </>
  )
}

export default Myths
