import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Media from 'react-media';
import applied from '../assets/hourglass.svg'
import pending from '../assets/pending.svg';
import closed from '../assets/closed.svg';
import validate from '../assets/validated.svg';

export default function Edit() {
   
   const navigate = useNavigate(); //Permet de rediriger l'utilsateur à tout moment
   const { id } = useParams(); //on récupère l'id de l'utilisateur pour l'enregistrement des modifications
   
   const [datas, setDatas] = useState({ //Il s'agit de la structure d'un job, la même que celle utilisée dans les autres composants
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: '',
        link:'',
        status:'',
   });
   
   const [jobStatus, setJobStatus] = useState('');
    
   //Tout d'abord, on récupère les données du job à modifier 
   useEffect(() => {
    //Cette fonction fetch les données du job avec l'api
    const getJobdatas = async () => {
        try {
            const token = localStorage.getItem('token'); //récupération du token de l'utilisateur courant
            const res = await fetch(`https://sourcejob.onrender.com/api/jobs/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` //authentification de l'utilisateur
                }
            });
            if(res.ok) { //la requête a aboutie
                const data = await res.json(); //on stocke ces données dans 'data'
                setDatas(data); //on set notre variable datas grâce au state
            } else { //la requête a boutie mais les données sont corrompues
                console.error('Erreur de récupération des données');
            }
        } catch (error) { // La requpete a échoué
            console.error('Erreur requête');
        }
    };
    getJobdatas();
   }, [id]);

    const handleStatusChange = (status) => {
        setDatas((prev) => ({
            ...prev, status: status
        }));
        setJobStatus(status);
    };

   const handleSubmit = async (e) => {
    e.preventDefault(); //on évite le rafraîchissement de la page au submit
    try { //essaie de modification des données
        const token = localStorage.getItem('token');
        const res = await fetch(`https://sourcejob.onrender.com/api/jobs/${id}`, {
            method: 'PUT', //pour la modification
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, 
            body: JSON.stringify(datas)
        });
        if(res.ok){ //Tout s'est bien passé
            console.log('Modifications appliquées');
            navigate(`/api/jobs/${id}`); //On redirige l'utilisateur sur les détails du jobs (qui vient d'être modifié)
        } else {
            console.error('Erreur: la modification a échouée');
        }
    } catch (error) {
        console.error('Erreur de requête');
    }
   };

   //Cette fonction permet de récupérer ce que l'utilisateur saisit dans les champs du form
   const handleChange = (e) => {
        const {name, value} = e.target;
        setDatas((previous) => ({
            ...previous, [name]: value //copie les données d'un champs dans sa propriété correspondante
        }));
    };

   return (
    <div>
        <Media query='(max-width: 600px)'>
            {matches =>
                matches ? <MobileNavbar /> : <Navbar />
            }
        </Media>
        <div className='absolute inset-0  flex flex-col justify-center items-center mt-36  xr:mt-16'>
            <div className='rounded-lg flex justify-center flex-col mt-16 bg-white shadow-xl p-1 xxs:p-4'>
                <h2 className='font-sans font-bold text-3xl p-6'>Modifier le job</h2>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center p-2 xxs:p-5 rounded-3xl' >
                    <div className='flex flex-col sm:flex-row'>
                        <label>
                            <p className='font-inter font-semibold  text-xl'>Nom du job</p>
                            <input
                                type="text"
                                name="jobName"
                                value={datas.jobName}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80  font-inter italic rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Type de job</p>
                            <input
                                type="text"
                                name="jobType"
                                value={datas.jobType}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80  font-inter italic rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Durée du job/contrat</p>
                            <input
                                type="text"
                                name="jobDuration"
                                value={datas.jobDuration}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80  font-inter italic rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Entreprise</p>
                            <input
                                type="text"
                                name="Company"
                                value={datas.Company}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80  font-inter italic rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                        <label>
                            <p className='font-inter font-semibold text-xl'>URL</p>
                            <input
                                type="text"
                                name="link"
                                value={datas.link}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80  font-inter italic rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Statut</p>
                            <div className='flex flex-col xxs:flex-row gap-x-2 p-3'>
                                <button type="button" onClick={() => handleStatusChange('En attente')}>
                                        <div className={`p-3 rounded-full ${jobStatus === 'En attente' ? 'bg-slate-200' : ''} hover:bg-slate-200 flex flex-row gap-x-3 items-center font-inter font-semibold`}>
                                            En attente
                                            <img src={applied} alt="candidature en attente de traitement" className='w-5 h-5 xr:w-6 xr:h-6' />
                                        </div>
                                </button>
                                <button type="button" onClick={() => handleStatusChange('Entretien')} >
                                        <div className={`p-3 rounded-full ${jobStatus === 'Entretien' ? 'bg-slate-200' : ''} hover:bg-slate-200 flex flex-row gap-x-3 items-center font-inter font-semibold`}>
                                            Entretien
                                            <img src={pending} alt="Entretien passsé ou à passer prochainement" className='w-5 h-5 xr:w-6 xr:h-6' />
                                        </div>
                                </button>
                                <button type="button" onClick={() => handleStatusChange('Refusée')} >
                                    <div className={`p-3 rounded-full ${jobStatus === 'Refusée' ? 'bg-slate-200' : ''} hover:bg-slate-200  items-center`}>
                                            <img src={closed} alt="Candidature non retenue" className='w-5 h-5 xr:w-6 xr:h-6' />
                                    </div>
                                </button>
                                <button type="button" onClick={() => handleStatusChange('Acceptée')} >
                                    <div className={`p-3 rounded-full ${jobStatus === 'Acceptée' ? 'bg-slate-200' : ''} hover:bg-slate-200  items-center`}>
                                            <img src={validate} alt="Candidature retenue" className='w-5 h-5 xr:w-6 xr:h-6' />
                                    </div>
                                </button>
                            </div>
                        </label>
                    </div>
                    <div className='p-2 rounded-lg bg-green-500 mt-6 font-sans font-semibold text-white transition ease-in-out duration-300 hover:scale-110'>
                        <button type="submit" className='mx-3'>Valider</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
