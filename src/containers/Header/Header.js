import React from 'react'
import './Header.css'

export default function Header() {
  const resource = [
    { image: 'video', heading: 'Format: Pre-recorded videos' },
    { image: 'timesheet', heading: 'Access: Lifetime' },
    { image: 'person', heading: 'Eligibility Criteria: Anyone & Everyone' }
  ]
  const showCard = (item) => {
    return (
      <div className='header-box'>
        {item.map((data, index) => {
          return (
            <div key={index}>
              <div className='header-box-list-img'>
                <img alt={data.image} style={{ width: '5px', marginRight: '5px' }} src={`./icons-${data.image}.png`} />
              </div>
              <div className='header-box-list_content' key={index}>
                {data.heading}
              </div>
            </div>
          )
        })}{' '}
      </div>
    )
  }

  return (
    <div className='header-wrapper'>
      <div className='Bg'>
        <header className='site-header'>
          <div href='#0' className='logo'>
            Logo
          </div>
          <div className='bg'>
            <div className='button-text'>
              Login <i className='icofont-arrow-right'></i>
            </div>
          </div>
        </header>
        <div className='header-main'>
          <div className='header-main-content' style={{ margin: '0 10px' }}>
            <div className='header-main-content_heading'>Reading and Analysing Financial Statements</div>
            <div className='header-main-content_subheading'>
              In this online video course you will learn to interpret financial statements and draw meaningful analysis.
            </div>
            <div>{showCard(resource)}</div>
            <div className='bg-buy'>
              <div className='buy-text'>Buy Now2</div>
            </div>
            <br />
            <div>
              <div className='header-money' style={{ textDecoration: 'line-through', color: 'white' }}>
                <i style={{ color: '#fff' }} className='icofont-rupee'></i>
                <span style={{ color: '#fff' }}>299</span>
              </div>

              <div className='header-money' style={{ marginLeft: '2px' }}>
                <i style={{ color: '#fff' }} className='icofont-rupee'></i>
                <span style={{ color: '#fff' }}>199</span>
              </div>
            </div>
          </div>

          <div className='header-main-image-wrapper'>
            <img className='header-main-image' src='./board-notes.png' alt={'report'} />
          </div>
        </div>
      </div>
    </div>
  )
}
