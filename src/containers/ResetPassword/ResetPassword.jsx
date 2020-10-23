import React, { Component } from 'react';
import Input from "../../components/Input/Input"
import Header from "../../components/Header/Header"
import ResetPasswordManager from './dataManager';
import queryString from 'query-string';
import { Alert } from 'react-bootstrap';
import validator from '../../common/validation';

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

    componentDidMount(){
        document.title = "Jobless | Reset Password";
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
                if (res.data.status) {
                    this.setState({
                        submitted: true
                    })
                }
            })
            .catch(err => {
                validator(err);
            })
    }

    render() {
        return (
            <div className="base">
                <Header loginButton={true}></Header>
                <div className="base-form reset">
                    <h1>Reset your password?</h1>
                    <p>Enter your new password below.</p>
                    <form>
                        <fieldset>
                            <label>New password<span className="star">*</span></label>
                            <Input type="password" name="password" value={this.state.password} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <fieldset>
                            <label>Confirm new password<span className="star">*</span></label>
                            <Input type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
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

export default ResetPassword;