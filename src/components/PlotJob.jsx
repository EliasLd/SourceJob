import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../auth/logout";
import Navbar from "./Navbar";

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
                <ul className='mt-16 flex flex-col gap-y-4 flex-wrap font-inter font-semibold '>
                    {jobsList.map((job) => (
                        <li key={job._id} onClick={() => handleClickJob(job._id)} className='rounded-2xl bg-slate-200 p-4 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110'>
                            {job.jobName} - {job.jobType} - {job.jobDuration} - {job.Company}
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    );
}

