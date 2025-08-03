import './Favourites.css'
import Overview from './Overview/Overview'
import Projects from './Projects/Projects'

function Favourites(){

    return(
        <div className="Favourites">
            <div className="favouritediv">
                <p>Favourites</p>
                <p>Recently</p>
            </div>
            <Overview/>
            <Projects/>
        </div>
    )
}

export default Favourites