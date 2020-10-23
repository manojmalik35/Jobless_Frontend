import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import LoginDataManager from "./dataManager";
import { loginAction } from "../../actions/authActions";
import { connect } from 'react-redux';
import isLoggedIn from "../../hoc/isLoggedIn";
import validator from '../../common/validation';
import ReCAPTCHA from 'react-google-recaptcha';

class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.dataManager = new LoginDataManager();
        this.state = {
            email: "",
            password: "",
            recaptchaResponse: ""
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        document.title = "Jobless | Admin Login";
    }


    handleSubmit = (e) => {

        this.dataManager.handleLogin({ email: this.state.email, password: this.state.password, recaptchaResponse : this.state.recaptchaResponse })
            .then(res => {
                if (res.data.status) {
                    this.props.loginAction(res.data.data);
                    this.props.history.push("/admin-profile/1");
                }
            })
            .catch(err => {
                validator(err);
            })

    }

    handleCaptchaResponseChange = (response) => {
        this.setState({
            recaptchaResponse: response
        })
    }

    render() {
        return (
            <div className="base">
                <Header></Header>
                <div className="base-form login login-admin">
                    <h3>Login as Admin</h3>
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
                        <ReCAPTCHA className="captcha" ref={(el) => { this.recaptcha = el }} sitekey="6LcF4dkZAAAAAEF33tj9EeO0SF8O11B2lLCPqGWO"
                            onChange={this.handleCaptchaResponseChange} />
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


const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    loginAction
}


export default isLoggedIn(connect(mapStateToProps, mapDispatchToProps)(AdminLogin));