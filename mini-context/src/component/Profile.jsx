import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {User} = useContext(UserContext)
    if(!User)   return(<h1>Not Logged In</h1>)
  return (
    <div>
      Welcome {User.username}
    </div>
  )
}

export default Profile
