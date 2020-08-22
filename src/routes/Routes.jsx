import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from '../components/signup/SignUp.component';
import Login from '../components/login/Login.component';
import Dashboard from '../components/dashboard/Dashboard.component'

const Routes = () => (
    <Router >
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
)

export default Routes
