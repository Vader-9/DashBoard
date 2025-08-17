import './Notification.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bug } from 'lucide-react'

function Notification() {

    const [notification, setNotification] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchNotification = async () => {

            try {
          
                const responces = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/notifications')
                //console.log(responces.data)
                setNotification(responces.data)

        } catch (error) {
            console.error(error)
            setError('unable to get notifications')
        } finally {
             setLoading(false)
        }
        

        }

        fetchNotification()
        
    }, [])

    if(error){
        return <p>{error}</p>
    }

    if(loading){
        return <p>Loading...</p>
    }

    const notificationData = notification.map((item, index) =>{
                return(
                    <div key={index} className='Notification-info' >
                        <Bug/>
                        <div className="bug">
                            <p>{item.message}</p>
                            <p>{item.time}</p>
                        </div>
                    </div>
                )
             })

    if(!notificationData){
        return <p>no notification</p>
      
    }

  console.log(notification)

  
   
 
    return (
        <div className="Notification">
             <h3>Notifications</h3>
             {notificationData}
        </div>
    )
}

export default Notification 