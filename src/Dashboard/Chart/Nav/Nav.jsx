import './Nav.css'
import { AppWindow, Star, Sun, History, Bell } from 'lucide-react'

function Nav(){

    return(
    <div className="Nav">
        <div className="first-Nav">
            <AppWindow/>
            <Star />
            <p>Dashboard</p>
            <p>/</p>
            <p>Default</p>
        </div>
        <div className="second-Nav">
            <input type="text" placeholder='Search' />
            <Sun />
            <History />
            <Bell />
            <AppWindow/>
        </div>
    </div>)
}

export default Nav