import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlotJob() {
    const navigate = useNavigate();

    const [jobsList, setJobsList] = useState([]);
    const [showJobs, setShowJobs] = useState(true);

    const handleFetchJobs = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/jobs');
            if (res.ok) {
                const data = await res.json();
                setJobsList(data);
            } else {
                console.error('Erreur récupération des données');
            }
        } catch (error) {
            console.error("Erreur requête");
        }
    };

    const handleClickJob = (jobId) => {
        navigate(`/jobs/${jobId}`);
    };

    useEffect(() => {
        if (showJobs) {
            handleFetchJobs();
        }
    }, [showJobs]);

    return (
        <div>
            <button onClick={() => setShowJobs(!showJobs)}>
                {showJobs ? 'Masquer les jobs' : 'Afficher les jobs'}
            </button>

            {showJobs && (
                <ul>
                    {jobsList.map((job) => (
                        <li key={job._id} onClick={() => handleClickJob(job._id)}>
                            {job.jobName} - {job.jobType} - {job.jobDuration} - {job.Company}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
