
import React from 'react';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/ResetPassword/ResetPassword'
import RecruiterProfile from './containers/RecruiterProfile/RecruiterProfile';
import CandidateProfile from './containers/CandidateProfile/CandidateProfile';
import Home from "./containers/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path="/reset-password" component={ResetPassword}/>
                    <Route path="/recruiter-profile" component={RecruiterProfile}/>
                    <Route path="/candidate-profile" component={CandidateProfile}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;