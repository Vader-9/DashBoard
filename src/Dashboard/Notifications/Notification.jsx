import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Notification() {

    const [notification, setNotification] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchNotification = async () => {

            try {
          
                const responces = await axios.get(' https://dashboard-backend-rv0c.onrender.com/api/notifications')
                console.log(responces.data)

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

    return (
        <div className="Notification">

        </div>
    )
}

export default Notification 