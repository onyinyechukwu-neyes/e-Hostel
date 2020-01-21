import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configStore"

const store = configureStore();

const routing = (
    <ReduxProvider store= {store}>
         <Router>
            <Route component={App} />
        </Router>
    </ReduxProvider>
   
);

ReactDOM.render(routing, document.getElementById('root'));


