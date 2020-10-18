import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Jobs from "../Jobs/Jobs";
import PostJob from "../PostJob/PostJob";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 1,
            menu: "Jobs"
        }
    }

    handleMenuChange = (newMenu) => {

        this.setState({
            role : this.state.role,
            menu: newMenu
        });
    }

    getBreadcrumb = () => {
        let str = "";
        if (this.state.menu == "Post")
            str += " > Post a Job";
        else if (this.state.menu == "Applied")
            str += " > Applied Jobs"
        return (
            <div className="base-path">
                <a href="javascript:void(0)" onClick={()=>{
                    this.handleMenuChange("Jobs");
                    }}>Home</a>
                <span>{str}</span>
            </div>
        )
    }

    getJobs = () => {
        if (this.state.menu == "Jobs")
            return (<Jobs role={this.state.role} handleMenuChange={this.handleMenuChange}></Jobs>)
        else if (this.state.menu == "Post")
            return (<PostJob></PostJob>)
        else
            return (<Jobs role={this.state.role} type={this.state.menu} handleMenuChange={this.handleMenuChange}></Jobs>)
    }

    render() {
        return (
            <div className="base">
                <Header role={this.state.role} handleMenuChange={this.handleMenuChange}></Header>
                <div className="content">
                    {this.getBreadcrumb()}
                    {this.getJobs()}
                </div>
            </div>
        );
    }
}

export default Profile;