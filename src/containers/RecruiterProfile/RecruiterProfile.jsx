import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Jobs from "../Jobs/Jobs";
import PostJob from "../PostJob/PostJob";
import requireAuth from '../../hoc/requireAuth';

class RecruiterProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "Jobs"
        }
    }

    componentDidMount(){
        document.title = "Jobless | Dashboard";
    }

    handleMenuChange = (newMenu) => {
        
        this.setState({
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
                <a href="#" onClick={() => {
                    this.handleMenuChange("Jobs");
                }}>Home</a>
                <span>{str}</span>
            </div>
        )
    }

    getJobs = () => {
        if (this.state.menu == "Jobs")
            return (<Jobs role={1} handleMenuChange={this.handleMenuChange}></Jobs>)
        else if (this.state.menu == "Post")
            return (<PostJob handleMenuChange={this.handleMenuChange}></PostJob>)
    }

    render() {
        return (
            <div className="base">
                <Header role={1} handleMenuChange={this.handleMenuChange}></Header>
                <div className="content">
                    {this.getBreadcrumb()}
                    {this.getJobs()}
                </div>
            </div>
        );
    }
}

export default requireAuth(RecruiterProfile);