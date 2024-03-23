import { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import pending from '../assets/pending.svg';
import applied from '../assets/hourglass.svg';

export default function JobForm() {
    const navigate = useNavigate();
    const [jobDatas, setJobDatas] = useState({
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: '',
        link: '',
        fav: false,
        status:'',
    });

    const [jobStatus, setJobStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDatas((lastData) => ({
            ...lastData, [name]: value
        }));
    };

    const handleStatusChange = (status) => {
        setJobDatas((prev) => ({
            ...prev, status: status
        }));
        setJobStatus(status);
    };

    const getUserId = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            return userId;
        } catch (error) {
            console.error('Erreur de décodage du token', error);
            return null;
        }
    };

    const getRegisteredDate = () => {
        const todaysDate = new Date();

        const dd = todaysDate.getDate().toString().padStart(2, '0');
        const mm = (todaysDate.getMonth() + 1).toString().padStart(2, '0');
        const yyyy = todaysDate.getFullYear();

        return (`${dd}/${mm}/${yyyy}`);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')
        const userId = getUserId(token);

        try {
            const res = await fetch('http://localhost:3000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...jobDatas,
                    userId: userId,
                    date: getRegisteredDate()
                })
            });

            if(res.ok) {
                console.log("succès !");
                setJobDatas({
                    jobName: '',
                    jobType: '',
                    jobDuration: '',
                    Company: '',
                    link: '',
                    fav: false,
                    status:'',
                });
                navigate('/api/jobs');
            } else {
                console.error('Erreur envoi des données');
            }
        } catch (error) {
            console.error("Erreur requête");
        }
    };

    return(
        <div>
            <Media query='(max-width: 600px)'>
            {matches =>
                matches ? <MobileNavbar /> : <Navbar />
            }
            </Media>
            <div className='absolute inset-0  flex flex-col justify-center items-center mt-36  xr:mt-16'>
                <div className='rounded-lg flex justify-center flex-col mt-16 bg-white shadow-xl p-1 xxs:p-4'>
                    <p className='font-sans font-bold text-3xl p-6'>Ajouter une nouvelle candidature</p>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center p-2 xxs:p-5 rounded-3xl'>
                        <div className='flex flex-col sm:flex-row'>
                            <label>
                            <p className='font-inter font-semibold  text-xl'>Nom du job</p> 
                            <input
                                type="text"
                                name="jobName"
                                value={jobDatas.jobName}
                                onChange={handleChange}
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80   rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Type de job</p> 
                            <input
                                type="text"
                                name="jobType"
                                value={jobDatas.jobType}
                                onChange={handleChange} 
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80 rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        </div>
                        <div className='flex flex-col sm:flex-row'>
                            <label>
                            <p className='font-inter font-semibold text-xl'>Durée du job/contrat</p> 
                            <input
                                type="text"
                                name="jobDuration"
                                value={jobDatas.jobDuration}
                                onChange={handleChange} 
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80 rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                            <p className='font-inter font-semibold text-xl'>Entreprise</p> 
                            <input
                                type="text"
                                name="Company"
                                value={jobDatas.Company}
                                onChange={handleChange} 
                                className='m-3 p-2 flex flex-col w-60 xxs:w-80 rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        </div >
                        <div className='flex flex-col sm:flex-row items-center'>
                        <label>
                            <p className='font-inter font-semibold  text-xl'>URL</p> 
                            <input
                                type="text"
                                name="link"
                                value={jobDatas.link}
                                onChange={handleChange}
                                className='m-3 p-2 flex  flex-col w-60 xxs:w-80 rounded-2xl bg-slate-100 transition ease-in-out duration-300 focus:scale-110 focus:bg-white'
                            />
                        </label>
                        <label>
                                <p className='font-inter font-semibold  text-xl'>Statut</p> 
                                <div className='flex flex-col xxs:flex-row gap-x-2 p-3'>
                                    <button type="button" onClick={() => handleStatusChange('En attente')}>
                                        <div className={`p-3 rounded-full ${jobStatus === 'En attente' ? 'bg-slate-200' : ''} hover:bg-slate-200 flex flex-row gap-x-3 items-center font-inter font-semibold`}>
                                            En attente
                                            <img src={applied} alt="Applied" className='w-5 h-5 xr:w-6 xr:h-6' />
                                        </div>
                                    </button>
                                    <button type="button" onClick={() => handleStatusChange('Entretien')} >
                                        <div className={`p-3 rounded-full ${jobStatus === 'Entretien' ? 'bg-slate-200' : ''} hover:bg-slate-200 flex flex-row gap-x-3 items-center font-inter font-semibold`}>
                                            Entretien
                                            <img src={pending} alt="Pending" className='w-5 h-5 xr:w-6 xr:h-6' />
                                        </div>
                                    </button>
                                </div>
                        </label>
                        </div>
                        <button type="submit" className='mt-5 p-2 mx-24 sm:mx-64  text-white font-inter font-semibold rounded-lg bg-blue-600 transition ease-in-out duration-300 hover:scale-110'>Sauvegarder</button>
                    </form>
                </div>
                
            </div>
        </div>
    )

};