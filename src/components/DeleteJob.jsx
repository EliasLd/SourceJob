import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteJob({ JobId }) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3000/api/jobs/${JobId}`, {
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
            <button onClick={handleDelete} className="p-2 bg-red-600 rounded-lg text-white">
                Supprimer
            </button>
        )}
    </div>
  )
}
