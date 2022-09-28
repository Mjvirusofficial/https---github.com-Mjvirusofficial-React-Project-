import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const LogoutPage = () => {
 const {logout} = useAuth0();
 return <h4 onClick={() => logout({returnTo:window.location.origin})} className='logout'>Logout</h4>
}

export default LogoutPage;