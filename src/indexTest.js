import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Hash路由
import {BrowserRouter} from 'react-router-dom';
import Test from './Test';
import * as serviceWorker from './serviceWorker';

console.log(process.env.NODE_ENV)

ReactDOM.render(
    <BrowserRouter>
        <Test />
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
