import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
    <Router>
        <Route component={App} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


