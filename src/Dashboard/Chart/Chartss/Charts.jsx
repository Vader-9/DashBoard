import'./Charts.css'
import Chart1 from './Chart1'
import TotalUser from './Chart2file/TotalUser'
import TrafficbyWebsite from './Chart2file/TrafficbyWebsite'
import TrafficbyDevice from './Chart3file/TrafficbyDevice'
import TrafficbyLocation from './Chart3file/TrafficbyLocation'

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
            <TrafficbyDevice/>
            <TrafficbyLocation/>
        </div>
    )
}

export default Charts