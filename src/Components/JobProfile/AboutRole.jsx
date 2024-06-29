import React from 'react'

const AboutRole = (props) => {
  return (
    <div className='aboutRole_mainCont'>
         <div className='aboutRole_cont'>
           <header> About the Role </header>
           <p> {props.aboutRole} </p>
           
           <h1> Skills </h1>
           <div className='skills_cont'> 
            {props.skills.map((data,ind)=> <h2> {data} </h2> )} 
            </div>

            <h1> Candidate requirement </h1>
             <p className='candidatePara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, impedit! </p>
              <ul>
              {
                props.candidateRequirement.map((data, ind)=> <li> {data} </li>  )
              }
              </ul>

              <h1> Job responsibilities</h1>
              <p> {props.jobResponsbility} </p>
         </div>
    </div>
  )
}

export default AboutRole