import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render( 
    <BrowserRouter>
    <Auth0Provider
     domain="mjvirus.us.auth0.com"
     clientId="X11bfM7pT720prQGowOBWCAZKWRhzP3e"
     redirectUri={window.location.origin}>
      <App/>
    </Auth0Provider>
    </BrowserRouter>
,document.getElementById('root'))