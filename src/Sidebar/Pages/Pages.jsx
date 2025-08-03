import Userprofile from "./Userprofile/UserProfile"
import Account from "./Accounts/Account"
import Coprate from "./Coprates/Coprate"
import Blogs from "./Blogs/Blog"


function Page(){

    return(
    <div>
        <p>Pages</p>
        <Userprofile/>
        <Account/>
        <Coprate/>
        <Blogs/>
    </div>)
}

export default Page