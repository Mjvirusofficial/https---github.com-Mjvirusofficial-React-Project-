import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import { useAuth0 } from '@auth0/auth0-react'
import Loginpage from './Top 6 South movie site/LoginPage'
import SouthMovie from './Top 6 South movie site/SouthMovie';
function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <div className="container mx-auto box">
          <div className="row mx-auto">
            <div className="col-10 mx-auto col-md-6 mt-5 ">
            <h1 className='first'>Hey, Welcome to this site</h1>
           <h2>In this site you can enjoy the Top 6 South Movies Which is really heart-thouching❤️</h2>
           <h3 className='mt-3'>If you want to watch you have to must Login first</h3>
            </div>
            <div className="col-10 mx-auto col-md-6 mt-5">
             <div className="col ">
             <Loginpage/>
             </div>
            </div>
          </div>
          </div>
          
        </div>
      ) : (
        <div>
          <SouthMovie/>
        </div>)}

    </div>
  );
}

export default App;