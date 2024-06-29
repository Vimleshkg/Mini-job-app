import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";

const Job = (props) => {
  return (
  
    <div className='job_Cont'>
        <div className='Referral_Cont'> <img src='fluent-emoji_coin.svg' /> <h1> $3500 Referral Bounty  </h1></div>
        <div className='jobDetails_cont'>  
           <div className='jobDetails_header'>
           <img src={props.profilePic} />
            <div className='no-scrollbar '>  {/* hiding scrollbar */}
                <h1>{props.jobProfile}</h1>
                <h2> {props.companyName} </h2>
            </div>
           </div>

           <div className='jobDetails_body'>
               <div> <img src='mynaui_location.svg' /> <h1> {props?.extraDetails[0]} </h1> </div>
               <div> <img src='ph_money-light.svg' /> <h1> {props?.extraDetails[1]} </h1> </div>
               <div> <img src='ant-design_calendar-outlined.svg' /> <h1> {props?.extraDetails[2]} </h1> </div>
               <div> <img src='ph_bag-simple-light.svg' /> <h1> {props?.extraDetails[3]} </h1> </div>
              
           </div>

           <div className='jobDetails_footer'>
            <h1> 2 months ago </h1>
            <div>
                <img src='Vector.svg'/>
                 <h1> High Priority</h1>
             </div>
           </div>
        </div>
    </div>
  
  )
}

export default Job