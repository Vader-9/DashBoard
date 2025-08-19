import './Notifications.css'
import React from 'react';
import Notification from './Notification';
import Activities from './Activities';
import Contacts from './Contacts';
//import { Contact } from 'lucide-react';

function Notifications(){

    return(
    <div className="Notifications">
          <Notification/>
          <Activities/>
          <Contacts/>
    </div>)
}

export default Notifications