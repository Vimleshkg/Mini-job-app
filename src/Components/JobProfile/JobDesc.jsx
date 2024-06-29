import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const JobDesc = (props) => {
    const [isMore, setIsMore] = useState(false);
    
  return (
    <div className='jobDesc_cont'>
    <img className='profilePic' src={props.profilePic} alt='Profile' />

    <div className='highPriority-btn'>
        <div>
            <img src='Vector.svg' alt='Priority' />
            <h1>High Priority</h1>
        </div>
    </div>

    <div className='jobProfile_cont'>
        <header> {props.jobProfile} </header>
        <h2 className='company'>{props.companyName}</h2>
        <p className='desc'>{props.description}</p>
        <div className='extraDetails'>
            <div>
                <img src='mynaui_location.svg' alt='Location' />
                <h1>{props.extraDetails[0]}</h1>
            </div>
            <div>
                <img src='ph_money-light.svg' alt='Salary' />
                <h1>{props.extraDetails[1]}</h1>
            </div>
            <div>
                <img src='ant-design_calendar-outlined.svg' alt='Calendar' />
                <h1>{props.extraDetails[2]}</h1>
            </div>
            <div>
                <img src='ph_bag-simple-light.svg' alt='Experience' />
                <h1>{props.extraDetails[3]}</h1>
            </div>
            <div>
                <img src='formkit_people.svg' alt='People' />
                <h1>{props.extraDetails[4]}</h1>
            </div>
            <div className='moreDetails'>
                <img src='clarity_building-line.svg' alt='Building' />
                {props.extraDetails[5].slice(0, 2).map((data, ind) => (
                    <h1 className={isMore && ' -mb-3 ' }  key={ind}>{data}</h1>
                ))}
                { (props.extraDetails[5].length > 2 && !isMore) && (
                    <h1 onClick={() => setIsMore((prev)=>!prev)}> + {props.extraDetails[5].length - 2}</h1>
                )}
                <div className={isMore && ' ml-7 ' } >
                {isMore && props.extraDetails[5].slice(2).map((data, ind) => (
                    <h1 key={ind + 2}>{data}</h1>
                ))}
                </div>
            </div>
            
            <h1 className='post_duration'> Posted {/* write duration from backend */  2 } months ago </h1>
        </div>
    </div>
</div>
  )
}

export default JobDesc