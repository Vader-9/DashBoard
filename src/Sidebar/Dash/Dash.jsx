import './Dash.css'
import DashOverview from './DashOverview/DashOverview'
import ECommerce from './eCommerce/ECommerce'
import Dashproject from './Dashproject/DashProject'

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