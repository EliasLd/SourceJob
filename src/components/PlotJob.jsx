import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../auth/logout";
import Navbar from "./Navbar";
import info from '../assets/info.svg';
import goLink from '../assets/go-link.svg'

export default function PlotJob() {
    const navigate = useNavigate();

    const [jobsList, setJobsList] = useState([]);
    const [showJobs, setShowJobs] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchJobs = async () => {
        try {
            const token = localStorage.getItem('token');    // On récupère le token du client pour autoriser la requête
            const res = await fetch('http://localhost:3000/api/jobs', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setJobsList(data);
            } else {
                throw new Error('Erreur récupération des données');
            }
        } catch (error) {
            console.error("Erreur requête:", error);
            setError(error.message); 
        }
    };

    const handleClickJob = (jobId) => {
        navigate(`/api/jobs/${jobId}`);
    };

    useEffect(() => {
        if (showJobs) {
            handleFetchJobs();
        }
    }, [showJobs]);

    return (
        <div>
            <Navbar/>
            <div className='flex justify-center'>
                <ul className='mt-16 p-2 rounded-2xl flex flex-col gap-y-4 flex-wrap font-inter font-semibold transition ease-in-out duration-500 hover:bg-slate-300'>
                    {jobsList.map((job) => (
                        <li key={job._id} className='flex items-center flex-row rounded-2xl bg-slate-200 p-3  xr:mx-1'>
                            {job.jobName} - {job.jobType} - {job.jobDuration} - {job.Company} - 
                            {job.link !== '' && <Link to={job.link} className=' mx-2 p-1 transition ease-in-out duration-300 hover:rotate-180'>
                                <img src={goLink} alt='image décrivant un lien url' className="w-12 h-12 xr:w-7 xr:h-7"/>
                                </Link>}
                            <img src={info} onClick={() => handleClickJob(job._id)} className='w-8 h-8 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110' />
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    );
}

