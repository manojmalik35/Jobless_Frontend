import React, { Component } from 'react';
import Input from "../../components/Input/Input";

class PostJob extends Component {
    state = {
        title: "",
        description: "",
        company: "",
        package: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="base-form post">
                <h3>Post a Job</h3>
                <form>
                    <fieldset>
                        <label>Job title*</label>
                        <Input type="text" name="title" value={this.state.title} handleChange={this.handleChange} required={true}></Input>
                    </fieldset>
                    <fieldset>
                        <label>Description*</label>
                        <textarea name="description" placeholder="Enter job description" value={this.state.description} onChange={this.handleChange} required={true}></textarea>
                    </fieldset>
                    <fieldset>
                        <label>Company*</label>
                        <Input type="text" name="company" value={this.state.company} handleChange={this.handleChange} required={true}></Input>
                    </fieldset>
                    <fieldset>
                        <label>Package</label>
                        <Input type="text" name="package" value={this.state.package} handleChange={this.handleChange}></Input>
                    </fieldset>
                    <div className="btn-container">
                        <button className="btn" type="submit">Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostJob;