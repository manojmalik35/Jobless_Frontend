import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import requireAuth from '../../hoc/requireAuthAdmin';
import AdminJobs from '../AdminJobs/AdminJobs';
import Users from '../Users/Users';

class AdminProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "Jobs"
        }
    }

    componentDidMount(){
        document.title = "Jobless | Admin Dashboard";
    }

    handleMenuChange = (newMenu) => {
        
        this.setState({
            menu: newMenu
        });
        this.props.history.push("/admin-profile/1");       
    }

    getBreadcrumb = () => {
        let str = "";
        if (this.state.menu === "Recruiters")
            str += " > Recruiters";
        else if (this.state.menu === "Candidates")
            str += " > Candidates"
        return (
            <div className="base-path">
                <a href="#" onClick={() => {
                    this.handleMenuChange("Jobs");
                }}>Home</a>
                <span>{str}</span>
            </div>
        )
    }

    getContent = () => {
        if (this.state.menu === "Jobs")
            return (<AdminJobs {...this.props} handleMenuChange={this.handleMenuChange} />)
        else if (this.state.menu === "Recruiters")
            return (<Users {...this.props} role={1} handleMenuChange={this.handleMenuChange}/>)
        else
            return (<Users {...this.props} role={2} handleMenuChange={this.handleMenuChange}/>)
    }

    render() {
        return (
            <div className="base">
                <Header role={0} handleMenuChange={this.handleMenuChange}></Header>
                <div className="content">
                    {this.getBreadcrumb()}
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

export default requireAuth(AdminProfile);