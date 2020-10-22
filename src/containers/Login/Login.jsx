import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import LoginDataManager from "./dataManager";
import { loginAction } from "../../actions/authActions";
import { connect } from 'react-redux';
import isLoggedIn from "../../hoc/isLoggedIn";
import validator from '../../common/validation';

class Login extends Component {

    constructor(props) {
        super(props);
        this.dataManager = new LoginDataManager();
        this.state = {
            email: "",
            password: "",
            submitted : false
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
                if (res.data.status) {
                    this.props.loginAction(res.data.data);
                    if (res.data.data.role == 1) {
                        this.props.history.push("/recruiter-profile");
                    } else {
                        this.props.history.push("/candidate-profile");
                    }
                }

            })
            .catch(err => {
                validator(err);
            })

    }

    componentDidMount(){
        document.title = "Jobless | Login";
    }

    render() {
        return (
            <div className="base">
                <Header></Header>
                <div className="base-form login">
                    <h1>Login</h1>
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


export default isLoggedIn(connect(mapStateToProps, mapDispatchToProps)(Login));