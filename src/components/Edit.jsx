import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
   
   const navigate = useNavigate();
   const { id } = useParams();
   
   const [data, setData] = useState({
        jobName: '',
        jobType: '',
        jobDuration: '',
        Company: ''
   });

   
   return (
    <div>

    </div>
  )
}
