import './Account.css'
import { ChevronRight } from 'lucide-react'
import { User } from 'lucide-react'

function Account(){

    return(
        <div className='Account'>
            <div className="Account-title">
                <ChevronRight/>
                <User />
                <p>Account</p>
            </div>
        </div>
    )
}

export default Account