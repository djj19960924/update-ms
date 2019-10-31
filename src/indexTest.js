import React from 'react';
import ReactDOM from 'react-dom';
import '@css/index.css';
// Hash路由
import {BrowserRouter} from 'react-router-dom';
import BasicRoute from './Router';
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

console.log(process.env.NODE_ENV)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BasicRoute />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
