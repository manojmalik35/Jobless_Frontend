import React, { Component } from 'react';
import RecruiterJobcard from "../../components/RecruiterJobcard/RecruiterJobcard";
import CandidateJobcard from "../../components/CandidateJobcard/CandidateJobcard";
import NoJobs from "../../components/NoJobs/NoJobs";

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {
                    "uuid": "a8ad674e-2e92-4023-a13a-999062e78137",
                    "title": "Tester",
                    "description": "You will be working in testing",
                    "package": "2 lpa",
                    "company": "Squareboat"
                },
                {
                    "uuid": "06373bbf-3d4e-48e4-a522-04406c935d56",
                    "title": "New Job",
                    "description": "You will be working on CAD",
                    "package": "200000",
                    "company": "Jaya and company"
                },
                {
                    "uuid": "1c639980-03d3-4aea-8521-c9c14bbb16c5",
                    "title": "CAD Worker",
                    "description": "You will be working on CAD",
                    "package": "200000",
                    "company": "Jaya and company"
                },
                {
                    "uuid": "a24e9da4-3050-43c4-ab21-36b354f8503b",
                    "title": "Video Editor",
                    "description": "You will be editing the videos.",
                    "package": "200000",
                    "company": "Krishna and Fathers"
                },
                {
                    "uuid": "61d3282a-c792-4e53-9d1d-121e0fbade7e",
                    "title": "Assisstant Regional Manager",
                    "description": "You will be assisting the regional manager.",
                    "package": "100000",
                    "company": "Saumya and sons"
                },
                {
                    "uuid": "a56b3914-1e53-4b90-8438-d5de7abd81e3",
                    "title": "Senior Manager",
                    "description": "You will be managing all the managers of the company.",
                    "package": "1000000",
                    "company": "Saumya and sons"
                }
            ]
        }

    }

    getHeading = () => {
        let { role, type } = this.props;
        if (role == 1) {
            return (<h3>Jobs posted by you</h3>)
        }
        if (type == "Applied")
            return (<h3>Jobs applied by you</h3>)
        return (<h3>Jobs for you</h3>)
    }

    getCards = (rowNo) => {
        let { role, type } = this.props;
        let si = rowNo * 4;
        let ei = si + 4;
        let cards = [];
        if (role == 1) {
            while (si < this.state.jobs.length && si < ei) {
                cards.push(<RecruiterJobcard key={this.state.jobs[si].uuid} job={this.state.jobs[si]}></RecruiterJobcard>);
                si++;
            }
        } else {
            if (type == "Available") {
                while (si < this.state.jobs.length && si < ei) {
                    cards.push(<CandidateJobcard key={this.state.jobs[si].uuid} job={this.state.jobs[si]} applied={false}></CandidateJobcard>);
                    si++;
                }
            } else {
                while (si < this.state.jobs.length && si < ei) {
                    cards.push(<CandidateJobcard key={this.state.jobs[si].uuid} job={this.state.jobs[si]} applied={true}></CandidateJobcard>);
                    si++;
                }

            }
        }
        return cards;
    }

    getRows = () => {
        let { role, type, handleMenuChange } = this.props;
        let totalJobs = this.state.jobs.length;
        if (totalJobs == 0) {
            return (
                <NoJobs role={role} type={type} handleMenuChange={handleMenuChange}></NoJobs>
            )
        }

        let noOfRows = (totalJobs % 4) == 0 ? totalJobs / 4 : (totalJobs / 4) + 1;
        let rows = []
        for (let i = 0; i < noOfRows; i++) {
            rows.push(
                <div className="row" key={i}>
                    {this.getCards(i)}
                </div>
            );
        }

        return (
            <div className="jobs">
                {rows}
            </div>
        );
    }

    render() {
        return (
            <div className="jobs-container">
                {this.getHeading()}
                {this.getRows()}
                {/* <Pagination></Pagination> */}
            </div>
        );
    }
}

export default Jobs;