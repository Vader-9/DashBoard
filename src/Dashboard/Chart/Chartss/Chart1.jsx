import { useEffect, useState } from 'react'
import './Chart1.css'
//import ApexCharts from 'apexcharts'
import axios from 'axios';
import { Vault } from 'lucide-react';
import { ChartSpline } from 'lucide-react';

function Chart1() {

    const [views, setViews] = useState();
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/overviews')
                console.log(response.data);
                setViews(response.data);

            } catch (error) {
                console.error("Error fetching views:", error);
                setError(true);

            } finally {
                setLoading(false);
            }
        }
        fetchViews();
    }, [])



    if (error) {
        return (
            <div className='error'>
                <Vault className='vault' />
                <h1>Something went wrong</h1>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        )
    }


    const viewsData = Object.entries(views).map(([key, { value, change }]) => ({
        key, value, change
    }))

   // console.log(viewsData);

    return (
        <div className='Chart1'>
            {viewsData.map((view, index) => {
                return (
                    <div key={index} className='chart1-item'>
                        <p>{view.key}</p>
                        <div className='chart1-item-content'>
                            <h1>{view.value}</h1>
                            <p>{view.change}</p>
                            <ChartSpline id =" chart1" />
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Chart1