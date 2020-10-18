
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
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword></ForgotPassword>
                    </Route>
                    <Route path="/reset-password">
                        <ResetPassword></ResetPassword>
                    </Route>
                    <Route path="/recruiter-profile">
                        <RecruiterProfile></RecruiterProfile>
                    </Route>
                    <Route path="/candidate-profile">
                        <CandidateProfile></CandidateProfile>
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;