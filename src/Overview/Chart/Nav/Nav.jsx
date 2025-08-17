import './Nav.css'
import { AppWindow, Star, Sun, History, Bell } from 'lucide-react'

function Nav({setPage1}){

    return(
    <div className="Nav">
        <div className="first-Nav">
            <AppWindow/>
            <Star />
            <p >Dashboard</p>
            <p>/</p>
             <span>Default</span>
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