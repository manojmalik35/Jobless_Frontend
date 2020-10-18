import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
// import LoginDataManager from "./dataManager";

class Signup extends Component {
    constructor(props) {
        super(props);
        // this.dataManager = new LoginDataManager();
        this.state = {
            role: 1,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
        };
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        // this.dataManager.handleLogin({email : this.state.email, password : this.state.password})
        // .then(res=>{
        //     console.log(res.data);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    };

    checkActiveButton = (role) => {
        if (role == this.state.role) return "btn role active";
        return "btn role";
    };

    render() {
        return (
            <div className="base">
                <Header></Header>
                <div className="base-form signup">
                    <h3>Signup</h3>
                    <form>
                        <fieldset>
                            <label>I'm a*</label>
                            <div className="role-container">
                                <button className={this.checkActiveButton(1)} type="button" value={1} name="role" onClick={this.handleChange}>
                                    Recruiter
                                </button>
                                <button className={this.checkActiveButton(2)} type="button" value={2} name="role" onClick={this.handleChange}>
                                    Candidate
                                </button>
                            </div>
                        </fieldset>
                        <fieldset>
                            <label>Full Name*</label>
                            <Input type="text" name="name" value={this.state.name} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <fieldset>
                            <label>Email address*</label>
                            <Input type="email" name="email" value={this.state.email} handleChange={this.handleChange} required={true}></Input>
                        </fieldset>
                        <div className="passwords">
                            <fieldset>
                                <label>Create Password*</label>
                                <Input type="password" name="password" value={this.state.password} handleChange={this.handleChange} required={true}></Input>
                            </fieldset>
                            <fieldset>
                                <label>Confirm Password*</label>
                                <Input type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required={true}></Input>
                            </fieldset>
                        </div>
                            <fieldset>
                                <label>Phone no.</label>
                                <Input type="tel" name="phone" value={this.state.phone} maxlength="10" handleChange={this.handleChange}></Input>
                            </fieldset>
                        <div className="btn-container">
                            <button className="btn" type="button" onClick={this.handleSubmit}> Signup </button>
                        </div>
                    </form>
                    <p className="bottom"> Have an account? <a href="/login">Login</a> </p>
                </div>
            </div>
        );
    }
}

export default Signup;
