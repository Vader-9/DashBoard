import './Default.css'
import Chart from "./Chart/Chart"
import Notifications from './Notifications/Notifications'
import Sidebar from '../Sidebar/Sidebar'

function Default(){

    return(
    <div className='Default'>

     <Chart/>
     <Notifications/>
    </div>)
}

export default Default