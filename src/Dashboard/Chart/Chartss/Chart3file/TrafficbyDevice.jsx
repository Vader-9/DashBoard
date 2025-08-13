import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function TrafficbyDevice() {

      const [Device, setDevice] = useState(null)
      const [error, setError] = useState(false)
      const [loading, setLoading] = useState(true);

      useEffect(()=> {

        const fetchDevice = async () => {

        try {

            const responce = await axios.get (' https://dashboard-backend-rv0c.onrender.com/api/traffic')
           //  console.log(responce.data.byDevice)
            setDevice(responce.data.byDevice)
            
        } catch (error) {
            
            setError('Failed to fetch device data');

        } finally {
            setLoading(false)
        }
      }
        fetchDevice()
      }, [])

      
  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;
  if (!Device) return <p>No chart data available.</p>;

   const series = [
    {
      name: 'Last Year',
     // data: trafficBySocials
    },
    {
      name: 'This Year',
     // data: trafficByPercentage
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'area',
      width: '100%'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      // type: 'datetime',
     // categories: labels
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };

    return (
        <div className='TrafficbyDevice'>
            <h2>Traffic by Device</h2>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
}

export default TrafficbyDevice;