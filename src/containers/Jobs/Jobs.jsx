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
        }

    }

    getCurrentPage = () => {
        const page = this.props.match.params;
        if (page && page.page) {
            return parseInt(page.page);
        }

        return 1;
    }

    componentDidUpdate(prevProps, prevState) {
        const page = prevProps.match.params;
        if (this.props.type != prevProps.type || (page && page.page && parseInt(page.page) !== this.getCurrentPage())) {
            if (this.props.type != "Applied") {
                document.title = "Jobless | Dashboard";
                this.dataManager.getJobs({ page: this.getCurrentPage()})
                    .then(res => {
                        if (res.data.status) {
                            this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                        }
                    })
                    .catch(err => {
                    })
            } else {
                document.title = "Jobless | Applied Jobs"
                this.dataManager.getAppliedJobs({ page: this.getCurrentPage() })
                    .then(res => {
                        if (res.data.status) {
                            this.props.getAppliedJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                        }
                    })
                    .catch(err => {
                    })
            }
        } else {
            if (prevProps.jobs.count != this.props.jobs.count && this.props.type == prevProps.type && this.props.jobs.type == prevProps.jobs.type) {
                this.dataManager.getJobs({ page: this.getCurrentPage() })
                    .then(res => {
                        if (res.data.status) {
                            this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                        }
                    })
                    .catch(err => {
                    })
            }
        }
    }

    componentDidMount() {

        this.dataManager.getJobs({ page: 1 })
            .then(res => {
                if (res.data.status) {
                    this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                }
            })
            .catch(err => {
            })

    }

    handlePageChange = (newPage) => {
        if(this.props.role == 1)
            this.props.history.push(`/recruiter-profile/${newPage}`);
        else
            this.props.history.push(`/candidate-profile/${newPage}`);
    }

    getHeading = () => {
        let { role, type } = this.props;
        if (role == 1) {
            return (<h1>Jobs posted by you</h1>)
        }
        if (type == "Applied")
            return (<h1>Jobs applied by you</h1>)
        return (<h1>Jobs for you</h1>)
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
                {this.props.jobs.count == 0 ? '' :
                    <Paginate totalJobs={this.props.jobs.count} active={this.getCurrentPage()} handlePageChange={this.handlePageChange}></Paginate>
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