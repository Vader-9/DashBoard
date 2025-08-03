//import axios from "axios";
//import Chart from "react-apexcharts";
//import ApexCharts from 'apexcharts'
import Chart from "./Dashboard/Chart/Chart"
import Notifications from "./Dashboard/Notifications/Notifications"
import Sidebar from './Sidebar/Sidebar'


function App() {

  return (
    <div id="app">
      <Sidebar/>
      <Chart/>
      <Notifications/>
    </div>
  )
}

export default App
