import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Jobs.css';
import { IoSearch } from "react-icons/io5";
import { jobsData } from '../Constant'; // testing constant data
import Job from './Job';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        getJobs();
    }, []);

    async function getJobs() {
        // Write backend logic for jobs here
        setJobs([...jobsData]);
    }

    function handleJob(ind) {
     
        navigate('/jobProfile', { state: { jobData: jobs[ind] } });
    }

    return (
        <div className='Jobs_mainCont'>
            <Header />
            <div className='searchBar_cont'>
                <IoSearch className='searchIcon' />
                <input
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Search by job title or company'
                />
            </div>
            {console.log(searchText)}

            <div className='featuredJobs_mainCont'>
                <h1 className='featuredJobs_head'>Featured Jobs</h1>
                <div className='featuredJobs_cont no-scrollbar'>
                    {jobs.map((data, ind) => (
                        <div className='job_mainCont' key={ind} onClick={() => handleJob(ind)}>
                            <Job
                                profilePic={data.profilePic}
                                jobProfile={data.jobProfile}
                                companyName={data.companyName}
                                extraDetails={data.extraDetails}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='AllJobs_mainCont'>
                {jobs.map((data, ind) => (
                   <div onClick={()=>handleJob(ind)}> <Job
                        profilePic={data.profilePic}
                        jobProfile={data.jobProfile}
                        companyName={data.companyName}
                        extraDetails={data.extraDetails}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
