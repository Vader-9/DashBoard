import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { Bug } from 'lucide-react'

function Notification() {

    const [notification, setNotification] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchNotification = async () => {

            try {
          
                const responces = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/notifications')
                console.log(responces.data)
                setNotification(responces.data)

        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
             setLoading(false)
        }
        

        }

        fetchNotification()
        
    }, [])

    if(error){
        <p>{error}</p>
    }

    if(loading){
        <p>loading...</p>
    }

    if(!notification){
        <p>no notification</p>
    }

   console.log(notification)

    return (
        <div className="Notification">
             <p>Notifications</p>
             
        </div>
    )
}

export default Notification 