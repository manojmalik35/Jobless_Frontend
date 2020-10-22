import React, { Component } from 'react';
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import ForgotPasswordManager from './dataManager';
import { Alert } from 'react-bootstrap';
import isLoggedIn from '../../hoc/isLoggedIn';
import validator from '../../common/validation';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new ForgotPasswordManager();
        this.state = {
            email: "",
            submitted: false
        }
    }

    componentDidMount(){
        document.title = "Jobless | Forgot Password";
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.dataManager.handleForgot({ email: this.state.email })
            .then(res => {
                if (res.data.status) {
                    this.setState({
                        submitted : true
                    })
                }
            }, err => {
                validator(err);
            })
    }

    render() {
        return (
            <div className="base">
                <Header loginButton={true}></Header>
                <div className="base-form forgot">
                    <h3>Forgot your password?</h3>
                    <p>Enter the email associated with your account and we'll send you instructions to reset your password</p>
                    <form>
                        <fieldset>
                            <label>Email address</label>
                            <Input type="email" name="email" value={this.state.email} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="error-container hidden">
                            <p className="error">Incorrect email address or password.</p>
                        </div>
                        {this.state.submitted ?
                            <Alert variant='success'>
                                Your email has been sent successfully.
                          </Alert>
                            :
                            <div className="btn-container">
                                <button className="btn" type="button" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default isLoggedIn(ForgotPassword);