import './Sidebar.css'
import { CircleUserRound } from 'lucide-react'
import Favourites from './Favourites/Favourites'
import Dash from './dash/dash'
import Page from './Pages/Pages'
import Social from './Pages/Socials/Social'

function Sidebar() {

  return (
    <div className='Sidebar'>
      <div className="sidebar-profile">
        <CircleUserRound />
         <h3>ByeWind</h3>
      </div>
      <Favourites/>
      <Dash/>
      <Page/>
      <Social/>
    </div>)
}

export default Sidebar