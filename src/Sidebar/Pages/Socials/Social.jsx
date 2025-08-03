import './Social.css'
import { ChevronRight } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

function Social(){

    return(
    <div className='Social'>
          <div className="Social-title">
            <ChevronRight/>
            <MessageCircle />
            <p>Social</p>
          </div>
    </div>)
}

export default Social