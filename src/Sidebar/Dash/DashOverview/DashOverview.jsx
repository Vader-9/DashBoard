import './DashOverview.css'
import { ChartPie } from 'lucide-react'

function DashOverview(){

    return(
        <div className='DashOverview'>
           <div className='DashOverview-header'>
            <ChartPie />
            <p>Overview</p>
           </div>
        </div>
    )
}

export default DashOverview