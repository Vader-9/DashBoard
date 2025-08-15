import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function TrafficbyLocation() {


  const [location, setLocation] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDevice = async () => {

      try {

        const responce = await axios.get(' https://dashboard-backend-rv0c.onrender.com/api/traffic')
       //  console.log(responce.data.byLocation)
          setLocation(responce.data.byLocation)

          

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
  if (!location) return <p>No chart data available.</p>;

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
    <div className="TrafficbyLocation">
      <h2>Traffic by Location</h2>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  )
}

export default TrafficbyLocation;