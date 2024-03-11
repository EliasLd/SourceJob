import { useState } from "react";
import { useEffect } from "react";

export default function JobForm() {

    const [jobDatas, setJobDatas] = useState({
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: ''
    });

    const [jobsList, setJobsList] = useState([]);
    const [showJobs, setShowJobs] = useState(true);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDatas((lastData) => ({
            ...lastData, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobDatas)
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


    useEffect(() => {
        if (showJobs) {
            handleFetchJobs();
        }
    }, [showJobs]);

    return(
        <div>
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
        
            <button onClick={() => setShowJobs(!showJobs)}>
                {showJobs ? 'Masquer les jobs' : 'Afficher les jobs'}
            </button>


            {showJobs && (
                <ul>
                    {jobsList.map((job) => (
                        <li key={job._id}>
                            {job.jobName} - {job.jobType} - {job.jobDuration} - {job.Company}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

};