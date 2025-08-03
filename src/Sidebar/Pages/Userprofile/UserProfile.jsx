import './UserProfile.css'
import { ChevronRight } from 'lucide-react'
import { Contact  } from 'lucide-react'
import { useState } from 'react'

import UserList from './UserList'

function Userprofile(){

    const [user, setUser] = useState(false)

    return(
    <div className='Userprofile'>
          <div className="Userprofile-title" onClick={() => setUser(!user)}>
            <ChevronRight />
            <Contact />
            <p>User profile</p>
          </div>
          { user ? <UserList/> : <></>}
    </div>)
}

export default Userprofile