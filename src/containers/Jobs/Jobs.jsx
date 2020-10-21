import React, { Component } from 'react';
import RecruiterJobcard from "../../components/RecruiterJobcard/RecruiterJobcard";
import CandidateJobcard from "../../components/CandidateJobcard/CandidateJobcard";
import NoJobs from "../../components/NoJobs/NoJobs";
import GetJobsDataManager from './dataManager';
import { getJobsAction } from '../../actions/jobActions';
import { getAppliedJobsAction } from '../../actions/applicationActions';
import { connect } from 'react-redux';
import Paginate from '../../components/Pagination/Pagination';

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new GetJobsDataManager();
        this.state = {
            totalCount: 0,
            page: 1
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.type != prevProps.type || this.state.page != prevState.page) {
            if (this.props.type != "Applied") {
                this.dataManager.getJobs({ page: this.state.page })
                    .then(res => {
                        if (res.data.status) {
                            this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                            this.setState({
                                totalCount: res.data.metadata.resultset.count,
                                page : this.props.type == prevProps.type ? this.state.page : 1
                            })
                        }
                    })
                    .catch(err => {
                    })
            } else {
                this.dataManager.getAppliedJobs({ page: this.state.page })
                    .then(res => {
                        if (res.data.status) {
                            this.props.getAppliedJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                            this.setState({
                                totalCount: res.data.metadata.resultset.count,
                                page : this.props.type == prevProps.type ? this.state.page : 1
                            })
                        }
                    })
                    .catch(err => {
                    })
            }
        } else {
            if (prevProps.jobs.count != this.props.jobs.count && this.props.type == prevProps.type && this.props.jobs.type == prevProps.jobs.type) {
                this.dataManager.getJobs({ page: this.state.page })
                    .then(res => {
                        if (res.data.status) {
                            this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                            this.setState({
                                totalCount: res.data.metadata.resultset.count
                            })
                        }
                    })
                    .catch(err => {
                    })
            }
        }
    }

    componentDidMount() {

        this.dataManager.getJobs({ page: this.state.page })
            .then(res => {
                if (res.data.status) {
                    this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                    this.setState({
                        totalCount: res.data.metadata.resultset.count
                    })
                }
            })
            .catch(err => {
            })

    }

    handlePageChange = (newPage) => {
        this.setState({
            page: newPage
        });
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
        let jobs = this.props.jobs.jobs;
        let si = rowNo * 4;
        let ei = si + 4;
        let cards = [];
        if (role == 1) {
            while (si < jobs.length && si < ei) {
                cards.push(<RecruiterJobcard key={jobs[si].uuid} job={jobs[si]}></RecruiterJobcard>);
                si++;
            }
        } else {
            if (type == "Available") {
                while (si < jobs.length && si < ei) {
                    cards.push(<CandidateJobcard key={jobs[si].uuid} job={jobs[si]} applied={false}></CandidateJobcard>);
                    si++;
                }
            } else {
                while (si < jobs.length && si < ei) {
                    cards.push(<CandidateJobcard key={jobs[si].uuid} job={jobs[si]} applied={true}></CandidateJobcard>);
                    si++;
                }

            }
        }
        return cards;
    }

    getRows = () => {
        let { role, type, handleMenuChange } = this.props;
        let jobs = this.props.jobs.jobs;
        let totalJobs = jobs.length;
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
                {this.state.totalCount == 0 ? '' :
                    <Paginate totalJobs={this.state.totalCount} active={this.state.page} handlePageChange={this.handlePageChange}></Paginate>
                }
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