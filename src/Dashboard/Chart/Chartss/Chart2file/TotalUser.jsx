import './TotalUser.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function TotalUser() {

  const [users, setUsers] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://dashboard-backend-rv0c.onrender.com/api/userGraphData')

        console.log(response.data)
        setUsers(response.data)

      } catch (error) {
        console.error(error)
        setError('Failed to fetch user data');
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;
  if (!users) return <p>No chart data available.</p>;

  const lastYear = users.lastYear
  const thisYear = users.thisYear
  const labels = users.labels

  console.log(lastYear, thisYear, labels)

  const series = [
    {
      name: 'Last Year',
      data: lastYear
    },
    {
      name: 'This Year',
      data: thisYear
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
      categories: labels
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };




  return (
    <div className='TotalUser'>
      <h1>Total Users</h1>
      <div id="chart">
        <ReactApexChart options={options} series={series}   type="area" height={350} />
      </div>

    </div>
  );
}

export default TotalUser;