import React, { Component } from 'react';
import Input from "../../components/Input/Input"
import Header from "../../components/Header/Header"

class ResetPassword extends Component {
    state = {
        password: "",
        confirmPassword : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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
                            <Input type="password" name="password"value={this.state.password} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <fieldset>
                            <label>Confirm new password</label>
                            <Input type="password" name="confirmPassword"value={this.state.confirmPassword} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="error-container hidden">
                            <p className="error">Incorrect email address or password.</p>
                        </div>
                        <div className="btn-container">
                            <button className="btn" type="button" onClick={this.handleSubmit}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword;