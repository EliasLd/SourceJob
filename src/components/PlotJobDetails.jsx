import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logout from '../auth/logout';
import { Link } from 'react-router-dom';
import DeleteJob from "./DeleteJob";
import Navbar from "./Navbar";

export default function PlotJobDetails() {
    const { id } = useParams(); // récupération  de l'id en fonction de l'url

    const [jobDetails, setJobDetails] = useState(null);

    const fetchJobDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:3000/api/jobs/${id}`,{
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

    useEffect(() => {
        fetchJobDetails();
    }, [id]); 

    return (
        <div>
            <Navbar />
            <h2>Détails du job</h2>
            {jobDetails ? (
                <ul>
                    <li>Nom du job: {jobDetails.jobName}</li>
                    <li>Type de job: {jobDetails.jobType}</li>
                    <li>Durée du job/contrat: {jobDetails.jobDuration}</li>
                    <li>Entreprise: {jobDetails.Company}</li>
                </ul>
            ) : (
                <p>Chargement des détails du job...</p>
            )}
            <div className="flex m-4 gap-3">
                <Link to={`/api/jobs/edit/${id}`} className="p-2 bg-green-500 rounded-lg" >Modifier</Link>
                <DeleteJob JobId={id}/>
            </div>
            <Logout />
        </div>
    );
}
