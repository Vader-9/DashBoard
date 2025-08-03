import './Coprate.css'
import { CircleUserRound } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

function Coprate(){

    return(
        <div className='Coprate'>
            <div className="Coprate-title">
                <ChevronRight/>
                <CircleUserRound/>
                <p>Coprate</p>
            </div>
        </div>
    )
}

export default Coprate