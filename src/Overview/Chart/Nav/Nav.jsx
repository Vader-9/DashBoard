import './Nav.css'
import { AppWindow, Star, Sun, History, Bell } from 'lucide-react'

function Nav(){

    return(
    <div className="Nav">
        <div className="first-Nav">
            <AppWindow/>
            <Star />
            <a href="page2">Dashboard</a>
            <p>/</p>
             <a href="page1">Default</a>
        </div>
        <div className="second-Nav">
            <input type="text" placeholder='Search' />
            <Sun />
            <History />
            <Bell />
            
        </div>
    </div>)
}

export default Nav