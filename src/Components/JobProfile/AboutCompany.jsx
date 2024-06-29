import React from 'react'

const AboutCompany = (props) => {
  return (
    <div className='aboutCompany_mainCont'>
        <div className='aboutCompany_cont'>
           <header> About the Company </header>
           <p> {props.aboutCompany} </p>

        </div>
    </div>
  )
}

export default AboutCompany