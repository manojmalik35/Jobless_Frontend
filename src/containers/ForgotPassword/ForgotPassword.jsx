import React, { Component } from 'react';
import Input from "../../components/Input/Input"
import Header from "../../components/Header/Header"

class ForgotPassword extends Component {
    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
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
                            <Input type="email" name="email"value={this.state.email} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="error-container hidden">
                            <p className="error">Incorrect email address or password.</p>
                        </div>
                        <div className="btn-container">
                            <button className="btn" type="button" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;