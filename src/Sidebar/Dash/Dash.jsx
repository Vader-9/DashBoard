import './Dash.css'
import DashOverview from './DashOverview/DashOverview'
import ECommerce from './eCommerce/ECommerce'
import Dashproject from './DashProject/DashProject'
import React from 'react'

function Dash(){

    return(
        <div className="Dash">
            <p>Dashboard</p>
            <DashOverview/>
            <ECommerce/>
            <Dashproject/>
        </div>
    )
}

export default Dash 