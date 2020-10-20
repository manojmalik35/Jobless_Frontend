import React, { Component } from 'react';
import Input from "../../components/Input/Input"
import Header from "../../components/Header/Header"
import ResetPasswordManager from './dataManager';
import queryString from 'query-string';
import { Alert } from 'react-bootstrap';
import isLoggedIn from '../../hoc/isLoggedIn';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new ResetPasswordManager();
        this.state = {
            password: "",
            confirmPassword: "",
            submitted: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let parsedQuery = queryString.parse(this.props.location.search);
        const token = decodeURIComponent(parsedQuery.token);
        const email = parsedQuery.email;
        this.dataManager.handleReset({
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            email: email,
            token: token
        })
            .then(res => {
                console.log(res.data);
                if (res.data.status) {
                    this.setState({
                        submitted: true
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="base">
                <Header loginButton={true}></Header>
                <div className="base-form reset">
                    <h3>Reset your password?</h3>
                    <p>Enter your new password below.</p>
                    <form>
                        <fieldset>
                            <label>New password</label>
                            <Input type="password" name="password" value={this.state.password} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <fieldset>
                            <label>Confirm new password</label>
                            <Input type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="error-container hidden">
                            <p className="error">Incorrect email address or password.</p>
                        </div>
                        {this.state.submitted ?
                            <React.Fragment>
                                <Alert variant='success'>
                                    Your password has been reset successfully.
                                </Alert>
                                <a href="/login">Go to Login Page</a>
                            </React.Fragment>
                            :
                            <div className="btn-container">
                                <button className="btn" type="button" onClick={this.handleSubmit}>Reset</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default isLoggedIn(ResetPassword);