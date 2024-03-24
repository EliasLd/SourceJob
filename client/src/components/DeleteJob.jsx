import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import deleteDraft from '../assets/trash.svg';

export default function DeleteJob({ JobId }) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        const res = await fetch(`https://sourcejob.onrender.com/api/jobs/${JobId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(res.ok){
            console.log('Job supprimé !');
            navigate('/api/jobs');
        } else {
            console.error('Erreur lors de la suppression des données');
        }
    } catch (error) {
        console.error('Erreur de requête', error);
    } finally {
        setIsLoading(false); //quel que soit la finalité, le chargement est terminé.
    }
  }

  return (
    <div>
        {isLoading ? (
            <p>...</p>
        ) : (
            <button onClick={handleDelete}>
                <img src={deleteDraft} className="w-6 h-6 xr:w-7 xr:h-7"/>
            </button>
        )}
    </div>
  )
}
