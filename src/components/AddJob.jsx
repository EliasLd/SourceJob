import { useState } from "react";
import { jwtDecode } from 'jwt-decode';

export default function JobForm() {

    const [jobDatas, setJobDatas] = useState({
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDatas((lastData) => ({
            ...lastData, [name]: value
        }));
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
                    userId: userId
                })
            });

            if(res.ok) {
                console.log("succès !");
                setJobDatas({
                    jobName: '',
                    jobType: '',
                    jobDuration: '',
                    Company: ''
                });
            } else {
                console.error('Erreur envoi des données');
            }
        } catch (error) {
            console.error("Erreur requête");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nom du job 
                <input
                    type="text"
                    name="jobName"
                    value={jobDatas.jobName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Type de job 
                <input
                    type="text"
                    name="jobType"
                    value={jobDatas.jobType}
                    onChange={handleChange} 
                />
            </label>
            <label>
                Durée du job/contrat 
                <input
                    type="text"
                    name="jobDuration"
                    value={jobDatas.jobDuration}
                    onChange={handleChange} 
                />
            </label>
            <label>
                Entreprise 
                <input
                    type="text"
                    name="Company"
                    value={jobDatas.Company}
                    onChange={handleChange} 
                />
            </label>
            <button type="submit">Sauvegarder</button>
        </form>

    )

};