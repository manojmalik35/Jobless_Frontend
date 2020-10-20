import React, { Component } from 'react';
import RecruiterJobcard from "../../components/RecruiterJobcard/RecruiterJobcard";
import CandidateJobcard from "../../components/CandidateJobcard/CandidateJobcard";
import NoJobs from "../../components/NoJobs/NoJobs";
import GetJobsDataManager from './dataManager';
import { getJobsAction } from '../../actions/jobActions';
import {getAppliedJobsAction} from '../../actions/applicationActions';
import { connect } from 'react-redux';

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new GetJobsDataManager();
        this.state = {
            jobs: []
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.type != prevProps.type) {
            if (this.props.type != "Applied") {
                this.dataManager.getJobs()
                    .then(res => {
                        console.log(res.data);
                        if (res.data.status) {
                            this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                            this.setState({
                                jobs: this.props.jobs.jobs
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {

                this.dataManager.getAppliedJobs()
                    .then(res => {
                        console.log(res.data);
                        if (res.data.status) {
                            this.props.getAppliedJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                            this.setState({
                                jobs: this.props.jobs.jobs
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }

    componentDidMount() {

        this.dataManager.getJobs()
            .then(res => {
                console.log(res.data);
                if (res.data.status) {
                    this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                    this.setState({
                        jobs: this.props.jobs.jobs
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

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


const mapStateToProps = state => {
    const { jobs } = state;
    return {
        jobs
    }
}

const mapDispatchToProps = {
    getJobsAction,
    getAppliedJobsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);