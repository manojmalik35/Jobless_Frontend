import React, { Component } from 'react';
import AdminJobcard from '../../components/AdminJobcard/AdminJobcard';
import NoJobs from "../../components/NoJobs/NoJobs";
import AdminDataManager from "./dataManager";
import { getJobsAction } from '../../actions/jobActions';
import { connect } from 'react-redux';
import Paginate from '../../components/Pagination/Pagination';

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new AdminDataManager();
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

    getJobs = () => {
        this.dataManager.getAllJobs({ page: this.getCurrentPage() })
            .then(res => {
                if (res.data.status) {
                    this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                }
            })
            .catch(err => {
            })
    }

    componentDidUpdate(prevProps, prevState) {

        const page = prevProps.match.params;
        if ((page && page.page && parseInt(page.page) !== this.getCurrentPage()) || prevProps.jobs.count !== this.props.jobs.count) {
            this.getJobs();
        }
    }

    componentDidMount() {
        this.dataManager.getAllJobs({ page: 1 })
            .then(res => {
                if (res.data.status) {
                    this.props.getJobsAction({ jobs: res.data.data, count: res.data.metadata.resultset.count });
                }
            })
            .catch(err => {
            })

    }

    handlePageChange = (newPage) => {
        this.props.history.push(`/admin-profile/${newPage}`);
    }

    getCards = (rowNo) => {
        let jobs = this.props.jobs.jobs;
        let si = rowNo * 4;
        let ei = si + 4;
        let cards = [];

        while (si < jobs.length && si < ei) {
            cards.push(<AdminJobcard key={jobs[si].uuid} job={jobs[si]} />);
            si++;
        }

        return cards;
    }

    getRows = () => {
        let { handleMenuChange } = this.props;
        let jobs = this.props.jobs.jobs;
        let totalJobs = jobs.length;
        if (totalJobs === 0) {
            return (
                <NoJobs role={0} handleMenuChange={handleMenuChange}></NoJobs>
            )
        }

        let noOfRows = (totalJobs % 4) === 0 ? totalJobs / 4 : (totalJobs / 4) + 1;
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
                <h1>All Jobs</h1>
                {this.getRows()}
                {this.props.jobs.count === 0 ? '' :
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
    getJobsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);