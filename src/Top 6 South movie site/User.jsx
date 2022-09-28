import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './User.css';

const User = () => {
 const {user,isAuthenticated,isLoading} = useAuth0();
 if(isLoading === true){
    return <div><h1>Loading...</h1></div>
 }

 return(
    isAuthenticated && (
        <div>
            <h4><span ><img className='pic' src={user.picture} alt={user.name}/></span><span>{user.name}</span></h4>
        </div>
    )
 )
}

export default User