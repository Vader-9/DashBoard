import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function TrafficbyWebsite() {

  const [traffic, setTraffic] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    const fetchTraffic = async () => {

      try {
        const response = await axios.get(' https://dashboard-backend-rv0c.onrender.com/api/traffic')
        //console.log(response.data.byWebsite)
        setTraffic(response.data.byWebsite)
        

      } catch (error) {
        console.error(error)
        setError('Failed to fetch traffic data');
      } finally {
        setLoading(false)
      }
    }
    fetchTraffic()
  }, [])

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;
  if (!traffic) return <p>No chart data available.</p>;




//console.log(traffic)
 

  const series = [
    {
      name: 'Last Year',
      data: traffic.map((item) => {
        return item.website
      })
    },
  
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
      categories:  traffic.map((item) => {
        return item.percentage
      })
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };
 


  return (
    <div>
      <h1>Traffic by Website</h1>
      <div id="Website">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>

    </div>
  );
}

export default TrafficbyWebsite;