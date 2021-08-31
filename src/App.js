import React from 'react';
import {Home} from '../src/pages/Home';
import {LoginScreen} from '../src/pages/LoginScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <div className="flex">
                <div className="content w-100">
                    <Route 
                        exact
                        path="/dashboard" 
                        component={Home} />

                    <div className="logincontainer">
                    <Route 
                        exact
                        path="/" 
                        component={LoginScreen} />
                    </div>
                </div>
            </div>
        </Router>
    );
}

