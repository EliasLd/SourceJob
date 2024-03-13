import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
   
   const navigate = useNavigate(); //Permet de rediriger l'utilsateur à tout moment
   const { id } = useParams(); //on récupère l'id de l'utilisateur pour l'enregistrement des modifications
   
   const [datas, setDatas] = useState({ //Il s'agit de la structure d'un job, la même que celle utilisée dans les autres composants
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: ''
   });
    
   //Tout d'abord, on récupère les données du job à modifier 
   useEffect(() => {
    //Cette fonction fetch les données du job avec l'api
    const getJobdatas = async () => {
        try {
            const token = localStorage.getItem('token'); //récupération du token de l'utilisateur courant
            const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
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

   const handleSubmit = async (e) => {
    e.preventDefault(); //on évite le rafraîchissement de la page au submit
    try { //essaie de modification des données
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
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
        <h2>Modifier le job</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom du job
                    <input
                        type="text"
                        name="jobName"
                        value={datas.jobName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Type de job
                    <input
                        type="text"
                        name="jobType"
                        value={datas.jobType}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Durée du job/contrat
                    <input
                        type="text"
                        name="jobDuration"
                        value={datas.jobDuration}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Entreprise
                    <input
                        type="text"
                        name="Company"
                        value={datas.Company}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Modifier</button>
            </form>
    </div>
  )
}
