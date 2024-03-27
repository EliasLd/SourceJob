import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import DeleteJob from "./DeleteJob";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Media from 'react-media';
import pending from '../assets/pending.svg';
import applied from '../assets/hourglass.svg';
import validated from '../assets/validated.svg';
import closed from '../assets/closed.svg';
import goLink from '../assets/go-link.svg'
import AppDate from '../assets/calendar.svg';
import editDraft from '../assets/draft.svg';

export default function PlotJobDetails() {
    const { id } = useParams(); // récupération  de l'id en fonction de l'url

    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`https://sourcejob.onrender.com/api/jobs/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setJobDetails(data);
                } else {
                    console.error('Erreur récupération des détails du job');
                }
            } catch (error) {
                console.error("Erreur requête");
            }
        };
    
        fetchJobDetails();
    }, [id]);

    return (
        <div>
            <Media query='(max-width: 600px)'>
                {matches =>
                    matches ? <MobileNavbar /> : <Navbar />
                }
            </Media>
            <div className='flex justify-center'>
                <div className='p-4 mx-3 rounded-3xl bg-slate-200 mt-24'>
                    {jobDetails ? (
                        <ul>
                            <h2 className='text-3xl font-sans font-bold border-2 border-b-slate-300 mx-10 p-2'> {jobDetails.jobName} </h2>
                            <div className='mt-5 flex flex-col gap-y-3'>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Nature de l'offre - </li>
                                    <li className='text-lg font-inter font-semibold'> {jobDetails.jobType} </li>
                                </div>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Durée du contrat -</li>
                                    <li className='text-lg font-inter font-semibold'>{jobDetails.jobDuration}</li>
                                </div>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Entreprise -</li>
                                    <li className='text-lg font-inter font-semibold'>{jobDetails.Company}</li>
                                </div>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Statut -</li>
                                    <li className='text-lg font-inter font-semibold'>{jobDetails.status}</li>
                                    <img src={jobDetails.status === 'En attente' ? applied 
                                            : jobDetails.status === 'Entretien' ? pending 
                                            : jobDetails.status === 'Refusée' ? closed : validated}
                                    alt='statut de la candidature' className='w-5 h-5 xr:w-6 xr:h-6 transition' />
                                </div>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Lien -</li>
                                    <li className='text-lg font-inter font-semibold'>{jobDetails.link !== '' ? 
                                    <Link to={jobDetails.link}>
                                            <img src={goLink} alt='lien url' className="w-6 h-6 xr:w-7 xr:h-7 transition ease-in-out duration-300 hover:rotate-180"/>
                                    </Link> : 'Non renseigné' }
                                    </li>
                                </div>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <li className='text-lg font-inter ml-3'>Date -</li>
                                    <li className='text-lg font-inter font-semibold'>{jobDetails.date}</li>
                                    <img src ={AppDate} alt='' className='w-6 h-6 xr:w-7 xr:h-7 ml-2' />
                                </div>
                            </div>
                        </ul>
                    ) : (
                        <p>Chargement des détails du job...</p>
                    )}
                    <div className="flex justify-between m-3 gap-3">
                        <Link to={`/api/jobs/edit/${id}`}>
                            <img src={editDraft} alt='' className='w-6 h-6 xr:w-7 xr:h-7' />
                        </Link>
                        <div className='rounded-lg transition ease-in-out duration-300 hover:rotate-12'>
                            <DeleteJob JobId={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
