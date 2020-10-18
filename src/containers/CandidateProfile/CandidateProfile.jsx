import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Jobs from "../Jobs/Jobs";

class CandidateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "Available"
        }
    }

    handleMenuChange = (newMenu) => {

        this.setState({
            menu: newMenu
        });
    }

    getBreadcrumb = () => {
        let str = "";
        if (this.state.menu == "Applied")
            str += " > Applied Jobs"
        return (
            <div className="base-path">
                <a href="javascript:void(0)" onClick={()=>{
                    this.handleMenuChange("Available");
                    }}>Home</a>
                <span>{str}</span>
            </div>
        )
    }

    render() {
        return (
            <div className="base">
                <Header role={2} handleMenuChange={this.handleMenuChange}></Header>
                <div className="content">
                    {this.getBreadcrumb()}
                    <Jobs role={2} type={this.state.menu} handleMenuChange={this.handleMenuChange}></Jobs>
                </div>
            </div>
        );
    }
}

export default CandidateProfile;