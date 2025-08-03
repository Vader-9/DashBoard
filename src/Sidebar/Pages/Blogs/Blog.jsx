import './Blog.css'
import { BookOpen } from 'lucide-react'
import { ChevronRight } from 'lucide-react'


function Blog(){

    return(
    <div className='Blog'>
          <div className="Blog-title">
             <ChevronRight/>
            <BookOpen />
            <p>Blog</p>
          </div>
    </div>)
}

export default Blog