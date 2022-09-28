import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
const LoginPage = () => {
  const {loginWithRedirect} = useAuth0();
  return <button className='login' onClick={() => loginWithRedirect()}>Login</button>
}

export default LoginPage;