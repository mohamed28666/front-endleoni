import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './signin'
import reportWebVitals from './reportWebVitals';
import HideAppBar from './header';
import DashBoard from './dashboard';
import ThreeD from './threeD';
import Formtest from './formTest';
import Ws_camera from './WS_camera';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MH1 from './MH1';
import AppBarInteraction from './AppBarInteraction'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Container, Typography } from '@material-ui/core';
import MH2 from './MH2';

ReactDOM.render(
  <>
    
    <AppBarInteraction></AppBarInteraction>
  
    <BrowserRouter >
      <React.StrictMode>

        <Route exact path="/">
        <MH1></MH1>
        
        <MH2></MH2>
        </Route>
        <Route exact path="/MH1">


         <MH1></MH1>

        </Route>
        <Route exact path="/MH2">


         <MH2></MH2>

        </Route>
        <Route exact path="/stream"><Ws_camera></Ws_camera></Route>
      </React.StrictMode>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function 
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
