import './Nav.css'
import { AppWindow, Star, Sun, History, Bell } from 'lucide-react'
//import { Link } from 'react-router-dom'   // <-- import Link
import { useState } from 'react'
 

function Nav({setPage1}) {

  

  return (
    <div className="Nav">
      <div className="first-Nav">
        <AppWindow />
        <Star />
        <a href='page2'  >Dashboard</a>   {/* ✅ use Link */}
        <p>/</p>
        <a href='/page1' >Default</a>     {/* ✅ use Link */}
      </div>

      <div className="second-Nav">
        <input type="text" placeholder="Search" />
        <Sun />
        <History />
        <Bell />
        <AppWindow />
      </div>
    </div>
  )
}

export default Nav
