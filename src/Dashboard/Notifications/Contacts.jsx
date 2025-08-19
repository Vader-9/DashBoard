import'./Contacts.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { CircleUserRound } from 'lucide-react'


function Contacts(){

     const [contacts, setContacts] = useState([])
     const [error, setError] = useState(false)
     const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchContacts = async () => {
            try {
                const responces = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/contacts')
              //   console.log(responces.data)
                 setContacts(responces.data)
            } catch (error) {
                console.error(error)
               setError('unable to get contacts')
            } finally {
                setLoading(false)
            }
        }
        fetchContacts()
    },[])

   

    if(error){
        return(<p>{error}</p>)
    }

    if(loading){
        return(<p>loading...</p>)
        
    }

 

 const contactData = contacts.map((item, index) =>{
        return(
            <div key={index} className='contactData'>
                <img src={item.avatar} alt="" />
                <p>{item.name}</p>
            </div>
        )
    })

       if(!contactData){
        return (
            <p>no contacts to this play</p>
        )
    }
  

    return(
        <div className='Contacts'>
            <h3>contacts</h3>
               {contactData}
        </div>
    )
}

export default Contacts