import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './index.css';
import App from './App';
import Layout from './Layout';
import Home from './Home';
import Docs from './Docs';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import LoginForm from './LoginForm';
import { useEffect, useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/admin" element={<h1>You are not supposed to be here :(</h1>}/>
            <Route path="/userGuide" element={<h1>Hi user!! Pronto is a lorem ipsum...</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<React.StrictMode>
      <App />
    </React.StrictMode>
*/
