import React from 'react';
import './Overview.css';
import Sidebar from '../Sidebar/Sidebar';
import Chart from "./Chart/Chart";


function Overview() {
  return (
    <div className="overview">
        <Sidebar/>
       <Chart/>
    </div>
  );
}

export default Overview;