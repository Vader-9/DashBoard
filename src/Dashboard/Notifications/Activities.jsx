import'./Activities.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CircleUserRound } from 'lucide-react'


function Activities(){

     const [activities, setActivities] = useState([])
     const [error, setError] = useState(false)
     const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchActivities = async () => {
            try {
                const responces = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/activities')
                 console.log(responces.data)
                 setActivities(responces.data)
            } catch (error) {
                console.error(error)
               setError('unable to get activities')
            } finally {
                setLoading(false)
            }
        }
        fetchActivities()
    },[])

    const activityData = activities.map((item, index) =>{
        return(
            <div key={index} className='activityData'>
                
                <CircleUserRound />
                <div className="activitydata-info">
                    <p>{item.activity}</p>
                <p>{item.timestamp}</p>
                </div>
            </div>
        )
    })

    if(error){
        <p>{error}</p>
    }

    if(loading){
        <p>loading...</p>
    }

    if(!activityData){
        <p>no activites avaliable</p>
    }

    return(
        <div className='Activities'>
            <h3>activities</h3>
               {activityData}
        </div>
    )
}

export default Activities