import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import LoginDataManager from "./dataManager";

class Login extends Component {

    constructor(props) {
        super(props);
        this.dataManager = new LoginDataManager();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        this.dataManager.handleLogin({ email: this.state.email, password: this.state.password })
            .then(res => {
                console.log(res.data);
                if (res.data.status)
                    localStorage.setItem("user", JSON.stringify(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="base">
                <Header></Header>
                <div className="base-form login">
                    <h3>Login</h3>
                    <form>
                        <fieldset>
                            <label>Email address*</label>
                            <Input type="email" name="email" value={this.state.email} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <fieldset>
                            <div className="password-label">
                                <label>Password</label>
                                <a href="/forgot-password">Forgot your password?</a>
                            </div>
                            <Input type="password" name="password" value={this.state.password} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="error-container hidden">
                            <p className="error">Incorrect email address or password.</p>
                        </div>
                        <div className="btn-container">
                            <button className="btn" type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </form>
                    <p className="bottom">New to JobLess? <a href="/signup">Create an account</a></p>
                </div>
            </div>
        );
    }
}

export default Login;