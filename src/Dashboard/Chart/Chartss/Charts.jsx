import'./Charts.css'
import Chart1 from './Chart1'
import TotalUser from './Chart2file/TotalUser'
import TrafficbyWebsite from './Chart2file/TrafficbyWebsite'


function Charts(){

    return(
        <div className='Charts'>
           <div className="Charts-title">
            <p>Overview</p>
            <p>Today</p>
           </div>
            <Chart1/>
            <TotalUser/>
            <TrafficbyWebsite/>
        </div>
    )
}

export default Charts