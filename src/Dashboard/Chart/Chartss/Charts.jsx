import'./Charts.css'
import Chart1 from './Chart1'


function Charts(){

    return(
        <div className='Charts'>
           <div className="Charts-title">
            <p>Overview</p>
            <p>Today</p>
           </div>
            <Chart1/>
        </div>
    )
}

export default Charts