import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Media from 'react-media';
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import info from '../assets/info.svg';
import goLink from '../assets/go-link.svg';
import filledHearth from '../assets/filledHeart.svg';
import emptyHearth from '../assets/emptyHeart.svg';
import pending from '../assets/pending.svg';
import applied from '../assets/hourglass.svg';
import validated from '../assets/validated.svg';
import closed from '../assets/closed.svg';
import load from '../assets/loading.svg';

export default function PlotJob() {
    const navigate = useNavigate();

    const [jobsList, setJobsList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetchJobs = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');    // On récupère le token du client pour autoriser la requête
            const res = await fetch('https://sourcejob.onrender.com/api/jobs', {
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
        } finally {
            setLoading(false);
        }
    };

    const handleClickJob = (jobId) => {
        navigate(`/api/jobs/${jobId}`);
    };

    const toggleFavorite = async (jobId) => {
        try {
            const updatedJobsList = jobsList.map(job => {
                if (job._id === jobId) {
                    return { ...job, fav: !job.fav };
                }
                return job;
            });
            setJobsList(updatedJobsList);

            const token = localStorage.getItem('token');
            await fetch(`https://sourcejob.onrender.com/api/jobs/${jobId}/favorite`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ fav: updatedJobsList.find(job => job._id === jobId).fav })
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut favori:', error);
        }
    };

    useEffect(() => {
        handleFetchJobs();
    }, []);

 return (
    <div>
        <Media query='(max-width: 600px)'>
            {matches =>
                matches ? <MobileNavbar /> : <Navbar />
            }
        </Media>
        <div className='flex justify-center mb-10 xr:mt-0'>
            {loading ? <div className='flex justify-center items-center mt-24'>
                                        <img src={load} alt='' className='animate-spin w-10 h-10'/>
                                   </div> : <ul className='mt-16 p-2 rounded-2xl grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-2 flex-wrap font-inter font-semibold'>
                {jobsList.map((job) => (
                    <div className='flex flex-row relative sm:w-96'>
                        <div className='transition ease-in-out duration-500 hover:bg-slate-300 p-1 rounded-2xl w-full'>
                            <div className='flex justify-center flex-col rounded-2xl bg-slate-100 p-3'>
                                <li key={`${job.jobName}-${job._id}`} className='mx-10 xr:mx-16 truncate text-2xl border-b-2 border-b-slate-300'> {job.jobName} </li>
                                <li key={`${job.jobType}-${job._id}`} className='ml-10 truncate'>-  {job.jobType} </li>
                                <li key={`${job.jobDuration}-${job._id}`} className='ml-10 truncate'>- {job.jobDuration} </li>
                                <li key={`${job.Company}-${job._id}`} className='ml-10 truncate'>- {job.Company} </li>
                                <div className='flex flex-row mt-4 ml-10 xr:ml-0 xr:absolute right-5 bottom-5'>
                                        {job.link !== '' && 
                                        <Link to={job.link}>
                                            <img src={goLink} alt='lien url' className="w-6 h-6 xr:w-7 xr:h-7 transition ease-in-out duration-300 hover:rotate-180"/>
                                        </Link>
                                        }
                                    <img src={info} alt='' onClick={() => handleClickJob(job._id)} className='ml-2 w-6 h-6 xr:w-7 xr:h-7 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110' />
                                    <img src={job.fav ? filledHearth : emptyHearth} alt='' onClick={() => toggleFavorite(job._id)} className='w-6 h-6 xr:w-7 xr:h-7 ml-2 cursor-pointer transition ease-in-out duration-300 hover:scale-75' />
                                </div>
                                <div className='flex flex-row ml-10 xr:ml-0 absolute right-3 xr:left-3 top-3'>
                                    <img src={job.status === 'En attente' ? applied 
                                            : job.status === 'Entretien' ? pending 
                                            : job.status === 'Refusée' ? closed : validated}
                                    alt='status de la candidature' className='w-5 h-5 xr:w-6 xr:h-6 transition' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul> } 
        </div>
    </div>
);

}

