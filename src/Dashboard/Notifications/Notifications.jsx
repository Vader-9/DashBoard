import './Notifications.css'
import React from 'react';
import Notification from './Notification';
import Activities from './Activities';

function Notifications(){

    return(
    <div className="Notifications">
          <Notification/>
          <Activities/>
    </div>)
}

export default Notifications