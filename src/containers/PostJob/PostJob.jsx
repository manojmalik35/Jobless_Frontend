import React, { Component } from 'react';
import Input from "../../components/Input/Input";
import PostJobDataManager from './dataManager';
import { postAction } from '../../actions/jobActions';
import { connect } from 'react-redux';
import validator from '../../common/validation';
import { toast } from 'react-toastify';

class PostJob extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new PostJobDataManager();
        this.state = {
            title: "",
            description: "",
            company: "",
            package: ""
        }
    }

    componentDidMount(){
        document.title = "Jobless | Post A Job";
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.dataManager.handlePostJob({
            title: this.state.title,
            description: this.state.description,
            company: this.state.company,
            package: this.state.package
        }).then(res => {
            if (res.data.status) {
                this.props.postAction(res.data.data);
                toast.success("Job is posted successfully.", {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: false
                });
                this.props.handleMenuChange("Jobs");
            }
        }).catch(err => {
            validator(err);
        })
    }

    render() {
        return (
            <div className="base-form post">
                <h1>Post a Job</h1>
                <form>
                    <fieldset>
                        <label>Job title<span className="star">*</span></label>
                        <Input type="text" name="title" value={this.state.title} handleChange={this.handleChange} required={true}></Input>
                    </fieldset>
                    <fieldset>
                        <label>Description<span className="star">*</span></label>
                        <textarea name="description" placeholder="Enter job description" value={this.state.description} onChange={this.handleChange} required={true}></textarea>
                    </fieldset>
                    <fieldset>
                        <label>Company<span className="star">*</span></label>
                        <Input type="text" name="company" value={this.state.company} handleChange={this.handleChange} required={true}></Input>
                    </fieldset>
                    <fieldset>
                        <label>Package</label>
                        <Input type="text" name="package" value={this.state.package} handleChange={this.handleChange}></Input>
                    </fieldset>
                    <div className="btn-container">
                        <button className="btn" onClick={this.handleSubmit}>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    postAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJob);