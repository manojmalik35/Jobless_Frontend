import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Jobs from "../Jobs/Jobs";
import requireAuth from '../../hoc/requireAuth';

class CandidateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "Available"
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
        if (this.state.menu == "Applied")
            str += " > Applied Jobs"
        return (
            <div className="base-path">
                <a href="#" onClick={()=>{
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

export default requireAuth(CandidateProfile);