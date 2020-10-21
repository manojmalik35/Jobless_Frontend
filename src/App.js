
import React from 'react';
import Login from './containers/Login/Login';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import Signup from './containers/Signup/Signup';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/ResetPassword/ResetPassword'
import RecruiterProfile from './containers/RecruiterProfile/RecruiterProfile';
import CandidateProfile from './containers/CandidateProfile/CandidateProfile';
import AdminProfile from './containers/AdminProfile/AdminProfile';
import Home from "./containers/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PageNotFound from './containers/PageNotFound/PageNotFound';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/login/admin" exact component={AdminLogin} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route path="/recruiter-profile" component={RecruiterProfile} />
                    <Route path="/candidate-profile" component={CandidateProfile} />
                    <Route path="/admin-profile" component={AdminProfile} />
                    <Route path="/" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </React.Fragment>
    );
}

export default App;