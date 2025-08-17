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

  const countryData = location.map((item)=>item.country)
  const yData = location.map((item)=>item.percentage)

  //console.log(yData)

   const series = yData; // ✅ array only

  const options = {
    labels: countryData, // ✅ match length with series
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%"; // ✅ format percentage
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.5,
      },
    },
  };

  return (
    <div className="TrafficbyLocation">
      <h2>Traffic by Location</h2>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  )
}

export default TrafficbyLocation;