import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JobProfile.css';
import JobDesc from './JobDesc';
import ReferJob from './ReferJob';
import AboutRole from './AboutRole';
import AboutCompany from './AboutCompany';

const JobProfile = () => {
    const location = useLocation();
    const { jobData } = location.state || {};
    const navigate = useNavigate();
    
    function handleApplicants(){
         
    }

    return (
        <div className='jobProfile_mainCont'>
            <img className='navigatePrev' src='Vector_left.svg' alt='Back' onClick={() => navigate(-1)} />
          <JobDesc 
          profilePic={jobData?.profilePic}
          jobProfile={jobData?.jobProfile}
          companyName={jobData?.companyName}
          description={jobData?.description}
          extraDetails={[...jobData?.extraDetails]}
          />
         <div className='ConnectWallet_cont'>
            <button> CONNECT WALLET</button>
          </div>
          
          <ReferJob/>
          <AboutRole 
          aboutRole={jobData?.aboutRole} 
          skills={[...jobData?.skills]}
           candidateRequirement={[...jobData?.candidateRequirement]}
           jobResponsbility={jobData?.jobResponsbility}
           />
       
        <div onClick={handleApplicants} className='viewApplicants_cont'>
             <h1> View Applicants </h1>
        </div>
        
        <AboutCompany aboutCompany={jobData?.aboutCompany}/>

        </div>
    );
};

export default JobProfile;
